import React, { useEffect, useState } from "react";
import Stock from "../Functional Components/Stock";
import EHeader from "../Functional Components/EHeader";
import { rapidApiKey } from "../Configs/apiUrlsKeys";
import LoadingCircle from "../Functional Components/LoadingCircle";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function HomePage() {
  const [trendingStocks, setTrendingStocks] = useState(null);
  const MySwal = withReactContent(Swal);

  const getTrendingStocks = () => {
    fetch(
      "https://stock-data-yahoo-finance-alternative.p.rapidapi.com/v1/finance/trending/US?count=10",
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
        console.log("homepage=", res);
        return res.json();
      })
      .then(
        (result) => {
          let stocks = result.finance.result[0].quotes;
          console.log("fetch apiStock= ", stocks);
          setTrendingStocks(stocks);
        },
        (error) => {
          MySwal.fire({
            icon: "error",
            title: "Oops... Something went wrong",
            text: "We couldn't Get Trending stocks at this time...",
            footer: "please try Refreshing the page or try again later",
          });
        }
      );
  };
  useEffect(getTrendingStocks, []);
  return (
    <div>
      <EHeader text="Trending Stocks" />
      {trendingStocks ? (
        trendingStocks.map((stock) =>
          stock.symbol === ":entitySlug" ? (
            ""
          ) : (
            <Stock stock_name={stock.symbol} stock_ticker={stock.symbol} />
          )
        )
      ) : (
        <LoadingCircle />
      )}
    </div>
  );
}
