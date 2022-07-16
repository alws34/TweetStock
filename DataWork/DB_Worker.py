from os import system
from os import getcwd
from pandas import Timestamp
import pandas_market_calendars as mcal
from json import load as load_json
from time import sleep
from pyrebase import initialize_app as firebase_init_app
from datetime import datetime as dt
from TweetStockModel import TweetStockModel as tsm
import yfinance as yf
import Helper
from Globals import MAX_UPDATE_HOUR
# ---------------------------------Init----------------------------------------------- #

class DB_Worker:
    def __init__(self):
        self.delimiter, self.prefix = Helper.get_prefix_path()
        self.ping_command = Helper.get_ping_command()
        self.MODELS = Helper.get_models()
        firebase_config = self.init_Firebase_config()
        firebase = firebase_init_app(firebase_config)
        self.db = firebase.database()
        self.DB_DICT = self.get_db_dict_obj()

# -------------------------------MISC------------------------------------- #

    def get_db_dict_obj(self):
        return {
    'Prediction': Helper.GetTickerObj(),
    'Tweets': Helper.GetTickerObj(),
    'Volatility': Helper.GetTickerObj()
    }

    def reset_db_obj(self):
        self.DB_DICT = self.get_db_dict_obj()

    def clear_table(self,category_name, date, ticker):
        self.db.child("PredictionDB").child(ticker).child(date).child(category_name).set({})

    def get_time_in_sec(self,hour, minute):
        return ((hour * 60) + minute) * 60

# -------------------------------MODEL------------------------------------- #

    def is_valid_model_response(self,pred_dict, tweets_dict):
        invalid_responses = (None, '', '[]', r'[{}]')
        return len(pred_dict) == 1 and pred_dict not in invalid_responses and len(tweets_dict) > 0 and tweets_dict not in invalid_responses

    def Get_prediction(self,ticker, path, features_version):

        model = tsm(
            model_path=path, model_ticker=ticker, features_version=features_version)

        Ticker_and_Pred_Table_Dict, Ticker_Stats_Table_Dict = model.get_prediction()

        return Ticker_and_Pred_Table_Dict, Ticker_Stats_Table_Dict

# -------------------------------FireBase------------------------------------- #

    def init_Firebase_config(self):
        with open(f"{getcwd()}\\DataWork\\CONFIGS\\firebaseconfig.json", 'r') as firebase_conf:
            firebase_config = load_json(firebase_conf)
        return firebase_config

    def post_to_FireBase(self, date):
        #db_dict ==> DB_DICT
        #category_name ==> Prediction, Tweets, Volatility,
        #category_tickers ==> tsla,msft etc for each category name
        #stock_dict = eg. Tweets:ticker:{Tweet_ID:{...}}

        try:
            for category_name, category_tickers in self.DB_DICT.items():
                for ticker, stock_dict in category_tickers.items():
                    if type(stock_dict) == dict:  # Prediction & volatility
                        self.db.child("PredictionDB").child(ticker).child(date).child(category_name).update(stock_dict)
                    elif type(stock_dict) == list:  # Tweets
                        self.clear_table(category_name, date, ticker)
                        for item in stock_dict:
                            if type(item) == dict and 'tweet_id' in item.keys():
                                self.db.child("PredictionDB").child(ticker).child(date).child(category_name).child(
                                    item['tweet_id']).set(item)
                            else:
                                return None
                    else:
                        return None
        except Exception as e:
            Helper.logger(f'post_to_FireBase says:\n{e}')

    def update_firebase_db(self):
        for ticker, stock in self.MODELS.items():
            pred_dict, tweets_dict = self.Get_prediction(
                ticker=ticker, path=stock['path'], features_version=stock['features'])

            if self.is_valid_model_response(pred_dict, tweets_dict):
                date, time = Helper.get_date_time_stringify(
                    format="%d_%m_%Y"), Helper.get_date_time_stringify(format="%H_%M")
                pred_dict[0]['last_update'] = date + "_" + time

                for i in range(len(tweets_dict)):
                    tweets_dict[i]['last_update'] = date + "_" + time

                self.DB_DICT['Prediction'][ticker], self.DB_DICT['Tweets'][ticker] = pred_dict[0], tweets_dict
            else:
                Helper.logger(
                    f'DB update error for ticker {ticker}:\npred_dict: {len(pred_dict)}\ntweets_dict: {len(tweets_dict)}\n\n @update_firebase_db')

            self.post_to_FireBase(date)  # update DB for each ticker
            self.GoingToSleep(15*60)


