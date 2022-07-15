from Globals import SLEEP_TIME, N_PAST
from json import JSONDecodeError, load as loadJson
from TwitterResponses import GET_TWITTER_CODES
from tweepy import OAuthHandler as tweepy_OAuthHandler, API as tweepy_API
from TwitterAPI import TwitterAPI, TwitterRequestError, TwitterConnectionError
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import DataHandler
import Helper
from time import sleep
from Globals import *


class TweetsHandler:
    def __init__(self, ticker):
        self.ticker = ticker
        self.twitter = self.connect_to_twitter()
        self.responses = GET_TWITTER_CODES()

    def connect_to_twitter(self, version=TWITTER_VERSION):
        Twitter_Config = self.get_twitter_config()
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

    def get_twitter_config(self):
        with open(f'{prefix}{delimiter}CONFIGS{delimiter}twitterconfig.json', 'r') as json_file:
            twitter_configs = loadJson(json_file)
        return twitter_configs

    def calc_tweets_sentiment(self, tweets):
        for tweet in tweets:
            tweet_sentiment = SentimentIntensityAnalyzer().polarity_scores(
                tweet['text'])
            tweet['s_neg'], tweet['s_neu'], tweet['s_pos'], tweet['s_compound'] = tweet_sentiment[
                'neg'], tweet_sentiment['neu'], tweet_sentiment['pos'], tweet_sentiment['compound']
        return tweets

    def fetch_live_tweets_v1(self, max_results=MAX_TWEETS_RESULTS, n_past=N_PAST):
        if '$' in self.ticker:
            ticker = ticker.replace('$', '')
        else:
            ticker = self.ticker

        result_type = 'popular'

        temp_tweets = self.twitter.search_tweets(
            q=ticker, count=max_results, result_type=result_type)

        for tweet in temp_tweets:
            t = tweet._json
            user = t['user']
            self.tweets.append({
                'tweet_id': t['id'],
                'created_at': t['created_at'],
                'text': t['text'],
                'n_likes': t['favorite_count'],
                'n_retweets': t['retweet_count'],
                'n_replies': 0,
                'u_id': user['id'],
                'u_screen_name': user['screen_name'],
                'u_description': user['description'],
                'u_n_followers': user['followers_count']
            })

    def fetch_live_tweets_v2(self, start_date, end_date, max_results=MAX_TWEETS_RESULTS, n_past=N_PAST):
        def generate_v2_tweet(tweet, t_metrics, u_data):
            return {
                'tweet_id': tweet['id'],
                'created_at': tweet['created_at'],
                'text': tweet['text'],
                'n_likes': t_metrics['like_count'],
                'n_retweets': t_metrics['retweet_count'],
                'n_replies': t_metrics['reply_count'],
                'u_id': u_data['id'],
                'u_screen_name': u_data['username'],
                'u_description': u_data['description'],
                'u_n_followers': u_data['public_metrics']['followers_count']
            }

        if '$' in self.ticker:
            ticker = ticker.replace('$', '')
        else:
            ticker = self.ticker
        tweets = []

        prms = {
            'tweet.fields': 'public_metrics,author_id,created_at',
            'start_time': start_date.isoformat('T')+'Z',
            'end_time': end_date.isoformat('T')+'Z',
            'query': ticker,
            'max_results': max_results,
        }

        try:
            temp_tweets = self.twitter.request(
                resource='tweets/search/recent', params=prms)
        except TwitterRequestError as tre_tweets:
            if tre_tweets.status_code == self.responses['Too Many Requests']:
                err_msg = f"Tweeter Status code Returned {tre_tweets.status_code} SLEEPING...."
                Helper.logger(err_msg)
                sleep(SLEEP_TIME)
                Helper.Woke_Up()
                return tre_tweets.status_code

            if tre_tweets.status_code == self.responses['Service Unavailable']:
                err_msg = f"Tweeter Status code Returned {tre_tweets.status_code} SLEEPING...."
                Helper.logger(err_msg)
                sleep(SLEEP_TIME)
                Helper.Woke_Up()
                return tre_tweets.status_code
            else:
                err_msg = f'Tweeter Status code Returned {tre_tweets.status_code}'
                Helper.logger(err_msg)
                return None
        except TwitterConnectionError as TCE:
            err_msg = f"TwitterConnectionError @fetch_live_tweets_v2 --- {TCE}"
            Helper.logger(err_msg)
            sleep(SLEEP_TIME)
            Helper.Woke_Up()
            return self.responses['Service Unavailable']
        except Exception as e:
            err_msg = f"Error occured @fetch_live_tweets_v2 --- {e}"
            Helper.logger(err_msg)
            return self.responses['Service Unavailable']

        if temp_tweets.status_code == self.responses['OK']:
            tweets_arr = [tweet for tweet in temp_tweets]
            i = 0

            while i < len(tweets_arr):
                tweet = tweets_arr[i]

                try:
                    users_result = self.twitter.request(resource="users/:" + tweet['author_id'], params={
                        'user.fields': 'public_metrics,description,username'}).json()
                    if 'data' in users_result.keys():
                        users_data = users_result['data']
                    elif 'status' in users_result.keys():
                        raise TwitterRequestError(users_result['status'])
                    else:
                        raise Exception
                    i += 1
                    t_metrics = tweet['public_metrics']
                    tweets.append(generate_v2_tweet(
                        tweet=tweet, t_metrics=t_metrics, u_data=users_data))
                except TwitterRequestError as tre_users:
                    if tre_users.status_code == self.responses['Too Many Requests']:
                        Helper.logger(f"Tweeter Status code Returned {users_result['status']} SLEEPING....")
                        sleep(SLEEP_TIME)
                        Helper.Woke_Up()
                        continue

                    elif 'text' in users_result and users_result['text'] in self.responses.keys():
                        return None
                    else:
                        Helper.logger(str(users_result))
                        Helper.logger(
                            'MAJOR ERROR!\nCODE SHOULDNT GET HERE @fetch_live_tweets_v2')
                        return None
                except JSONDecodeError as JDE:
                    err_msg = f"Exception {JDE} has occured @fetch_live_tweets_v2! Disconnected from twitter"
                    Helper.logger(err_msg)
                    sleep(SLEEP_TIME)
                    Helper.Woke_Up()
                    self.twitter = self.connect_to_twitter()  # reconnect to twitter
                    continue

        else:
            Helper.logger(
                f'{temp_tweets.status_code} @fetch_live_tweets_v2')
            return None
        return tweets

    def fetch_and_filter_data(self, start_date, end_date):
        """
        1. fetch tweets and save new end date (minimun date fetched for refetching purposes (if needed))
        2. calculate sentimet
        3. filter tweets bh sentiment and tweet stats
        4. get remaining tweets user engagement
        5. filter by user engagement
        6. returns the remaining tweets (sentiment and user engagement included)
        """
        # Step 1 - fetch the live tweets from twitter

        tweets = self.responses['Too Many Requests']
        # or tweets == self.responses['Service Unavailable']:
        while tweets == self.responses['Too Many Requests']:
            tweets = self.fetch_live_tweets_v2(start_date=start_date, end_date=end_date, max_results=MAX_TWEETS_RESULTS,
                                               n_past=N_PAST)
        if tweets == None:
            Helper.logger("Couldnt get tweets @fetch_and_filter_data(), Tweets returned None")
            return None, None

        if tweets == self.responses['Service Unavailable']:
            Helper.logger(
                f"Couldnt get tweets @fetch_and_filter_data(), Code Returned {self.responses['Service Unavailable']} robably due to TwitterConnection Error.")
            return None, None
        elif tweets in self.responses.values():
            Helper.logger(
                f"Couldnt get tweets @fetch_and_filter_data(), Code Returned {tweets} robably due to TwitterConnection Error.")
            return None, None


        new_end_date = Helper.get_min_date(data=tweets)

        # calculate sentiment score for each tweet
        tweets = self.calc_tweets_sentiment(tweets)
        if tweets == None:
            Helper.logger("Couldnt get sentiment @get_sentiment()")
            return None, new_end_date

        # filter tweets
        tweets = DataHandler.tsm_filter_tweets(tweets)
        if len(tweets) == 0:
            Helper.logger("Filtered all tweets @filter_tweets()")
            return None, new_end_date

        # get user engagement
        tweets = self.fetch_users_with_eng_by_tweets_v2(tweets)
        if tweets == None:
            Helper.logger("Couldnt get use engagement @get_user_engagement()")
            return None, new_end_date

        # filter users
        tweets = DataHandler.tsm_filter_users(
            tweets, threshold=MIN_USER_FOLLOWERS)
        if len(tweets) == 0:
            Helper.logger("Filtered all users @filter_users()")
            return None, new_end_date

        return tweets, new_end_date

    def fetch_popular_tweet_ids(self, ticker, max_results):
        tweet_ids = []
        twitter_v1 = self.connect_to_twitter(version=1)
        result_type = 'popular'
        temp_tweets = twitter_v1.search_tweets(
            q=ticker, count=max_results, result_type=result_type)

        for tweet in temp_tweets:
            t = tweet._json
            tweet_ids.append(
                {'tweet_id': t['id'], 'created_at': t['created_at']})

        return tweet_ids

    def fetch_users_with_eng_by_tweets_v2(self, tweets, max_tweets_results=MAX_USER_TWEETS_RESULT):
        prms = {
            'max_results': max_tweets_results,
            'exclude': 'retweets,replies',
            'tweet.fields': 'public_metrics',
        }
        i = 0
        while i < len(tweets):
            try:
                users_tweets = self.twitter.request(
                    resource=f'users/:{tweets[i]["u_id"]}/tweets', params=prms)

                if users_tweets.text == r'{"meta":{"result_count":0}}':
                    tweets[i]['u_engagement'] = 0
                else:
                    tweets[i]['u_engagement'] = DataHandler.tsm_get_single_user_eng_score(
                        user_tweets=users_tweets, user_followers=tweets[i]['u_n_followers'])
                i += 1
            except TwitterRequestError as tre:
                Helper.logger(tre)
                if tre.title in self.responses.keys():
                    if self.responses[tre.title] == self.responses['Too Many Requests']:
                        sleep(SLEEP_TIME)
                        Helper.Woke_Up()
                        continue
                    else:
                        return None
                else:
                    Helper.logger(
                        'SHOULDNT GET HERE @EXCEPT -- fetch_users_with_eng_by_tweets_v2')
                    return None
        return tweets
