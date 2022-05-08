import pandas as pd
import pandas_market_calendars as mcal
import os
import json
import time
import pyrebase
from datetime import datetime as dt
from TweetStockModel import TweetStockModel as tsm

# ---------------------------------Paths Init----------------------------------------------- #
if os.name == 'nt':
    delimiter = '\\'
    prefix = f'{os.getcwd()}\\FlaskServer\\'
    pinger = 'ping -n 1 1.1.1.1'
elif os.name == 'posix':
    delimiter = '/'
    prefix = '/home/pi/FinalProject/FlaskServer/'
    pinger = 'ping -c 1 1.1.1.1'


# -------------------------------Available Models paths------------------------------------- #
MODELS = {
    'AAPL': {
        'path': f'{prefix}SelectedModels{delimiter}AAPL{delimiter}AAPL_acc_0.633_npast_1_epoch_4_opt_rmsprop_num_3848.h5',
        'features': 1
    },
    'AMZN': {
        'path': f'{prefix}SelectedModels{delimiter}AMZN{delimiter}AMZN_acc_0.673_npast_1_epoch_7_opt_rmsprop_num_1396.h5',
        'features': 1
    },
    'GOOG': {
        'path': f'{prefix}SelectedModels{delimiter}GOOG{delimiter}GOOG_acc_0.612_npast_1_epoch_10_opt_adam_num_2283.h5',
        'features': 1
    },
    'GOOGL': {
        'path': f'{prefix}SelectedModels{delimiter}GOOGL{delimiter}GOOGL_acc_1.0_npast_1_epoch_4_opt_adam_num_3147.h5',
        'features': 1
    },
    'MSFT': {
        'path': f'{prefix}SelectedModels{delimiter}MSFT{delimiter}MSFT_acc_0.612_npast_1_epoch_4_opt_adam_num_4359.h5',
        'features': 2
    },
    'TSLA': {
        'path': f'{prefix}SelectedModels{delimiter}TSLA{delimiter}TSLA_acc_0.633_npast_1_epoch_4_opt_adam_num_804.h5',
        'features': 1
    }
}

# -------------------------------FireBase------------------------------------- #


def init_Firebase_config():
    with open(f'{prefix}CONFIGS/firebaseconfig.json', 'r') as firebase_conf:
        firebase_config = json.load(firebase_conf)
    return firebase_config


firebase_config = init_Firebase_config()
firebase = pyrebase.initialize_app(firebase_config)


def clear_table(table_name, date):
    db.child(date).child(table_name).set({})


def post_to_FireBase(tables_dict, date):
    try:
        for table_name, table_dict in tables_dict.items():

            for stock_name, stock_dict in table_dict.items():
                if type(stock_dict) == dict:
                    db.child(date).child(table_name).child(
                        stock_name).set(stock_dict)
                elif type(stock_dict) == list:
                    clear_table(table_name, date)
                    for item in stock_dict:
                        if type(item) == dict and 'tweet_id' in item.keys():
                            db.child(date).child(table_name).child(stock_name).child(
                                item['tweet_id']).set(item)
                        else:
                            return None
                else:
                    return None
    except Exception as e:
        write_to_log(f'{e}')


# -------------------------------MODEL------------------------------------- #


def is_valid_model_response(pred_dict, tweets_dict):
    invalid_responses = (None, '', '[]', r'[{}]')
    return len(pred_dict) == 1 and pred_dict not in invalid_responses and len(tweets_dict) > 0 and tweets_dict not in invalid_responses


def Get_prediction(ticker, path, features_version):

    model = tsm(
        model_path=path, model_ticker=ticker, features_version=features_version)

    Ticker_and_Pred_Table_Dict, Ticker_Stats_Table_Dict = model.get_prediction()

    return Ticker_and_Pred_Table_Dict, Ticker_Stats_Table_Dict

# -------------------------------DATETIME------------------------------------- #


