from json import load as loadJson
from time import sleep
from pandas import set_option as pdSetOption, to_datetime as pd_datetime, DataFrame as pdDataFrame
from tweepy import OAuthHandler as tweepy_OAuthHandler, API as tweepy_API
from TwitterAPI import TwitterAPI, TwitterRequestError
from keras.models import load_model
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from datetime import datetime as dt, timedelta
from pathlib import Path as pathlib_Path
import Helper
import DataHandler
from Twitter_Responses import GET_TWITTER_CODES
import TwitterConnections
import TweetsHandler

VERSION = '1.7.1'
TWITTER_VERSION = 2  # twitter fetch_and_filter_dataversion.
N_PAST = 1  # days on which the model was trained.
MAX_TWEETS_RESULTS = 100  # max results for first tweets query.
MAX_USER_TWEETS_RESULT = 100  # max results for use engagement tweets
MIN_TWEET_STATS_SUM = 25  # minimum tweet filtering sum of stats
MIN_USER_FOLLOWERS = 50  # minimum user followers to be included
TWEETS_REFETCHING_THRESHOLD = 15
REFETCHING_MAX_ITERATIONS_THRESHOLD = 5
SLEEP_TIME = 60*15
TWITTER_RESPONSE_CODES = GET_TWITTER_CODES()
delimiter, prefix = Helper.get_prefix_path()


class TweetStockModel:
    def __init__(self, model_path, model_ticker, features_version=2, ip='No_IP', id=0):
        self.tweets = []
        self.id = id
        self.ticker = model_ticker
        self.ip = ip
        self.features_version = features_version
        self.feature_set = self.get_feature_set(features_version)

        self.model_path = pathlib_Path(model_path)
        self.model = load_model(model_path)

        self.sentiment_analyzer = SentimentIntensityAnalyzer()
        self.twitter = self.connect_to_twitter()
        pdSetOption('display.max_columns', None)

    def get_feature_set(self, features_version):
        '''
        returns relevant feature version
        '''
        if features_version == 1:
            return ['n_replies', 'n_retweets', 'n_likes', 's_pos', 's_neg', 's_neu', 'u_engagement']
        elif features_version == 2:
            return['n_replies', 'n_retweets', 'n_likes', 's_compound', 'u_engagement']

    def get_model_path(self):
        return self.model_path

    def get_save_path(self):
        return self.save_path

    def connect_to_twitter(self, version=TWITTER_VERSION):
        # return TwitterConnections.connect_to_twitter(version=TWITTER_VERSION)
        Twitter_Config = self.get_twitter_config()
        consumer_key = Twitter_Config['consumer_key']
        consumer_secret = Twitter_Config['consumer_secret']
        access_token = Twitter_Config['access_token']
        access_token_secret = Twitter_Config['access_token_secret']

        if version == 2:
            return TwitterAPI(consumer_key, consumer_secret, access_token,
                              access_token_secret, api_version='2')
        elif version == 1:
            auth = tweepy_OAuthHandler(consumer_key, consumer_secret)
            auth.set_access_token(access_token, access_token_secret)
            return tweepy_API(auth)

    def get_twitter_config(self):
        with open(f'{prefix}{delimiter}CONFIGS{delimiter}twitterconfig.json', 'r') as json_file:
            twitter_configs = loadJson(json_file)
        return twitter_configs

    def get_n_past_date(self, days_to_subtract=1, hours_to_subtract=2):
        if days_to_subtract < 0:
            days_to_subtract *= -1

        days_to_subtract -= 1
        now = dt.utcnow()
        midnight = dt.combine(now, dt.min.time())

        start_date = midnight - timedelta(days=days_to_subtract)
        end_date = now - timedelta(hours=hours_to_subtract)

        return start_date, end_date

