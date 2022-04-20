from datetime import datetime, timedelta
# from matplotlib import inline
import datetime as dt
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
from re import I
from sklearn.preprocessing import MinMaxScaler, StandardScaler
import math
import tensorflow as tf
from tensorflow import keras
from keras import models, layers
from keras.datasets import mnist
from tensorflow.keras.utils import to_categorical
import csv
import os
import sys

# Change Paths Here
# availables: 'alon' , 'guy', 'hadar'
current_user = 'alon'

paths = {
    'guy': {'users_path': '/content/drive/MyDrive/Final Project/Data/Self Collected/',
            'stocks_2019_path': "/content/drive/MyDrive/Final Project/Data/From the Web/StockMarketData/",
            'tweets_2019_path': "/content/drive/MyDrive/Final Project/Data/From the Web/TweetsAboutTopCompanies/",
            'from_the_web': "/content/drive/MyDrive/Final Project/Data/From the Web",
            'Model_file_path': ''
            },
    'alon': {
        'users_path': "D:\GoogleDrive\Alon\לימודים\Final Project\Data\Self Collected\\",
        'stocks_2019_path': "D:\GoogleDrive\Alon\לימודים\Final Project\Data\From the Web\StockMarketData\\",
        'tweets_2019_path': "D:\GoogleDrive\Alon\לימודים\Final Project\Data\From the Web\TweetsAboutTopCompanies\\",
        'from_the_web': "D:\GoogleDrive\Alon\לימודים\Final Project\Data\From the Web\\",
        'Model_file_path': ''
    },
    'hadar': {'users_path': '/content/drive/MyDrive/Final Project/Data/Self Collected/',
              'stocks_2019_path': "/content/drive/MyDrive/Final Project/Data/From the Web/StockMarketData/",
              'tweets_2019_path': "/content/drive/MyDrive/Final Project/Data/From the Web/TweetsAboutTopCompanies/",
              'from_the_web': "/content/drive/MyDrive/Final Project/Data/From the Web",
              'Model_file_path': ''
              }
}


##IMPORTS##


def clear_console(msg=''):
    os.system('cls')
    print(msg, 'Done at:', datetime.now().strftime('%d-%m-%Y at %H:%M:%S'))


# During implementation - works with v1 but NOT with v2
# - there may be solution by adding 'accuracy' while compiling
# - as mentioned here https://www.codespeedy.com/diagnose-overfitting-and-underfitting-of-lstm-models-in-python/
def get_LSTM_accuracy(original_df_in, forecast_df_in):
    forecast_df = forecast_df_in.reset_index().rename(
        columns={'index': 'Date'})
    original_df = original_df_in.reset_index().rename(
        columns={'index': 'Date'})
    print('pred', forecast_df)
    print('orig\n', original_df)
    n_correct = 0
    date_index = 'Date'
    target_index = 'Open'
    for i in range(1, len(forecast_df) - 1):
        day = forecast_df[date_index].iloc[i]
        day_after = forecast_df[date_index].iloc[i+1]
        orig_day = original_df[original_df[date_index] == day]
        orig_day_after = original_df[original_df[date_index] == day_after]
        forecast_day = forecast_df[forecast_df[date_index] == day]
        forecast_day_after = forecast_df[forecast_df[date_index] == day_after]

        original_volatility = float(
            orig_day_after[target_index]) - float(orig_day[target_index])
        forecast_volatility = float(
            forecast_day_after[target_index]) - float(forecast_day[target_index])

        if (original_volatility >= 0 and forecast_volatility >= 0) or (original_volatility < 0 and forecast_volatility < 0):
            n_correct += 1

    return str(round((n_correct/(len(forecast_df)-2))*100, 3)) + '%'


def split_stocks_df(stocks_df):
    df = stocks_df
    dfs = []
    ticker_symbols = ['AAPL', 'AMZN', 'GOOG', 'GOOGL', 'MSFT', 'TSLA']
    for ticker_symbol in ticker_symbols:
        dfs.append(df[df['ticker_symbol'] ==
                   ticker_symbol].reset_index(drop=True))
    return dfs


def get_price_diff(stocks_df):
    ''' gets the close price diff (today-yesterday) 1 = up, 0 = down '''
    temp_stocks = stocks_df.reset_index(drop=True)
    temp_stocks['price_difference'] = [0.0 for i in range(len(temp_stocks))]

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


def init_stocks(stocks_df):
    print("----init_stocks---- (does nothing at the time)")
    stocks_df = get_price_diff(stocks_df)
    return stocks_df


