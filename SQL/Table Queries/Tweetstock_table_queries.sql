create table TweetStock_Prediction_2022(
ticker varchar(10) PRIMARY KEY,
prediction int default NULL,
user_engagement varchar default NULL,
tweet_likes int default NULL,
tweet_replies int default NULL,
prediction_date date DEFAULT GETDATE(),
);

create table TweetStock_Tweets_2022(
tweet_id varchar PRIMARY KEY,
ticker varchar(10) NOT NULL,
user_engagement varchar default NULL,
tweet_likes int default NULL,
tweet_replies int default NULL,
tweet_retweets int default NULL, 
sentiment_pos float default NULL,
sentiment_neu float default NULL,
sentiment_neg float default NULL,
sentiment_compound float default NULL,
data_date date DEFAULT GETDATE(),
);