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

TWITTER_VERSION = 2             # twitter version.
# days on which the model was train to precict based on.
N_PAST = 1
MAX_TWEETS_RESULTS = 100        # max results for first tweets query.
MAX_USER_TWEETS_RESULT = 100    # max results for use engagement tweets
MIN_TWEET_STATS_SUM = 25        # min tweet filtering sum of stats
MIN_USER_FOLLOWERS = 100        # min user followers num to be included


class TweetStockModel:
    def __init__(self, model_path, model_ticker, features_version, ip='No_IP', id=0):
        self.id = id
        self.ticker = model_ticker
        self.features_version = features_version
        self.ip = ip
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

    def twitter_dict_res_to_df(self, data):
        # print(data)
        try:
            keys = data[0].keys()
            temp = {}
            for key in keys:
                temp[key] = []
                for d in data:
                    temp[key].append(d[key])
        except Exception as err:
            print('twitter_dict_res_to_df()', err)
            return None
        # print(temp)
        return pd.DataFrame.from_dict(temp)

    def get_df_mean_old(self, df, n_past=N_PAST):  # replaced by get_scale_and_mean
        if n_past == 1:
            df_dict = {}
            for col in df:
                df_dict[col] = []
                df_dict[col].append(df[col].mean())
            return pd.DataFrame.from_dict(df_dict)
        else:
            return df.groupby(by='date').mean().reset_index()

    def get_scale_and_mean(self, df, n_past=N_PAST, scaling='min_max'):
        if scaling == 'min_max':
            scaler = MinMaxScaler()
        elif scaling == 'standard':
            scaler = StandardScaler()
        if n_past == 1:
            df_dict = {}
            for col in df.columns:
                df_dict[col] = []
                f = df[col] * df["s_compound"] if col != "s_compound" else df[col]
                df_dict[col].append(scaler.fit_transform(
                    np.array(f).reshape(-1, 1)).mean())
            return pd.DataFrame.from_dict(df_dict)
        else:
            return None

    def scale_seq(self, seq):
        scaler = MinMaxScaler()
        return scaler.fit_transform(seq)

    def create_sequence(self, dataset):
        return np.array(dataset)


