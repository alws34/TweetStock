import pandas as pd
import numpy as np
import datetime
from datetime import datetime as dt, timedelta
import sklearn
from sklearn.preprocessing import MinMaxScaler, StandardScaler
import tensorflow as tf
from keras.models import load_model
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer  # sentiment score
from TwitterAPI import TwitterAPI, TwitterOAuth, TwitterRequestError, TwitterConnectionError, TwitterPager
import tweepy  # tweeter API
from pathlib import Path
import math

TWITTER_VERSION = 2  # twitter version.
N_PAST = 1  # days on which the model was train to precict based on.
MAX_TWEETS_RESULTS = 100  # max results for first tweets query.
MAX_USER_TWEETS_RESULT = 100  # max results for use engagement tweets
MIN_TWEET_STATS_SUM = 25   # min tweet filtering sum of stats
MIN_USER_FOLLOWERS = 100  # min user followers num to be included

# static id for each TweetStockModel obj (concurrent api requests)


class TweetStockModel:
    def __init__(self, model_path, model_ticker, features_version, id=0):
        self.id = id
        self.ticker = model_ticker
        self.features_version = features_version
        if features_version == 1:
            self.feature_set = ['n_replies', 'n_retweets',
                                'n_likes', 's_pos', 's_neg', 's_neu', 'u_engagement']
        elif features_version == 2:
            self.feature_set = ['n_replies', 'n_retweets',
                                'n_likes', 's_compound', 'u_engagement']

        self.model_path = Path(model_path)
        self.model = load_model(model_path)
        #self.save_path = Path(save_path)
        self.sentiment_analyzer = SentimentIntensityAnalyzer()
        self.twitter = self.connect_to_twitter()
        pd.set_option('display.max_columns', None)

    
    def get_model_path(self):
        return self.model_path

    def get_save_path(self):
        return self.save_path

    def connect_to_twitter(self, version=TWITTER_VERSION):  # v2 for now
        consumer_key = 'mymakG2knztQ2GYaTNaRGTIOi'
        consumer_secret = 'lGXmXu9K7DQftUjvVempNg1vGjS362zbKo7p12yaa5RrBelIlj'
        access_token = '561299890-kjoCtIBYvSHeIVfhYEbHfNXHAqVklnMze2Wce1JT'
        access_token_secret = 'U1fR9nx24H1Eo3dvlLYO9LhDxwYWWZ5x2JEltgA4xUy6o'
        if version == 2:
            return TwitterAPI(consumer_key, consumer_secret, access_token,
                              access_token_secret, api_version='2')
        elif version == 1:
            auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
            auth.set_access_token(access_token, access_token_secret)
            return tweepy.API(auth)

    def get_n_past_date(self, days_to_subtract=1, hours_to_subtract=2):  # N_PAST)
        if days_to_subtract < 0:
            days_to_subtract *= -1
        days_to_subtract -= 1
        now = dt.utcnow()
        midnight = dt.combine(now, dt.min.time())

        start_date = midnight - timedelta(days=days_to_subtract)
        end_date = now - timedelta(hours=hours_to_subtract)

        return start_date.isoformat('T')+'Z', end_date.isoformat('T')+'Z'

    def dict_to_df(self, data):
        try:
            keys = data[0].keys()
            temp = {}
            for key in keys:
                temp[key] = []
                for d in data:
                    temp[key].append(d[key])
        except Exception as err:
            print('dict_to_df()', err)
            return None
        # print(temp)
        return pd.DataFrame.from_dict(temp)

    def get_df_mean(self, df, n_past=N_PAST):
        if n_past == 1:
            to_append = {}
            for col in df:
                to_append[col] = df[col].mean()
            new_df = pd.DataFrame(columns=df.columns).append(
                to_append, ignore_index=True)
            return new_df
        else:
            return df.groupby(by='date').mean().reset_index()

    def scale_df(self,df, n_past=N_PAST, scaling='min_max'):
        if scaling=='min_max': scaler=MinMaxScaler()
        elif scaling=='standard': scaler=StandardScaler()
        if n_past == 1:
            to_append = {}
            for col in df:
                to_append[col] = scaler.fit_transform(
                    np.array(df[col]).reshape(-1, 1))
            return pd.DataFrame(columns=df.columns).append(to_append, ignore_index=True)
        else: return None
            

    def scale_seq(self, seq):
        scaler = MinMaxScaler()
        return scaler.fit_transform(seq)

    def create_sequence(self, dataset):
        return np.array(dataset)

    def generate_result_obj(self, data, prediction):
        client_result = {
            'tweets': [],
            'prediction': prediction
        }

        sql_Ticker_and_Pred_Table_DF = pd.DataFrame({
            'ticker': [self.ticker],
            'prediction': [prediction]
        })

        sql_Ticker_Stats_Table_DICT = {
            'ticker': [],
            'tweet_id': [],
            'user_engagement': [],
            'tweet_likes': [],
            'tweet_replies': [],
            'tweet_retweets': [],
        }
        if self.features_version == 1:
            sql_Ticker_Stats_Table_DICT['sentiment_pos'], sql_Ticker_Stats_Table_DICT[
                'sentiment_neu'], sql_Ticker_Stats_Table_DICT['sentiment_neg'] = [], [], []
        elif self.features_version == 2:
            sql_Ticker_Stats_Table_DICT['sentiment'] = []

        sql_Ticker_Stats_Table_DF = pd.DataFrame(sql_Ticker_Stats_Table_DICT)

        for tweet in data:
            temp_sql_Ticker_Stats_Table_DICT = {
                'ticker': self.ticker,
                'tweet_id': tweet['tweet_id'],
                'user_engagement': tweet['u_engagement'],
                'tweet_likes': tweet['n_likes'],
                'tweet_replies': tweet['n_replies'],
                'tweet_retweets': tweet['n_retweets'],
            }

            if self.features_version == 1:
                sentiment = {
                    'pos': tweet['s_pos'],
                    'neg': tweet['s_neg'],
                    'neu': tweet['s_neu']
                }

                temp_sql_Ticker_Stats_Table_DICT['sentiment_pos'], temp_sql_Ticker_Stats_Table_DICT[
                    'sentiment_neu'], temp_sql_Ticker_Stats_Table_DICT['sentiment_neg'] = tweet['s_pos'], tweet['s_neu'], tweet['s_neg']

            elif self.features_version == 2:
                sentiment = tweet['s_compound']
                temp_sql_Ticker_Stats_Table_DICT['sentiment'] = sentiment

            sql_Ticker_Stats_Table_DF = sql_Ticker_Stats_Table_DF.append(
                temp_sql_Ticker_Stats_Table_DICT, ignore_index=True)

            client_result['tweets'].append({
                'tweet_id': tweet['tweet_id'],
                'user_engagement': tweet['u_engagement'],
                'tweet_stats': {
                    'likes': tweet['n_likes'],
                    'replies': tweet['n_replies'],
                    'retweets': tweet['n_retweets'],
                    'sentiment': sentiment
                },
            })
        print(client_result, sql_Ticker_and_Pred_Table_DF,
              sql_Ticker_Stats_Table_DF)
        return client_result, sql_Ticker_and_Pred_Table_DF, sql_Ticker_Stats_Table_DF

