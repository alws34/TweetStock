from tweepy import OAuthHandler as tweepy_OAuthHandler, API as tweepy_API
from TwitterAPI import TwitterAPI
from Helper import get_prefix_path
from json import load as loadJson

delimiter, prefix = get_prefix_path()

def connect_to_twitter(version=2):
        Twitter_Config = get_twitter_config()
        consumer_key = Twitter_Config['consumer_key']
        consumer_secret = Twitter_Config['consumer_secret']
        access_token = Twitter_Config['access_token']
        access_token_secret = Twitter_Config['access_token_secret']

        if version == 2:
            return TwitterAPI(consumer_key, consumer_secret, access_token,
                              access_token_secret, api_version='2')
        elif version == 1:
            auth = tweepy_OAuthHandler(consumer_key, consumer_secret)
            auth.set_access_token(access_token, access_token_secret)
            return tweepy_API(auth)

def get_twitter_config():
    with open(f'{prefix}{delimiter}CONFIGS{delimiter}twitterconfig.json', 'r') as json_file:
        twitter_configs = loadJson(json_file)
    return twitter_configs