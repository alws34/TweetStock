import React from "react";
import StockChart from "../../../Shared/Stock/StockChart";
import "../HomePageStyles.css";

export default function TrendingStocksContainer(props) {
  const StockChartsContainer = (props) => {
    return props.stocks.map((stock) => (
      <StockChart
        key={stock.symbol}
        stock_name={stock.symbol}
        stock_ticker={stock.symbol}
      />
    ));
  };

  return props.hasOwnProperty("trendingStocks") ? (
    <div className="stockChartsContainer">
      <StockChartsContainer stocks={props.trendingStocks} />
    </div>
  ) : (
    ""
  );
}
