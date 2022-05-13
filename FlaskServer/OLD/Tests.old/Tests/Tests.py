# from TweetStockModel import TweetStockModel as tsm
# from random import randint as rand
# m = tsm(r'D:\GoogleDrive\Alon\לימודים\TweetStockApp\FlaskServer\Data\Networks\2\AMZN_acc_0.66_npast_3_epoch_2_opt_rmsprop_num_7775.h5', 5)
# print(f"{m.get_prediction('TSLA')}")

# import pandas as pd
# import numpy as np
# test1 = range(1,21)
# test2=range(1,21)

# testing_size = 5
# validation_size = 5
# df = pd.DataFrame({'test': test1, 'test1': test2})
# print(df)
# train, val, test = np.split(df.sample(frac=1, random_state=42), [int(len(df)-testing_size-validation_size), int(len(df)-testing_size)])
# print(len(train), len(val), len(test))
# print(train,'\n', val,'\n', test)


from datetime import datetime as dt, timezone as tz, tzinfo
from datetime import timedelta


def get_n_past_date(days_to_subtract=1, hours_to_subtract=2):  # N_PAST)
    if days_to_subtract < 0:
        days_to_subtract *= -1
    days_to_subtract -= 1
    now = dt.utcnow()
    midnight = dt.combine(now, dt.min.time())

    start_date = midnight - timedelta(days=days_to_subtract)
    end_date = now - timedelta(hours=hours_to_subtract)
    return start_date.isoformat('T')+'Z', end_date.isoformat('T')+'Z'


print(get_n_past_date())