# -------------------------------------------------------------------------------------------------------------- #

    # Step 1

    def get_tweets(self, ticker, max_results=MAX_TWEETS_RESULTS, n_past=N_PAST, twitter_version=TWITTER_VERSION):
        #print(f"Getting Tweets of {self.ticker} for {self.ip} ")
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
        #print(f"Getting Sentiment of {self.ticker} for {self.ip}")
        for tweet in tweets:
            s = self.sentiment_analyzer.polarity_scores(tweet['text'])
            tweet['s_neg'], tweet['s_neu'], tweet['s_pos'], tweet['s_compound'] = s['neg'], s['neu'], s['pos'], s['compound']
            # tweets['subjectivity'] = sentiment_analyzer.subjectivity_scores(tweet['text']) # optional
        return tweets

    # Step 3
    def filter_tweets(self, tweets, threshold=MIN_TWEET_STATS_SUM):
        #print(f"Filtering Tweets of {self.ticker} for {self.ip}")
        tweets_to_remove = []
        #print("len before", len(tweets))
        for tweet in tweets:
            if tweet['s_compound'] == 0.0 or tweet['s_neu'] == 1.0 or tweet['n_retweets'] + tweet['n_likes'] + tweet['n_replies'] < threshold:
                tweets_to_remove.append(tweet)

        for tweet in tweets_to_remove:
            tweets.remove(tweet)

        #print("len after", len(tweets))
        # for tweet in tweets:
        #     print(tweet['s_neu'])
        return tweets

    # Step 4
    def get_users_engagement(self, tweets, max_tweets_results=MAX_USER_TWEETS_RESULT, twitter_version=TWITTER_VERSION):
        #print(f"Getting user engagement of {self.ticker} for {self.ip}")
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
        #print(f"Filtering users of {self.ticker} for {self.ip}")
        tweets_to_remove = []
        for tweet in tweets:
            if tweet['u_n_followers'] < threshold or tweet['u_engagement'] == 0:
                tweets_to_remove.append(tweet)

        for tweet in tweets_to_remove:
            tweets.remove(tweet)

        return tweets

    # Step 6.0
    def prep_data(self, df):
        #print(f"Prepping model data of {self.ticker} for {self.ip}")
        # 1 Select features
        df = df[self.feature_set]

        # 2 Get df mean
        #print('before mean', df, len(df), df.shape)
        df = self.get_scale_and_mean(df)
        #print('after mean', df, len(df), df.shape)

        # 3 Create sequence from df
        test_seq = self.create_sequence(df)
        #print('\n\n', test_seq, test_seq.shape)

        # 4 Scale data
        test_seq = test_seq.reshape(
            (len(test_seq), test_seq.shape[0] * test_seq.shape[1]))
        #scaled_test_seq = scale_seq(test_seq)

        # Return preped data
        return tf.convert_to_tensor(test_seq, dtype=tf.float32), df

    # Step 6.1
    def get_pred(self, prepped_data):
        pred = self.model.predict(prepped_data)
        result = 1 if pred[0][1] >= pred[0][0] else -1
        return result

    # Step 7.0
    def get_stats_table_sql_result_old(self, tweets_dict):
        # init dict
        res_dict = {
            'ticker': [],
            'tweet_id': [],
            'user_engagement': [],
            'tweet_likes': [],
            'tweet_replies': [],
            'tweet_retweets': [],
            'sentiment_pos': [],
            'sentiment_neu': [],
            'sentiment_neg': [],
            'sentiment_compound': []
        }

        # push values
        for tweet in tweets_dict:
            res_dict['ticker'].append(self.ticker)
            res_dict['tweet_id'].append(tweet['tweet_id'])
            res_dict['user_engagement'].append(tweet['u_engagement'])
            res_dict['tweet_likes'].append(tweet['n_likes'])
            res_dict['tweet_replies'].append(tweet['n_replies'])
            res_dict['tweet_retweets'].append(tweet['n_retweets'])
            if self.features_version == 1:
                res_dict['sentiment_pos'].append(tweet['s_pos'])
                res_dict['sentiment_neu'].append(tweet['s_neu'])
                res_dict['sentiment_neg'].append(tweet['s_neg'])
                res_dict['sentiment_compound'].append(None)
            elif self.features_version == 2:
                res_dict['sentiment_pos'].append(None)
                res_dict['sentiment_neu'].append(None)
                res_dict['sentiment_neg'].append(None)
                res_dict['sentiment_compound'].append(tweet['s_compound'])
        return pd.DataFrame.from_dict(res_dict)

    def get_stats_table_sql_result(self, tweets_df):
        features = ['tweet_id', 'u_engagement', 'n_likes', 'n_replies',
                    'n_retweets', 's_pos', 's_neu', 's_neg', 's_compound']
        renames = {
            'u_engagement': 'user_engagement',
            'n_likes': 'tweet_likes',
            'n_replies': 'tweet_replies',
            'n_retweets': 'tweet_retweets',
            's_pos': 'sentiment_pos',
            's_neu': 'sentiment_neut',
            's_neg': 'sentiment_neg',
            's_compound': 'sentiment_compound'
        }
        return tweets_df[features].rename(columns=renames)
    # Step 7.1

    def get_pred_table_sql_result(self, prepared_df, prediction):
        # init dict
        res_dict = {}
        # push values
        res_dict['ticker'] = [self.ticker for i in range(len(prepared_df))]
        res_dict['prediction'] = [prediction for i in range(len(prepared_df))]
        for col in prepared_df:
            res_dict[col] = []
            for val in prepared_df[col]:
                res_dict[col].append(val)
        return pd.DataFrame.from_dict(res_dict)

    # Pred Function
    def get_prediction(self):
        # Step 1
        tweets = self.get_tweets(self.ticker, max_results=MAX_TWEETS_RESULTS,
                                 n_past=N_PAST, twitter_version=TWITTER_VERSION)
        if tweets == None:
            print("Couldnt get tweets @get_tweets()")
            return None, None
        # Step 2
        tweets = self.get_sentiment(tweets)
        if tweets == None:
            print("Couldnt get sentiment @get_sentiment()")
            return None, None
        # Step 3
        tweets = self.filter_tweets(
            tweets, threshold=MIN_TWEET_STATS_SUM)
        if len(tweets) == 0:
            print("Filtered all tweets @filter_tweets()")
            return None, None
        # Step 4
        tweets = self.get_users_engagement(tweets)
        if tweets == None:
            print("Couldnt get use engagement @get_user_engagement()")
            return None, None
        # Step 5
        tweets = self.filter_users(tweets, threshold=MIN_USER_FOLLOWERS)
        if len(tweets) == 0:
            print("Filtered all users @filter_users()")
            return None, None

        # Step 6.0 Transform from dictionary to df for easier data handling
        tweets_df = self.twitter_dict_res_to_df(tweets)
        if tweets_df == None:
            print("Couldnt convert twitter res dict to df @twitter_dict_res_to_df()")
            return None, None
        sql_Ticker_Stats_Table_DF = self.get_stats_table_sql_result(
            tweets_df=tweets_df)
        # Step 6.1
        preped_for_model, preped_df = self.prep_data(tweets_df)
        # Step 6.2
        pred = self.get_pred(preped_for_model)
        sql_Ticker_and_Pred_Table_DF = self.get_pred_table_sql_result(
            prepared_df=preped_df, prediction=pred)

        print("pred", "\n", sql_Ticker_and_Pred_Table_DF)
        print("tweets", "\n", sql_Ticker_Stats_Table_DF)
        return sql_Ticker_and_Pred_Table_DF, sql_Ticker_Stats_Table_DF


if __name__ == "__main__":
    model = TweetStockModel(
        model_path=f'/home/pi/FinalProject/FlaskServer/SelectedModels/AAPL/AAPL_acc_0.633_npast_1_epoch_4_opt_rmsprop_num_3848.h5',
        model_ticker="AAPL",
        features_version=1)
    sql_Ticker_and_Pred_Table_DF, sql_Ticker_Stats_Table_DF = model.get_prediction()