def Get_Date_Time():
    return dt.now()


def Get_Date_Time_Stringify(format="%d_%m_%Y_%H"):
    return Get_Date_Time().strftime(format)

# -------------------------------LOGGING------------------------------------- #


def write_to_log(msg):
    with open(f'{prefix}/Logs/LOG_{Get_Date_Time_Stringify()}', 'a+', encoding='utf-8') as f:
        f.write(msg)

# -------------------------------MAIN------------------------------------- #


def is_valid_day():
    '''
    This method converts israel's time to NY time, 
    and checks if the current date and time is during stock excange open hours (NYSE & NASDAQ)
    '''
    current_time = Get_Date_Time()
    year, month, day, hour, minute = current_time.year, current_time.month, current_time.day, current_time.hour, current_time.minute
    today, time = f'{year}-{month}-{day}', f'{hour}:{minute}'
    start_of_year, end_of_year = f'{year}-01-01', f'{year}-12-31'

    nyse = mcal.get_calendar('NYSE')

    try:
        schedule = nyse.schedule(
            start_date=today, end_date=today)
    except Exception as e:
        write_to_log(f'nyse.open_at_time says:\n{e}')
        return False

    timestamp = pd.Timestamp(
        f'{today} {time}', tz='Israel').tz_convert('America/New_York')  # convert israel time to NY time

    if not schedule.empty:
        try:
            if nyse.open_at_time(schedule, timestamp):
                return True
        except ValueError as ve:
            write_to_log(f'nyse.open_at_time says:\n{ve}')
            return False
    return False


def sleep_until_market_opens():
    #now = Get_Date_Time()
    now = {'hour': 1, 'min': 2}
    start_hour, start_min = 16, 30
    start_hour_in_sec = (start_hour * 60 + start_min) * 60
    now_in_sec = (now.hour * 60 + now.min) * 60
    if now_in_sec < start_hour_in_sec:
        time.sleep(start_hour_in_sec - now_in_sec)
    else:
        one_day_in_sec = 24 * 60 * 60
        time.sleep(one_day_in_sec - (now_in_sec - start_hour_in_sec))


def update_firebase_db():
    updated_db = {
        'Prediction': {},
        'Tweets': {}
    }

    for ticker, stock in MODELS.items():
        pred_dict, tweets_dict = Get_prediction(
            ticker=ticker, path=stock['path'], features_version=stock['features'])
        if is_valid_model_response(pred_dict, tweets_dict):
            date, time = Get_Date_Time_Stringify(
                format="%d_%m_%Y"), Get_Date_Time_Stringify(format="%H_%M")
            pred_dict[0]['last_update'] = date + "_" + time
            for i in range(len(tweets_dict)):
                tweets_dict[i]['last_update'] = date + "_" + time

            updated_db['Prediction'][ticker], updated_db['Tweets'][ticker] = pred_dict[0], tweets_dict

        else:
            write_to_log(
                f'DB update error for ticker {ticker}:\npred_dict: {len(pred_dict)}\ntweets_dict: {len(tweets_dict)}\n\n')
        time.sleep(15*60)  # sleep 15 min for each ticker

    post_to_FireBase(updated_db, date)


def Main():
    # 'features': 1 --> ['Tweet_Comments', 'Tweet_Retweets','Tweet_Likes', 'Positivity', 'Negativity', 'Neutral']
    # 'features': 2 --> ['Tweet_Sentiment','Tweet_Comments', 'Tweet_Retweets', 'Tweet_Likes']

    # update_firebase_db()
    while True:
        if os.system(pinger) == 0:  # check first for internet connectivity
            if (is_valid_day()):
                update_firebase_db()
                sleeping_hours, sleeping_mins = 2, 0
                time.sleep((sleeping_hours * 60 + sleeping_mins) * 60)
            else:
                sleep_until_market_opens()


# ----------------------------------------------------------------------------------------------- #
if __name__ == '__main__':
    Main()
