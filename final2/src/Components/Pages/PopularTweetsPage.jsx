import React, { useState, useEffect } from "react";
import { useStateWithCallbackLazy } from "use-state-with-callback";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { useLocation, useNavigate } from "react-router-dom";
import { apiUrlTwitter } from "../Configs/apiUrlsKeys";
import LoadingCircle from "../LoadingCircle";
import Eheader from "../EHeader";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function PopularTweets(props) {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [tweetsArr, setTweetsArr] = useStateWithCallbackLazy([]);
  const [isLoading, setIsLoading] = useState(true);
  //let ticker = 'tsla'//props.text;
  let ticker = useLocation().state;
  try {
    ticker = ticker.toUpperCase();
    console.log(ticker);
  } catch (e) {
    console.log(e);
  }
  useEffect(() => {
    // if (ticker) {
    fetch(apiUrlTwitter + `/?ticker=${ticker}`, {
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
          console.log("fetch res= ", res.statuses);
          let tweets = res.statuses;
          if (tweets.length === 0) {
            return MySwal.fire({
              icon: "error",
              title: "Oops...",
              text: "No popular tweets were found about this stock!",
              footer: "Please try searching another one...",
            }).then((result) => {
              navigate(-1);
            });
          } else {
            console.log("before ", tweets);
            let rendered_tweets = tweets.map((tweet) =>
              renderTweet(tweet.id_str)
            );
            console.log("after ", rendered_tweets);
            setTweetsArr(rendered_tweets, () => setIsLoading(false));
          }
        },
        (error) => {
          console.log("err=", error);
        }
      );
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderTweet = (tweetId) => {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: 380 }}>
          <TwitterTweetEmbed
            key={tweetId}
            onLoad={function noRefCheck() {}}
            options={{
              width: 380,
              hideCard: false,
              hideThread: false,
            }}
            placeholder={<LoadingCircle />}
            tweetId={tweetId}
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      <Eheader text={`$${ticker.toUpperCase()} Tweets`} />
      {isLoading ? <LoadingCircle /> : tweetsArr}
    </div>
  );
}
