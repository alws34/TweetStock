import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";
// import TweetEmbed from 'react-tweet-embed'
import { Row, Col } from "react-bootstrap";

export default function PopularTweets(props) {
  const [tweetsArr, setTweetsArr] = useState([]);
  let ticker = "tsla"; //props.text;
  useEffect(() => {
    // if (ticker) {
    const apiUrl = "https://localhost:44384/api/Twitter?ticker=" + ticker;
    fetch(apiUrl, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json; charset=UTF-8",
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then(
        (result) => {
          let res = JSON.parse(result);
          let tweets = res.statuses;
          tweets.forEach((tweet) => {
            GetEngagement(tweet.id_str, tweet.user.id);
          });
        },
        (error) => {
          console.log("err=", error);
        }
      );
    // }
  }, []);

  const GetEngagement = (tweetId, userId) => {
    fetch("https://localhost:44384/api/Twitter?user_id=" + userId, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json; charset=UTF-8",
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then(
        (result) => {
          let user_tweets = JSON.parse(result);
          let likesCounter = 0,
            rtCounter = 0,
            userEng = 0;
          for (var i = 0; i < user_tweets.length; i++) {
            likesCounter += user_tweets[i].favorite_count;
            rtCounter += user_tweets[i].retweet_count;
          }
          userEng =
            (likesCounter + rtCounter) /
            user_tweets[0].user.followers_count /
            user_tweets.length;
          setTweetsArr((oldArr) => [
            ...oldArr,
            renderTweet(tweetId, userId, userEng),
          ]);
        },
        (error) => {
          console.log("err post=", error);
        }
      );

    const renderTweet = (tweetId, userId, userEng) => {
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "30%" }}>
            <TwitterTweetEmbed tweetId={tweetId} />
          </div>
          <div style={{ marginTop: "40px", marginLeft: 10 }}>
            <h2>User Id: {userId}</h2>
            <h4>User Engagement Score: {userEng}</h4>
          </div>
        </div>
      );
    };
  };
  return (
    <div>
      Hadar
      {/* {tweetsArr} */}
    </div>
  );
}
