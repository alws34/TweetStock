import React from "react";
import "../../StockDetailsPageStyles.css";
import Prediction from "../../../../Shared/Prediction/Prediction";
import { PredictionStatsPopUp } from "./PredictionStatsPopUp";

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
          <PredictionStatsPopUp
            tweetsArr={tweetsArr}
            predictionData={
              predictionResponse && predictionResponse["Prediction"]
            }
          />
        </div>
      )}
    </div>
  );
}
