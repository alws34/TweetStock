import React, { useState, useEffect } from "react";
import "./StockDetailsPageStyles.css";
import StockDetails from "./Components/StockDetails";
import StockChart from "../../Shared/Stock/StockChart";
import PageHeader from "../../Shared/PageHeader/PageHeader";
import LoadingCircle from "../../Shared/LoadingCircle";
import { rapidApiKey } from "../../Configs/apiUrlsKeys";
// import { navPaths } from "../../Configs/navPaths";
import { isLoggedUser } from "../../Configs/getLoggedUser";
import { useLocation } from "react-router-dom";
// import { Button, Checkbox } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import "reactjs-popup/dist/index.css";
import LoggedUserFeatures from "./Components/LoggedUserFeatures";
import PredictionWithTweets from "./Components/Prediction/PredictionWithTweets";
import "../../Configs/Global";
import { getNameFromTicker } from "../../Shared/NavBar/Components/NavSearch/TickerOptions";
import { ref, onValue, push } from "firebase/database";
import { getRealTimeDBRef } from "../../Configs/FirebaseConfig";
import { PopularTweetsPopup } from "./Components/PopularTweetsPopup";

export default function StockDetailsPage() {
  const [stockData, setStockData] = useState(null);
  const [predictionResponse, setPredictionResponse] = useState(null);
  const [stockAccuracy, setStockAccuracy] = useState("");

  const isLoggedIn = isLoggedUser();
  let ticker = useLocation().state.ticker;
  let tickerDisplayName = getNameFromTicker(ticker);
  let data = useLocation().state.data;

  const getLatestUpdate = (res) => {
    // should return the last updated db object
    //(res -> firebase db result json of single stock containing dates)

    // opt 1- get last key
    var lastKey;
    for (var key in res) {
      if (res.hasOwnProperty(key)) {
        lastKey = key;
      }
    }
    return res[lastKey];
  };

  const getStockAccuracy = (stock) => {
    let total = 0;
    let correct = 0;
    var BreakException = {};
    try {
      Object.keys(stock).forEach((key) => {
        if (stock[key]["Volatility"] === undefined) throw BreakException;

        total++;
        if (
          stock[key]["Prediction"]["prediction"] ===
          stock[key]["Volatility"]["Actual_volatility"]
        )
          correct++;
      });
    } catch (e) {
      if (e !== BreakException) throw e;
    }
    let accuracy = correct / total;
    return { accuracy: accuracy * 100, nDays: total };
  };

  const fetchLastPrediction = () => {
    if (!ticker) return false;
    let upper_case_ticker = ticker.toUpperCase();
    if (
      upper_case_ticker !== "TSLA" &&
      upper_case_ticker !== "AMZN" &&
      upper_case_ticker !== "AAPL" &&
      upper_case_ticker !== "GOOG" &&
      upper_case_ticker !== "MSFT"
    ) {
      setPredictionResponse(false);
      return false;
    } else {
      // Attach an asynchronous callback to read the data at our posts reference
      const dbRef = getRealTimeDBRef("/PredictionDB/" + upper_case_ticker);
      onValue(
        dbRef,
        (snapshot) => {
          let res = snapshot.val();
          console.log(res);
          let accResult = getStockAccuracy(res);
          setStockAccuracy({
            accuracy: accResult.accuracy,
            nPredictionDays: accResult.nDays,
          });
          let latestUpdate = getLatestUpdate(res);
          setPredictionResponse(latestUpdate);
        },
        (errorObject) => {
          console.log("The read failed: " + errorObject.name);
        }
      );
    }
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
        return res.json();
      })
      .then(
        (result) => {
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
    setPredictionResponse(null);
    data ? setStockData(data) : fetchStockDetails();
    fetchLastPrediction();

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
          <PredictionWithTweets
            ticker={ticker}
            predictionResponse={predictionResponse}
          />
          <Row xs={1} md={2}>
            <Col style={{ flexGrow: 0, marginTop: 10 }}>
              <StockChart
                stock_name={stockData.displayName}
                predictionDir={
                  predictionResponse &&
                  predictionResponse["Prediction"]["prediction"]
                }
                stock_ticker={ticker}
                hideInfoPanel={true}
                predictionAccuracy={stockAccuracy["accuracy"]}
                nPredictionDays={stockAccuracy["nPredictionDays"]}
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
        </div>
      )}
    </div>
  );
}
