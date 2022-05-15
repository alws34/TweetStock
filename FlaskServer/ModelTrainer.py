import os
#import tensorflow as tf
import matplotlib.pyplot as plt
import Helper
import DataHandler
from pandas import read_csv as pd_read_csv
from tensorflow import convert_to_tensor as ctt, float32 as tf_float32
from keras import models, layers
from tensorflow.keras.utils import to_categorical
from random import randint

TEST_RANDOM_STATE = 1234


class ModelTrainer:
    def __init__(self, user, saving_path):
        self.user = user

        self.initialized_df = self.get_initialized_df()
        # self.save_df_to_csv(file_name='initialized_df')
        self.init_model_params(saving_path)

    #------------ INITIALIZATION ----------------#

    def init_model_params(self, saving_path):
        self.init_model_training_params()
        self.init_model_saving_params(saving_path)

    def init_model_saving_params(self, saving_path):
        """
        Model saving params - 
        Will be initialized later according to the trained model,
        its parameters and the saving path provided in @run_auto_training() method
        """
        if saving_path == None:
            print("@ModelTrainer.py/init_saving_params() - path == None...\n")
            return None
        self.saving_path = saving_path

        self.model = None
        self.model_name = None
        self.model_history = None
        self.test_accuracy = None

    def init_model_training_params(self):
        """
        Initialized model training params.
        Will be later used in @run_auto_training() method.
        Will be used inside the model in order to iterate 
        over every parameter combination.
        """
        self.feature_set1, self.feature_set2 = self.init_model_features()
        self.training_batch_size = 8
        self.training_output_dims = 2
        self.model_training_params = {
            'layers': [4],
            'ticker': 'TSLA',
            'features': self.feature_set1,
            'activation_all': 'relu',
            'activation_last': 'softmax',
            'loss_func': 'binary_crossentropy',
            'optimizer': 'rmsprop',
            'n_past': 1,  # num days from the past to predict based on
            'epochs': 2,
            'output_dim': self.training_output_dims,
            'batch_size': self.training_batch_size,
            'train_random_state': randint(10, 9999),
            'test_random_state': TEST_RANDOM_STATE
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

    def init_df_paths(self):
        user_paths = Helper.get_user_data_paths(self.user)
        users_csv_name, stocks_csv_name, tweets_csv_name = 'users_with_eng_v5(with_replies).csv', 'stocks_2019.csv', 'tweets_2019.csv'
        users_path = f"{user_paths['users_path']}{users_csv_name}"
        stocks_2019_path = f"{user_paths['users_path']}{stocks_csv_name}"
        tweets_2019_path = f"{user_paths['users_path']}{tweets_csv_name}"
        return {'users_path': users_path, 'stocks_path': stocks_2019_path, 'tweets_path': tweets_2019_path}

    def read_dfs_from_paths(self):
        csv_paths = self.init_df_paths()
        tweets_df, users_df, stocks_df = pd_read_csv(csv_paths['tweets_path']), pd_read_csv(
            csv_paths['users_path']), pd_read_csv(csv_paths['stocks_path'])
        return tweets_df, users_df, stocks_df

    def init_stocks_df(self, stocks_df):
        print("----init_stocks----")
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

    def get_initialized_df(self):
        '''
        Helper.get_user_data_paths['initialized_df_path'] = None --> will train new initial merged_df
        Helper.get_user_data_paths['initialized_df_path'] != None ---> will load from specified path
        '''
        user_paths = Helper.get_user_data_paths(self.user)
        if user_paths is None:
            return None
        if 'initialized_df_path' in user_paths.keys():
            return pd_read_csv(user_paths['initialized_df_path'])
        else:
            return self.init_data()

    #---------- MODEL TRAINING ---------#

    def save_df_to_csv(self, file_name):
        Helper.save_df_to_csv(self.initialized_df,
                              self.saving_path, file_name)

    def save_model(self):
        '''Save the generated model'''
        self.model.save(f'{self.saving_path}{self.model_name}.h5')

    def save_graph(self):
        '''Save Model's Graph'''
        plt.clf()
        acc = self.history.history['accuracy']
        val_acc = self.history.history['val_accuracy']

        epochs = range(1, len(acc) + 1)

        plt.plot(epochs, acc, 'r', label='Training acc')
        plt.plot(epochs, val_acc, 'b', label='Validation acc')
        plt.title(f'Training and validation accuracy')
        plt.xlabel('Epochs')
        plt.ylabel('Acc')
        plt.legend()
        plt.savefig(f'{self.saving_path}{self.model_name}_graph.png')

    def save_params(self):
        Helper.save_dict_to_csv(self.model_training_params, self.saving_path, "".join(
            (str(self.model_name), '_params')))

    def save(self):
        Helper.create_dir(self.saving_path)
        self.save_model()
        self.save_graph()
        self.save_params()

    def get_dnn_training_df(self):
        """
        Returns self.initialized_df copy to run DNN on,
        Returned df uis based on currently chosen ticker
        and model training feature set (likes, comments etc...)
        """
        feature_set, chosen_ticker = self.model_training_params[
            'features'], self.model_training_params['ticker']
        dnn_df = self.initialized_df[feature_set].copy()
        dnn_df = dnn_df[dnn_df['ticker_symbol'] == chosen_ticker]
        return dnn_df.drop(columns=['ticker_symbol'])

    def create_sequence(self, df, rows_at_a_time, target):
        sequence, label = DataHandler.create_sequence(
            dataset=df, target=target, num_of_rows=rows_at_a_time)
        return sequence, label

    def get_tensor_values(self, df):
        return ctt(df, dtype=tf_float32)

    def reshape_sequence(self, sequence):
        '''Convert 3D array to 2D array
        E.G. shape = (5,6,7) ==> (5,6*7) = (5,42)
        '''
        return sequence.reshape(len(sequence), sequence.shape[1]*sequence.shape[2])

    def train_model(self):
        '''Generates model according to inserted params'''
        n_past = self.model_training_params['n_past']
        target = 'price_difference'

        #----SCALE DATA----#
        scaled_dnn_df = DataHandler.mt_scale_data(
            self.get_dnn_training_df()).drop(columns=['Date'])
#----NEW-----#
        sequence, labels = self.create_sequence(scaled_dnn_df, n_past, target)
        train_seq, train_label,  validation_seq, validation_label, test_seq, test_label = DataHandler.mt_split_data(
            sequence, labels, train_random_state=self.model_training_params['train_random_state'], test_random_state=self.model_training_params['test_random_state'])
#----End NEW ----#


#---OLD----#
        """
        #----SPLIT DATA----#
        # train_data, validation_data, test_data = DataHandler.mt_split_data(
        #     scaled_dnn_df)
        # print(type(train_data))
        # #----CREATE SEQUENCES----#
        # train_seq, train_label = self.create_sequence(
        #     train_data, n_past, target)
        # print(type(train_seq))

        # validation_seq, validation_label = self.create_sequence(
        #     validation_data, n_past, target)

        # test_seq, test_label = self.create_sequence(test_data, n_past, target)
        """
#----- End OLD ----#

        #----INITIALIZE NETWORK----#
        network = models.Sequential()

        for units in self.model_training_params['layers']:
            print("test")
            network.add(layers.Dense(units=units, activation=self.model_training_params['activation_all'], input_shape=(
                train_seq.shape[2] * train_seq.shape[1],)))

        network.add(layers.Dense(
            self.model_training_params['output_dim'], activation=self.model_training_params['activation_last']))

        network.compile(optimizer=self.model_training_params['optimizer'],
                        loss=self.model_training_params['loss_func'], metrics=['accuracy'])

        #----RESHAPE SEQUENCES----#
        train_seq, validation_seq, test_seq = self.reshape_sequence(
            train_seq), self.reshape_sequence(validation_seq), self.reshape_sequence(test_seq)

        #----GET TENSOR VALUES----#
        train_seq, validation_seq, test_seq = self.get_tensor_values(
            train_seq), self.get_tensor_values(validation_seq), self.get_tensor_values(test_seq)

        train_label, validation_label, test_label = self.get_tensor_values(to_categorical(train_label)), self.get_tensor_values(
            to_categorical(validation_label)), self.get_tensor_values(to_categorical(test_label))

        #----TRAIN THE MODEL----#
        try:
            history = network.fit(train_seq, train_label, epochs=self.model_training_params['epochs'], batch_size=self.model_training_params['batch_size'], validation_data=(
                validation_seq, validation_label))
        except Exception as e:
            Helper.write_to_log(f'{e}')
            return None, None, None

        #----MODEL EVALUATION----#
        test_loss, test_acc = network.evaluate(test_seq, test_label)
        test_acc = round(test_acc, 7)

        Helper.clear_console(f'Acc = {test_acc}')

        self.model, self.test_accuracy, self.history = network, test_acc, history

    #------- AUTO TRAINING -------#
    def get_training_params_combinations(self):
        combinations = {
            'tickers': ['TSLA', 'AMZN', 'GOOG', 'GOOGL', 'AAPL', 'MSFT'],
            'feature_sets': [self.feature_set1],  # , self.feature_set2]
            'actv_funcs_all': ['relu', 'tanh', 'sigmoid'],
            'actv_funcs_last': ['softmax', 'sigmoid'],  # ,'relu'
            'loss_funcs': ['binary_crossentropy', 'mean_squared_error'],
            'optimizers': ['rmsprop', 'adam'],
            'n_pasts': [1],  # , 2, 3]
            'n_epochs': [5, 10, 15, 20],  # [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
            'layer_sets': [[4], [8], [16], [16, 8], [8, 4]]
        }
        return combinations

    def run_auto_training(self, acc_saving_threshold=0.55):
        '''
        Runs all possible models
        runtime: ~13 hours
        '''
        combinations = self.get_training_params_combinations()

        model_id = 1
        for ticker in combinations['tickers']:
            for feature_set in combinations['feature_sets']:
                for actv_func_all in combinations['actv_funcs_all']:
                    for actv_func_last in combinations['actv_funcs_last']:
                        for loss_func in combinations['loss_funcs']:
                            for optimizer in combinations['optimizers']:
                                for n_past in combinations['n_pasts']:
                                    for n_epoch in combinations['n_epochs']:
                                        for layer in combinations['layer_sets']:
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
                                                'train_random_state': randint(10, 9999),
                                                'test_random_state': TEST_RANDOM_STATE
                                            }

                                            # Train the model based on the current parameters combination - will set -> self.model, self.test_accuracy, self.history
                                            self.train_model()

                                            if self.test_accuracy != None:
                                                if float(self.test_accuracy) > acc_saving_threshold:
                                                    self.model_name = f"{ticker}_acc_{round(self.test_accuracy, 3)}_npast_{n_past}_epoch_{n_epoch}_opt_{optimizer}_num_{model_id}"
                                                    self.save()
                                                    model_id += 1


#---------- MAIN -----------#
if __name__ == '__main__':
    # availables: 'alon' , 'guy', 'hadar', 'pi'
    delimiter, prefix = Helper.get_prefix_path()
    user = 'pi'
    try_num = 'test'
    #inited_df_csv_path = '/home/pi/FinalProject/FlaskServer/Data/CSVs/initialized_df.csv'
    save_path = f"{Helper.get_user_data_paths(user=user)['Networks_Save_Path']}{try_num}{delimiter}"

    mt = ModelTrainer(user=user, saving_path=save_path)
    mt.run_auto_training(acc_saving_threshold=0.55)
    # mt.train_model()
    # mt.save()
