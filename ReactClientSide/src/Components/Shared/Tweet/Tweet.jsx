import React from "react";
import LoadingCircle from "../LoadingCircle";
import "./TweetStyles.css";
import { TwitterTweetEmbed } from "react-twitter-embed";

export default function Tweet(props) {
  const tweet_options = {
    width: 380,
    hideCard: false,
    hideThread: false,
  };

  return (
    <div className="tweetContainer">
      <div>
        <TwitterTweetEmbed
          key={props.tweetId}
          tweetId={props.tweetId}
          options={tweet_options}
          onLoad={function noRefCheck() {}}
          placeholder={<LoadingCircle />}
        />
      </div>
    </div>
  );
}
