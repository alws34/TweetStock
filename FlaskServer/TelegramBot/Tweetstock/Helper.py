from os import system, name as os_name, getcwd, path as os_path, mkdir
from datetime import datetime as dt
from csv import writer as csv_writer
from pandas import to_datetime as pd_datetime

#------- MISC --------#
def ClearConsole(msg=''):
    clear_cmd = 'cls' if os_name == 'nt' else 'clear'
    system(clear_cmd)
    print(msg, ' Cleared At:', GetDateTimeStringify(
        '%d/%m/%Y-%H:%M:%S'))


def WokeUp():
    logger(f'Woke up @{GetDateTimeStringify("%H:%M:%S")}')


def GetTickerObj():
    return {
        'MSFT': {},
        'TSLA': {},
        'GOOG': {},
        'AMZN': {},
        'AAPL': {}
        }    
#------- Saves & file handels --------#


def SaveDicttoCSV(dict, save_path, file_name, mode='w'):
    try:
        with open(f'{save_path}{file_name}.csv', mode) as f:
            for key in dict.keys():
                f.write("%s,%s\n" % (key, dict[key]))
    except Exception as e:
        logger(f'Helper.SaveDicttoCSV says{e}')


def SaveDelimitedDict(dict, save_path, mode='w', delimiter='|'):
    try:
        with open(save_path, mode) as myfile:
            tsv_writer = csv_writer(myfile, delimiter=delimiter)
            for key in dict.keys():
                tsv_writer.writerow([key, dict[key]])
    except Exception as e:
        logger(f'{e}')


def SaveDFtoCSV(df, path, file_name):
    df.to_csv(f'{path}{file_name}.csv')


def create_dir(path):
    if not os_path.exists(path):
        mkdir(path)


def logger(msg):
    print(msg)
    WriteToLog(msg)


def WriteToLog(msg):
    delimiter, prefix = GetPrefixandDelimiter()
    log_path = f'/home/pi/FinalProject/FlaskServer/Logs/{GetDateTimeStringify()}.log'
    mode = 'a'
    if not os_path.exists(log_path):
        mode = 'w+'

    with open(log_path, mode, encoding='utf-8') as log_file:
        log_file.write(
            f'{GetDateTimeStringify(format="%H:%M:%S")}::\t\t{msg}\n\n')

#------- Gets ---------#


def GetPrefixandDelimiter():
    if os_name == 'nt':
        delimiter = '\\'
        prefix = f'{getcwd()}\\'
    elif os_name == 'posix':
        delimiter = '/'
        prefix = f'{getcwd()}{delimiter}' #'/home/pi/FinalProject/FlaskServer/'

    return delimiter, prefix


def GetDateTime():
    return dt.now()


def GetDateTimeStringify(format="%d_%m_%Y"):
    return GetDateTime().strftime(format)


def get_ping_command(how_many_pings='1', host='1.1.1.1'):
    var = 'c'
    if os_name == 'nt':
        var = 'n'

    return f'ping -{var} {how_many_pings} {host}'


def get_models():
    delimiter, prefix = GetPrefixandDelimiter()
    folder_name = "InUseModels"
    return {
        'AAPL': {
            'path': f'{prefix}{folder_name}{delimiter}AAPL{delimiter}AAPL_acc_0.68_npast_1_epoch_15_opt_rmsprop_num_227.h5',
            'features': 2
        },
        'AMZN': {
            'path': f'{prefix}{folder_name}{delimiter}AMZN{delimiter}AMZN_acc_0.62_npast_1_epoch_15_opt_rmsprop_num_95.h5',
            'features': 2
        },
        'GOOG': {
            'path': f'{prefix}{folder_name}{delimiter}GOOG{delimiter}GOOG_acc_0.62_npast_1_epoch_30_opt_adam_num_105.h5',
            'features': 2
        },
        'MSFT': {
            'path': f'{prefix}{folder_name}{delimiter}MSFT{delimiter}MSFT_acc_0.62_npast_1_epoch_15_opt_rmsprop_num_299.h5',
            'features': 2
        },
        'TSLA': {
            'path': f'{prefix}{folder_name}{delimiter}TSLA{delimiter}TSLA_acc_0.68_npast_1_epoch_15_opt_adam_num_28.h5',
            'features': 2
        }
    }


def get_user_data_paths(user):
    delimiter, prefix = GetPrefixandDelimiter()
    initialized_df_csv_file = 'new_initialized_df.csv'
    paths = {
        'alon': {
            'users_path': "D:\\Google Drive\\Alon\\לימודים\\Final Project\\Data\\Self Collected\\",
            'user_path2': 'D:\\Google Drive\\Alon\\לימודים\\Final Project\\Data\\Self Collected\\',
            'Networks_Save_Path': 'D:\\Google Drive\\Alon\\לימודים\\TweetStockApp\\FlaskServer\\Data\\Networks\\',
            'initialized_df_path': f'D:\\Google Drive\\Alon\\לימודים\\TweetStockApp\\FlaskServer\\Data\\CSVs\\{initialized_df_csv_file}'
        },
        'pi': {
            'users_path': f"{prefix}Data/CSVs/Initial_Data{delimiter}",
            'Networks_Save_Path': f'{prefix}Data/Networks{delimiter}',
            'initialized_df_path': f'{prefix}Data/CSVs/{initialized_df_csv_file}'
        }
    }

    if not user in paths.keys():
        WriteToLog(
            f'Invalid User Provided: {user} @Helper.get_user_data_paths')
        return None
    return paths[user]


def get_min_date(data, date_key='created_at'):
    dates = [pd_datetime(d[date_key]) for d in data]
    date = min(dates).to_pydatetime().replace(second=0, tzinfo=None)
    return date
