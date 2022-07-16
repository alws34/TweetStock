import os
import matplotlib.pyplot as plt
import Helper
import DataHandler
from glob import glob
from pandas import read_csv as pd_read_csv
from keras.layers import Dense
from keras.models import Sequential
from tensorflow.keras.utils import to_categorical
from random import randint

TEST_RANDOM_STATE = 1234
DEFAULT_RETRAINING_ITERATIONS = 100


class ModelTrainer:
    def __init__(self, user, saving_path):
        self.user = user

        self.initialized_df = self.get_initialized_df()
        self.init_model_params(saving_path)

    #------------ INITIALIZATION ----------------#

    def init_features_from_csv(self, features_csv_path, str_array_features_in_csv=['features', 'layers']):
        features_csv = DataHandler.load_csv(features_csv_path)
        for str_array in str_array_features_in_csv:
            features_csv[str_array] = DataHandler.str_to_array(
                features_csv[str_array])
        self.model_training_params = features_csv

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
            Helper.logger(
                "mt.init_model_saving_params says: - path == None...\n")
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
                          'price_difference']
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
                                              self.init_stocks_df(stocks_2019))
        #print('merged\n\n', merged_df)
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

    def save_model(self, saving_path=None, model_name=None):
        '''Save the generated model.
        saving_path and model_name can be None - will default to self.saving_path and self.model_name'''
        if saving_path is None:
            saving_path = self.saving_path
        if model_name is None:
            model_name = self.model_name
        self.model.save(f'{saving_path}{model_name}.h5')

    def save_graph(self, saving_path=None, model_name=None):
        '''Save Model's Graph.\n
        saving_path and model_name can be None - will default to self.saving_path and self.model_name'''
        if saving_path is None:
            saving_path = self.saving_path
        if model_name is None:
            model_name = self.model_name
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
        plt.savefig(f'{saving_path}{model_name}_graph.png')

    def save_params(self, saving_path=None, model_name=None):
        '''Saves Model's training parameters.
        saving_path and model_name can be None - will default to self.saving_path and self.model_name'''
        if saving_path is None:
            saving_path = self.saving_path
        if model_name is None:
            model_name = self.model_name
        file_name = "".join((str(model_name), '_params'))
        Helper.save_delimited_dict(
            self.model_training_params, f'{saving_path}{file_name}.csv')

    def save(self, saving_path=None, model_name=None, append_accuracy=False):
        '''Saves model+graph+training_parameters.
        saving_path and model_name can be None - will default to self.saving_path and self.model_name'''
        if saving_path is None:
            saving_path = self.saving_path
        if append_accuracy and self.test_accuracy is not None:
            self.model_name = f'{self.model_name}_{round(self.test_accuracy,3)}'

        Helper.create_dir(saving_path)
        if model_name is not None:
            self.model_name = model_name
        if self.model_name is None:
            Helper.logger("mt.save says: Must either init self.model_name or provide a saving name for the file in order to save")
            return None
        if append_accuracy:
            self.model_name += f'_{self.test_accuracy}'
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


###################################

    def train_model_from_comparison_example(self):
        '''Generates model according to inserted params'''
        n_past = int(self.model_training_params['n_past'])
        target = 'price_difference'

        #----GET DATA----#
        dnn_df = DataHandler.mt_transform_features_to_log(
            self.get_dnn_training_df())
        #Helper.save_df_to_csv(dnn_df, f'{self.saving_path}','dnn_df')
        #----SCALE DATA----#
        scaled_dnn_df = DataHandler.mt_scale_data(
            dnn_df).drop(columns=['Date'])

        #----NEW-----#
        sequence, labels = self.create_sequence(scaled_dnn_df, n_past, target)
        train_seq, train_label,  validation_seq, validation_label, test_seq, test_label = DataHandler.mt_split_data(
            sequence, labels, train_random_state=self.model_training_params['train_random_state'], test_random_state=self.model_training_params['test_random_state'])
        #----End NEW ----#
        train_seq, validation_seq, test_seq = DataHandler.reshape_sequence(
            train_seq), DataHandler.reshape_sequence(validation_seq), DataHandler.reshape_sequence(test_seq)

        train_seq, validation_seq, test_seq = DataHandler.get_tensor_values(
            train_seq), DataHandler.get_tensor_values(validation_seq), DataHandler.get_tensor_values(test_seq)

        train_label, validation_label, test_label = DataHandler.get_tensor_values(to_categorical(train_label)), DataHandler.get_tensor_values(
            to_categorical(validation_label)), DataHandler.get_tensor_values(to_categorical(test_label))

        # Build the model
        from tensorflow import keras
        from tensorflow.keras import layers
        model_layers = []
        for units in self.model_training_params['layers']:
            model_layers.append(layers.Dense(
                units, activation=self.model_training_params['activation_all']))

        model_layers.append(layers.Dense(
            self.model_training_params['output_dim'], activation=self.model_training_params['activation_last']))

        model = keras.Sequential(model_layers)
        model.compile(optimizer=self.model_training_params['optimizer'],
                      loss=self.model_training_params['loss_func'], metrics=['accuracy'])

        history = model.fit(train_seq,
                            train_label,
                            epochs=self.model_training_params['epochs'],
                            batch_size=self.model_training_params['batch_size'],
                            validation_data=(validation_seq, validation_label))

        test_loss, test_acc = model.evaluate(test_seq, test_label)
        test_acc = round(test_acc, 7)

        self.model, self.test_accuracy, self.history = model, test_acc, history