def init_users(users_df):
    print("----init_users----")
    temp_users_df = users_df.copy()

    def filter_users(df, follower_threshold):
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
    # IMPLEMENT

    def get_eng_score(users_df, include_followers=True, include_replies=True):
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
            new_followers = math.log(followers, 2) if include_followers else 1
            df['eng_score'][i] = (
                (rts+likes+new_replies)/total_tweets)/new_followers
            # if include_followers:
            #   df['eng_score'][i] = ((rts+likes+replies)/total_tweets)/math.log(followers,2) if include_replies else ((rts+likes)/total_tweets)/followers
            # else:
            #   df['eng_score'][i] = ((rts+likes+replies)/total_tweets) if include_replies else ((rts+likes)/total_tweets)
        return df
    temp_users_df = filter_users(temp_users_df, follower_threshold=150)
    temp_users_df = get_eng_score(
        temp_users_df, include_replies=False, include_followers=True)
    temp_users_df['eng_score'] = temp_users_df['eng_score'].astype(float)
    print("\n\n")
    return temp_users_df


def init_tweets(tweets_df):
    """
    naive filtering based on comment+liikes+retweets < 25
    also gets rid of sentiments=0
    """
    print("----init_tweets----")
    print('len before', len(tweets_df))
    temp_tweets = tweets_df[tweets_df['comment_num'] +
                            tweets_df['retweet_num'] + tweets_df['like_num'] > 25]
    temp_tweets = temp_tweets[temp_tweets['Compound'] != 0]
    temp_tweets.reset_index(drop=True, inplace=True)
    print('len after', len(temp_tweets))
    print("\n\n")
    return temp_tweets


def get_merged(tweets_df, users_df, stocks_df, exclude_TSLA=False):
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


def sort_dates(dates_series, date_format):
    ''' Takes a date series and returns it sorted '''
    dates = [datetime.strptime(date, date_format) for date in dates_series]
    dates.sort()
    sorted_dates = [datetime.strftime(date, date_format) for date in dates]
    return sorted_dates

# not finished
# def sort_df_by_dates(df, date_format):
#     sorted_dates = sort_dates(
#         dates_series=merged_df['Date'], date_format=date_format)
#     return sorted_df


def min_max(x, x_min, x_max):
    range = x_max-x_min
    return float((x - x_min) / range)


def min_max_col(column):
    try:
        col = column.astype(float)
    except:
        print('cant use astype(float)')
        col = column
    x_min = col.min()
    x_max = col.max()
    for i in range(len(col)):
        col[i] = min_max(col[i], x_min, x_max)
    return col


def min_max_and_mult_col(df, feature):
    df[feature] = df[feature].astype(float)
    # 1
    for i in range(len(df)):
        # mult by absolute value of the sentiment
        df[feature][i] = df[feature][i] * abs(df['Compound'][i])
    # 2
    df[feature] = min_max_col(df[feature])  # scale
    # 3
    print('before', df[feature].min(), df[feature].max())
    for i in range(len(df)):
        # will mult by *-1 if sentiment negative else *1
        df[feature][i] *= df['Compound'][i]/abs(df['Compound'][i])
    print('after', df[feature].min(), df[feature].max())
    return df[feature]


def scale_and_multiply_df(df, stock_features, tweet_features, user_features):
    ''' min max scale the dataframe '''
    print("scaling")

    dfs = split_stocks_df(df)
    print("splitted")

    # Scaling and Multiplying
    features_to_skip = ['Compound', 'Date',
                        'ticker_symbol', 'target', 'price_difference']
    for df in dfs:
        for feature in df:
            if feature not in features_to_skip:
                if feature in stock_features:
                    print('stock fueature = ', feature)
                    df[feature] = min_max_col(df[feature])  # scale
                else:
                    print('tweet/user fueature = ', feature)
                    df[feature] = min_max_and_mult_col(df, feature)

    scaled_df = pd.concat(dfs)
    print("scaled")
    return scaled_df


