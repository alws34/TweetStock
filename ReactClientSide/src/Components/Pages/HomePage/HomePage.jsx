import React from "react";
import StockChart from "../../Shared/Stock/StockChart";
import PageHeader from "../../Shared/PageHeader/PageHeader";

export default function HomePage() {
  const stocks = ["AAPL", "AMZN", "GOOG", "MSFT", "TSLA"];

  return (
    <div className="HomePageContainer">
      <PageHeader text={"Home Page"} />
      <p>Predictions available for the following stocks</p>

      {stocks.map((ticker) => (
        <StockChart key={ticker} stock_name={ticker} stock_ticker={ticker} />
      ))}
    </div>
  );
}
