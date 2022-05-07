import React from "react";
import Tweet from "../../../Shared/Tweet/Tweet";
import PredTable from "./PredictionStatsTable/PredictionTable";
import Prediction from "../../../Shared/Prediction/Prediction";

export default function PredictionWithTweets(props) {
  const flaskResponse = props.flaskResponse;
  const ticker = props.ticker;
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Prediction
          isLoading={flaskResponse === null}
          size={"400px"}
          ticker={ticker}
          dir={
            flaskResponse && flaskResponse["prediction"] === 1 ? "up" : "down"
          }
        ></Prediction>
      </div>
      <div>
        {flaskResponse &&
          flaskResponse["tweets"].map((tweet) => {
            return (
              <div
                style={{
                  maxWidth: "800px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <div style={{ margin: 0 }}>
                    <Tweet tweetId={tweet["tweet_id"]} />
                  </div>
                  <div style={{ margin: 0 }}>
                    <PredTable tweet={tweet}></PredTable>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
