from datetime import datetime, timedelta
import csv
import os
import sys
import math
import json

from pyparsing import NoMatch
import tensorflow as tf
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import re
from tensorflow import keras
from keras import models, layers
from keras.datasets import mnist
from tensorflow.keras.utils import to_categorical
from sklearn.preprocessing import MinMaxScaler, StandardScaler
from gc import collect
import Helper
import DataHandler


class ModelTrainer:
    def __init__(self, user):
        self.user = user
        self.initialized_df = self.init_data()
        # model training params
        self.training_batch_size = 8
        self.training_output_dims = 2
        self.model_training_params = self.init_model_training_params()
        self.feature_set1, self.feature_set2 = self.init_model_features()
        # model saving params
        self.saving_path = None
        self.model = None
        self.model_name = None
        self.model_history = None
        self.test_accuracy = None

    #------------ INITIALIZATION ----------------#

    def init_model_training_params(self):
        return {
            'layers': None,
            'ticker': None,
            'features': None,
            'activation_all': None,
            'activation_last': None,
            'loss_func': None,
            'optimizer': None,
            'n_past': None,  # num days from the past to predict based on
            'epochs': None,
            'output_dim': self.training_output_dims,
            'batch_size': self.training_batch_size,
            # 'num_of_layers': 2,
        }

    def init_model_features(self):
        all_features = ['ticker_symbol', 'Date', 'Low', 'Open', 'Stock_Volume', 'High', 'Close',
                        'Stock_Adj_Close', 'price_difference', 'tweet_id', 'writer',
                        'post_date', 'body', 'Tweet_Comments', 'Tweet_Retweets', 'Tweet_Likes',
                        'Negativity', 'Positivity', 'Neutral', 'Tweet_Sentiment', 'name', 'id',
                        'id_str', 'description', 'followers_count', 'favourites_count',
                        'listed_count', 'friends_count', 'statuses_count', 'created_at',
                        'verified', 'eng_total_retweets', 'eng_total_likes',
                        'eng_total_replies', 'eng_tweets_length', 'User_Engagement']

        stock_features = ['Date', 'ticker_symbol',
                          'price_difference']  # ,'Close']
        tweet_features = ['Tweet_Sentiment',
                          'Tweet_Comments', 'Tweet_Retweets', 'Tweet_Likes']
        tweet_features2 = ['Tweet_Comments', 'Tweet_Retweets',
                           'Tweet_Likes', 'Positivity', 'Negativity', 'Neutral']
        user_features = ['User_Engagement']
        features = stock_features + tweet_features + user_features
        features2 = stock_features + tweet_features2 + user_features
        return features, features2

    def init_paths(self):
        user_paths = Helper.get_user_data_paths(self.user)
        users_csv_name, stocks_csv_name, tweets_csv_name = 'users_with_eng_v5(with_replies).csv', 'stocks_2019.csv', 'tweets_2019.csv'
        users_path = user_paths['users_path'] + users_csv_name
        stocks_2019_path = user_paths['stocks_2019_path'] + stocks_csv_name
        tweets_2019_path = user_paths['tweets_2019_path'] + tweets_csv_name
        return {'users_path': users_path, 'stocks_path': stocks_2019_path, 'tweets_path': tweets_2019_path}

    def read_dfs_from_paths(self):
        csv_paths = self.init_paths(self.user)
        tweets_df, users_df, stocks_df = pd.read_csv(csv_paths['tweets_path']), pd.read_csv(
            csv_paths['users_path']), pd.read_csv(csv_paths['stocks_path'])
        return tweets_df, users_df, stocks_df

    def init_stocks_df(self, stocks_df):
        print("----init_stocks---- (does nothing at the time)")
        return DataHandler.mt_get_price_diff(stocks_df)

    def init_users_df(self, users_df):
        print("----init_users----")
        temp_users_df = users_df.copy()

        temp_users_df = DataHandler.mt_filter_users(temp_users_df)
        temp_users_df = DataHandler.mt_get_eng_score(temp_users_df)
        temp_users_df['eng_score'] = temp_users_df['eng_score'].astype(float)
        print("\n\n")
        return temp_users_df

    def init_tweets_df(self, tweets_df):
        return DataHandler.mt_filter_tweets(tweets_df=tweets_df)

    def init_data(self):
        ''' Read the data to be trained - should come back formatted as google csv shown here https://www.youtube.com/watch?v=gSYiKKoREFI '''
        # get the currect dataframes from drive in "paths" section
        tweets_2019, users_df, stocks_2019 = self.read_dfs_from_paths()

        merged_df = DataHandler.mt_get_merged(self.init_tweets_df(tweets_2019),
                                              self.init_users_df(users_df),
                                              self.init_stocks_df(
            stocks_2019),
            exclude_TSLA=False)
        print('merged\n\n', merged_df)
        Helper.clear_console()

        merged_df = DataHandler.sort_df_by_dates(
            df=merged_df, date_col_name='Date')

        return merged_df.rename(columns={'Compound': 'Tweet_Sentiment',
                                         'eng_score': 'User_Engagement',
                                         'comment_num': 'Tweet_Comments',
                                         'retweet_num': 'Tweet_Retweets',
                                         'like_num': 'Tweet_Likes',
                                         'Volume': 'Stock_Volume',
                                         'Adjusted Close': 'Stock_Adj_Close',
                                         })

    #---------- AUTOMATED TRAINING ---------#

    def save_model(self):
        '''Save the generated model'''
        if not os.path.exists(self.saving_path):
            os.mkdir(self.saving_path)

        self.model.save(f'{self.saving_path}{self.model_name}.h5')
        self.save_graph()
        self.save_params()

    def save_graph(self):
        '''Save Model's Graph'''
        plt.clf()
        acc = self.history.history['accuracy']
        val_acc = self.history.history['val_accuracy']
        # loss = self.history.history['loss']
        # val_loss = self.history.history['val_loss']

        epochs = range(1, len(acc) + 1)

        plt.plot(epochs, acc, 'r', label='Training acc')
        plt.plot(epochs, val_acc, 'b', label='Validation acc')
        plt.title(f'Training and validation accuracy')
        plt.xlabel('Epochs')
        plt.ylabel('Acc')
        plt.legend()
        plt.savefig(f'{self.saving_path}{self.model_name}_graph.png')

    def save_params(self):
        with open(f'{self.saving_path}{self.model_name}_params.csv', 'w') as f:
            for key in self.model_training_params.keys():
                f.write("%s,%s\n" % (key, self.model_training_params[key]))

    def train_with_params(self):
        '''Generates model according to iserted params'''
        model_params = self.model_training_params
        dnn_df = self.initialized_df[model_params['features']].copy()
        ticker_symbol = model_params['ticker']

        dnn_df = dnn_df[dnn_df['ticker_symbol'] ==
                        ticker_symbol].drop(columns=['ticker_symbol'])

        scaled_dnn_df = DataHandler.mt_scale_data(dnn_df)
        scaled_dnn_df = scaled_dnn_df.drop(columns=['Date'])

        # train_data,validation_data,test_data = split_data(dnn_df,version=1)
        train_data, validation_data, test_data = DataHandler.mt_split_data(
            scaled_dnn_df, version=2)

        # train_data.shape, test_data.shape

        n_past = model_params['n_past']
        target = 'price_difference'
        train_seq, train_label = DataHandler.mt_create_sequence(
            train_data, rows_at_a_time=n_past, target=target)
        validation_seq, validation_label = DataHandler.mt_create_sequence(
            validation_data, rows_at_a_time=n_past, target=target)
        test_seq, test_label = DataHandler.mt_create_sequence(
            test_data, rows_at_a_time=n_past, target=target)

        output_dims = model_params['output_dim']

        actv_func = model_params['activation_all']

        network = models.Sequential()
        # network.add(layers.Dense(128, activation=actv_func, input_shape=(train_seq.shape[2] * train_seq.shape[1],)))
        for units in model_params['layers']:
            network.add(layers.Dense(units, activation=actv_func, input_shape=(
                train_seq.shape[2] * train_seq.shape[1],)))
        # network.add(layers.Dense(16, activation=actv_func, input_shape=(
        #     train_seq.shape[2] * train_seq.shape[1],)))

        network.add(layers.Dense(
            output_dims, activation=model_params['activation_last']))

        network.compile(optimizer=model_params['optimizer'],
                        loss=model_params['loss_func'], metrics=['accuracy'])

        # scaler = MinMaxScaler()
        train_seq = train_seq.reshape(
            (len(train_seq), train_seq.shape[2] * train_seq.shape[1]))
        # train_seq = scaler.fit_transform(train_seq)
        validation_seq = validation_seq.reshape(
            (len(validation_seq), validation_seq.shape[2] * validation_seq.shape[1]))
        # validation_seq = scaler.fit_transform(validation_seq)
        test_seq = test_seq.reshape(
            (len(test_seq), test_seq.shape[2] * test_seq.shape[1]))
        # test_seq = scaler.fit_transform(test_seq)

        train_seq = tf.convert_to_tensor(train_seq, dtype=tf.float32)
        validation_seq = tf.convert_to_tensor(validation_seq, dtype=tf.float32)
        test_seq = tf.convert_to_tensor(test_seq, dtype=tf.float32)

        train_label = tf.convert_to_tensor(
            to_categorical(train_label), dtype=tf.float32)
        validation_label = tf.convert_to_tensor(
            to_categorical(validation_label), dtype=tf.float32)
        test_label = tf.convert_to_tensor(
            to_categorical(test_label), dtype=tf.float32)

        try:
            history = network.fit(train_seq, train_label, epochs=model_params['epochs'], batch_size=model_params['batch_size'], validation_data=(
                validation_seq, validation_label))
        except Exception:
            return None, None, None

        test_loss, test_acc = network.evaluate(test_seq, test_label)
        Helper.clear_console(f'Acc = {test_acc}')
        return network, round(test_acc, 7), history

    def run_auto_training(self, saving_path, acc_saving_threshold=0.55):
        '''
        Runs all possible models
        runtime: ~13 hours
        '''
        if saving_path == None:
            print(
                "@ModelTrainer.py/run_auto_training() - missing argument - No saving_path provided...\n")
            return None
        else:
            self.saving_path = saving_path

        tickers = ['TSLA', 'AMZN', 'GOOG', 'GOOGL', 'AAPL', 'MSFT']
        feature_sets = [self.feature_set1]  # , self.feature_set2]
        actv_funcs_all = ['relu', 'tanh', 'sigmoid']
        actv_funcs_last = ['softmax', 'sigmoid']  # ,'relu'
        loss_funcs = ['binary_crossentropy', 'mean_squared_error']
        optimizers = ['rmsprop', 'adam']
        n_pasts = [1]  # , 2, 3]
        n_epochs = [4, 7, 10, 15, 20]  # [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        layers = [[4], [8], [16], [16, 8], [8, 4]]

        model_id = 1
        for ticker in tickers:
            for feature_set in feature_sets:
                for actv_func_all in actv_funcs_all:
                    for actv_func_last in actv_funcs_last:
                        for loss_func in loss_funcs:
                            for optimizer in optimizers:
                                for n_past in n_pasts:
                                    for n_epoch in n_epochs:
                                        for layer in layers:
                                            self.model_training_params = {
                                                'layers': layer,
                                                'ticker': ticker,
                                                'features': feature_set,
                                                'activation_all': actv_func_all,
                                                'activation_last': actv_func_last,
                                                'loss_func': loss_func,
                                                'optimizer': optimizer,  # 'rmsprop', linear
                                                'n_past': n_past,  # num days from the past to predict based on
                                                'epochs': n_epoch,
                                                'output_dim': self.training_output_dims,
                                                'batch_size': self.training_batch_size,
                                                # 'num_of_layers': 2,
                                            }
                                            self.model, self.test_accuracy, self.history = self.train_with_params()

                                            if self.test_accuracy != None:
                                                if float(self.test_accuracy) > acc_saving_threshold:
                                                    self.model_name = f"{ticker}_acc_{round(self.test_accuracy, 3)}_npast_{n_past}_epoch_{n_epoch}_opt_{optimizer}_num_{model_id}"
                                                    self.save_model()
                                                    model_id += 1


#---------- MAIN -----------#
if __name__ == '__main__':
    # availables: 'alon' , 'guy', 'hadar'
    user = 'alon'
    mt = ModelTrainer(user=user)

    try_num = 6
    save_path = f"D:\\GoogleDrive\\Alon\\לימודים\\TweetStockApp\\FlaskServer\\Data\\Networks\\{try_num}\\"
    mt.run_auto_training(acc_saving_threshold=0.55, saving_path=save_path)
