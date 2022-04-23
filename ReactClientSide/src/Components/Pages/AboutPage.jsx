import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Checkbox } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import {
  apiUrlFavorites,
  rapidApiKey,
  apiUrlFlask,
} from "../Configs/apiUrlsKeys";
import { navPaths } from "../Configs/navPaths";
import { getLoggedUser } from "../Configs/getLoggedUser";
import Stock from "../Functional Components/Stock";
import StockAbout from "../Functional Components/StockAbout";
import StockChat from "../Functional Components/StockChat";
import Eheader from "../Functional Components/EHeader";
import Prediction from "../Functional Components/Prediction";
import Tweet from "../Functional Components/Tweet";
import LoadingCircle from "../Functional Components/LoadingCircle";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import "../Styles/PopupChat.css";
import Sticky from "react-sticky-el";
import PredTable from "../Functional Components/PredTable";

export default function About() {
  const navigate = useNavigate();

  const [favChecked, setFavChecked] = useState(false);
  const [stockData, setStockData] = useState(null);
  //const [isPredHere, setIsPredHere] = useState(false);
  const [flaskResponse, setFlaskResponse] = useState(null);
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

  const fetchFlaskStockPrediction = (ticker) => {
    // GET
    console.log("FETCHING FROM FLASK", ticker);
    fetch(apiUrlFlask + `/getPrediction?ticker=${ticker}`)
      .then((res) => {
        console.log("Flask!", res);
        return res.json();
      })
      .then((res) => {
        console.log("Flask!", res);
        setFlaskResponse(res);
      });
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
        {predictionWithTweets()}
      </div>
    );
  };

  const predictionWithTweets = () => {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Prediction
            isLoading={flaskResponse === null}
            size={"200px"}
            ticker={ticker}
            dir={
              flaskResponse && flaskResponse["prediction"] == 1 ? "up" : "down"
            }
          ></Prediction>
        </div>
        <div>
          {flaskResponse &&
            flaskResponse["tweets"].map((tweet) => {
              return (
                <div
                  style={{
                    maxWidth: "800px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ margin: 0 }}>
                      <Tweet tweetId={tweet["tweet_id"]} />
                    </div>
                    <div style={{ margin: 0 }}>
                      <PredTable predResult={flaskResponse}></PredTable>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <button
          onClick={() =>
            setFlaskResponse({
              prediction: 1,
              tweets: [
                { tweet_id: "1516555826986508291" },
                { tweet_id: "1516413583122472967" },
                { tweet_id: "1516612115116789764" },
              ],
            })
          }
        >
          Predict
        </button>
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
    fetchFlaskStockPrediction(ticker);
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
