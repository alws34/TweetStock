import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Button, Checkbox } from "@mui/material";
import { navPaths } from "../../../Configs/navPaths";
import { useNavigate } from "react-router-dom";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import PopupStockChat from "./StockChat/PopupStockChat";
import { apiUrlFavorites } from "../../../Configs/apiUrlsKeys";
import { getLoggedUser } from "../../../Configs/getLoggedUser";
import PopularTweetsPopup from "./PopularTweetsPopup";

export default function LoggedUserFeatures(props) {
  const navigate = useNavigate();
  const user = getLoggedUser();

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [isFavoriteChecked, setIsFavoriteChecked] = useState(false);
  const ticker = props.ticker;
  const fav = {
    favId: 0,
    userId: user.Id,
    ticker: props.ticker,
  };

  //POST Fav stock from DB:
  const postFavoriteStock = (favoriteStock) => {
    fetch(apiUrlFavorites, {
      method: "POST",
      body: JSON.stringify(favoriteStock),
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8", //very important to add the 'charset=UTF-8'!!!!
        Accept: "application/json; charset=UTF-8",
      }),
    })
      .then((res) => {
        return res.ok;
      })
      .then(
        (result) => {
          if (!result) {
            setIsFavoriteChecked(false);
          }
        },
        (error) => {
          console.log("err post favorite=", error);
        }
      );
  };
  //DELETE Fav stock from DB:
  const deleteFavoriteStockByTicker = (ticker) => {
    fetch(apiUrlFavorites + `/?userId=${user.Id}&ticker=${ticker}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json; charset=UTF-8",
      }),
    }).then(
      (res) => {
        console.log("res=", res);
      },
      (error) => {
        console.log("err delete=", error);
      }
    );
  };

  const fetchIsFavStock = () => {
    // let userId = JSON.parse(localStorage.getItem("user")).Id;
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
        (result) => {
          //if stock ticker exist in arr then favChecked is true.
          result = result.map((ticker) => ticker.toUpperCase());
          const isChecked =
            result.includes(ticker.toUpperCase()) ||
            result.includes(ticker.toLowerCase());
          setIsFavoriteChecked(isChecked);
        },
        (error) => {
          console.log("err =", error);
        }
      );
  };

  const handleCheckFav = (e) => {
    e.target.checked
      ? postFavoriteStock(fav)
      : deleteFavoriteStockByTicker(fav.ticker);
    setIsFavoriteChecked(e.target.checked);
  };

  useEffect(fetchIsFavStock, [ticker, user.Id]);

  return (
    <div className="loggedUserFeatures">
      <Row>
        <Col>
          <div className="featuresContainer">
            <PopularTweetsPopup ticker={ticker} />
            <Checkbox
              onClick={(e) => handleCheckFav(e)}
              sx={{ color: "red" }}
              {...label}
              checked={isFavoriteChecked}
              icon={<FavoriteBorder sx={{ fontSize: 40 }} />}
              checkedIcon={<Favorite sx={{ fontSize: 40 }} />}
              color="error"
            />
          </div>
        </Col>
      </Row>
      <PopupStockChat ticker={ticker} />
    </div>
  );
}
