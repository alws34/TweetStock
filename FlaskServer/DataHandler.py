import pandas as pd
import numpy as np
import tensorflow as tf
import math
from sklearn.preprocessing import MinMaxScaler, StandardScaler
from Helper import Helper
'''
This class will be used to coordinate the work between 
the ModelTrainer.py and TweetStockModel.py .
It will contain every method which is used to handle data.
'''


class DataHandler():
    def __init__(self, user, path):
        self.path = path
        self.user = user
        self.paths = Helper.get_paths(user)

    #------ ModelTrainer.py -------#
    def mt_scale_data(self, df, target='price_difference', scaling='min_max'):
        def is_scalable_feature(feature):
            return feature != 'Date' and feature != target

        def is_sentiment_feature(feature):
            return feature == "Tweet_Sentiment" or feature == "Positivity" or feature == "Neutral" or feature == "Negativity"
        columns = df.columns
        df = df.groupby(by=['Date'])
        dates_dict = {}
        for col in columns:
            dates_dict[col] = []

        for date in df:
            dates_dict['Date'].append(date[0])
            dates_dict[target].append(date[1][target].iloc[0])
            for col in columns:
                if is_scalable_feature(col):
                    if scaling == 'min_max':
                        scaler = MinMaxScaler()
                    elif scaling == 'standard':
                        scaler = StandardScaler()

                    to_append = date[1][col] * date[1]["Tweet_Sentiment"] if not is_sentiment_feature(
                        col) else date[1][col]
                    print("@TweetStockModel/scale_df()/to_append=", to_append)
                    dates_dict[col].append(scaler.fit_transform(
                        np.array(to_append).reshape(-1, 1)).mean())

        return pd.DataFrame.from_dict(dates_dict)

    def mt_split_data(self, dnn_df, version=1):
        if version == 1:
            testing_size = 50
            validation_size = 50
            training_size = len(dnn_df) - testing_size - validation_size

            train_data = dnn_df[:training_size]
            validation_data = dnn_df[training_size:training_size+validation_size]
            test_data = dnn_df[training_size+validation_size:]
        elif version == 2:
            validation_size = 50
            testing_size = 50
            train_data, validation_data, test_data = np.split(dnn_df.sample(frac=1, random_state=42), [
                int(len(dnn_df)-testing_size-validation_size), int(len(dnn_df)-testing_size)])
        return train_data, validation_data, test_data

    def mt_create_sequence(self, dataset, rows_at_a_time, target):
        sequences = []
        labels = []
        start_idx = 0
        if target:
            features_df = dataset.drop(columns=target)
            labels_df = dataset[[target]]
            # Selecting 50 rows at a time
            for stop_idx in range(rows_at_a_time, len(dataset)):
                sequences.append(features_df.iloc[start_idx:stop_idx])
                labels.append(labels_df.iloc[stop_idx][0])
                start_idx += 1
        else:
            # Selecting 50 rows at a time
            for stop_idx in range(rows_at_a_time, len(dataset)):
                sequences.append(dataset.iloc[start_idx:stop_idx])
                labels.append(dataset.iloc[stop_idx])
                start_idx += 1
        return (np.array(sequences), np.array(labels))


    def mt_init_stocks(self, stocks_df):
        print("----init_stocks---- (does nothing at the time)")
        stocks_df = self.mt_get_price_diff(stocks_df)
        return stocks_df

    def mt_get_price_diff(self, stocks_df):
        ''' gets the close price diff (today-yesterday) 1 = up, 0 = down '''
        temp_stocks = stocks_df.reset_index(drop=True)
        temp_stocks['price_difference'] = [
            0.0 for i in range(len(temp_stocks))]

        for i in range(1, len(temp_stocks)):
            # Next Close - Today Close
            # today = float(temp_stocks['Close'][i])
            # yesterday = float(temp_stocks['Close'][i-1])
            # # try getAvg(high,low)
            # price_diff = today-yesterday

            price_diff = float(temp_stocks['Close'][i]) - \
                float(temp_stocks['Open'][i])
            # temp_stocks['price_difference'][i] = price_diff
            temp_stocks['price_difference'][i] = 1 if price_diff >= 0 else 0
            # if (price_diff>=0): temp_stocks['price_difference'][i] = 1
            # else: temp_stocks['price_difference'][i] = 0

        temp_stocks.drop([0], inplace=True)
        temp_stocks.reset_index(drop=True, inplace=True)
        return temp_stocks


    def mt_init_users(self, users_df):
        print("----init_users----")
        temp_users_df = users_df.copy()

        temp_users_df = self.mt_filter_users(
            temp_users_df, follower_threshold=150)
        temp_users_df = self.mt_get_eng_score(
            temp_users_df, include_replies=False, include_followers=True)
        temp_users_df['eng_score'] = temp_users_df['eng_score'].astype(float)
        print("\n\n")
        return temp_users_df

    def mt_filter_users(self, df, follower_threshold):
        """
        -- 1. remove broken/bad eng score (user blocked public metrics)
        -- 2. removes users with less than follower_threshold
        """
        to_remove = []
        print("len before = " + str(len(df)))
        for i in range(len(df)):
            try:
                df['eng_score'][i] = float(df['eng_score'][i])
            except ValueError as ex:
                to_remove.append(i)
                print(ex)
            except:
                print('Problem getting eng_score at index', i)

        for i in range(len(df)):
            if df['eng_score'][i] == math.inf or df['followers_count'][i] < follower_threshold:
                to_remove.append(i)

        df.drop(to_remove, inplace=True)
        df.reset_index(drop=True, inplace=True)
        print("len after = " + str(len(df)))
        return df

    def mt_get_eng_score(self, users_df, include_followers=True, include_replies=True):
        ''' gets users df and returns the df with the engagement score calculated.
            df should have the following columns:  '''
        df = users_df
        for i in range(len(df)):
            rts = df['eng_total_retweets'][i]
            likes = df['eng_total_likes'][i]
            replies = df['eng_total_replies'][i]
            total_tweets = df['eng_tweets_length'][i]
            followers = df['followers_count'][i]

            new_replies = replies if include_replies else 0
            new_followers = math.log(
                followers, 2) if include_followers else 1
            df['eng_score'][i] = (
                (rts+likes+new_replies)/total_tweets)/new_followers
            # if include_followers:
            #   df['eng_score'][i] = ((rts+likes+replies)/total_tweets)/math.log(followers,2) if include_replies else ((rts+likes)/total_tweets)/followers
            # else:
            #   df['eng_score'][i] = ((rts+likes+replies)/total_tweets) if include_replies else ((rts+likes)/total_tweets)
        return df


    def mt_init_tweets(self, tweets_df, tweet_stats_threshold=25):
        """
        naive filtering based on comment+liikes+retweets < 25
        also gets rid of sentiments=0
        """
        print("----init_tweets----")
        print('len before', len(tweets_df))

        # filter the tweets
        temp_tweets = tweets_df[tweets_df['comment_num'] +
                                tweets_df['retweet_num'] + tweets_df['like_num'] > tweet_stats_threshold]
        temp_tweets = temp_tweets[temp_tweets['Compound'] != 0]
        temp_tweets = temp_tweets[temp_tweets['Neutral'] != 1]

        temp_tweets.reset_index(drop=True, inplace=True)
        print('len after', len(temp_tweets))
        print("\n\n")
        return temp_tweets

    def mt_get_merged(self, tweets_df, users_df, stocks_df, exclude_TSLA=False):
        ''' Get the merged tweets users and stocks dataframe - returns the merged df '''
        print("---get_merged----")
        # --> merge stocks_2019 with tweets_2019 by ticker and date
        temp_merged_df = pd.merge(stocks_df, tweets_df, on=[
            'Date', 'ticker_symbol'], how='inner')
        # --> and users to it
        temp_users = users_df.copy()
        temp_users.rename(columns={'screen_name': 'writer'}, inplace=True)
        merged_df = pd.merge(temp_merged_df, temp_users,
                             on=['writer'], how='inner')
        if exclude_TSLA:
            print('with TSLA', len(merged_df))
            merged_df = merged_df[merged_df['ticker_symbol'] != 'TSLA']
            print('without TSLA', len(merged_df))
        # clear nulls
        merged_df.dropna(axis=0, inplace=True)
        merged_df.reset_index(drop=True, inplace=True)
        print("\n\n")
        return merged_df

    def mt_init_data(self, scale_and_multiply=False):
        ''' Read the data to be trained - should come back formatted as google csv shown here https://www.youtube.com/watch?v=gSYiKKoREFI '''
        # get the currect dataframes from drive in "paths" section

        users_path = self.paths['users_path'] + \
            'users_with_eng_v5(with_replies).csv'
        stocks_2019_path = self.paths['stocks_2019_path'] + \
            'stocks_2019.csv'
        tweets_2019_path = self.paths['tweets_2019_path'] + \
            'tweets_2019.csv'

        stocks_2019 = pd.read_csv(stocks_2019_path)
        users_df = pd.read_csv(users_path)
        tweets_2019 = pd.read_csv(tweets_2019_path)

        merged_df = self.mt_get_merged(self.mt_init_tweets(tweets_2019),
                                    self.mt_init_users(users_df),
                                    self.mt_init_stocks(stocks_2019),
                                    exclude_TSLA=False)
        print('merged\n\n', merged_df)
        Helper.clear_console()

        merged_df['Date'] = pd.to_datetime(
            merged_df['Date'], format='%d/%m/%Y')
        merged_df = merged_df.sort_values(by="Date").reset_index(drop=True)

        return merged_df.rename(columns={'Compound': 'Tweet_Sentiment',
                                         'eng_score': 'User_Engagement',
                                         'comment_num': 'Tweet_Comments',
                                         'retweet_num': 'Tweet_Retweets',
                                         'like_num': 'Tweet_Likes',
                                         'Volume': 'Stock_Volume',
                                         'Adjusted Close': 'Stock_Adj_Close',
                                         })

    #------ TweetStockModel.py -------#

    def tsm_create_sequence(self, dataset):
        return np.array(dataset)

    # replaced by get_scale_and_mean
    def tsm_get_df_mean_old(self, df, n_past=N_PAST):
        if n_past == 1:
            df_dict = {}
            for col in df:
                df_dict[col] = []
                df_dict[col].append(df[col].mean())
            return pd.DataFrame.from_dict(df_dict)
        else:
            return df.groupby(by='date').mean().reset_index()

    def tsm_get_scale_and_mean(self, df, n_past=N_PAST, scaling='min_max'):
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

    def tsm_twitter_dict_res_to_df(self, data):
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

    def tsm_prep_data(self, df):
        #print(f"Prepping model data of {self.ticker} for {self.ip}")
        # 1 Select features
        df = self.get_scale_and_mean(df)
        df = df[self.feature_set]

        # 2 Get df mean
        #print('before mean', df, len(df), df.shape)
        #df = self.get_scale_and_mean(df)
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
