import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { navPaths } from "../../../Configs/navPaths";
import { useNavigate } from "react-router-dom";
import "../StockChartStyles.css";
import "../../../Configs/Global";

export default function StockChartPanel(props) {
  const navigate = useNavigate();
  const directionEmojis = {
    1: ["⬆", "#00B746"],
    "-1": ["⬇", "#EF403C"],
    "": ["", ""],
  };
  const StockButton = () => (
    <div style={{ textAlign: "center", marginBottom: "vh" }}>
      <Button
        size="small"
        color="primary"
        variant="contained"
        onClick={() =>
          navigate(navPaths["stock details"], {
            state: { ticker: props.stock_ticker, data: null },
          })
        }
      >
        <ReadMoreIcon>details</ReadMoreIcon>
      </Button>
    </div>
  );
  const Price = () => <Typography>{props.price}$</Typography>;

  const Time = () => (
    <Typography>
      {props.priceTime &&
        props.priceTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
    </Typography>
  );

  const PredictionDir = () => {
    if (!directionEmojis[props.predictionDir]) return "";
    return (
      <Typography style={{ color: directionEmojis[props.predictionDir][1] }}>
        Prediction: {directionEmojis[props.predictionDir][0]}
      </Typography>
    );
  };

  const PredictionAccuracy = (props) => {
    if (!props.accuracy || !props.nPredictionDays) return false;
    return (
      <Typography>
        Accuracy: {props.accuracy}% ({props.nPredictionDays} Days)
      </Typography>
    );
  };

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <div
        className="stockChartPanelContainer"
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "space-around",
          //borderTop: "1px solid white",
          paddingBottom: 10,
        }}
      >
        <PredictionAccuracy
          nPredictionDays={props.nPredictionDays}
          accuracy={props.predictionAccuracy}
        />
        <PredictionDir />
      </div>
      <div
        className="stockChartPanelContainer"
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "space-around",
          borderTop:
            global.config.theme === "dark"
              ? "1px solid white"
              : "1px solid black",
          paddingTop: 8,
        }}
      >
        <Time />
        <Price />
        {!props.hideInfoPanel && <StockButton />}
      </div>
    </div>
  );
}
