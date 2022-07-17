import React from "react";
import StockChart from "../../../Shared/Stock/StockChart";
import "../TrendingStocksPageStyles.css";

export default function TrendingStocksContainer(props) {
  const [invalidStockCounter, setInvalidStockCounter] = React.useState(0);

  const updateInvalidStocksCounter = () => {
    setInvalidStockCounter((prev) => prev + 1);
  };
  const handleOnlyCrypto = () => {
    // props.getTrendingStocks && props.getTrendingStocks(invalidStockCounter);
    // return "";
    return (
      <div style={{ padding: 0 }}>
        <p style={{ margin: 0, marginTop: 10 }}>
          Only Trending Crypto Available
        </p>
        <p style={{ margin: 0 }}>Please Try Again Later</p>
      </div>
    );
  };
  React.useEffect(
    () => console.log(invalidStockCounter),
    [invalidStockCounter]
  );
  return invalidStockCounter === props.trendingStocks.length ? (
    handleOnlyCrypto()
  ) : props.hasOwnProperty("trendingStocks") ? (
    <div className="stockChartsContainer">
      {props.trendingStocks.map((stock) => (
        <StockChart
          key={stock.symbol}
          stock_name={stock.symbol}
          stock_ticker={stock.symbol}
          updateInvalidStocksCounter={updateInvalidStocksCounter}
        />
      ))}
    </div>
  ) : (
    ""
  );
}
