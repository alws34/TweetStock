from os import system, name as os_name, getcwd, path as os_path, mkdir
from datetime import datetime as dt
from csv import writer as csv_writer
#from pandas import DataFrame


def create_dir(path):
    if not os_path.exists(path):
        mkdir(path)


def write_to_log(msg):
    with open(f'{get_prefix_path()[1]}\\Logs\\LOG_{get_date_time_stringify()}', 'w+', encoding='utf-8') as f:
        f.write(msg)


def clear_console(msg=''):
    clear_cmd = 'cls' if os_name == 'nt' else 'clear'
    system(clear_cmd)
    print(msg, 'At:', get_date_time_stringify(
        '%d/%m/%Y-%H:%M:%S'))

#------- Savings --------#


def save_dict_to_csv(dict, save_path, file_name, mode='w'):
    with open(f'{save_path}{file_name}.csv', mode) as f:
        for key in dict.keys():
            f.write("%s,%s\n" % (key, dict[key]))


def save_delimited_dict(dict, save_path, mode='w', delimiter='|'):
    print(dict)
    with open(save_path, mode) as myfile:
        tsv_writer = csv_writer(myfile, delimiter=delimiter)
        for key in dict.keys():
            tsv_writer.writerow([key, dict[key]])


def save_df_to_csv(df, path, file_name):
    df.to_csv(f'{path}{file_name}.csv')

#------- Gets ---------#


def get_prefix_path():
    if os_name == 'nt':
        delimiter = '\\'
        prefix = f'{getcwd()}\\'
    elif os_name == 'posix':
        delimiter = '/'
        prefix = '/home/pi/FinalProject/FlaskServer/'

    return delimiter, prefix


def get_date_time():
    return dt.now()


def get_date_time_stringify(format="%d_%m_%Y_%H"):
    return get_date_time().strftime(format)


def get_ping_command(how_many_pings='1', host='1.1.1.1'):

    def get_var():
        if os_name == 'nt':
            return'n'
        elif os_name == 'posix':
            return 'c'

    return f'ping -{get_var()} {how_many_pings} {host}'


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


def get_user_data_paths(user):
    delimiter, prefix = get_prefix_path()
    initialized_df_csv_file = 'new_initialized_df.csv'
    paths = {
        'guy': {
            'users_path': '/content/drive/MyDrive/Final Project/Data/Self Collected/',
            'Networks_Save_Path': ''
        },
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
        },
        'hadar': {
            'users_path': '/content/drive/MyDrive/Final Project/Data/Self Collected/',
            'Networks_Save_Path': '',
        }
    }

    if not user in paths.keys():
        write_to_log(f'Invalid User Provided: {user}')
        return None
    return paths[user]
