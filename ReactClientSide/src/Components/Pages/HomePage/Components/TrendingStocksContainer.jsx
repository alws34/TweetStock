import React from "react";
import StockChart from "../../../Shared/Stock/StockChart";
import "../HomePageStyles.css";

export default function TrendingStocksContainer(props) {
  const [invalidStockCounter, setInvalidStockCounter] = React.useState(0);
  // const StockChartsContainer = (props) => {
  //   return props.stocks.map((stock) => (
  //     <StockChart
  //       key={stock.symbol}
  //       stock_name={stock.symbol}
  //       stock_ticker={stock.symbol}
  //     />
  //   ));
  // };
  const updateInvalidStocksCounter = () => {
    setInvalidStockCounter((prev) => prev + 1);
  };
  React.useEffect(
    () => console.log(invalidStockCounter),
    [invalidStockCounter]
  );
  return invalidStockCounter === props.trendingStocks.length ? (
    "Only Trending Crypto Available "
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
      {/* <StockChartsContainer stocks={props.trendingStocks} /> */}
    </div>
  ) : (
    ""
  );
}