def init_data(scale_and_multiply=False):
    ''' Read the data to be trained - should come back formatted as google csv shown here https://www.youtube.com/watch?v=gSYiKKoREFI '''
    # get the currect dataframes from drive in "paths" section

    users_path = paths[current_user]['users_path'] + \
        'users_with_eng_v5(with_replies).csv'
    stocks_2019_path = paths[current_user]['stocks_2019_path'] + \
        'stocks_2019.csv'
    tweets_2019_path = paths[current_user]['tweets_2019_path'] + \
        'tweets_2019.csv'

    stocks_2019 = pd.read_csv(stocks_2019_path)
    users_df = pd.read_csv(users_path)
    tweets_2019 = pd.read_csv(tweets_2019_path)

    merged_df = get_merged(init_tweets(tweets_2019),
                           init_users(users_df),
                           init_stocks(stocks_2019),
                           exclude_TSLA=False)
    print('merged\n\n', merged_df)

    # #stock_features = ['Date', 'Open', 'Low', 'High', 'Close', 'Adjusted Close', 'Volume', 'ticker_symbol', 'price_difference']
    # stock_features = ['Date','ticker_symbol', 'Close', 'price_difference']
    # tweet_features = ['Compound', 'comment_num', 'retweet_num', 'like_num']
    # user_features = ['eng_score']
    # features = stock_features + tweet_features + user_features

    # merged_df = merged_df[features]
    # if scale_and_multiply:
    #   merged_df = scale_and_multiply_df(merged_df, stock_features, tweet_features, user_features)
    clear_console()

    merged_df['Date'] = pd.to_datetime(merged_df['Date'], format='%d/%m/%Y')
    merged_df = merged_df.sort_values(by="Date").reset_index(drop=True)

    return merged_df.rename(columns={'Compound': 'Tweet_Sentiment',
                                     'eng_score': 'User_Engagement',
                                     'comment_num': 'Tweet_Comments',
                                     'retweet_num': 'Tweet_Retweets',
                                     'like_num': 'Tweet_Likes',
                                     'Volume': 'Stock_Volume',
                                     'Adjusted Close': 'Stock_Adj_Close',
                                     })


def read_data(is_testing_data=False):
    if is_testing_data:
        return pd.read_csv(paths[current_user]["from_the_web"] + "StockMarketData/sp500/csv/GOOG.csv")
    else:
        return merged_df.drop(columns='ticker_symbol')


def read_one_stock(stock_ticker="TSLA"):
    return merged_df[merged_df['ticker_symbol'] == stock_ticker].drop(columns='ticker_symbol').reset_index(drop=True)


def get_cols(df, is_testing_data=False):
    if is_testing_data:
        return ['Open', 'Low', 'High', 'Close', 'Adjusted Close']
    else:
        return list(df)[1:df.shape[1]]


all_features = ['ticker_symbol', 'Date', 'Low', 'Open', 'Stock_Volume', 'High', 'Close',
                'Stock_Adj_Close', 'price_difference', 'tweet_id', 'writer',
                'post_date', 'body', 'Tweet_Comments', 'Tweet_Retweets', 'Tweet_Likes',
                'Negativity', 'Positivity', 'Neutral', 'Tweet_Sentiment', 'name', 'id',
                'id_str', 'description', 'followers_count', 'favourites_count',
                'listed_count', 'friends_count', 'statuses_count', 'created_at',
                'verified', 'eng_total_retweets', 'eng_total_likes',
                'eng_total_replies', 'eng_tweets_length', 'User_Engagement']


stock_features = ['Date', 'ticker_symbol', 'price_difference']  # ,'Close']
tweet_features = ['Tweet_Sentiment',
                  'Tweet_Comments', 'Tweet_Retweets', 'Tweet_Likes']
tweet_features2 = ['Tweet_Comments', 'Tweet_Retweets',
                   'Tweet_Likes', 'Positivity', 'Negativity', 'Neutral']
user_features = ['User_Engagement']

features = stock_features + tweet_features + user_features
features2 = stock_features + tweet_features2 + user_features

model_params = {
    'ticker': 'TSLA',
    'features': features2,
    'all_features': all_features,
    'activation_all': 'relu',  # tanh,relu,leaky_relu,sigmoid
    'activation_last': 'softmax',
    'num_of_layers': 2,
    'loss_func': 'binary_crossentropy',
    'optimizer': 'adam',  # 'rmsprop', linear
    'n_past': 3,  # num days from the past to predict based on
    'output_dim': 2,
    'epochs': 5,
    'batch_size': 8
}

##Automated Tests##


def save_graph(history, path, name):

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
    plt.ylabel('Loss')
    plt.legend()
    plt.savefig(path + name+'_graph.png')


