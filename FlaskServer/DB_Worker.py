import pandas as pd
from TweetStockModel import TweetStockModel as tsm
import time
import pandas_market_calendars as mcal
from datetime import datetime as dt
import os
import sqlalchemy as sal
from sqlalchemy import create_engine

# ----------------------------------------------------------------------------------------------- #
if os.name == 'nt':
    delimiter = '\\'
    prefix = f'{os.getcwd()}\\FlaskServer\\'
elif os.name == 'posix':
    delimiter = '/'
    prefix = '/home/pi/FinalProject/FlaskServer/'

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


def Main():
    # 'features': 1 --> ['Tweet_Comments', 'Tweet_Retweets','Tweet_Likes', 'Positivity', 'Negativity', 'Neutral']
    # 'features': 2 --> ['Tweet_Sentiment','Tweet_Comments', 'Tweet_Retweets', 'Tweet_Likes']

    # while True:
    update_db()
    # if (is_valid_day()):

    #     update_db()
    #     time.sleep(3 * 60 * 60)  # sleep 3 hours
    # else:
    #     print("invalid day")
    #     time.sleep(60 * 60 * 24)
    #     continue


def update_db(models=MODELS):
    result = {
        'pred_df': pd.DataFrame(),
        'tweets_df': pd.DataFrame()
    }
    for ticker in models.keys():
        # Run the model
        model = tsm(
            model_path=models[ticker]['path'], model_ticker=ticker, features_version=models[ticker]['features'])
        sql_Ticker_and_Pred_Table_DF, sql_Ticker_Stats_Table_DF = model.get_prediction()
        if sql_Ticker_and_Pred_Table_DF.empty and sql_Ticker_Stats_Table_DF.empty:
            print("Error Getting data from model!\nSQL DB won't update")
            break
        # Update result
        result['pred_df'].append(
            sql_Ticker_and_Pred_Table_DF, ignore_index=True)
        result['tweets_df'].append(
            sql_Ticker_Stats_Table_DF, ignore_index=True)
        time.sleep(15*60)  # sleep 15 mins

    post_to_db(result['pred_table'], result["tweets_df"])


def post_to_db(pred_df, tweets_df):
    user = 'bgroup57'
    passwd = 'bgroup57_40988'
    host = 'media.ruppin.ac.il'
    port = '1433'
    db = 'bgroup57_test2'

    url = f'mssql+pyodbc://{user}:{passwd}@{host}:{port}/{db}?driver=SQL+Server'

    engine = create_engine(url)

    SQL_Tables = ['TweetStock_Prediction_2022', 'TweetStock_Tweets_2022']
    tables = [pred_df, tweets_df]
    for i, table in enumerate(tables):
        # if_exists{‘fail’, ‘replace’, ‘append’}, default ‘fail’
        table.to_sql(f'{SQL_Tables[i]}', con=engine,
                     if_exists='replace', index=False)

    #df = pd.read_sql(f'SELECT * FROM {table}', engine)


def is_valid_day():
    '''
    This method converts israel's time to NY time, 
    and checks if the current date and time is during stock excange open hours (NYSE & NASDAQ)
    '''
    current_time = dt.now()

    year, month, day, hour, minute = current_time.year, current_time.month, current_time.day, current_time.hour, current_time.minute
    today, time = f'{year}-{month}-{day}', f'{hour}:{minute}'
    start_of_year, end_of_year = f'{year}-01-01', f'{year}-12-31'

    nyse = mcal.get_calendar('NYSE')

    try:
        schedule = nyse.schedule(
            start_date=today, end_date=today)
    except Exception as e:
        return False

    timestamp = pd.Timestamp(
        f'{today} {time}', tz='Israel').tz_convert('America/New_York')  # convert israel time to NY time

    if not schedule.empty:
        if nyse.open_at_time(schedule, timestamp):
            return True
    return False


# ----------------------------------------------------------------------------------------------- #
if __name__ == '__main__':
    Main()
