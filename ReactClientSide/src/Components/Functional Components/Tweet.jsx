import React from "react";
import LoadingCircle from "./LoadingCircle";
import { TwitterTweetEmbed } from "react-twitter-embed";

export default function Tweet(props) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: 380 }}>
        <TwitterTweetEmbed
          key={props.tweetId}
          onLoad={function noRefCheck() {}}
          options={{
            width: 380,
            hideCard: false,
            hideThread: false,
          }}
          placeholder={<LoadingCircle />}
          tweetId={props.tweetId}
        />
      </div>
    </div>
  );
}
