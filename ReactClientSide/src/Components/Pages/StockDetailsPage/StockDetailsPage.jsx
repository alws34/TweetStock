import React, { useState, useEffect } from "react";
import "./StockDetailsPageStyles.css";
import StockDetails from "./Components/StockDetails";
import StockChart from "../../Shared/Stock/StockChart";
import PageHeader from "../../Shared/PageHeader/PageHeader";
import LoadingCircle from "../../Shared/LoadingCircle";
import { rapidApiKey, apiUrlFlask } from "../../Configs/apiUrlsKeys";
// import { navPaths } from "../../Configs/navPaths";
import { isLoggedUser } from "../../Configs/getLoggedUser";
import { useLocation } from "react-router-dom";
// import { Button, Checkbox } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import "reactjs-popup/dist/index.css";
import LoggedUserFeatures from "./Components/LoggedUserFeatures";
import PredictionWithTweets from "./Components/PredictionWithTweets";
import "../../Configs/Global";

export default function StockDetailsPage() {
  const [stockData, setStockData] = useState(null);
  const [flaskResponse, setFlaskResponse] = useState(null);

  const isLoggedIn = isLoggedUser();
  let ticker = useLocation().state.ticker;
  let data = useLocation().state.data;

  const fetchFlaskStockPrediction = (ticker) => {
    // GET
    //console.log("FETCHING FROM FLASK", ticker);
    fetch(apiUrlFlask + `/getPrediction?ticker=${ticker}`)
      .then((res) => {
        //console.log("Flask!", res);
        return res.json();
      })
      .then((res) => {
        //console.log("Flask!", res);
        setFlaskResponse(res);
      });
  };

  const fetchStockDetails = () => {
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
          //console.log("fetch apiStock= ", result.quoteResponse.result[0]);
          let s = result.quoteResponse.result[0];
          setStockData(s);
        },
        (error) => {
          console.log("err post=", error);
        }
      );
  };

  useEffect(() => {
    console.clear();
    //console.log("use effect", ticker);
    data ? setStockData(data) : fetchStockDetails();

    //fetchFlaskStockPrediction(ticker);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ticker, data]);

  return (
    <div className="container-fluid">
      <PageHeader text={`${ticker.toUpperCase()} Details`} />
      {stockData === undefined || stockData === null ? (
        <LoadingCircle />
      ) : (
        <div>
          <Row xs={1} md={2}>
            <Col style={{ flexGrow: 0, marginTop: 10 }}>
              <StockChart
                stock_name={stockData.displayName}
                stock_ticker={ticker}
                hideInfoPanel={true}
              />
            </Col>
            <Col
              xs={1}
              md={2}
              style={{ width: "50%", flexGrow: 1, marginTop: 15 }}
            >
              <div>
                <StockDetails stockData={stockData} />
              </div>
            </Col>
          </Row>
          {isLoggedIn && <LoggedUserFeatures ticker={ticker} />}
          <PredictionWithTweets ticker={ticker} flaskResponse={flaskResponse} />
        </div>
      )}
    </div>
  );
}

// old componenets which were moved to seperate jsx file

// const PredictionWithTweets = () => {
//   return (
//     <div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Prediction
//           isLoading={flaskResponse === null}
//           size={"400px"}
//           ticker={ticker}
//           dir={
//             flaskResponse && flaskResponse["prediction"] === 1 ? "up" : "down"
//           }
//         ></Prediction>
//       </div>
//       <div>
//         {flaskResponse &&
//           flaskResponse["tweets"].map((tweet) => {
//             return (
//               <div
//                 style={{
//                   maxWidth: "800px",
//                   marginLeft: "auto",
//                   marginRight: "auto",
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-evenly",
//                     alignItems: "center",
//                   }}
//                 >
//                   <div style={{ margin: 0 }}>
//                     <Tweet tweetId={tweet["tweet_id"]} />
//                   </div>
//                   <div style={{ margin: 0 }}>
//                     <PredTable tweet={tweet}></PredTable>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// };

// const LoggedUserFields = () => {
//   console.clear();
//   console.log("renderLogged");
//   return (
//     <div>
//       <Row>
//         <Col>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               marginTop: 10,
//             }}
//           >
//             <Button
//               variant="contained"
//               size="medium"
//               onClick={() =>
//                 navigate(navPaths["popular tweets"], { state: ticker })
//               }
//             >
//               Popular Tweets
//             </Button>
//             <Checkbox
//               onClick={(e) => handleCheckFav(e)}
//               sx={{ color: "red" }}
//               {...label}
//               checked={favChecked}
//               icon={<FavoriteBorder sx={{ fontSize: 40 }} />}
//               checkedIcon={<Favorite sx={{ fontSize: 40 }} />}
//               color="error"
//             />
//           </div>
//         </Col>
//       </Row>
//       <PopUpChat />
//     </div>
//   );
// };

// const PopUpChat = () => {
//   return (
//     <Sticky mode="bottom">
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "start",
//         }}
//       >
//         <Popup
//           trigger={
//             <Checkbox
//               checked={false}
//               icon={
//                 <ForumRoundedIcon
//                   sx={{
//                     fontSize: 40,
//                   }}
//                   color="info"
//                 ></ForumRoundedIcon>
//               }
//               checkedIcon={
//                 <ForumRoundedIcon
//                   sx={{
//                     fontSize: 40,
//                   }}
//                   color="info"
//                 ></ForumRoundedIcon>
//               }
//             />
//           }
//           position="right bottom"
//         >
//           <Sticky>
//             <StockChat ticker={ticker} />
//           </Sticky>
//         </Popup>
//       </div>
//     </Sticky>
//   );
// };
