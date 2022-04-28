import React, { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import StockChart from "../../Functional Components/StockChart";
import { Button } from "@mui/material";
import StockAbout from "./StockAbout";
import { Row, Col } from "react-bootstrap";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";

export default function About() {
  let ticker = "TSLA";
  const [stockData, setStockData] = useState(null);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  //const navigate = useNavigate();
  useEffect(() => {
    fetch(
      `https://stock-data-yahoo-finance-alternative.p.rapidapi.com/v6/finance/quote?symbols=${ticker}%2CETH-USD`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "stock-data-yahoo-finance-alternative.p.rapidapi.com",
          "x-rapidapi-key":
            "0166b1ca95msh3727cc820e78dc0p1573d0jsnecd4751e5ee2",
        },
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("fetch apiStock= ", result.quoteResponse.result[0]);
          let s = result.quoteResponse.result[0];
          setStockData(
            <StockAbout
              name={s.displayName}
              fullName={s.fullExchangeName}
              symbol={s.symbol}
              source={s.quoteSourceName}
              region={s.region}
              currency={s.financialCurrency}
              priceNow={s.postMarketPrice}
              openPrice={s.regularMarketOpen}
              closePrice={s.regularMarketPrice}
              highPrice={s.regularMarketDayHigh}
              changeRange={s.regularMarketDayRange}
              bid={s.bid}
              ask={s.ask}
              week52Range={s.fiftyTwoWeekRange}
              volume={s.regularMarketVolume}
              avgVolume={s.averageDailyVolume3Month}
              marketCap={s.marketCap}
              esp={s.epsTrailingTwelveMonths}
            />
          );
        },
        (error) => {
          console.log("err post=", error);
        }
      );
  }, []);

  return (
    <div className="container-fluid">
      <Row xs={1} md={2}>
        <Col xs={1} md={2} style={{ width: "50%", flexGrow: 1, marginTop: 70 }}>
          <div>{stockData}</div>
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 10 }}
          >
            <Button variant="outlined" size="medium">
              The most Popular Tweets
            </Button>
            {/*onClick={() => navigate('/PopularTweets', { replace: true })}*/}
            <Checkbox
              style={{ color: "red" }}
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />
          </div>
        </Col>
        <Col style={{ flexGrow: 0 }}>
          <StockChart stock_name="Tesla" stock_ticker="TSLA" />
        </Col>
      </Row>
    </div>
  );
}
