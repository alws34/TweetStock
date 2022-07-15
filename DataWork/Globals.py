from Helper import get_prefix_path
from TwitterResponses import GET_TWITTER_CODES

APP_VERSION = '1.7.3'
TWITTER_VERSION = 2  # twitter fetch_and_filter_dataversion.
N_PAST = 1  # days on which the model was trained.
MAX_TWEETS_RESULTS = 100  # max results for first tweets query.
MAX_USER_TWEETS_RESULT = 100  # max results for use engagement tweets
MIN_TWEET_STATS_SUM = 25  # minimum tweet filtering sum of stats
MIN_USER_FOLLOWERS = 50  # minimum user followers to be included
TSM_MIN_TWEET_STATS_SUM = 25  # min tweet filtering sum of stats
TSM_MIN_USER_FOLLOWERS = 50  # min user followers num to be included
TWEETS_REFETCHING_THRESHOLD = 15
REFETCHING_MAX_ITERATIONS_THRESHOLD = 5
SLEEP_TIME = 60*15
SCALING = 'min_max'
TWITTER_RESPONSE_CODES = GET_TWITTER_CODES()
delimiter, prefix = get_prefix_path()
INCLUDE_REPLIES = True
MAX_UPDATE_HOUR = 21


MT_SCALING_PARAMS = {
    "Tweet_Comments": [[0.0], [10.0]],
    "Tweet_Retweets": [[0.0], [10.0]],
    "Tweet_Likes": [[0.0], [10.0]],
    "User_Engagement": [[0.0], [0.64]]
}
TSM_SCALING_PARAMS = {
    "n_replies": [[0.0], [10.0]],
    "n_retweets": [[0.0], [10.0]],
    "n_likes": [[0.0], [10.0]],
    "u_engagement": [[0.0], [0.64]]
}

# log2
MT_ENGAGEMENT_SCALING_PARAMS = {
    'eng_total_retweets': [[0.0], [19.32]],
    'eng_total_likes': [[0.0], [22.35]],
    'eng_total_replies': [[0.0], [16.8]],
    'followers_count': [[0.0], [24.5]],
    'eng_tweets_length': [[0.0], [100.0]]
}
TSM_ENGAGEMENT_SCALING_PARAMS = {
    "reply_count": [[0.0], [19.32]],
    "retweet_count": [[0.0], [22.35]],
    "like_count": [[0.0], [16.8]],
    'follower_count': [[0.0], [24.5]],
    'eng_tweets_length': [[0.0], [100.0]]
}
