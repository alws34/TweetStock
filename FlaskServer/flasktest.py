import pandas as pd
import numpy as np

from flask import Flask, jsonify, request
from flask_restful import Resource, Api, reqparse
from requests import put, get, post, delete
from flask_cors import CORS
#from tensorflow.keras.models import load_model
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer # sentiment score
from TwitterAPI import TwitterAPI, TwitterOAuth, TwitterRequestError, TwitterConnectionError, TwitterPager
#import tweepy # tweeter API

MODEL_PATH  = '' # get the 'tweetstock_model.h5' file path here
SERVER_PORT = 50001 # port which the server will run on

def connect_to_twitter(version = 1): # v2 for now
    consumer_key = 'mymakG2knztQ2GYaTNaRGTIOi'
    consumer_secret = 'lGXmXu9K7DQftUjvVempNg1vGjS362zbKo7p12yaa5RrBelIlj'
    access_token = '561299890-kjoCtIBYvSHeIVfhYEbHfNXHAqVklnMze2Wce1JT'
    access_token_secret = 'U1fR9nx24H1Eo3dvlLYO9LhDxwYWWZ5x2JEltgA4xUy6o'
    if version == 2:
        return TwitterAPI (consumer_key, consumer_secret, access_token,
                            access_token_secret, api_version='2')
    elif version == 1: 
        auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
        auth.set_access_token(access_token, access_token_secret)
        return tweepy.API(auth)

def get_tweets(ticker):
    tweets = twitter.request('')


    return tweets

def get_sentiment(tweets):
    for tweet in tweets['Body']:
        sent = sentiment_analyzer.polarity_scores(tweet)
        c = sent['compound']
        neg = sent['neg']
        pos = sent['pos']
        neu = sent['neu']
    return tweets

def get_users(tweets):
    pass

def get_engagement(users):
    pass

def prep_data(data):
    pass



app = Flask(__name__)
CORS(app)
api = Api(app)

sentiment_analyzer = SentimentIntensityAnalyzer()
twitter = connect_to_twitter()

@app.route('/getPrediction', methods=['GET'])  # GET
def get_prediction():
    args = request.args.to_dict()
    ticker = args['ticker']
    # sent
    print("sentiment_test", get_sentiment("test"))
    # get tweets
    get_tweets(ticker)

    #model = load_model(MODEL_PATH)

    return args

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=SERVER_PORT, debug=True)









# def connectToTwitterAPI1():
#   import tweepy # tweeter API
#   from datetime import datetime, timedelta

#   consumer_key = 'mymakG2knztQ2GYaTNaRGTIOi'
#   consumer_secret = 'lGXmXu9K7DQftUjvVempNg1vGjS362zbKo7p12yaa5RrBelIlj'
#   access_token = '561299890-kjoCtIBYvSHeIVfhYEbHfNXHAqVklnMze2Wce1JT'
#   access_token_secret = 'U1fR9nx24H1Eo3dvlLYO9LhDxwYWWZ5x2JEltgA4xUy6o'

#   auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
#   auth.set_access_token(access_token, access_token_secret)

#   return tweepy.API(auth)

# def connectToTwitterAPI2():
#   from TwitterAPI import TwitterAPI, TwitterOAuth, TwitterRequestError, TwitterConnectionError, TwitterPager
#   consumer_key = 'mymakG2knztQ2GYaTNaRGTIOi'
#   consumer_secret = 'lGXmXu9K7DQftUjvVempNg1vGjS362zbKo7p12yaa5RrBelIlj'
#   access_token = '561299890-kjoCtIBYvSHeIVfhYEbHfNXHAqVklnMze2Wce1JT'
#   access_token_secret = 'U1fR9nx24H1Eo3dvlLYO9LhDxwYWWZ5x2JEltgA4xUy6o'
#   return TwitterAPI (consumer_key, consumer_secret, access_token,
#   access_token_secret, api_version='2')