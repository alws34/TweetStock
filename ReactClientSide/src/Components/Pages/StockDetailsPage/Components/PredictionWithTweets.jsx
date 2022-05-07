import React from "react";
import "../StockDetailsPageStyles.css";
import Tweet from "../../../Shared/Tweet/Tweet";
import PredTable from "./PredictionStatsTable/PredictionTable";
import Prediction from "../../../Shared/Prediction/Prediction";

export default function PredictionWithTweets(props) {
  const flaskResponse = props.flaskResponse;
  const ticker = props.ticker;
  return (
    <div className="predictionWithTweets">
      <div className="predictionContainer">
        <Prediction
          isLoading={flaskResponse === null}
          size={"400px"}
          ticker={ticker}
          dir={
            flaskResponse && flaskResponse["prediction"] === 1 ? "up" : "down"
          }
        ></Prediction>
      </div>
      <div className="tweetsAndTableContainer">
        {flaskResponse &&
          flaskResponse["tweets"].map((tweet) => {
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
      </div>
    </div>
  );
}
