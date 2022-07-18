import * as React from "react";
import { Box } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../Configs/Global";

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const presentNumber = (x) => {
  let units;
  let divider;
  let k = 1000;
  let m = k * 1000;
  let b = m * k;
  if (typeof x === "string" || x < 100 * k) return x;
  else if (x < m) {
    units = "K";
    divider = k;
  } else if (x < b) {
    units = "M";
    divider = m;
  } else {
    units = "B";
    divider = b;
  }
  return `${numberWithCommas((x / divider).toFixed(3))} ${units}`;
};

export default function StockDetails(props) {
  const Item = (props) => {
    const { sx, ...other } = props;
    return (
      <Box
        className="BoxItem"
        sx={{
          bgcolor:
            global.config.theme === "dark"
              ? global.config.darkBG
              : global.config.lightBG,
          color: global.config.theme === "dark" ? "white" : "black",
          p: 0.4,
          m: 0.4,
          marginLeft: 0,
          borderRadius: 0.75,
          textAlign: "center",
          fontSize: "1.1rem",
          fontWeight: "700",
          display: "flex",
          justifyContent: "space-between",
          ...sx,
        }}
        {...other}
      />
    );
  };

  const Line = (props) => {
    return (
      <div xs={12} md={5}>
        <Item>
          <u>{props.text}</u> {props.data}
        </Item>
      </div>
    );
  };

  const data = props.stockData;
  const lines1 = {
    "Name:": props.tickerDisplayName,
    "Full Name:": data.fullExchangeName,
    "Symbol:": data.symbol,
    "Open:": data.regularMarketOpen,
    "Close:": data.regularMarketPrice,
    "High:": data.regularMarketDayHigh,
    "Volume:": data.regularMarketVolume,
    "Average Volume:": data.averageDailyVolume3Month,
    "Region:": data.region,
  };
  const lines2 = {
    "Currency:": data.financialCurrency,
    "Change Range:": data.regularMarketDayRange,
    "52 Week Range:": data.fiftyTwoWeekRange,
    "Bid:": data.bid,
    "Ask:": data.ask,
    "Market Cap:": parseFloat(data.marketCap),
    "ESP:": data.epsTrailingTwelveMonths,
    "Price Now:": data.postMarketPrice
      ? data.postMarketPrice
      : data.regularMarketPrice,
  };

  return (
    <div className="stockDetailsContainer">
      <Row>
        <Col xs={12} sm={6} md={12} lg={6}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {Object.keys(lines1).map((text) =>
              text ? (
                <Line
                  key={text}
                  text={text}
                  data={presentNumber(lines1[text])}
                />
              ) : (
                ""
              )
            )}
          </div>
        </Col>
        <Col xs={12} sm={6} md={12} lg={6}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {Object.keys(lines2).map((text) =>
              text ? (
                <Line
                  key={text}
                  text={text}
                  data={presentNumber(lines2[text])}
                />
              ) : (
                ""
              )
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}