###################################

    def train_model(self):
        '''Generates model according to inserted params'''
        n_past = int(self.model_training_params['n_past'])
        target = 'price_difference'

        #----GET DATA----#
        dnn_df = DataHandler.mt_transform_features_to_log(
            self.get_dnn_training_df())
        #----SCALE DATA----#
        scaled_dnn_df = DataHandler.mt_scale_data(
            dnn_df).drop(columns=['Date'])

        sequence, labels = self.create_sequence(scaled_dnn_df, n_past, target)
        train_seq, train_label,  validation_seq, validation_label, test_seq, test_label = DataHandler.mt_split_data(
            sequence, labels, train_random_state=self.model_training_params['train_random_state'], test_random_state=self.model_training_params['test_random_state'])

        #----INITIALIZE NEURAL NETWORK----#
        network = Sequential()

        for units in self.model_training_params['layers']:
            print("test")
            network.add(Dense(units=int(units), activation=self.model_training_params['activation_all'], input_shape=(
                train_seq.shape[2] * train_seq.shape[1],)))

        network.add(Dense(
            self.model_training_params['output_dim'], activation=self.model_training_params['activation_last']))

        network.compile(optimizer=self.model_training_params['optimizer'],
                        loss=self.model_training_params['loss_func'], metrics=['accuracy'])

        #----RESHAPE SEQUENCES----#
        train_seq, validation_seq, test_seq = DataHandler.reshape_sequence(
            train_seq), DataHandler.reshape_sequence(validation_seq), DataHandler.reshape_sequence(test_seq)

        #----GET TENSOR VALUES----#
        train_seq, validation_seq, test_seq = DataHandler.get_tensor_values(
            train_seq), DataHandler.get_tensor_values(validation_seq), DataHandler.get_tensor_values(test_seq)

        train_label, validation_label, test_label = DataHandler.get_tensor_values(to_categorical(train_label)), DataHandler.get_tensor_values(
            to_categorical(validation_label)), DataHandler.get_tensor_values(to_categorical(test_label))

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

    def generate_random_state(self):
        return randint(10, 9999)

    def regenerate_new_random_state(self, previous_rand_states=[]):
        if previous_rand_states is [] or not isinstance(previous_rand_states, type([])):
            Helper.logger(
                'MT.regenerate_new_random_state says: previous_rand_states MUST BE a NONE EMPTY ARRAY')
            return None
        while True:
            new_rand_state = self.generate_random_state()
            if new_rand_state not in previous_rand_states:
                return new_rand_state

    def retrain_model(self, model_params_path=None, new_test_rand=False, iterations=DEFAULT_RETRAINING_ITERATIONS):
        """ Currently WORKS ON 1 MODEL FOR EACH STOCK 
        (in order to implement sevaral- 
         we will need to include the name of the model file to save it in the final dictionary)"""
        if model_params_path is None:
            Helper.logger(
                "MT.retrain_model says: must provide model_params_path!!")
            return None

        self.init_features_from_csv(features_csv_path=model_params_path)
        train_previous_rand_states = [
            self.model_training_params['train_random_state']]
        test_previous_rand_states = [
            self.model_training_params['test_random_state']]
        accuracies = []

        # Retrain [iterations] amount of times
        for i in range(iterations):
            # generate new and unique random state (one that was not in our previous testing)
            new_train_rand_state = self.regenerate_new_random_state(
                train_previous_rand_states)
            self.model_training_params['train_random_state'] = new_train_rand_state
            train_previous_rand_states.append(new_train_rand_state)
            if new_test_rand:
                new_test_rand_state = self.regenerate_new_random_state(
                    test_previous_rand_states)
                self.model_training_params['test_random_state'] = new_test_rand_state
                test_previous_rand_states.append(new_test_rand_state)

            # train
            self.train_model()
            # keep track of accuracies to get the average
            accuracies.append(self.test_accuracy)

            # save
            self.model_name = f'{self.model_training_params["ticker"]}_Acc={self.test_accuracy}_#{i+1}'
            self.save()

        # get average accuracy
        average_acc = DataHandler.get_array_average(accuracies)
        return average_acc

    #------- AUTO TRAINING -------#

    def get_training_params_combinations(self):
        combinations = {
            'tickers': ['TSLA', 'AMZN', 'GOOG', 'AAPL', 'MSFT'],
            'feature_sets': [self.feature_set1],  # , self.feature_set2]
            'actv_funcs_all': ['relu', 'tanh', 'sigmoid'],
            'actv_funcs_last': ['softmax', 'sigmoid'],  # ,'relu'
            'loss_funcs': ['binary_crossentropy', 'mean_squared_error'],
            'optimizers': ['rmsprop', 'adam'],
            'n_pasts': [1, 3],
            'n_epochs': [15, 30, 50],
            'layer_sets': [[16], [8, 4]]
        }
        return combinations

    def run_auto_training(self, acc_saving_threshold=0.55):
        '''
        Runs all possible models
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
                                                'train_random_state': self.generate_random_state(),
                                                'test_random_state': TEST_RANDOM_STATE
                                            }

                                            # Train the model based on the current parameters combination - will set -> self.model, self.test_accuracy, self.history
                                            self.train_model()

                                            if self.test_accuracy != None:
                                                if float(self.test_accuracy) > acc_saving_threshold:
                                                    self.saving_path = f"{Helper.get_user_data_paths(user=user)['Networks_Save_Path']}{try_folder_name}{delimiter}{n_past}{delimiter}{ticker}{delimiter}"
                                                    self.model_name = f"{ticker}_acc_{round(self.test_accuracy, 3)}_npast_{n_past}_epoch_{n_epoch}_opt_{optimizer}_num_{model_id}"
                                                    self.save()
                                                    model_id += 1

    def run_auto_retraining(self, iterations_for_each_stock=DEFAULT_RETRAINING_ITERATIONS, new_test_rand=False):
        # fill in with model param paths for each stock!
        root_dir = '/home/pi/FinalProject/DataWork/SelectedModels'
        models_params_tickers = ['AMZN', 'AAPL', 'GOOG', 'MSFT', 'TSLA']
        delimiter, prefix = Helper.get_prefix_path()

        average_accuracies = {}
        for params_path in models_params_tickers:
            ticker_dir_path = f'{root_dir}{delimiter}{params_path}'
            csv_params_paths = self.get_files_path(
                ticker_dir_path, extension="csv")

            for csv_param_path in csv_params_paths:
                model_dir_num = self.get_retraining_saving_dir_name(
                    csv_param_path)
                self.saving_path = f'{ticker_dir_path}{delimiter}{model_dir_num}{delimiter}'
                average_acc = self.retrain_model(
                    model_params_path=csv_param_path, new_test_rand=new_test_rand, iterations=iterations_for_each_stock)

                average_accuracies[model_dir_num] = average_acc

            Helper.save_dict_to_csv(
                dict=average_accuracies, save_path=f'{ticker_dir_path}{delimiter}', file_name="1_Average_Retraining_Accuracies")

    def get_files_path(self, model_params_path, extension="*"):
        '''
        Returns a list of files (full paths) from given directory
        '''
        delimiter, prefix = Helper.get_prefix_path()
        return glob(f"{model_params_path}{delimiter}*.{extension}")

    def get_retraining_saving_dir_name(self, file_path):
        return os.path.basename(file_path).split('_')[-2]

    def set_model_name(self, name):
        self.model_name = name

    def set_model_epochs(self, epochs):
        self.model_training_params['epochs'] = epochs


#---------- MAIN -----------#
if __name__ == '__main__':
    delimiter, prefix = Helper.get_prefix_path()
    user = 'pi'  # availables: 'alon','pi'
    try_folder_name = 'final_01_07'
    #inited_df_csv_path = '/home/pi/FinalProject/DataWork/Data/CSVs/initialized_df.csv'
    save_path = f"{Helper.get_user_data_paths(user=user)['Networks_Save_Path']}{try_folder_name}{delimiter}"
    mt = ModelTrainer(user=user, saving_path=save_path)

    #df = mt.init_data()
    #Helper.save_df_to_csv(df=df, path='/home/pi/FinalProject/DataWork/Data/CSVs/', file_name='new_initialized_df')

    '''Train model (all models from a directory)'''
    # mt.run_auto_training(acc_saving_threshold=0.6)

    '''Train specific model'''
    # mt.init_features_from_csv(
    #     f"{os.getcwd()}\\AAPL_acc_0.6_npast_3_epoch_15_opt_rmsprop_num_2584_params.csv")
    # mt.set_model_epochs(200)

    '''Model Comparisons'''
    # Training our model
    # mt.set_model_name("TEST_ours")
    # mt.train_model()
    # mt.save(append_accuracy=True)

    # # training example model
    # mt.set_model_name("TEST_Example")
    # mt.train_model_from_comparison_example()
    # mt.save(append_accuracy=True)
    ''' END Model Comparisons'''

    '''Model auto Retraining'''
    mt.run_auto_retraining(iterations_for_each_stock=100, new_test_rand=True)

    '''run single train iteration'''
    # mt.train_model()
    # mt.save(saving_path='/home/pi/FinalProject/DataWork/Data/Networks/test', model_name='testeeeett')
