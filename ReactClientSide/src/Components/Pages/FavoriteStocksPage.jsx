import React, { useState, useEffect } from "react";
import FavCard from "../Functional Components/FavoriteStockCard";
import EHeader from "../Functional Components/PageHeader";
// import { Container, Row, Col } from 'react-bootstrap';
import "../Styles/FavCardsStyle.css";
import { apiUrlFavorites, rapidApiKey } from "../Configs/apiUrlsKeys";
import { getLoggedUser } from "../Configs/getLoggedUser";
import LoadingCirle from "../Functional Components/LoadingCircle";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export default function FavoriteStocksPage() {
  const [stocksDataArr, setStocksDataArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [noFavoriteStocks, setNoFavoriteStocks] = useState(false);
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
        //console.log("res=", res);
        return res.json();
      })
      .then(
        (favTickers) => {
          console.log("fetch favorite stocks arr= ", favTickers);
          if (favTickers.length === 0) setNoFavoriteStocks(true);

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
          console.log("fetch apiStock= ", result.quoteResponse.result);
          let newStockData = result.quoteResponse.result[0];
          setStocksDataArr((oldArr) => [...oldArr, newStockData]);
        },
        (error) => {
          console.log("err post=", error);
        }
      );
  };

  //DELETE Fav stock from DB:
  const deleteFav = (ticker) => {
    console.log(ticker);
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
        console.log("res=", res);
        if (!res.ok) {
          fetchFavoriteStocks();
          MySwal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong",
          });
        } else {
          if (stocksDataArr.length === 0) setNoFavoriteStocks(true);
        }
      },
      (error) => {
        console.log("err delete=", error);
      }
    );
  };

  const Favorites = () => {
    let rendered = noFavoriteStocks ? (
      <div style={{ textAlign: "center" }}>
        <h3>
          <br />
          No favorite stocks
          <br />
        </h3>
        <h5>can be added by searching stocks</h5>
      </div>
    ) : (
      <div className="favCards">
        {stocksDataArr.map((s) => (
          <FavCard
            key={s.symbol}
            style={{ marginLeft: "5" }}
            name={s.displayName}
            symbol={s.symbol}
            priceNow={s.postMarketPrice}
            currency={s.currency}
            openPrice={s.regularMarketOpen}
            closePrice={s.regularMarketPrice}
            prediction={0}
            deleteFav={deleteFav}
          />
        ))}
      </div>
    );

    return rendered;
  };

  useEffect(() => {
    fetchFavoriteStocks();
  }, []);

  return (
    <div>
      <EHeader text={"Favorite Stocks"} />
      {isLoading ? <LoadingCirle /> : <Favorites />}
    </div>
  );
}
