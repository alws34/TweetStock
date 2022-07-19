import { React, useEffect, useState, useMemo } from "react";
import Chart from "react-apexcharts";
import StockChartPanel from "./Components/StockChartPanel";
import "../../Configs/Global";
import "./StockChartStyles.css";
import { rapidApiKey } from "../../Configs/apiUrlsKeys";
import { Button } from "@mui/material"; //import yahooStockApi from "yahoo-stock-api";

const round = (number) => {
  return number ? +number.toFixed(2) : null;
};

export default function StockChart(props) {
  const [series, setSeries] = useState([
    {
      data: [],
    },
  ]);

  const [price, setPrice] = useState(null);
  const [priceTime, setPriceTime] = useState(null);
  const [isStockValid, setIsStockValid] = useState(true);
  const [timeoutId, setTimeoutId] = useState(null);
  const [clickedBtn, setClickedBtn] = useState("live");

  const chart_options = {
    theme: {
      mode: global.config.theme,
    },
    chart: {
      height: 350,
      background:
        global.config.theme === "dark"
          ? global.config.darkBG
          : global.config.lightBG,
      toolbar: {
        show: true,
      },
    },
    title: {
      text: `$${props.stock_ticker.toUpperCase()}`,
      align: "left",
      style: { fontSize: "24px", fontWeight: "bold", color: "" },
    },
    xaxis: {
      type: "datetime",
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  const fetchRecentPrices = async () => {
    const stocksUrl = `https://yahoo-finance-api.vercel.app/${props.stock_ticker}`;
    return fetch(stocksUrl).then((res) => res.json());
  };

  const fetchByDates = (interval) => {
    setClickedBtn(interval);
    timeoutId && clearTimeout(timeoutId);
    const encodedParams = new URLSearchParams();
    let today = new Date();
    encodedParams.append(
      "to_date",
      `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
    );
    encodedParams.append("country", "United States");
    encodedParams.append("interval", "Daily");
    encodedParams.append("name", props.stock_ticker.toUpperCase());
    if (interval === "1mo") {
      encodedParams.append(
        "from_date",
        `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`
      );
    } else if (interval === "1y") {
      encodedParams.append(
        "from_date",
        `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear() - 1}`
      );
    } else if (interval === "ytd") {
      encodedParams.append("from_date", "1/01/" + today.getFullYear());
    }

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "7670e9bc08mshbd2c81cd333fd06p19404cjsn6bfafc8e2699",
        "X-RapidAPI-Host": "investing4.p.rapidapi.com",
      },
      body: encodedParams,
    };

    fetch("https://investing4.p.rapidapi.com/stocks/historical-data", options)
      .then((response) => response.json())
      .then((response) => {
        setPrice(null);
        setPriceTime(null);

        const prices = response.data.historical.map((stockDayObj) => {
          let preFormattedDate = stockDayObj.date.split("/");
          let formattedDate = `${preFormattedDate[1]}/${preFormattedDate[0]}/${preFormattedDate[2]}`;
          return {
            x: new Date(formattedDate),
            y: [
              stockDayObj.open,
              stockDayObj.high,
              stockDayObj.low,
              stockDayObj.close,
            ].map(round),
          };
        });
        setSeries([
          {
            data: prices,
          },
        ]);
      })
      .catch((err) => console.error(err));
  };

  const isInvalidStock = (stock) => {
    return (
      stock.meta.instrumentType === "CRYPTOCURRENCY" ||
      props.stock_ticker === ":entitySlug"
    );
  };
  const getLatestPrice = async () => {
    if (!props.stock_ticker) return false;
    setClickedBtn("live");
    try {
      fetchRecentPrices().then((data) => {
        const stock = data.chart.result[0];
        if (isInvalidStock(stock)) {
          setIsStockValid(false);
          props.updateInvalidStocksCounter &&
            props.updateInvalidStocksCounter();
        }
        setPrice(stock.meta.regularMarketPrice.toFixed(2));
        setPriceTime(new Date(stock.meta.regularMarketTime * 1000));

        const quote = stock.indicators.quote[0];
        const hours = 3;
        const hours_in_s = hours * 60 * 60;

        const prices = stock.timestamp.map((timestamp, index) => ({
          x: new Date((timestamp + hours_in_s) * 1000),
          y: [
            quote.open[index],
            quote.high[index],
            quote.low[index],
            quote.close[index],
          ].map(round),
        }));
        setSeries([
          {
            data: prices,
          },
        ]);
      });
    } catch (error) {
      console.log(error);
    }
    setTimeoutId(setTimeout(getLatestPrice, 5000 * 2));
    return () => {
      clearTimeout(timeoutId);
    };
  };
  useEffect(() => {
    getLatestPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.stock_ticker, global.config.theme]);

  const direction = props.predictionDir;
  const clicked = "contained";
  const unclicked = "outlined";
  return isStockValid ? (
    <div
      style={{
        margin: "auto",
        marginTop: "2.5vh",
        borderBottom: "3.5px solid",
        padding: "3vw",
        paddingBottom: "2vh",
        maxWidth: "1250px",
      }}
      className={"chartContainer"}
    >
      <div
        style={{ textAlign: "center" }}
        className={["price", direction].join(" ")}
      ></div>
      <div
        style={{
          width: "100%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-around",
          paddingBottom: 12,
        }}
      >
        <Button
          variant={clickedBtn === "live" ? clicked : unclicked}
          onClick={(e) => getLatestPrice()}
        >
          Live
        </Button>
        <Button
          variant={clickedBtn === "1mo" ? clicked : unclicked}
          onClick={() => fetchByDates("1mo")}
        >
          Month
        </Button>
        <Button
          variant={clickedBtn === "1y" ? clicked : unclicked}
          onClick={() => fetchByDates("1y")}
        >
          Year
        </Button>{" "}
        <Button
          variant={clickedBtn === "ytd" ? clicked : unclicked}
          onClick={() => fetchByDates("ytd")}
        >
          YTD
        </Button>
      </div>
      <Chart
        options={chart_options}
        series={series}
        type="candlestick"
        width="100%"
        height={320}
      />

      <StockChartPanel
        stock_ticker={props.stock_ticker}
        hideInfoPanel={props.hideInfoPanel}
        price={price}
        priceTime={priceTime}
        predictionDir={direction}
        predictionAccuracy={props.predictionAccuracy}
        nPredictionDays={props.nPredictionDays}
      />
    </div>
  ) : (
    ""
  );
}