# -------------------------------------------------------------------------------------------------------------- #

    # Step 1
    def get_tweets(self, ticker, max_results=MAX_TWEETS_RESULTS, n_past=N_PAST, twitter_version=TWITTER_VERSION):
        print("Getting Tweets")
        if '$' in ticker:
            ticker = ticker.replace('$', '')

        tweets = []

        if twitter_version == 1:
            result_type = 'popular'
            temp_tweets = self.twitter.search_tweets(
                q=ticker, count=max_results, result_type=result_type)
            for tweet in temp_tweets:
                # print(f'{tweet._json}')
                t = tweet._json
                user = t['user']
                tweets.append({
                    'tweet_id': t['id'],
                    'created_at': '',  # handle!
                    'text': t['text'],
                    'n_likes': t['favorite_count'],
                    'n_retweets': t['retweet_count'],
                    'n_replies': 0,
                    'u_id': user['id'],
                    'u_screen_name': user['screen_name'],
                    'u_description': user['description'],
                    'u_n_followers': user['n_followers']
                })
        elif twitter_version == 2:
            start_date, end_date = self.get_n_past_date()
            prms = {
                'tweet.fields': 'public_metrics,author_id,created_at',
                'start_time': start_date,
                'end_time': end_date,
                'query': ticker,
                'max_results': max_results,
                # 'user.fields':'public_metrics,description,username',
                # 'exclude': 'retweets,replies',
                # 'result_type' : result_type
            }  # TAKE CARE OF EXCLUDING REPLIES

            try:
                temp_tweets = self.twitter.request(
                    resource='tweets/search/recent', params=prms)

                if temp_tweets.status_code == 200:
                    for tweet in temp_tweets:
                        res = self.twitter.request(resource="users/:"+tweet['author_id'], params={
                            'user.fields': 'public_metrics,description,username'}).json()
                        # print(res)
                        u_data = res['data']

                        t_metrics = tweet['public_metrics']
                        tweets.append({
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
                        })

                else:
                    #raise Exception(f"Couldn't Get Tweets!\nCode Returned from twitter:{temp_tweets.status_code}")
                    return None
            except Exception as err:
                print(f"{err}")
                raise Exception("") from err

        return tweets

    # Step 2
    def get_sentiment(self, tweets):
        print("Getting Sentiment")
        for tweet in tweets:
            s = self.sentiment_analyzer.polarity_scores(tweet['text'])
            tweet['s_neg'], tweet['s_neu'], tweet['s_pos'], tweet['s_compound'] = s['neg'], s['neu'], s['pos'], s['compound']
            # tweets['subjectivity'] = sentiment_analyzer.subjectivity_scores(tweet['text']) # optional
        return tweets

    # Step 3
    def filter_tweets(self, tweets, threshold=MIN_TWEET_STATS_SUM):
        print("Filtering Tweets")
        tweets_to_remove = []
        print("len before", len(tweets))
        for tweet in tweets:
            if tweet['s_compound'] == 0.0 or tweet['s_neu'] == 1.0 or tweet['n_retweets'] + tweet['n_likes'] + tweet['n_replies'] < threshold:
                tweets_to_remove.append(tweet)

        for tweet in tweets_to_remove:
            tweets.remove(tweet)

        print("len after", len(tweets))
        for tweet in tweets:
            print(tweet['s_neu'])
        return tweets

    # Step 4
    def get_users_engagement(self, tweets, max_tweets_results=MAX_USER_TWEETS_RESULT, twitter_version=TWITTER_VERSION):
        print("Getting user engagement")
        if twitter_version == 1:
            pass
        elif twitter_version == 2:
            prms = {
                'max_results': max_tweets_results,
                'exclude': 'retweets,replies',
                'tweet.fields': 'public_metrics',
            }

            for i, tweet in enumerate(tweets):
                try:
                    u_tweets = self.twitter.request(
                        resource='users/:'+tweet['u_id']+'/tweets', params=prms)
                    u_log_n_followers = math.log(tweet['u_n_followers'], 2)
                    u_n_tweets, u_n_rts, u_n_replies, u_n_likes = 0, 0, 0, 0
                    for u_tweet in u_tweets:
                        u_n_rts += u_tweet['public_metrics']['retweet_count']
                        u_n_replies += u_tweet['public_metrics']['reply_count']
                        u_n_likes += u_tweet['public_metrics']['like_count']
                        u_n_tweets += 1
                    #print(u_n_tweets, u_n_rts, u_n_replies, u_n_likes, u_log_n_followers)
                    if math.log(u_log_n_followers, 2) > 0 and u_n_tweets > 0:
                        eng = (u_n_rts + u_n_replies + u_n_likes) / \
                            math.log(u_log_n_followers, 2)/u_n_tweets
                    else:
                        eng = 0
                    tweets[i]['u_engagement'] = eng

                except TwitterRequestError as err:
                    if "429" in str(err):
                        err_msg = "429 in err"
                        print(err_msg, err)
                        tweets[i]['u_engagement'] = 0
                        # time.sleep(15*60) # sleep 15 mins
                    else:
                        err_msg = "twitter request error"
                        print(err_msg, err)
                        tweets[i]['u_engagement'] = 0
                except Exception as err:
                    err_msg = "general exception"
                    print(err_msg, err)
                    tweets[i]['u_engagement'] = 0

        return tweets

    # Step 5
    def filter_users(self, tweets, threshold=MIN_USER_FOLLOWERS):
        print("Filtering users")
        tweets_to_remove = []
        for tweet in tweets:
            if tweet['u_n_followers'] < threshold or tweet['u_engagement'] == 0:
                tweets_to_remove.append(tweet)

        for tweet in tweets_to_remove:
            tweets.remove(tweet)

        return tweets

    # Step 6
    def prep_data(self, df):
        print("Prepping model data")
        # 1 Select features
        df = df[self.feature_set]

        # 2 Get df mean
        #print('before mean', df, len(df), df.shape)
        df = self.scale_df(df)
        df = self.get_df_mean(df)
        #print('after mean', df, len(df), df.shape)

        # 3 Create sequence from df
        test_seq = self.create_sequence(df)
        print('\n\n', test_seq, test_seq.shape)

        # 4 Scale data
        test_seq = test_seq.reshape(
            (len(test_seq), test_seq.shape[0] * test_seq.shape[1]))
        #scaled_test_seq = scale_seq(test_seq)

        # Return preped data
        return tf.convert_to_tensor(test_seq, dtype=tf.float32)

    # Step 7
    def get_pred(self, prepped_data):
        pred = self.model.predict(prepped_data)
        result = 1 if pred[0][1] >= pred[0][0] else -1
        return result

    # Pred Function

    def get_prediction(self):
        # Step 1
        tweets = self.get_tweets(self.ticker, max_results=MAX_TWEETS_RESULTS,
                                 n_past=N_PAST, twitter_version=TWITTER_VERSION)
        if tweets == None:
            print("Couldnt get tweets @get_tweets")
            return
        # Step 2
        tweets = self.get_sentiment(tweets)

        # Step 3
        tweets = self.filter_tweets(
            tweets, threshold=MIN_TWEET_STATS_SUM)

        # Step 4
        tweets = self.get_users_engagement(tweets)

        # Step 5
        tweets = self.filter_users(tweets, threshold=MIN_USER_FOLLOWERS)

        # Step 6.0 Transform from dictionary to df for easier data handling
        df = self.dict_to_df(tweets)

        # Step 6.1
        preped = self.prep_data(df)

        pred = self.get_pred(preped)
        print('pred', pred)
        client_result, sql_Ticker_and_Pred_Table_DF, sql_Ticker_Stats_Table_DF = self.generate_result_obj(
            tweets, pred)

        return client_result, sql_Ticker_and_Pred_Table_DF, sql_Ticker_Stats_Table_DF



