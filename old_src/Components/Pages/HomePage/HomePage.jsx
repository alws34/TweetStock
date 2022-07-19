import React from "react";
import StockChart from "../../Shared/Stock/StockChart";
import PageHeader from "../../Shared/PageHeader/PageHeader";
import { ref, onValue, push } from "firebase/database";
import { getRealTimeDBRef } from "../../Configs/FirebaseConfig";

export default function HomePage() {
  const stocks = ["AAPL", "AMZN", "GOOG", "MSFT", "TSLA"];
  const [stocksData, setStocksData] = React.useState([]);

  const getStockAccuracy = (stock) => {
    let total = 0;
    let correct = 0;
    Object.keys(stock).forEach((key) => {
      total++;
      if (
        stock[key]["Prediction"]["prediction"] ===
        stock[key]["Volatility"]["Actual_volatility"]
      )
        correct++;
    });
    let accuracy = correct / total;
    return accuracy * 100;
  };

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

  const fetchLastPrediction = () => {
    const dbRef = getRealTimeDBRef("/PredictionDB");
    onValue(
      dbRef,
      (snapshot) => {
        let res = snapshot.val();
        Object.keys(res).forEach((key) => {
          let latestUpdate = getLatestUpdate(res[key]);
          let acc = getStockAccuracy(res[key]);

          setStocksData((prev) => [
            ...prev,
            {
              ticker: key,
              predictionDir: latestUpdate["Prediction"]["prediction"],
              accuracy: acc,
              nPredictionDays: Object.keys(res).length,
            },
          ]);
        });
      },
      (errorObject) => {
        console.log("The read failed: " + errorObject.name);
      }
    );
  };
  React.useEffect(fetchLastPrediction, []);
  return (
    <div className="HomePageContainer">
      <PageHeader text={"Home Page"} />
      <p>Predictions available for the following stocks</p>

      {stocksData.map((stockData) => (
        <StockChart
          key={stockData.ticker}
          stock_name={stockData.ticker}
          stock_ticker={stockData.ticker}
          predictionDir={stockData.predictionDir}
          predictionAccuracy={stockData.accuracy}
          nPredictionDays={stockData.nPredictionDays}
        />
      ))}
    </div>
  );
}
