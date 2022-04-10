# import pandas as pd
# import numpy as np
import datetime
import os, sys, shutil
from flask import Flask, jsonify, request
from flask_restful import Resource, Api, reqparse
from requests import put, get, post, delete
from flask_cors import CORS
#from tensorflow.keras.models import load_model
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer # sentiment score
from TwitterAPI import TwitterAPI, TwitterOAuth, TwitterRequestError, TwitterConnectionError, TwitterPager
import tweepy # tweeter API

MODEL_PATH  = '' # get the 'tweetstock_model.h5' file path here
SERVER_PORT = 5000 # port which the server will run on

def connect_to_twitter(version = 2): # v2 for now
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

def WriteToLog(msg):
    with open("/home/pi/Desktop/FinalProject/FlaskServer/Data/Logs.txt", mode='w', encoding='utf-8') as f:
        for tweet in msg:
            f.write(f'{tweet._json}\n')


def get_n_past_date(num_of_days):
    today = datetime.datetime.now()
    if num_of_days > 0 :
        num_of_days *= -1
    delta = datetime.timedelta(num_of_days)
    date = today + delta
    return date.isoformat('T')+'Z'


def get_tweets(ticker,n_past):
    if '$' in ticker:
        ticker = ticker.replace('$','')
    max_results= 1
    prms = {
        'tweet.fields':'public_metrics',
        'user.fields':'public_metrics',
        #'exclude': 'retweets,replies',
        'start_time': get_n_past_date(n_past),
        'query':ticker,
        'max_results' : max_results
    }
    



    #tweets = twitter.request(resource = 'tweets/search/recent' , params = prms)
    tweets = twitter.search_tweets(q=ticker, count=max_results, result_type='popular')
    for tweet in tweets:
        print(f'{tweet}')

    WriteToLog(tweets)

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
CORS(app,resources={r"*": {"origins": "*"}})
api = Api(app)

sentiment_analyzer = SentimentIntensityAnalyzer()
twitter = connect_to_twitter(1)
tweets = get_tweets('TSLA',3)


@app.route('/getPrediction', methods=['GET'])  # GET
def get_prediction():
    args = request.args.to_dict()
    ticker = args['ticker']
    # sent
    #print("sentiment_test", get_sentiment("test"))
    # get tweets
    #get_tweets(ticker)

    #model = load_model(MODEL_PATH)

    return jsonify(args)

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