# -------------------------------------------------------------------------------------------------------------- #

    def fetch_popular_tweet_ids(self, ticker, max_results):
        tweet_ids = []
        twitter_v1 = self.connect_to_twitter(version=1)
        result_type = 'popular'
        temp_tweets = twitter_v1.search_tweets(
            q=ticker, count=max_results, result_type=result_type)

        for tweet in temp_tweets:
            t = tweet._json
            tweet_ids.append(
                {'tweet_id': t['id'], 'created_at': t['created_at']})

        return tweet_ids

    def fetch_live_tweets_v1(self, max_results=MAX_TWEETS_RESULTS, n_past=N_PAST):
        #TweetsHandler.fetch_live_tweets_v1(max_results=MAX_TWEETS_RESULTS, n_past=N_PAST)
        if '$' in self.ticker:
            ticker = ticker.replace('$', '')
        else:
            ticker = self.ticker

        result_type = 'popular'

        temp_tweets = self.twitter.search_tweets(
            q=ticker, count=max_results, result_type=result_type)

        for tweet in temp_tweets:
            # print(f'{tweet._json}')
            t = tweet._json
            user = t['user']
            self.tweets.append({
                'tweet_id': t['id'],
                'created_at': t['created_at'],
                'text': t['text'],
                'n_likes': t['favorite_count'],
                'n_retweets': t['retweet_count'],
                'n_replies': 0,
                'u_id': user['id'],
                'u_screen_name': user['screen_name'],
                'u_description': user['description'],
                'u_n_followers': user['followers_count']
            })

    def fetch_live_tweets_v2(self, start_date, end_date, max_results=MAX_TWEETS_RESULTS, n_past=N_PAST):
        # return TweetsHandler.fetch_live_tweets_v2(start_date, end_date, max_results=MAX_TWEETS_RESULTS, n_past=N_PAST)
        def generate_v2_tweet(tweet, t_metrics, u_data):
            return {
                'tweet_id': tweet['id'],
                'created_at': tweet['created_at'],
                'text': tweet['text'],
                'n_likes': t_metrics['like_count'],
                'n_retweets': t_metrics['retweet_count'],
                'n_replies': t_metrics['reply_count'],
                'u_id': u_data['id'],
                'u_screen_name': u_data['username'],
                'u_description': u_data['description'],
                'u_n_followers': u_data['public_metrics']['followers_count']
            }
        # print(f"Getting Tweets of {self.ticker} for {self.ip} ")
        if '$' in self.ticker:
            ticker = ticker.replace('$', '')
        else:
            ticker = self.ticker
        tweets = []
        #tweet_ids = self.fetch_popular_tweet_ids(ticker=ticker,max_results=max_results)
        prms = {
            'tweet.fields': 'public_metrics,author_id,created_at',
            'start_time': start_date.isoformat('T')+'Z',
            'end_time': end_date.isoformat('T')+'Z',
            'query': ticker,
            'max_results': max_results,
            # 'user.fields':'public_metrics,description,username',
            # 'exclude': 'retweets,replies',
            # 'result_type' : result_type
        }  # TAKE CARE OF EXCLUDING REPLIES

        try:
            temp_tweets = self.twitter.request(
                resource='tweets/search/recent', params=prms)
        except TwitterRequestError as tre_tweets:
            if tre_tweets.status_code == TWITTER_RESPONSE_CODES['Too Many Requests']:
                print(
                    f"Tweeter Status code Returned {tre_tweets.status_code}", 'SLEEPING....')
                sleep(SLEEP_TIME)
                return tre_tweets.status_code
            else:
                print(f'CODE: {tre_tweets.status_code}')
                print(f'{temp_tweets}')
                return None

        if temp_tweets.status_code == TWITTER_RESPONSE_CODES['OK']:
            tweets_arr = [tweet for tweet in temp_tweets]
            i = 0
            while i < len(tweets_arr):
                tweet = tweets_arr[i]

                try:
                    users_result = self.twitter.request(resource="users/:"+tweet['author_id'], params={
                        'user.fields': 'public_metrics,description,username'}).json()
                    if 'data' in users_result.keys():
                        users_data = users_result['data']
                    elif 'status' in users_result.keys():
                        raise TwitterRequestError(users_result['status'])
                    else:
                        raise Exception
                    i += 1
                    t_metrics = tweet['public_metrics']
                    tweets.append(generate_v2_tweet(
                        tweet=tweet, t_metrics=t_metrics, u_data=users_data))
                except TwitterRequestError as tre_users:
                    if tre_users.status_code == TWITTER_RESPONSE_CODES['Too Many Requests']:
                        print(
                            f"Tweeter Status code Returned {users_result['status']}", 'SLEEPING....')
                        sleep(SLEEP_TIME)
                        continue
                    elif 'text' in users_result and users_result['text'] in TWITTER_RESPONSE_CODES.keys():
                        return None
                    else:
                        Helper.write_to_log(str(users_result))
                        print(
                            'MAJOR ERROR!\nCODE SHOULDNT GET HERE @fetch_live_tweets_v2')
                        return None
        else:
            print(f'{temp_tweets.status_code}',
                  ' PROBABLY SHOULDNT GET HERE @fetch_live_tweets_v2')
            Helper.Write_To_Log(
                f'{temp_tweets.status_code} @fetch_live_tweets_v2')
            return None
            # elif users_result['status'] == TWITTER_RESPONSE_CODES['Too Many Requests']:
            #     print(
            #         f"Tweeter Status code Returned {users_result['status']}", 'SLEEPING....')
            #     sleep(SLEEP_TIME)
            #     continue
            # elif users_result['text'] in TWITTER_RESPONSE_CODES.keys():
            #     return None
            # else:
            #     Helper.write_to_log(str(users_result))
            #     print(
            #         'MAJOR ERROR!\nCODE SHOULDNT GET HERE @fetch_live_tweets_v2')
            #     return None

            # elif temp_tweets.status_code == 429:
            #     print(
            #         f"Tweeter Status code Returned {users_result['status']}", 'SLEEPING....')
            #     sleep(SLEEP_TIME)
            #     return 429
            # else:
            #     print(f'CODE: {temp_tweets.status_code}')
            #     print(f'{temp_tweets}')
            #     return None
        # except Exception as err:
        #     print(f"{err}")
        #     raise Exception("") from err
        return tweets

    def get_min_date(self, tweets):
        dates = [pd_datetime(tweet['created_at']) for tweet in tweets]
        #dt_obj = dt.fromtimestamp(min(dates)/pow(10, 9))
        date = min(dates).to_pydatetime().replace(second=0, tzinfo=None)
        return date

    def calc_tweets_sentiment(self, tweets):
        # return TweetsHandler.calc_tweets_sentiment(tweets)
        for tweet in tweets:
            s = self.sentiment_analyzer.polarity_scores(tweet['text'])
            tweet['s_neg'], tweet['s_neu'], tweet['s_pos'], tweet['s_compound'] = s['neg'], s['neu'], s['pos'], s['compound']
            # tweets['subjectivity'] = sentiment_analyzer.subjectivity_scores(tweet['text']) # optional
        return tweets

    def fetch_users_with_eng_by_tweets_v2(self, tweets, max_tweets_results=MAX_USER_TWEETS_RESULT):
        prms = {
            'max_results': max_tweets_results,
            'exclude': 'retweets,replies',
            'tweet.fields': 'public_metrics',
        }
        i = 0
        while i < len(tweets):
            try:
                users_tweets = self.twitter.request(
                    resource=f'users/:{tweets[i]["u_id"]}/tweets', params=prms)

                if users_tweets.text == r'{"meta":{"result_count":0}}':
                    tweets[i]['u_engagement'] = 0
                else:
                    tweets[i]['u_engagement'] = DataHandler.tsm_get_single_user_eng_score(
                        user_tweets=users_tweets, user_followers=tweets[i]['u_n_followers'])
                i += 1
            except TwitterRequestError as tre:
                print(tre)
                if tre.title in TWITTER_RESPONSE_CODES.keys():
                    if TWITTER_RESPONSE_CODES[tre.title] == 429:
                        sleep(SLEEP_TIME)
                        continue
                    else:
                        return None
                else:
                    print(
                        'SHOULDNT GET HERE @EXCEPT -- fetch_users_with_eng_by_tweets_v2')
                    return None
            # elif users_result['text'] in TWITTER_RESPONSE_CODES.keys():
            #     if "429" in str(err):
            #         err_msg = "429 in err"
            #         print(err_msg, err)
            #         tweets[i]['u_engagement'] = 0
            #         # time.sleep(15*60) # sleep 15 mins
            #     else:
            #         err_msg = "twitter request error"
            #         print(err_msg, err)
            #         tweets[i]['u_engagement'] = 0
            # except Exception as err:
            #     err_msg = "general exception"
            #     print(err_msg, err)
            #     tweets[i]['u_engagement'] = 0

        return tweets

    def predict(self, prepped_data):
        pred = self.model.predict(prepped_data)
        result = 1 if pred[0][1] >= pred[0][0] else -1
        return result

    def fetch_and_filter_data(self, start_date, end_date):
        """
        1. fetch tweets and save new end date (minimun date fetched for refetching purposes (if needed))
        2. calculate sentimet
        3. filter tweets bh sentiment and tweet stats
        4. get remaining tweets user engagement
        5. filter by user engagement
        6. returns the remaining tweets (sentiment and user engagement included)
        """
        # Step 1 - fetch the live tweets from twitter
        tweets = 429
        while tweets == 429:
            tweets = self.fetch_live_tweets_v2(start_date=start_date, end_date=end_date, max_results=MAX_TWEETS_RESULTS,
                                               n_past=N_PAST)
        if tweets == None:
            print("Couldnt get tweets @get_tweets()")
            return None, None

        new_end_date = self.get_min_date(tweets=tweets)

        # calculate sentiment score for each tweet
        tweets = self.calc_tweets_sentiment(tweets)
        if tweets == None:
            print("Couldnt get sentiment @get_sentiment()")
            return None, new_end_date

        # filter tweets
        tweets = DataHandler.tsm_filter_tweets(tweets)
        if len(tweets) == 0:
            print("Filtered all tweets @filter_tweets()")
            return None, new_end_date

        # get user engagement
        tweets = self.fetch_users_with_eng_by_tweets_v2(tweets)
        if tweets == None:
            print("Couldnt get use engagement @get_user_engagement()")
            return None, new_end_date

        # filter users
        tweets = DataHandler.tsm_filter_users(
            tweets, threshold=MIN_USER_FOLLOWERS)
        if len(tweets) == 0:
            print("Filtered all users @filter_users()")
            return None, new_end_date

        return tweets, new_end_date

    # Pred Function
    def get_prediction(self):
        start_date, end_date = self.get_n_past_date()
        iterations = 0

        # and len(self.tweets) < TWEETS_REFETCHING_THRESHOLD :
        while iterations < REFETCHING_MAX_ITERATIONS_THRESHOLD:
            tweets, end_date = self.fetch_and_filter_data(
                start_date=start_date, end_date=end_date)
            if end_date == None:
                print(
                    "problem with end date @get_prediction()/while loop (got no tweets when fetched)")

            if tweets != None:
                for tweet in tweets:
                    self.tweets.append(tweet)

            iterations += 1

            if iterations == REFETCHING_MAX_ITERATIONS_THRESHOLD:
                print("Reached max iterations threshold")

        # Transform from dictionary to df for easier data handling
        tweets_df = DataHandler.tsm_twitter_dict_res_to_df(self.tweets)

        if tweets_df.empty:
            if isinstance(tweets_df, pdDataFrame):
                print("Couldnt convert twitter res dict to df @twitter_dict_res_to_df()")
            else:
                print(tweets_df.Error_message, 'CUSTOM ERROR @get_prediction')
            return None, None

        tweets_table_dict = DataHandler.tsm_get_tweets_table_dict_result(
            tweets_df=tweets_df)

        # Prepare data for model
        preped_for_model, preped_df = DataHandler.tsm_prep_data(
            tweets_df, self.feature_set)

        # Perform the prediction (0,1 --> -1,1)
        pred = self.predict(preped_for_model)

        pred_table_dict = DataHandler.tsm_get_pred_table_dict_result(
            prepared_df=preped_df, prediction=pred, ticker=self.ticker)

        print("pred", "\n", pred_table_dict)
        print("tweets", "\n", tweets_table_dict)
        return pred_table_dict, tweets_table_dict


if __name__ == "__main__":  # FOR DEBUGGING
    model = TweetStockModel(
        # model_path=f'/home/pi/FinalProject/FlaskServer/SelectedModels/AAPL/AAPL_acc_0.633_npast_1_epoch_4_opt_rmsprop_num_3848.h5',
        # '/home/pi/FinalProject/FlaskServer/Data/Networks/4/TSLA_acc_0.62_npast_1_epoch_10_opt_rmsprop_num_3.h5',
        model_path="C:\\Users\\alws3\\Desktop\\TSLA_acc_0.62_npast_1_epoch_10_opt_rmsprop_num_3.h5",
        model_ticker="TSLA",
        features_version=2)
    pred_table_dict, tweets_table_dict = model.get_prediction()
