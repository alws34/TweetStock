import React, { useState, useEffect } from "react";
import "./StockDetailsPageStyles.css";
import StockDetails from "./Components/StockDetails";
import StockChart from "../../Shared/Stock/StockChart";
import PageHeader from "../../Shared/PageHeader/PageHeader";
import LoadingCircle from "../../Shared/LoadingCircle";
import { rapidApiKey, apiUrlFlask } from "../../Configs/apiUrlsKeys";
// import { navPaths } from "../../Configs/navPaths";
import { isLoggedUser } from "../../Configs/getLoggedUser";
import { useLocation } from "react-router-dom";
// import { Button, Checkbox } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import "reactjs-popup/dist/index.css";
import LoggedUserFeatures from "./Components/LoggedUserFeatures";
import PredictionWithTweets from "./Components/PredictionWithTweets";
import "../../Configs/Global";
import { getNameFromTicker } from "../../Shared/NavBar/Components/NavSearch/TickerOptions";

export default function StockDetailsPage() {
  const [stockData, setStockData] = useState(null);
  const [flaskResponse, setFlaskResponse] = useState(null);

  const isLoggedIn = isLoggedUser();
  let ticker = useLocation().state.ticker;
  let tickerDisplayName = getNameFromTicker(ticker);
  let data = useLocation().state.data;

  const fetchFlaskStockPrediction = (ticker) => {
    // GET
    //console.log("FETCHING FROM FLASK", ticker);
    fetch(apiUrlFlask + `/getPrediction?ticker=${ticker}`)
      .then((res) => {
        //console.log("Flask!", res);
        return res.json();
      })
      .then((res) => {
        //console.log("Flask!", res);
        setFlaskResponse(res);
      });
  };

  const fetchStockDetails = () => {
    fetch(
      `https://stock-data-yahoo-finance-alternative.p.rapidapi.com/v6/finance/quote?symbols=${ticker}%2CETH-USD`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "stock-data-yahoo-finance-alternative.p.rapidapi.com",
          "x-rapidapi-key": rapidApiKey,
        },
      }
    )
      .then((res) => {
        // console.log('res=', res);
        return res.json();
      })
      .then(
        (result) => {
          //console.log("fetch apiStock= ", result.quoteResponse.result[0]);
          let s = result.quoteResponse.result[0];
          setStockData(s);
        },
        (error) => {
          console.log("err post=", error);
        }
      );
  };

  useEffect(() => {
    console.clear();

    //console.log("use effect", ticker);
    data ? setStockData(data) : fetchStockDetails();

    //fetchFlaskStockPrediction(ticker);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ticker, data]);

  return (
    <div className="container-fluid">
      <PageHeader text={`${tickerDisplayName} Details`} />
      {stockData === undefined || stockData === null ? (
        <LoadingCircle />
      ) : (
        <div>
          <Row xs={1} md={2}>
            <Col style={{ flexGrow: 0, marginTop: 10 }}>
              <StockChart
                stock_name={stockData.displayName}
                stock_ticker={ticker}
                hideInfoPanel={true}
              />
            </Col>
            <Col
              xs={1}
              md={2}
              style={{ width: "50%", flexGrow: 1, marginTop: 15 }}
            >
              <div>
                <StockDetails
                  stockData={stockData}
                  tickerDisplayName={tickerDisplayName}
                />
              </div>
            </Col>
          </Row>
          {isLoggedIn && <LoggedUserFeatures ticker={ticker} />}
          <PredictionWithTweets ticker={ticker} flaskResponse={flaskResponse} />
        </div>
      )}
    </div>
  );
}
