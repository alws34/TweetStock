import React, { useEffect, useState } from "react";
import TrendingStocksContainer from "./Components/TrendingStocksContainer";
import PageHeader from "../../Shared/PageHeader/PageHeader";
import LoadingCircle from "../../Shared/LoadingCircle";
import { rapidApiKey } from "../../Configs/apiUrlsKeys";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function HomePage() {
  const [trendingStocks, setTrendingStocks] = useState(null);
  const MySwal = withReactContent(Swal);
  const STOCK_GRAPHS_COUNT = 5;

  const getTrendingStocks = (countOffset) => {
    fetch(
      `https://stock-data-yahoo-finance-alternative.p.rapidapi.com/v1/finance/trending/US?count=${
        STOCK_GRAPHS_COUNT + countOffset
      }`,
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
          let stocks = result.finance.result[0].quotes;
          setTrendingStocks(stocks);
        },
        (error) => {
          MySwal.fire({
            background:
              global.config.theme === "dark"
                ? global.config.darkBG
                : global.config.lightBG,
            color: global.config.theme === "dark" ? "white" : "black",
            icon: "error",
            title: "Oops... Something went wrong",
            text: "We couldn't Get Trending stocks at this time...",
            footer: "please try Refreshing the page or try again later",
          });
        }
      );
  };

  useEffect(() => getTrendingStocks(0), []);

  return (
    <div className="TrendingStocksPage">
      <PageHeader text="Trending Stocks" />

      {trendingStocks ? (
        <TrendingStocksContainer
          trendingStocks={trendingStocks}
          getTrendingStocks={getTrendingStocks}
        />
      ) : (
        <LoadingCircle />
      )}
    </div>
  );
}
