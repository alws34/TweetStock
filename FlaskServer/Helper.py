import os
from datetime import datetime as dt


class Helper:
    def clear_console(self, msg=''):
        os.system('cls')
        print(msg, 'At:', self.get_date_time_stringify(
            '%d-%m-%Y at %H:%M:%S'))

    def get_OS_type(self):
        if os.name == 'nt':  # windows
            return False
        elif os.name == 'posix':  # unix
            return True

    def Get_Prefix_Path(self):
        if not self.get_OS_type():
            delimiter = '\\'
            prefix = f'{os.getcwd()}\\FlaskServer\\'
        else:
            delimiter = '/'
            prefix = '/home/pi/FinalProject/FlaskServer/'

        return delimiter, prefix

    def get_date_time(self):
        return dt.now()

    def get_date_time_stringify(self, format="%d_%m_%Y_%H"):
        return self.get_date_time().strftime(format)

    def get_ping_command(self, how_many_pings='1', host='1.1.1.1'):

        def get_var():
            if not self.get_OS_type():
                return'n'
            else:
                return 'c'

        return f'ping -{get_var()} {how_many_pings} {host}'

    def write_to_log(self, msg):
        with open(f'{self.get_prefix_path()[1]}/Logs/LOG_{self.get_date_time_stringify()}', 'a+', encoding='utf-8') as f:
            f.write(msg)

    def get_models(self):
        delimiter, prefix = self.get_prefix_path()
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

    def get_paths(self, user):
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
