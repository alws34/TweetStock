import React, { useState, useEffect } from "react";
import LoadingCircle from "../../Shared/LoadingCircle";
import PageHeader from "../../Shared/PageHeader/PageHeader";
import TweetsContainer from "../../Shared/Tweet/TweetsContainer";
//import Prediction from "../../Shared/Stock/Prediction";
import { apiUrlTwitter } from "../../Configs/apiUrlsKeys";
import { useStateWithCallbackLazy } from "use-state-with-callback";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../../Configs/Global";

export default function PopularTweets(props) {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [tweetsArr, setTweetsArr] = useStateWithCallbackLazy([]);
  const [isLoading, setIsLoading] = useState(true);
  let ticker = useLocation().state;
  try {
    ticker = ticker.toUpperCase();
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
          let tweets = res.statuses;
          if (tweets.length === 0) {
            return MySwal.fire({
              background:
                global.config.theme === "dark"
                  ? global.config.darkBG
                  : global.config.lightBG,
              color: global.config.theme === "dark" ? "white" : "black",
              icon: "error",
              title: "Oops...",
              text: "No popular tweets were found about this stock!",
              footer: "Please try searching another one...",
            }).then((result) => {
              navigate(-1);
            });
          } else {
            setTweetsArr(tweets, () => setIsLoading(false));
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
      {isLoading ? <LoadingCircle /> : <TweetsContainer tweets={tweetsArr} />}
    </div>
  );
}
