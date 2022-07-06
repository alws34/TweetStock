from TweetStockModel import SLEEP_TIME
import TwitterConnections
from Twitter_Responses import GET_TWITTER_CODES
from TwitterAPI import TwitterRequestError
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import DataHandler
import Helper
from time import sleep
MAX_TWEETS_RESULTS = 100
N_PAST = 1
SLEEP_TIME = 60*15
TWITTER_RESPONSE_CODES = GET_TWITTER_CODES()
MIN_USER_FOLLOWERS = 50


def calc_tweets_sentiment(tweets):
    for tweet in tweets:
        tweet_sentiment = SentimentIntensityAnalyzer.sentiment_analyzer.polarity_scores(
            tweet['text'])
        tweet['s_neg'], tweet['s_neu'], tweet['s_pos'], tweet['s_compound'] = tweet_sentiment[
            'neg'], tweet_sentiment['neu'], tweet_sentiment['pos'], tweet_sentiment['compound']
        # tweets['subjectivity'] = sentiment_analyzer.subjectivity_scores(tweet['text']) # optional
    return tweets


# def fetch_live_tweets_v1(max_results=MAX_TWEETS_RESULTS, n_past=N_PAST):
#         if '$' in self.ticker:
#             ticker = ticker.replace('$', '')
#         else:
#             ticker = self.ticker

#         result_type = 'popular'

#         temp_tweets = self.twitter.search_tweets(
#             q=ticker, count=max_results, result_type=result_type)

#         for tweet in temp_tweets:
#             # print(f'{tweet._json}')
#             t = tweet._json
#             user = t['user']
#             self.tweets.append({
#                 'tweet_id': t['id'],
#                 'created_at': t['created_at'],
#                 'text': t['text'],
#                 'n_likes': t['favorite_count'],
#                 'n_retweets': t['retweet_count'],
#                 'n_replies': 0,
#                 'u_id': user['id'],
#                 'u_screen_name': user['screen_name'],
#                 'u_description': user['description'],
#                 'u_n_followers': user['followers_count']
#             })


# def fetch_live_tweets_v2(start_date, end_date, max_results=MAX_TWEETS_RESULTS, n_past=N_PAST):
#     def generate_v2_tweet(tweet, t_metrics, u_data):
#         return {
#             'tweet_id': tweet['id'],
#             'created_at': tweet['created_at'],
#             'text': tweet['text'],
#             'n_likes': t_metrics['like_count'],
#             'n_retweets': t_metrics['retweet_count'],
#             'n_replies': t_metrics['reply_count'],
#             'u_id': u_data['id'],
#             'u_screen_name': u_data['username'],
#             'u_description': u_data['description'],
#             'u_n_followers': u_data['public_metrics']['followers_count']
#         }
#     # print(f"Getting Tweets of {self.ticker} for {self.ip} ")
#     if '$' in self.ticker:
#         ticker = ticker.replace('$', '')
#     else:
#         ticker = self.ticker
#     tweets = []
#     #tweet_ids = self.fetch_popular_tweet_ids(ticker=ticker,max_results=max_results)
#     prms = {
#         'tweet.fields': 'public_metrics,author_id,created_at',
#         'start_time': start_date.isoformat('T')+'Z',
#         'end_time': end_date.isoformat('T')+'Z',
#         'query': ticker,
#         'max_results': max_results,
#         # 'user.fields':'public_metrics,description,username',
#         # 'exclude': 'retweets,replies',
#         # 'result_type' : result_type
#     }  # TAKE CARE OF EXCLUDING REPLIES

#     try:
#         temp_tweets = self.twitter.request(
#             resource='tweets/search/recent', params=prms)
#     except TwitterRequestError as tre_tweets:
#         if tre_tweets.status_code == TWITTER_RESPONSE_CODES['Too Many Requests']:
#             print(
#                 f"Tweeter Status code Returned {tre_tweets.status_code}", 'SLEEPING....')
#             sleep(SLEEP_TIME)
#             return tre_tweets.status_code
#         else:
#             print(f'CODE: {tre_tweets.status_code}')
#             print(f'{temp_tweets}')
#             return None

#     if temp_tweets.status_code == TWITTER_RESPONSE_CODES['OK']:
#         tweets_arr = [tweet for tweet in temp_tweets]
#         i = 0
#         while i < len(tweets_arr):
#             tweet = tweets_arr[i]

#             try:
#                 users_result = self.twitter.request(resource="users/:"+tweet['author_id'], params={
#                     'user.fields': 'public_metrics,description,username'}).json()
#                 if 'data' in users_result.keys():
#                     users_data = users_result['data']
#                 elif 'status' in users_result.keys():
#                     raise TwitterRequestError(users_result['status'])
#                 else:
#                     raise Exception
#                 i += 1
#                 t_metrics = tweet['public_metrics']
#                 tweets.append(generate_v2_tweet(
#                     tweet=tweet, t_metrics=t_metrics, u_data=users_data))
#             except TwitterRequestError as tre_users:
#                 if tre_users.status_code == TWITTER_RESPONSE_CODES['Too Many Requests']:
#                     print(
#                         f"Tweeter Status code Returned {users_result['status']}", 'SLEEPING....')
#                     sleep(SLEEP_TIME)
#                     continue
#                 elif 'text' in users_result and users_result['text'] in TWITTER_RESPONSE_CODES.keys():
#                     return None
#                 else:
#                     Helper.write_to_log(str(users_result))
#                     print(
#                         'MAJOR ERROR!\nCODE SHOULDNT GET HERE @fetch_live_tweets_v2')
#                     return None
#     else:
#         print(f'{temp_tweets.status_code}',
#                 ' PROBABLY SHOULDNT GET HERE @fetch_live_tweets_v2')
#         Helper.Write_To_Log(
#             f'{temp_tweets.status_code} @fetch_live_tweets_v2')
#         return None
#     return tweets


# def fetch_and_filter_data(start_date, end_date):
#         """
#         1. fetch tweets and save new end date (minimun date fetched for refetching purposes (if needed))
#         2. calculate sentimet
#         3. filter tweets bh sentiment and tweet stats
#         4. get remaining tweets user engagement
#         5. filter by user engagement
#         6. returns the remaining tweets (sentiment and user engagement included)
#         """
#         # Step 1 - fetch the live tweets from twitter
#         tweets = 429
#         while tweets == 429:
#             tweets = fetch_live_tweets_v2(start_date=start_date, end_date=end_date, max_results=MAX_TWEETS_RESULTS,
#                                                n_past=N_PAST)
#         if tweets == None:
#             print("Couldnt get tweets @get_tweets()")
#             return None, None

#         new_end_date = get_min_date(tweets=tweets)

#         # calculate sentiment score for each tweet
#         tweets = calc_tweets_sentiment(tweets)
#         if tweets == None:
#             print("Couldnt get sentiment @get_sentiment()")
#             return None, new_end_date

#         # filter tweets
#         tweets = DataHandler.tsm_filter_tweets(tweets)
#         if len(tweets) == 0:
#             print("Filtered all tweets @filter_tweets()")
#             return None, new_end_date

#         # get user engagement
#         tweets = fetch_users_with_eng_by_tweets_v2(tweets)
#         if tweets == None:
#             print("Couldnt get use engagement @get_user_engagement()")
#             return None, new_end_date

#         # filter users
#         tweets = DataHandler.tsm_filter_users(
#             tweets, threshold=MIN_USER_FOLLOWERS)
#         if len(tweets) == 0:
#             print("Filtered all users @filter_users()")
#             return None, new_end_date

#         return tweets, new_end_date
