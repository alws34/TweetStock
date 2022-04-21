import pandas as pd
import sqlalchemy as sal
from sqlalchemy import create_engine

user = 'bgroup57'
passwd = 'bgroup57_40988'
host = 'media.ruppin.ac.il'
port = '1433'
db = 'bgroup57_test2'

# https://medium.com/@devartimahakalkar/connecting-sql-datasets-with-pandas-105f8eb68f1a
# https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.to_sql.html


class SQL_conn:
    def __init__(df_to_post,table):
        url = f'mssql+pyodbc://{user}:{passwd}@{host}:{port}/{db}?driver=SQL+Server'
        engine = create_engine(url)
        df = pd.DataFrame({'name': ['test3']})

        # if_exists{‘fail’, ‘replace’, ‘append’}, default ‘fail’
        df.to_sql(f'{table}', con=engine,
                  if_exists='replace', index=False)
        df = pd.read_sql(f'SELECT * FROM {table}', engine)
