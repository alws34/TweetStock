import os
from datetime import datetime as dt


def clear_console(msg=''):
    os.system('cls')
    print(msg, 'At:', get_date_time_stringify(
        '%d-%m-%Y at %H:%M:%S'))


def get_OS_type():
    if os.name == 'nt':  # windows
        return "windows"
    elif os.name == 'posix':  # unix
        return "unix"


def get_prefix_path():
    os_type = get_OS_type()
    if os_type == "windows":
        delimiter = '\\'
        prefix = f'{os.getcwd()}\\FlaskServer\\'
    elif os_type == "unix":
        delimiter = '/'
        prefix = '/home/pi/FinalProject/FlaskServer/'

    return delimiter, prefix


def get_date_time():
    return dt.now()


def get_date_time_stringify(self, format="%d_%m_%Y_%H"):
    return get_date_time().strftime(format)


def get_ping_command(self, how_many_pings='1', host='1.1.1.1'):

    def get_var():
        os_type = self.get_OS_type()
        if os_type == "windows":
            return'n'
        elif os_type == "unix":
            return 'c'

    return f'ping -{get_var()} {how_many_pings} {host}'


def write_to_log(msg):
    with open(f'{get_prefix_path()[1]}/Logs/LOG_{get_date_time_stringify()}', 'a+', encoding='utf-8') as f:
        f.write(msg)


def get_models():
    delimiter, prefix = get_prefix_path()
    return {
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


def get_paths(user):
    if user is None:
        return None
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
    return paths[user]

