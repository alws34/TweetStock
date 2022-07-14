import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { navPaths } from "../../../Configs/navPaths";
import { useNavigate } from "react-router-dom";
import "../StockChartStyles.css"

export default function StockChartPanel(props) {
  const navigate = useNavigate();
  const directionEmojis = {
    up: "🚀",
    down: "💩",
    "": "",
  };

  const StockButton = () => (
    <div style={{ textAlign: "center", marginBottom: "vh" }}>
      <Button
        size="small"
        color="primary"
        variant="contained"
        onClick={() =>
          navigate(navPaths["about"], {
            state: { ticker: props.stock_ticker, data: null },
          })
        }
      >
        <ReadMoreIcon>details</ReadMoreIcon>
      </Button>
    </div>
  );
  const Price = () => (
    <Typography>
      {props.price} $ {directionEmojis[props.direction]}
    </Typography>
  );
  const Time = () => (
    <Typography>
      {props.priceTime &&
        props.priceTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
    </Typography>
  );

  return (
    <div
      className="stockChartPanelContainer"
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Time />
      <Price />
      {!props.hideInfoPanel && <StockButton />}
    </div>
  );
}
