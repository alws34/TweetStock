import * as React from "react";
import { Box } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function StockDetails(props) {
  const Item = (props) => {
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
  };

  const Line = (props) => {
    const xs = props.xs ? props.xs : null;
    const md = props.md ? props.md : null;
    return (
      <div xs={xs} md={md}>
        <Item>
          <u>{props.text}</u> {props.data}
        </Item>
      </div>
    );
  };

  return (
    <div>
      <Row>
        <Col>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Line
              xs={8}
              md={7}
              text={"Name:"}
              data={props.stockData.displayName}
            />
            <Line
              xs={8}
              md={7}
              text={"Full Name:"}
              data={props.stockData.fullExchangeName}
            />
            <Line
              xs={4}
              md={5}
              text={"Symbol:"}
              data={props.stockData.symbol}
            />
            <Line
              xs={4}
              text={"Open:"}
              data={props.stockData.regularMarketOpen}
            />
            <Line
              xs={4}
              text={"Close:"}
              data={props.stockData.regularMarketPrice}
            />
            <Line
              xs={4}
              text={"High:"}
              data={props.stockData.regularMarketDayHigh}
            />
            <Line
              xs={6}
              text={"Volume:"}
              data={props.stockData.regularMarketVolume}
            />
            <Line
              xs={6}
              text={"Average Volume:"}
              data={props.stockData.averageDailyVolume3Month}
            />
          </div>
        </Col>
        <Col>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Line
              xs={8}
              md={7}
              text={"Region:"}
              data={props.stockData.region}
            />
            <Line
              xs={4}
              md={5}
              text={"Currency:"}
              data={props.stockData.financialCurrency}
            />
            <Line
              xs={6}
              text={"Change Range:"}
              data={props.stockData.regularMarketDayRange}
            />
            <Line
              xs={6}
              text={"52 Week Range:"}
              data={props.stockData.fiftyTwoWeekRange}
            />
            <Line xs={6} text={"Bid:"} data={props.stockData.bid} />
            <Line xs={6} text={"Ask:"} data={props.stockData.ask} />
            <Line
              xs={6}
              text={"Market Cap:"}
              data={props.stockData.marketCap}
            />
            <Line
              xs={6}
              text={"ESP:"}
              data={props.stockData.epsTrailingTwelveMonths}
            />
            <Line
              xs={6}
              text={"Price Now:"}
              data={
                props.stockData.postMarketPrice
                  ? props.stockData.postMarketPrice
                  : ""
              }
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
