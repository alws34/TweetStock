from datetime import datetime, timedelta
import csv
import os
import sys
import math
import json
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
    def __init__(self, user, saving_path):
        # global merged_df
        self.saving_path = saving_path
        self.merged_df = self.init_data()
        self.paths = Helper.get_paths(user)

        self.all_features = ['ticker_symbol', 'Date', 'Low', 'Open', 'Stock_Volume', 'High', 'Close',
                             'Stock_Adj_Close', 'price_difference', 'tweet_id', 'writer',
                             'post_date', 'body', 'Tweet_Comments', 'Tweet_Retweets', 'Tweet_Likes',
                             'Negativity', 'Positivity', 'Neutral', 'Tweet_Sentiment', 'name', 'id',
                             'id_str', 'description', 'followers_count', 'favourites_count',
                             'listed_count', 'friends_count', 'statuses_count', 'created_at',
                             'verified', 'eng_total_retweets', 'eng_total_likes',
                             'eng_total_replies', 'eng_tweets_length', 'User_Engagement']
        self.stock_features = ['Date', 'ticker_symbol',
                               'price_difference']  # ,'Close']
        self.tweet_features = ['Tweet_Sentiment',
                               'Tweet_Comments', 'Tweet_Retweets', 'Tweet_Likes']
        self.tweet_features2 = ['Tweet_Comments', 'Tweet_Retweets',
                                'Tweet_Likes', 'Positivity', 'Negativity', 'Neutral']
        self.user_features = ['User_Engagement']

        self.features = self.stock_features + self.tweet_features + self.user_features
        self.features2 = self.stock_features + self.tweet_features2 + self.user_features

    #---------- AUTOMATED TRAINING ---------#

    def save_model(self, model, model_name, params, history):
        '''Save the generated model'''
        if not os.path.exists(self.saving_path):
            os.mkdir(self.saving_path)

        model.save(f'{self.saving_path}{model_name}.h5')
        self.save_graph(history, self.saving_path, model_name)
        self.save_model_params(params, self.saving_path, model_name)

    def save_graph(self, history, model_name):
        '''Save Model's Graph'''
        plt.clf()
        acc = history.history['accuracy']
        val_acc = history.history['val_accuracy']
        loss = history.history['loss']
        val_loss = history.history['val_loss']

        epochs = range(1, len(acc) + 1)

        plt.plot(epochs, acc, 'r', label='Training acc')
        plt.plot(epochs, val_acc, 'b', label='Validation acc')
        plt.title(f'Training and validation accuracy')
        plt.xlabel('Epochs')
        plt.ylabel('Acc')
        plt.legend()
        plt.savefig(f'{self.saving_path}{model_name}_graph.png')

    def save_model_params(self, params, model_name):
        with open(f'{self.saving_path}{model_name}_params.csv', 'w') as f:
            for key in params.keys():
                f.write("%s,%s\n" % (key, params[key]))

    def train_model_with_params(self, model_params):
        '''Generates model according to iserted params'''
        dnn_df = self.merged_df[model_params['features']].copy()
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

    def run_auto_training(self, acc_saving_threshold):
        '''
        Runs all possible models
        runtime: ~13 hours
        '''
        test_threshold = acc_saving_threshold
        tickers = ['TSLA', 'AMZN', 'GOOG', 'GOOGL', 'AAPL', 'MSFT']
        feature_sets = [self.features]  # , features2]
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
                                            model_prms = {
                                                'layers': layer,
                                                'ticker': ticker,
                                                'features': feature_set,
                                                'activation_all': actv_func_all,
                                                'activation_last': actv_func_last,
                                                'num_of_layers': 2,
                                                'loss_func': loss_func,
                                                'optimizer': optimizer,  # 'rmsprop', linear
                                                'n_past': n_past,  # num days from the past to predict based on
                                                'output_dim': 2,
                                                'epochs': n_epoch,
                                                'batch_size': 8
                                            }
                                            model, test_Acc, history = self.train_model_with_params(
                                                model_params=model_prms)
                                            if test_Acc != None:
                                                if float(test_Acc) > test_threshold:
                                                    model_name = f"{ticker}_acc_{round(test_Acc, 3)}_npast_{n_past}_epoch_{n_epoch}_opt_{optimizer}_num_{model_id}"
                                                    self.save_model(
                                                        model, model_name, model_prms, history)
                                                    model_id += 1

    #------------ DATA INITIALIZATION ----------------#

    def read_dfs_from_paths(self):
        users_path = self.paths['users_path'] + \
            'users_with_eng_v5(with_replies).csv'
        stocks_2019_path = self.paths['stocks_2019_path'] + \
            'stocks_2019.csv'
        tweets_2019_path = self.paths['tweets_2019_path'] + \
            'tweets_2019.csv'
        return pd.read_csv(tweets_2019_path), pd.read_csv(users_path), pd.read_csv(stocks_2019_path)

    def init_stocks(self, stocks_df):
        print("----init_stocks---- (does nothing at the time)")
        return DataHandler.mt_get_price_diff(stocks_df)

    def init_users(self, users_df):
        print("----init_users----")
        temp_users_df = users_df.copy()

        temp_users_df = DataHandler.mt_filter_users(temp_users_df)
        temp_users_df = DataHandler.mt_get_eng_score(temp_users_df)
        temp_users_df['eng_score'] = temp_users_df['eng_score'].astype(float)
        print("\n\n")
        return temp_users_df

    def init_tweets(self, tweets_df):
        return DataHandler.mt_filter_tweets(tweets_df=tweets_df)

    def init_data(self):
        ''' Read the data to be trained - should come back formatted as google csv shown here https://www.youtube.com/watch?v=gSYiKKoREFI '''
        # get the currect dataframes from drive in "paths" section
        tweets_2019, users_df, stocks_2019 = self.read_dfs_from_paths()

        merged_df = DataHandler.mt_get_merged(self.init_tweets(tweets_2019),
                                              self.init_users(users_df),
                                              self.init_stocks(
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


#---------- MAIN -----------#
if __name__ == '__main__':
    try_num = 6
    save_path = f"D:\\GoogleDrive\\Alon\\לימודים\\TweetStockApp\\FlaskServer\\Data\\Networks\\{try_num}\\"
    # availables: 'alon' , 'guy', 'hadar'
    user = 'alon'
    mt = ModelTrainer(user=user, saving_path=save_path)
    mt.run_auto_training(acc_saving_threshold=0.55)
