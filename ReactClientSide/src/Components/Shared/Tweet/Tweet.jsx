import React, { useEffect, useState } from "react";
import LoadingCircle from "../LoadingCircle";
import "./TweetStyles.css";
import { TwitterTweetEmbed } from "react-twitter-embed";
import "../../Configs/Global";

export default function Tweet(props) {
  const [theme, setTheme] = useState(global.config.theme);
  //const theme = global.config.theme;

  useEffect(() => {
    setTheme(global.config.theme);
  }, [global.config.theme]);

  return (
    <div className="tweetContainer">
      <div>
        <TwitterTweetEmbed
          key={props.tweetId}
          tweetId={props.tweetId}
          options={{
            width: 380,
            hideCard: false,
            hideThread: false,
            theme: theme,
          }}
          //onLoad={function noRefCheck() {}}
          placeholder={<LoadingCircle />}
        />
      </div>
    </div>
  );
}
