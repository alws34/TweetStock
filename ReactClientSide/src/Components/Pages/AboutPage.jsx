import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Checkbox } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { apiUrlFavorites, rapidApiKey } from "../Configs/apiUrlsKeys";
import { navPaths } from "../Configs/navPaths";
import { getLoggedUser } from "../Configs/getLoggedUser";
import Stock from "../Stock";
import StockAbout from "../StockAbout";
import StockChat from "../StockChat";
import Eheader from "../EHeader";
import LoadingCircle from "../LoadingCircle";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import "../Styles/PopupChat.css";
import Sticky from "react-sticky-el";

export default function About() {
  const navigate = useNavigate();

  const [favChecked, setFavChecked] = useState(false);
  const [stockData, setStockData] = useState(null);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const user = getLoggedUser();
  const isLoggedIn = user.Id ? true : false;
  let ticker = useLocation().state.ticker;
  let data = useLocation().state.data;
  const fav = {
    favId: 0,
    userId: user.Id,
    ticker: ticker,
  };

  const getStockDetails = () => {
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
        // console.log('res=', res);
        return res.json();
      })
      .then(
        (result) => {
          console.log("fetch apiStock= ", result.quoteResponse.result[0]);
          let s = result.quoteResponse.result[0];
          setStockData(s);
        },
        (error) => {
          console.log("err post=", error);
        }
      );
  };

  const IsFavStock = () => {
    // let userId = JSON.parse(localStorage.getItem("user")).Id;
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
          //if stock ticker exist in arr then favChecked is true.
          result = result.map((ticker) => ticker.toUpperCase());
          let isChecked =
            result.includes(ticker.toUpperCase()) ||
            result.includes(ticker.toLowerCase());
          console.log("fav fetch test", isChecked, ticker);
          setFavChecked(isChecked);
        },
        (error) => {
          console.log("err =", error);
        }
      );
  };

  //POST Fav stock from DB:
  const postFav = (favStock) => {
    //console.log(JSON.stringify(favStock));
    fetch(apiUrlFavorites, {
      method: "POST",
      body: JSON.stringify(favStock),
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8", //very important to add the 'charset=UTF-8'!!!!
        Accept: "application/json; charset=UTF-8",
      }),
    })
      .then((res) => {
        console.log("res=", res);
        return res.ok;
      })
      .then(
        (result) => {
          if (!result) {
            setFavChecked(false);
          }
          console.log("fetch post favorite_= ", result);
        },
        (error) => {
          console.log("err post favorite=", error);
        }
      );
  };
  //DELETE Fav stock from DB:
  const deleteFav = (ticker) => {
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

  const handleCheckFav = (e) => {
    const checked = e.target.checked;
    if (checked) {
      postFav(fav);
      setFavChecked(true);
    } else {
      deleteFav(fav.ticker);
      setFavChecked(false);
    }
  };

  const renderStockAbout = () => {
    return (
      <StockAbout
        name={stockData.displayName}
        fullName={stockData.fullExchangeName}
        symbol={stockData.symbol}
        source={stockData.quoteSourceName}
        region={stockData.region}
        currency={stockData.financialCurrency}
        priceNow={stockData.postMarketPrice}
        openPrice={stockData.regularMarketOpen}
        closePrice={stockData.regularMarketPrice}
        highPrice={stockData.regularMarketDayHigh}
        changeRange={stockData.regularMarketDayRange}
        bid={stockData.bid}
        ask={stockData.ask}
        week52Range={stockData.fiftyTwoWeekRange}
        volume={stockData.regularMarketVolume}
        avgVolume={stockData.averageDailyVolume3Month}
        marketCap={stockData.marketCap}
        esp={stockData.epsTrailingTwelveMonths}
      />
    );
  };

  const renderStockAboutPage = () => {
    return (
      <div>
        <Row xs={1} md={2}>
          <Col style={{ flexGrow: 0, marginTop: 30 }}>
            <Stock
              stock_name={stockData.displayName}
              stock_ticker={ticker}
              isAbout={true}
            />
          </Col>
          <Col
            xs={1}
            md={2}
            style={{ width: "50%", flexGrow: 1, marginTop: 20 }}
          >
            <div>{renderStockAbout()}</div>
          </Col>
        </Row>
        {isLoggedIn && renderLoggedUserFields()}
      </div>
    );
  };

  const renderLoggedUserFields = () => {
    //console.clear();
    //console.log("renderLogged");
    return (
      <div>
        <Row>
          <Col>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Button
                variant="contained"
                size="medium"
                onClick={() =>
                  navigate(navPaths["popular tweets"], { state: ticker })
                }
              >
                Popular Tweets
              </Button>
              <Checkbox
                onClick={(e) => handleCheckFav(e)}
                sx={{ color: "red" }}
                {...label}
                checked={favChecked}
                icon={<FavoriteBorder sx={{ fontSize: 40 }} />}
                checkedIcon={<Favorite sx={{ fontSize: 40 }} />}
                color="error"
              />
            </div>
          </Col>
        </Row>
        {renderPopUpChat()}
      </div>
    );
  };

  const renderPopUpChat = () => {
    return (
      <Sticky mode="bottom">
        <div
          style={{
            display: "flex",
            justifyContent: "start",
          }}
        >
          <Popup
            trigger={
              <Checkbox
                checked={false}
                icon={
                  <ForumRoundedIcon
                    sx={{
                      fontSize: 40,
                    }}
                    color="info"
                  ></ForumRoundedIcon>
                }
                checkedIcon={
                  <ForumRoundedIcon
                    sx={{
                      fontSize: 40,
                    }}
                    color="info"
                  ></ForumRoundedIcon>
                }
              />
            }
            position="right bottom"
          >
            <Sticky>
              <StockChat ticker={ticker} />
            </Sticky>
          </Popup>
        </div>
      </Sticky>
    );
  };

  useEffect(() => {
    //console.clear();
    console.log("use effect", ticker);

    if (!data) {
      getStockDetails();
      console.log("getting data");
    } else {
      setStockData(data);
    }
    console.log("is logged", isLoggedIn);
    if (isLoggedIn) {
      IsFavStock();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ticker, data]);

  return (
    <div className="container-fluid">
      <Eheader text={`$${ticker.toUpperCase()} Details`} />
      {stockData === undefined || stockData === null ? (
        <LoadingCircle />
      ) : (
        renderStockAboutPage()
      )}
    </div>
  );
}