def scale_data(df, target='price_difference', scaling='min_max'):
    scaled_df = pd.DataFrame(columns=df.columns)
    df = df.groupby(by=['Date'])
    for date in df:
        to_append = {}
        to_append['Date'] = date[0]
        to_append[target] = date[1][target].iloc[0]
        for feature in scaled_df.columns:
            if feature != 'Date' and feature != target:
                if (scaling == 'min_max'):
                    scaler = MinMaxScaler()
                elif (scaling == 'standard'):
                    scaler = StandardScaler()
                f = date[1][feature]
                scaled_feature = scaler.fit_transform(
                    np.array(f).reshape(-1, 1))
                to_append[feature] = scaled_feature.mean()
        scaled_df = scaled_df.append(to_append, ignore_index=True)
    return scaled_df


def split_data(dnn_df, version=1):
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


def create_sequence(dataset, rows_at_a_time, target):
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


def Auto_Run_Model(model_params):
    dnn_df = merged_df[model_params['features']].copy()
    ticker_symbol = model_params['ticker']

    dnn_df = dnn_df[dnn_df['ticker_symbol'] ==
                    ticker_symbol].drop(columns=['ticker_symbol'])

    scaled_dnn_df = scale_data(dnn_df)
    scaled_dnn_df = scaled_dnn_df.drop(columns=['Date'])

    # train_data,validation_data,test_data = split_data(dnn_df,version=1)
    train_data, validation_data, test_data = split_data(
        scaled_dnn_df, version=2)

    # train_data.shape, test_data.shape

    n_past = model_params['n_past']
    target = 'price_difference'
    train_seq, train_label = create_sequence(
        train_data, rows_at_a_time=n_past, target=target)
    validation_seq, validation_label = create_sequence(
        validation_data, rows_at_a_time=n_past, target=target)
    test_seq, test_label = create_sequence(
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
    clear_console(f'Acc = {test_acc}')
    return network, round(test_acc, 7), history


def run_auto_test():
    test_threshold = threshold
    tickers = ['TSLA', 'AMZN', 'GOOG', 'GOOGL', 'AAPL', 'MSFT']
    feature_sets = [features, features2]
    actv_funcs_all = ['relu', 'tanh', 'sigmoid']
    actv_funcs_last = ['softmax', 'sigmoid']  # ,'relu'
    loss_funcs = ['binary_crossentropy', 'mean_squared_error']
    optimizers = ['rmsprop', 'adam']
    n_pasts = [1, 2, 3]
    n_epochs = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    layers = [[32], [32, 16], [16, 16], [32, 16, 8], [16, 8, 4], [8, 8]]

    n_model = 1
    for ticker in tickers:
        for feature_set in feature_sets:
            for actv_func_all in actv_funcs_all:
                for actv_func_last in actv_funcs_last:
                    for loss_func in loss_funcs:
                        for optimizer in optimizers:
                            for n_past in n_pasts:
                                for n_epoch in n_epochs:
                                    for layer in layers:
                                        prms = {
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
                                        model, test_Acc, history = Auto_Run_Model(
                                            prms)
                                        if test_Acc != None:
                                            if float(test_Acc) > test_threshold:
                                                model_name = f"{ticker}_acc_{round(test_Acc, 3)}_npast_{n_past}_epoch_{n_epoch}_opt_{optimizer}_num_{n_model}"
                                                save_model(
                                                    model, model_name, prms, history)
                                                n_model += 1


'''
after we finished training and testing the model- run this cell in order to save the model
'''


def savetimes(num, isstart):

    if isstart:
        mode = 'Started at: '
    else:
        mode = 'Ended at: '
    now = datetime.now()
    with open(f'D:\\GoogleDrive\\Alon\\לימודים\\TweetStockApp\\FlaskServer\\Logs\\test{num}.txt', 'a+') as f:
        f.write(f'TRY {num}\t{mode}{now}\n')


def save_model(model, name, params, history):

    if not os.path.exists(path):
        os.mkdir(path)

    model.save(path + name + '.h5')
    save_graph(history, path, name)

    with open(path + name + '_params.csv', 'w') as f:
        for key in params.keys():
            f.write("%s,%s\n" % (key, params[key]))


threshold = 0.55
try_num = 2
path = f"D:\\GoogleDrive\\Alon\\לימודים\\TweetStockApp\\FlaskServer\\Data\\Networks\\{try_num}\\"


def main():
    global merged_df
    savetimes(try_num, True)
    merged_df = init_data(scale_and_multiply=False)
    run_auto_test()
    savetimes(int(try_num), False)


if __name__ == '__main__':
    main()
