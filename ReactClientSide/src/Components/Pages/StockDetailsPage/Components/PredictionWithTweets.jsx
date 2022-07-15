import React from "react";
import "../StockDetailsPageStyles.css";
import Tweet from "../../../Shared/Tweet/Tweet";
import PredTable from "./PredictionStatsTable/PredictionTable";
import Prediction from "../../../Shared/Prediction/Prediction";

export default function PredictionWithTweets(props) {
  const predictionResponse = props.predictionResponse;
  const ticker = props.ticker;
  var tweetsArr = [];
  if (predictionResponse) {
    Object.keys(predictionResponse["Tweets"]).forEach((key, index) => {
      var tweet = predictionResponse["Tweets"][key];
      tweetsArr.push(tweet);
    });
  }
  return (
    <div className="predictionWithTweets">
      {predictionResponse === false ? (
        "no pred"
      ) : (
        <div className="predictionContainer">
          <Prediction
            isLoading={predictionResponse === null}
            size={"400px"}
            ticker={ticker}
            dir={
              predictionResponse &&
              predictionResponse["Prediction"]["prediction"] === 1
                ? "up"
                : "down"
            }
          ></Prediction>
          {/* <div className="tweetsAndTableContainer">
        {tweetsArr &&
          tweetsArr.length > 0 &&
          tweetsArr.map((tweet) => {
            return (
              <div className="tweetsAndTableContainer">
                <div>
                  <Tweet tweetId={tweet["tweet_id"]} />
                </div>
                <div>
                  <PredTable tweet={tweet}></PredTable>
                </div>
              </div>
            );
          })}
      </div> */}
        </div>
      )}
    </div>
  );
}
