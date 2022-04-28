import React, { useState, useEffect } from "react";
import { useStateWithCallbackLazy } from "use-state-with-callback";
import { useLocation, useNavigate } from "react-router-dom";
import { apiUrlTwitter, apiUrlFlask } from "../Configs/apiUrlsKeys";
import LoadingCircle from "../Functional Components/LoadingCircle";
import PageHeader from "../Functional Components/PageHeader";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Prediction from "../Functional Components/Prediction";
import Tweet from "../Functional Components/Tweet";

export default function PopularTweets(props) {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [tweetsArr, setTweetsArr] = useStateWithCallbackLazy([]);
  const [isLoading, setIsLoading] = useState(true);
  let ticker = useLocation().state;
  try {
    ticker = ticker.toUpperCase();
    console.log(ticker);
  } catch (e) {
    console.log(e);
  }
  useEffect(() => {
    fetchTwitterPopularTweets(ticker);
    //fetchFlaskStockPrediction(ticker);
  }, []);

  const fetchTwitterPopularTweets = (ticker) => {
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
            let rendered_tweets = tweets.map((tweet) => (
              <Tweet tweetId={tweet.id_str} />
            ));
            console.log("after ", rendered_tweets);

            tweets.forEach((tweet) => console.log(tweet.id_str));
            setTweetsArr(rendered_tweets, () => setIsLoading(false));
          }
        },
        (error) => {
          console.log("err=", error);
        }
      );
  };

  return (
    <div>
      <PageHeader text={`$${ticker.toUpperCase()} Tweets`} />
      {isLoading ? <LoadingCircle /> : tweetsArr}
    </div>
  );
}
