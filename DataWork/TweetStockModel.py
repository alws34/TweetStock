from pandas import set_option as pdSetOption, DataFrame as pdDataFrame
from keras.models import load_model
from datetime import datetime as dt, timedelta
import DataHandler
from Globals import *
from Helper import logger
from TweetsHandler import TweetsHandler
from os import getcwd


class TweetStockModel:
    def __init__(self, model_path, model_ticker, features_version=2):
        self.tweets = []
        self.ticker = model_ticker
        self.feature_set = self.get_feature_set(features_version)
        self.model = load_model(model_path)
        self.tweets_handler = TweetsHandler(ticker=model_ticker)
        pdSetOption('display.max_columns', None)

    def get_feature_set(self, features_version):
        '''
        returns relevant feature version
        '''
        if features_version == 1:
            return ['n_replies', 'n_retweets', 'n_likes', 's_pos', 's_neg', 's_neu', 'u_engagement']
        elif features_version == 2:
            return['n_replies', 'n_retweets', 'n_likes', 's_compound', 'u_engagement']

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

    def predict(self, prepped_data):
        pred = self.model.predict(prepped_data)
        result = 1 if pred[0][1] >= pred[0][0] else -1
        return result

    # Pred Function
    def get_prediction(self):
        start_date, end_date = self.get_n_past_date()
        iterations = 0

        while iterations < REFETCHING_MAX_ITERATIONS_THRESHOLD:
            tweets, end_date = self.tweets_handler.fetch_and_filter_data(
                start_date=start_date, end_date=end_date)
            if end_date == None:
                logger(
                    "TSM.get_prediction says: problem with end date @get_prediction()/while loop (got no tweets when fetched)")
                start_date, end_date = self.get_n_past_date()

            if tweets != None:
                for tweet in tweets:
                    self.tweets.append(tweet)

            iterations += 1

            if iterations == REFETCHING_MAX_ITERATIONS_THRESHOLD:
                logger("TSM.get_prediction says: Reached max iterations threshold")

        # Transform from dictionary to df for easier data handling
        tweets_df = DataHandler.tsm_twitter_dict_res_to_df(self.tweets)

        if tweets_df.empty:
            if isinstance(tweets_df, pdDataFrame):
                logger(
                    "Couldnt convert twitter res dict to df @TSM.twitter_dict_res_to_df()")
            else:
                logger(
                    f'CUSTOM ERROR @TSM.get_prediction {tweets_df.Error_message}')
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

        return pred_table_dict, tweets_table_dict


if __name__ == "__main__":  # FOR DEBUGGING
    model = TweetStockModel(
        # model_path=f'/home/pi/FinalProject/DataWork/SelectedModels/AAPL/AAPL_acc_0.633_npast_1_epoch_4_opt_rmsprop_num_3848.h5',
        # '/home/pi/FinalProject/DataWork/Data/Networks/4/TSLA_acc_0.62_npast_1_epoch_10_opt_rmsprop_num_3.h5',
        model_path=f"{getcwd()}\\TSLA_acc_0.62_npast_1_epoch_10_opt_rmsprop_num_3.h5",
        model_ticker="TSLA",
        features_version=2)
    pred_table_dict, tweets_table_dict = model.get_prediction()
