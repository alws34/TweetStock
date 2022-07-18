import React, { useState, useEffect } from "react";
import "./FavoriteStocksPageStyles.css";
import {
  NoFavoriteStocksContainer,
  FavoriteStocksContainer,
} from "./Components/FavoriteStocksContainers";
import PageHeader from "../../Shared/PageHeader/PageHeader";
import LoadingCirle from "../../Shared/LoadingCircle";
import { apiUrlFavorites, rapidApiKey } from "../../Configs/apiUrlsKeys";
import { getLoggedUser, isLoggedUser } from "../../Configs/getLoggedUser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../../Configs/Global";

const MySwal = withReactContent(Swal);

export default function FavoriteStocksPage() {
  const [stocksDataArr, setStocksDataArr] = useState([]);
  const [noFavoriteStocks, setNoFavoriteStocks] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const user = getLoggedUser();

  const fetchFavoriteStocks = () => {
    setStocksDataArr([]);
    // Fetch the favorite stocks from DB - for the current user
    fetch(apiUrlFavorites + `/?userId=${user.Id}`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then(
        (favTickers) => {
          setNoFavoriteStocks(favTickers.length === 0);

          favTickers.forEach((ticker) =>
            fetchStockDataByTicker(ticker.toLowerCase())
          );
          setIsLoading(false);
        },
        (error) => {
          console.log("err =", error);
        }
      );
  };

  const fetchStockDataByTicker = (ticker) => {
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
      .then((res) => res.json())
      .then(
        (result) => {
          let newStockData = result.quoteResponse.result[0];
          setStocksDataArr((oldArr) => [...oldArr, newStockData]);
        },
        (error) => {
          console.log("err post=", error);
        }
      );
  };

  //DELETE Fav stock from DB:
  const deleteFavoriteStock = (ticker) => {
    setStocksDataArr((prevData) =>
      prevData.filter((stock) => stock.symbol !== ticker)
    );
    fetch(apiUrlFavorites + `/?userId=${user.Id}&ticker=${ticker}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json; charset=UTF-8",
      }),
    }).then(
      (res) => {
        if (!res.ok) {
          fetchFavoriteStocks();
          MySwal.fire({
            background:
              global.config.theme === "dark"
                ? global.config.darkBG
                : global.config.lightBG,
            color: global.config.theme === "dark" ? "white" : "black",
            icon: "error",
            title: "Oops...",
            text: "Something went wrong",
          });
        } else {
          setNoFavoriteStocks(stocksDataArr.length === 0);
        }
      },
      (error) => {
        console.log("err delete=", error);
      }
    );
  };

  useEffect(() => {
    if (!isLoggedUser()) {
      return <h1> No logged used user to fetch stocks to... </h1>;
    }
    fetchFavoriteStocks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <PageHeader text={"Favorite Stocks"} />
      {isLoading ? (
        <LoadingCirle />
      ) : noFavoriteStocks ? (
        <NoFavoriteStocksContainer />
      ) : (
        <FavoriteStocksContainer
          stocksData={stocksDataArr}
          deleteFavoriteStock={deleteFavoriteStock}
        />
      )}
    </div>
  );
}
