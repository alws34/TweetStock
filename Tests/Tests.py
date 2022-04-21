# from TweetStockModel import TweetStockModel as tsm
# from random import randint as rand
# m = tsm(r'D:\GoogleDrive\Alon\לימודים\TweetStockApp\FlaskServer\Data\Networks\2\AMZN_acc_0.66_npast_3_epoch_2_opt_rmsprop_num_7775.h5', 5)
# print(f"{m.get_prediction('TSLA')}")

import pandas as pd

df = pd.DataFrame({'test': [1, 2, 3], 'test1': [0, 2, 3]})

df = df[df['test'] != 1]
df = df[df['test1'] != 3]

print(df)
