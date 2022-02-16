using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading.Tasks; //added
using Tweetinvi; //added
using Tweetinvi.Parameters; //added
using Tweetinvi.Models; //added
using Tweetinvi.Parameters.Enum; //added
using Tweetinvi.Parameters.V2; //added


namespace TweetStock.Models
{
    public class TwitterModel
    {
        const string apiKey = "mymakG2knztQ2GYaTNaRGTIOi";
        const string apiKeySecret = "lGXmXu9K7DQftUjvVempNg1vGjS362zbKo7p12yaa5RrBelIlj";
        const string accessToken = "561299890-kjoCtIBYvSHeIVfhYEbHfNXHAqVklnMze2Wce1JT";
        const string accessTokenSecret = "U1fR9nx24H1Eo3dvlLYO9LhDxwYWWZ5x2JEltgA4xUy6o";

        public TwitterModel() { }
        public async Task<Object> getByURL(string url)
        {
            var tc = new TwitterClient(apiKey, apiKeySecret, accessToken, accessTokenSecret);

            // enable track and await - because of rate limit
            tc.Config.RateLimitTrackerMode = RateLimitTrackerMode.TrackAndAwait;

            var mentionResult = await tc.Execute.RequestAsync(request =>
            {
                //request.Url = "https://api.twitter.com/2/users/1136405967489425410/tweets"; //Returns most recent Tweets composed a specified user ID
                //request.Url = "https://api.twitter.com/2/tweets/1463392778398973953/liking_users"; //get information about a Tweet’s liking users
                //request.Url = "https://api.twitter.com/1.1/search/tweets.json?q=$tsla&count=100&result_type=popular"; // get popular tweets about $tsla and count = 100
                request.Url = url;
                request.HttpMethod = HttpMethod.GET;
            });

            var jsonResponse = mentionResult.Content;

            return jsonResponse;
        }
    }
}