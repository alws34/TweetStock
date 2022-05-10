import os
import json
import pandas as pd
import numpy as np
import tweepy
import math
import sklearn
import tensorflow as tf
from keras.models import load_model
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer  # sentiment score
from TwitterAPI import TwitterAPI, TwitterOAuth, TwitterRequestError, TwitterConnectionError, TwitterPager
from sklearn.preprocessing import MinMaxScaler, StandardScaler
from datetime import datetime as dt, timedelta
from pathlib import Path
import Helper
import DataHandler

TWITTER_VERSION = 2             # twitter version.
# days on which the model was train to precict based on.
N_PAST = 1
MAX_TWEETS_RESULTS = 100        # max results for first tweets query.
MAX_USER_TWEETS_RESULT = 100    # max results for use engagement tweets
MIN_TWEET_STATS_SUM = 25        # min tweet filtering sum of stats
MIN_USER_FOLLOWERS = 100        # min user followers num to be included


delimiter, prefix = Helper.get_prefix_path()


class TweetStockModel:
    def __init__(self, model_path, model_ticker, features_version, ip='No_IP', id=0):
        self.id = id
        self.ticker = model_ticker
        self.ip = ip
        self.features_version = features_version
        self.feature_set = self.get_feature_set(features_version)

        self.model_path = Path(model_path)
        self.model = load_model(model_path)

        self.sentiment_analyzer = SentimentIntensityAnalyzer()
        self.twitter = self.connect_to_twitter()
        pd.set_option('display.max_columns', None)

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
        Twitter_Config = self.get_twitter_config()
        consumer_key = Twitter_Config['consumer_key']
        consumer_secret = Twitter_Config['consumer_secret']
        access_token = Twitter_Config['access_token']
        access_token_secret = Twitter_Config['access_token_secret']

        if version == 2:
            return TwitterAPI(consumer_key, consumer_secret, access_token,
                              access_token_secret, api_version='2')
        elif version == 1:
            auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
            auth.set_access_token(access_token, access_token_secret)
            return tweepy.API(auth)

    def get_twitter_config(self):
        with open(f'{prefix}CONFIGS/twitterconfig.json', 'r') as json_file:
            twitter_configs = json.load(json_file)
        return twitter_configs

    def get_n_past_date(self, days_to_subtract=1, hours_to_subtract=2):
        if days_to_subtract < 0:
            days_to_subtract *= -1

        days_to_subtract -= 1
        now = dt.utcnow()
        midnight = dt.combine(now, dt.min.time())

        start_date = midnight - timedelta(days=days_to_subtract)
        end_date = now - timedelta(hours=hours_to_subtract)

        return start_date.isoformat('T')+'Z', end_date.isoformat('T')+'Z'

    """
    def twitter_dict_res_to_df(self, data):
        try:
            temp = {}
            for key in data[0].keys():
                temp[key] = []
                for d in data:
                    temp[key].append(d[key])
        except Exception as err:
            print('twitter_dict_res_to_df()', err)
            return None
        # print(temp)
        return pd.DataFrame.from_dict(temp)

    def get_scale_and_mean(self, df, n_past=N_PAST, scaling='min_max'):
        def is_scalable_feature(f):
            return f in self.feature_set or f == 's_compound'

        def is_sentiment_feature(f):
            return f in ['s_compound', 's_neg', 's_pos', 's_neu']

        if n_past == 1:
            df_dict = {}
            for col in df.columns:
                if is_scalable_feature(col):
                    df_dict[col] = []
                    f = df[col] * \
                        df["s_compound"] if not is_sentiment_feature(
                            col) else df[col]
                    scaler = MinMaxScaler() if scaling == 'min_max' else StandardScaler()
                    df_dict[col].append(scaler.fit_transform(
                        np.array(f).reshape(-1, 1)).mean())
            return pd.DataFrame.from_dict(df_dict)
        else:
            return "N_past is not 1 @ get_scale_and_mean()"


    def create_sequence(self, dataset):
        return np.array(dataset)
    """

# -------------------------------------------------------------------------------------------------------------- #

    def fetch_live_tweets(self, ticker, max_results=MAX_TWEETS_RESULTS, n_past=N_PAST, twitter_version=TWITTER_VERSION):
        # print(f"Getting Tweets of {self.ticker} for {self.ip} ")
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
                    # raise Exception(f"Couldn't Get Tweets!\nCode Returned from twitter:{temp_tweets.status_code}")
                    return None
            except Exception as err:
                print(f"{err}")
                raise Exception("") from err

        return tweets

    def calc_tweets_sentiment(self, tweets):
        # print(f"Getting Sentiment of {self.ticker} for {self.ip}")
        for tweet in tweets:
            s = self.sentiment_analyzer.polarity_scores(tweet['text'])
            tweet['s_neg'], tweet['s_neu'], tweet['s_pos'], tweet['s_compound'] = s['neg'], s['neu'], s['pos'], s['compound']
            # tweets['subjectivity'] = sentiment_analyzer.subjectivity_scores(tweet['text']) # optional
        return tweets

    def fetch_users_with_eng_by_tweets(self, tweets, max_tweets_results=MAX_USER_TWEETS_RESULT, twitter_version=TWITTER_VERSION):
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

                    tweets[i]['u_engagement'] = DataHandler.tsm_get_single_user_eng_score(
                        user_tweets=u_tweets, user_followers=tweet['u_n_followers'])

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

    def predict(self, prepped_data):
        pred = self.model.predict(prepped_data)
        result = 1 if pred[0][1] >= pred[0][0] else -1
        return result

    # Pred Function
    def get_prediction(self):
        # Step 1 - fetch the live tweets from twitter
        tweets = self.fetch_live_tweets(self.ticker, max_results=MAX_TWEETS_RESULTS,
                                        n_past=N_PAST, twitter_version=TWITTER_VERSION)
        if tweets == None:
            print("Couldnt get tweets @get_tweets()")
            return None, None
        # calculate sentiment score for each tweet
        tweets = self.calc_tweets_sentiment(tweets)
        if tweets == None:
            print("Couldnt get sentiment @get_sentiment()")
            return None, None

        # filter tweets
        tweets = DataHandler.tsm_filter_tweets(tweets)
        if len(tweets) == 0:
            print("Filtered all tweets @filter_tweets()")
            return None, None
        # get user engagement
        tweets = self.fetch_users_with_eng_by_tweets(tweets)
        if tweets == None:
            print("Couldnt get use engagement @get_user_engagement()")
            return None, None
        # filter users
        tweets = DataHandler.tsm_filter_users(
            tweets, threshold=MIN_USER_FOLLOWERS)
        if len(tweets) == 0:
            print("Filtered all users @filter_users()")
            return None, None
        # Transform from dictionary to df for easier data handling
        tweets_df = DataHandler.tsm_twitter_dict_res_to_df(tweets)
        if tweets_df.empty:
            print("Couldnt convert twitter res dict to df @twitter_dict_res_to_df()")
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


if __name__ == "__main__":
    model = TweetStockModel(
        model_path=f'/home/pi/FinalProject/FlaskServer/SelectedModels/AAPL/AAPL_acc_0.633_npast_1_epoch_4_opt_rmsprop_num_3848.h5',
        model_ticker="AAPL",
        features_version=1)
    pred_table_dict, tweets_table_dict = model.get_prediction()