# -------------------------------Helpers------------------------------------- #
    def is_valid_day(self):
        '''
        This method converts israel's time to NY time, 
        and checks if the current date and time is during stock excange open hours (NYSE & NASDAQ)
        '''
        current_time = Helper.get_date_time()
        year, month, day, hour, minute = current_time.year, current_time.month, current_time.day, current_time.hour, current_time.minute
        today, time = f'{year}-{month}-{day}', f'{hour}:{minute}'

        try:
            nyse = mcal.get_calendar('NYSE')  # Get NY stock exchange schedule.
            schedule = nyse.schedule(
                start_date=today, end_date=today)
        except Exception as e:
            Helper.logger(f'nyse.open_at_time says:\n{e}  ---e@is_valid_day')
            return False

        timestamp = Timestamp(
            f'{today} {time}', tz='Israel').tz_convert('America/New_York')  # convert israel time to NY time

        if not schedule.empty:
            try:
                if nyse.open_at_time(schedule, timestamp):
                    return True
            except ValueError as ve:
                Helper.logger(
                    f'nyse.open_at_time says:\n{ve}  ---ValueError@is_valid_day')
                return False
        return False


    def GoingToSleep(self,time, custom_msg=''):
        if custom_msg != '':
            Helper.logger(f'{custom_msg}')
        else:
            Helper.logger(
                f'Going to sleep for {time} seconds ({time/60} minutes)... @{Helper.get_date_time_stringify("%H:%M:%S")}')
        sleep(time)
        Helper.Woke_Up()


    def sleep_until_market_opens(self):
        now = Helper.get_date_time()
        market_open_hour_in_sec = self.get_time_in_sec(16, 30)
        now_in_sec = self.get_time_in_sec(now.hour, now.minute)
        if now_in_sec < market_open_hour_in_sec: #sleep until {market_open_hour_in_sec}
            Helper.logger('Market is closed.')
            self.GoingToSleep(market_open_hour_in_sec - now_in_sec,
                        custom_msg=f'sleeping for {(market_open_hour_in_sec - now_in_sec)/60} minutes -- {(market_open_hour_in_sec - now_in_sec)/60/60} hours')   
        else: #sleep until {market_open_hour_in_sec} *tomorrow*
            one_day_in_sec = 24 * 60 * 60
            Helper.logger('Market is closed.')
            self.GoingToSleep(time=one_day_in_sec - (now_in_sec - market_open_hour_in_sec))


    def Get_Real_Close(self):
        time = Helper.get_date_time()
        time_in_sec = self.get_time_in_sec(time.hour, time.minute)
        close_time_in_sec = self.get_time_in_sec(23, 0)
        market_open_time = self.get_time_in_sec(16,30)
        if time_in_sec < close_time_in_sec and time_in_sec > market_open_time:
            self.GoingToSleep(time = close_time_in_sec - time_in_sec + 60) #sleep until 1 past 11 pm  

        for ticker in self.MODELS.keys():
            stock = yf.Ticker(ticker)
            look_back_n_days = 1
            history = stock.history(period=f'{look_back_n_days}d')
            self.DB_DICT['Volatility'][ticker]['Actual_volatility'] = 1 if history['Close'][0] >= history['Open'][0] else -1
    
        self.post_to_FireBase(Helper.get_date_time_stringify(
            format="%d_%m_%Y"))

# -------------------------------MAIN------------------------------------- #

    def Run(self):
        while True:
            if system(self.ping_command) == 0 and self.is_valid_day() and  dt.now().hour < MAX_UPDATE_HOUR :
                self.update_firebase_db()
                Helper.logger(f'Finished Main iteration  @DB_WORKER.Run -- {Helper.get_date_time_stringify("%H:%M:%S")}')
            else:
                self.Get_Real_Close()
                self.reset_db_obj()
                self.sleep_until_market_opens()

# ----------------------------------------------------------------------------------------------- #
if __name__ == '__main__':
    worker = DB_Worker()
    worker.Run()
