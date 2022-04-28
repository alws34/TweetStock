import * as React from "react";
import { Box } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function StockDetails(props) {
  function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        className="BoxItem"
        sx={{
          bgcolor: "#d3dbe8",
          color: "black",
          p: 1,
          m: 0.4,
          marginLeft: 0,
          borderRadius: 0.8,
          textAlign: "center",
          fontSize: "1.2rem",
          fontWeight: "700",
          display: "flex",
          justifyContent: "space-between",
          ...sx,
        }}
        {...other}
      />
    );
  }

  return (
    <div>
      <Row>
        <Col>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div xs={8} md={7}>
              <Item>
                <u>Name:</u> {props.stockData.displayName}
              </Item>
            </div>
            <div xs={8} md={7}>
              <Item>
                <u>Full Name:</u> {props.stockData.fullExchangeName}
              </Item>
            </div>
            <div xs={4} md={5}>
              <Item>
                <u>Symbol:</u> {props.stockData.symbol}
              </Item>
            </div>
            <div xs={4}>
              <Item>
                <u>Open:</u> {props.stockData.regularMarketOpen}
              </Item>
            </div>
            <div xs={4}>
              <Item>
                <u>Close:</u> {props.stockData.regularMarketPrice}
              </Item>
            </div>
            <div xs={4}>
              <Item>
                <u>High:</u> {props.stockData.regularMarketDayHigh}
              </Item>
            </div>
            <div xs={6}>
              <Item>
                <u>Volume:</u> {props.stockData.regularMarketVolume}
              </Item>
            </div>
            <div xs={6}>
              <Item>
                <u>Average Volume:</u>
                {props.stockData.averageDailyVolume3Month}
              </Item>
            </div>
          </div>
        </Col>
        <Col>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div xs={8} md={7}>
              <Item>
                <u>Region:</u> {props.stockData.region}
              </Item>
            </div>
            <div xs={4} md={5}>
              <Item>
                <u>Currency:</u> {props.stockData.financialCurrency}
              </Item>
            </div>
            <div xs={6}>
              <Item>
                <u>Change Range:</u> {props.stockData.regularMarketDayRange}
              </Item>
            </div>
            <div xs={6}>
              <Item>
                <u>52 Week Range:</u> {props.stockData.fiftyTwoWeekRange}
              </Item>
            </div>
            <div xs={6}>
              <Item>
                <u>Bid:</u> {props.stockData.bid}
              </Item>
            </div>
            <div xs={6}>
              <Item>
                <u>Ask:</u> {props.stockData.ask}
              </Item>
            </div>
            <div xs={6}>
              <Item>
                <u>Market Cap:</u> {props.stockData.marketCap}
              </Item>
            </div>
            <div xs={6}>
              <Item>
                <u>ESP:</u> {props.stockData.epsTrailingTwelveMonths}
              </Item>
            </div>
          </div>
          <div xs={6}>
            <Item>
              <u>Price Now:</u>{" "}
              {props.stockData.postMarketPrice
                ? props.stockData.postMarketPrice
                : ""}
            </Item>
          </div>
        </Col>
      </Row>
    </div>
  );
}
