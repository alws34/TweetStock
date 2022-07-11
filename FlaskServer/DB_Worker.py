from pandas import Timestamp, DataFrame as pd_df
import pandas_market_calendars as mcal
from os import system
from json import load as load_json
from time import sleep
from pyrebase import initialize_app as firebase_init_app
from datetime import datetime as dt
from TweetStockModel import TweetStockModel as tsm
import yfinance as yf
import Helper
# ---------------------------------Init----------------------------------------------- #
delimiter, prefix = Helper.get_prefix_path()
ping_command = Helper.get_ping_command()
MODELS = Helper.get_models()
# -------------------------------FireBase------------------------------------- #

updated_db = {
    'Prediction': Helper.GetTickerObj(),
    'Tweets': Helper.GetTickerObj(),
    'Volatility': Helper.GetTickerObj()
}


def init_Firebase_config():
    with open(f'{prefix}{delimiter}CONFIGS{delimiter}firebaseconfig.json', 'r') as firebase_conf:
        firebase_config = load_json(firebase_conf)
    return firebase_config


def clear_table(table_name, date, stock_name):
    db.child(date).child(table_name).child(stock_name).set({})


def post_to_FireBase(tables_dict, date):
    try:
        for table_name, table_dict in tables_dict.items():
            for stock_name, stock_dict in table_dict.items():
                if type(stock_dict) == dict: #stock data
                    db.child(date).child(table_name).child(
                        stock_name).update(stock_dict)
                elif type(stock_dict) == list: # stock tweets
                    clear_table(table_name, date, stock_name)
                    for item in stock_dict:
                        if type(item) == dict and 'tweet_id' in item.keys():
                            db.child(date).child(table_name).child(stock_name).child(
                                item['tweet_id']).update(item)
                        else:
                            return None
                else:
                    return None
    except Exception as e:
        Helper.write_to_log(f'post_to_FireBase says:\n{e}')


firebase_config = init_Firebase_config()
firebase = firebase_init_app(firebase_config)
db = firebase.database()
# -------------------------------MODEL------------------------------------- #


def is_valid_model_response(pred_dict, tweets_dict):
    invalid_responses = (None, '', '[]', r'[{}]')
    return len(pred_dict) == 1 and pred_dict not in invalid_responses and len(tweets_dict) > 0 and tweets_dict not in invalid_responses


def Get_prediction(ticker, path, features_version):

    model = tsm(
        model_path=path, model_ticker=ticker, features_version=features_version)

    Ticker_and_Pred_Table_Dict, Ticker_Stats_Table_Dict = model.get_prediction()

    return Ticker_and_Pred_Table_Dict, Ticker_Stats_Table_Dict


# -------------------------------MAIN------------------------------------- #

def is_valid_day():
    '''
    This method converts israel's time to NY time, 
    and checks if the current date and time is during stock excange open hours (NYSE & NASDAQ)
    '''
    current_time = Helper.get_date_time()
    year, month, day, hour, minute = current_time.year, current_time.month, current_time.day, current_time.hour, current_time.minute
    today, time = f'{year}-{month}-{day}', f'{hour}:{minute}'
    start_of_year, end_of_year = f'{year}-01-01', f'{year}-12-31'

    try:
        nyse = mcal.get_calendar('NYSE')  # Get NY stock exchange schedule.
        schedule = nyse.schedule(
            start_date=today, end_date=today)
    except Exception as e:
        Helper.write_to_log(f'nyse.open_at_time says:\n{e}  ---e@is_valid_day')
        return False

    timestamp = Timestamp(
        f'{today} {time}', tz='Israel').tz_convert('America/New_York')  # convert israel time to NY time

    if not schedule.empty:
        try:
            if nyse.open_at_time(schedule, timestamp):
                return True
        except ValueError as ve:
            Helper.write_to_log(
                f'nyse.open_at_time says:\n{ve}  ---ValueError@is_valid_day')
            return False
    return False


def GoingToSleep(time, custom_msg=''):
    if custom_msg != '':
        Helper.logger(f'{custom_msg}')
    else:
        Helper.logger(
            f'Going to sleep for {time} seconds ({time/60} minutes)... @{Helper.get_date_time_stringify("%H:%M:%S")}')
    sleep(time)
    Helper.Woke_Up()


def sleep_until_market_opens(start_hour=16, start_min=30):
    now = Helper.get_date_time()
    #now = {'hour': 1, 'min': 2}
    start_hour_in_sec = (start_hour * 60 + start_min) * 60
    now_in_sec = (now.hour * 60 + now.minute) * 60
    if now_in_sec < start_hour_in_sec:
        GoingToSleep(start_hour_in_sec - now_in_sec,
                     custom_msg=f'sleeping for {(start_hour_in_sec - now_in_sec)/60} minutes -- {(start_hour_in_sec - now_in_sec)/60/60} hours')
    else:
        one_day_in_sec = 24 * 60 * 60
        GoingToSleep(time=one_day_in_sec - (now_in_sec - start_hour_in_sec))


def update_firebase_db():
    for ticker, stock in MODELS.items():
        pred_dict, tweets_dict = Get_prediction(
            ticker=ticker, path=stock['path'], features_version=stock['features'])

        if is_valid_model_response(pred_dict, tweets_dict):
            date, time = Helper.get_date_time_stringify(
                format="%d_%m_%Y"), Helper.get_date_time_stringify(format="%H_%M")
            pred_dict[0]['last_update'] = date + "_" + time

            for i in range(len(tweets_dict)):
                tweets_dict[i]['last_update'] = date + "_" + time

            updated_db['Prediction'][ticker], updated_db['Tweets'][ticker] = pred_dict[0], tweets_dict

        else:
            Helper.write_to_log(
                f'DB update error for ticker {ticker}:\npred_dict: {len(pred_dict)}\ntweets_dict: {len(tweets_dict)}\n\n @update_firebase_db')

        post_to_FireBase(updated_db, date)  # update DB for each ticker
        GoingToSleep(15*60)


def Get_Real_Close():
    for ticker in MODELS.keys():
        stock = yf.Ticker(ticker)
        look_back_n_days = 1
        history = stock.history(period=f'{look_back_n_days}d')
        updated_db['Volatility'][ticker]['Actual_volatility'] = 1 if history['Close'][0] >= history['Open'][0] else -1
    post_to_FireBase(updated_db, Helper.get_date_time_stringify(
        format="%d_%m_%Y"))


def Main():
    # 'features': 1 --> ['Tweet_Comments', 'Tweet_Retweets','Tweet_Likes', 'Positivity', 'Negativity', 'Neutral']
    # 'features': 2 --> ['Tweet_Sentiment','Tweet_Comments', 'Tweet_Retweets', 'Tweet_Likes']
    # update_firebase_db()
    #Get_Real_Close()
    sleeping_hours, sleeping_mins = 2, 0
    sleep_time = (sleeping_hours * 60 + sleeping_mins) * 60
    while True:
        if system(ping_command) == 0:  # check first for internet connectivity
            if (is_valid_day()):
                update_firebase_db()
                GoingToSleep(time = sleep_time, custom_msg= f'DB_Worker.Main loop says:\tGoing to sleep for {sleep_time} seconds ({sleep_time/60} minutes)... @{Helper.get_date_time_stringify("%H:%M:%S")}')
            else:
                Get_Real_Close()
                sleep_until_market_opens(start_hour=16, start_min=0)


# ----------------------------------------------------------------------------------------------- #
if __name__ == '__main__':
    Main()
