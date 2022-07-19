import React from "react";
import Tweet from "./Tweet";
import "./TweetStyles.css";

export default function TweetsContainer(props) {
  return (
    <div className="tweetsContainer">
      {props.tweets &&
        props.tweets.map((tweet) => (
          <Tweet key={tweet.id_str} tweetId={tweet.id_str} />
        ))}
    </div>
  );
}
