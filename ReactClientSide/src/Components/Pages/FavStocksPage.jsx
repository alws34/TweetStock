import React, { useState, useEffect } from "react";
import FavCard from "../FavCard";
import EHeader from "../EHeader";
// import { Container, Row, Col } from 'react-bootstrap';
import "../Styles/FavCardsStyle.css";
import { apiUrlFavorites, rapidApiKey } from "../Configs/apiUrlsKeys";
import { getLoggedUser } from "../Configs/getLoggedUser";
import LoadingCirle from "../LoadingCircle";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export default function FavStocksPage() {
  const [stockData, setStockData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [favStocks, setFavStocks] = useState(null);
  const user = getLoggedUser();
  //DELETE Fav stock from DB:

  const getFavStocks = () => {
    // Fetch the favorite stocks from DB - for the current user
    fetch(apiUrlFavorites + `/?userId=${user.Id}`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
      }),
    })
      .then((res) => {
        console.log("res=", res);
        return res.json();
      })
      .then(
        (result) => {
          console.log("fetch favorite stocks arr= ", result);
          setStockData([]);
          let favStocksNames = result;
          // setFavStocks(favStocksNames);
          favStocksNames.forEach((x) => fetchData(x.toLowerCase()));
          setIsLoading(false);
        },
        (error) => {
          console.log("err =", error);
        }
      );
  };

  const fetchData = (ticker) => {
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
        console.log("res=", res);
        return res.json();
      })
      .then(
        (result) => {
          console.log("fetch apiStock= ", result.quoteResponse.result);
          let s = result.quoteResponse.result[0];
          setStockData((oldArr) => [...oldArr, s]);
        },
        (error) => {
          console.log("err post=", error);
        }
      );
  };

  const deleteFav = (ticker) => {
    console.log(ticker);
    setStockData((prevData) =>
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
          getFavStocks();
          MySwal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong",
          });
        }
      },
      (error) => {
        console.log("err delete=", error);
      }
    );
  };

  const renderFavorites = () => {
    let rendered =
      stockData.length === 0 ? (
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
          {stockData.map((s) => (
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
    getFavStocks();
  }, []);

  return (
    <div>
      <EHeader text={"Favorite Stocks"} />
      {isLoading ? <LoadingCirle /> : renderFavorites()}
    </div>
  );
}