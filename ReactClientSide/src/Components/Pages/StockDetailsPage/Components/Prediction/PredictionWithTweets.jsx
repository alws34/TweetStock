import React from "react";
import "../../StockDetailsPageStyles.css";
import Prediction from "../../../../Shared/Prediction/Prediction";
import { PredictionStatsPopUp } from "./PredictionStatsPopUp";

export default function PredictionWithTweets(props) {
  const predictionResponse = props.predictionResponse;
  const ticker = props.ticker;
  var tweetsArr = [];
  var statsTableData = [];

  if (predictionResponse) {
    const renames = {
      //last_update: "Last Updated At:",
      n_likes: "Like Score:",
      n_retweets: "Retweet Score:",
      n_replies: "Reply Score:",
      u_engagement: "User Engagement Score:",
      s_compound: "Sentiment Score:",
    };

    predictionResponse["Tweets"] &&
      Object.keys(predictionResponse["Tweets"]).forEach((key, index) => {
        tweetsArr.push(predictionResponse["Tweets"][key]);
      });

    predictionResponse["Prediction"] &&
      Object.keys(predictionResponse["Prediction"]).forEach((key, index) => {
        if (renames[key] !== undefined)
          statsTableData.push({
            label: renames[key] === undefined ? key : renames[key],
            value: Number.parseFloat(
              predictionResponse["Prediction"][key]
            ).toFixed(3),
          });
      });
    statsTableData.push({
      label: "Prediction:",
      value:
        predictionResponse["Prediction"]["prediction"] == 1 ? "Up" : "Down",
    });
  }

  return (
    <div className="predictionWithTweets">
      {predictionResponse === false ? (
        <div>
          <p style={{ margin: 0 }}>No prediction available for this stock</p>
          {/* <br /> */}
          <p style={{ margin: 0 }}>Please try one of the following:</p>
          {/* <br /> */}
          <p style={{ margin: 0 }}>AAPL, AMZN, GOOG, MSFT, TSLA</p>
        </div>
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
          {predictionResponse !== null && (
            <PredictionStatsPopUp
              tweetsArr={tweetsArr}
              predictionData={statsTableData}
              lastUpdated={
                predictionResponse &&
                predictionResponse["Prediction"]["last_update"]
              }
              ticker={ticker}
              dir={
                predictionResponse &&
                predictionResponse["Prediction"]["prediction"] === 1
                  ? "up"
                  : "down"
              }
            />
          )}
        </div>
      )}
    </div>
  );
}
