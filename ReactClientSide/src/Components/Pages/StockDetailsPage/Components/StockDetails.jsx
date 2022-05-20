import * as React from "react";
import { Box } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../Configs/Global";

export default function StockDetails(props) {
  const Item = (props) => {
    const { sx, ...other } = props;
    return (
      <Box
        className="BoxItem"
        sx={{
          bgcolor: global.config.theme === "dark" ? "#424242" : "#d3dbe8",
          color: global.config.theme === "dark" ? "white" : "#black",
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
    "Name:": data.displayName,
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
    "Market Cap:": data.marketCap,
    "ESP:": data.epsTrailingTwelveMonths,
    "Price Now:": data.postMarketPrice ? data.postMarketPrice : "",
  };

  return (
    <div className="stockDetailsContainer">
      <Row>
        <Col xs={12} sm={6} md={12} lg={6}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {Object.keys(lines1).map((text) => (
              <Line key={text} text={text} data={lines1[text]} />
            ))}
          </div>
        </Col>
        <Col xs={12} sm={6} md={12} lg={6}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {Object.keys(lines2).map((text) => (
              <Line key={text} text={text} data={lines2[text]} />
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}

// {
//   /* <Line
//   xs={xs_bootstrap_size}
//   md={7}
//   text={"Name:"}
//   data={props.stockData.displayName}
// />
// <Line
//   xs={xs_bootstrap_size}
//   md={7}
//   text={"Full Name:"}
//   data={props.stockData.fullExchangeName}
// />
// <Line
//   xs={xs_bootstrap_size}
//   md={5}
//   text={"Symbol:"}
//   data={props.stockData.symbol}
// />
// <Line
//   xs={xs_bootstrap_size}
//   text={"Open:"}
//   data={props.stockData.regularMarketOpen}
// />
// <Line
//   xs={xs_bootstrap_size}
//   text={"Close:"}
//   data={props.stockData.regularMarketPrice}
// />
// <Line
//   xs={xs_bootstrap_size}
//   text={"High:"}
//   data={props.stockData.regularMarketDayHigh}
// />
// <Line
//   xs={xs_bootstrap_size}
//   text={"Volume:"}
//   data={props.stockData.regularMarketVolume}
// />
// <Line
//   xs={xs_bootstrap_size}
//   text={"Average Volume:"}
//   data={props.stockData.averageDailyVolume3Month}
// />
// <Line
//   xs={8}
//   md={7}
//   text={"Region:"}
//   data={props.stockData.region}
// /> */
// }

//             {
//               /* <Line
//   xs={4}
//   md={5}
//   text={"Currency:"}
//   data={props.stockData.financialCurrency}
// />
// <Line
//   xs={6}
//   text={"Change Range:"}
//   data={props.stockData.regularMarketDayRange}
// />
// <Line
//   xs={6}
//   text={"52 Week Range:"}
//   data={props.stockData.fiftyTwoWeekRange}
// />
// <Line xs={6} text={"Bid:"} data={props.stockData.bid} />
// <Line xs={6} text={"Ask:"} data={props.stockData.ask} />
// <Line
//   xs={6}
//   text={"Market Cap:"}
//   data={props.stockData.marketCap}
// />
// <Line
//   xs={6}
//   text={"ESP:"}
//   data={props.stockData.epsTrailingTwelveMonths}
// />
// <Line
//   xs={6}
//   text={"Price Now:"}
//   data={
//     props.stockData.postMarketPrice
//       ? props.stockData.postMarketPrice
//       : ""
//   }
// /> */
//             }
