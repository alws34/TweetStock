import { React, useEffect, useState, useMemo } from "react";
import Chart from "react-apexcharts";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { navPaths } from "../Configs/navPaths";

const round = (number) => {
  return number ? +number.toFixed(2) : null;
};

export default function StockChart(props) {
  const navigate = useNavigate();
  const [series, setSeries] = useState([
    {
      data: [],
    },
  ]);
  const [price, setPrice] = useState(-1);
  const [prevPrice, setPrevPrice] = useState(-1);
  const [priceTime, setPriceTime] = useState(null);
  const directionEmojis = {
    up: "🚀",
    down: "💩",
    "": "",
  };

  const [isStockValid, setIsStockValid] = useState(true);

  const chart = {
    options: {
      chart: {
        type: "candlestick",
        height: 350,
      },
      title: {
        text: `$${props.stock_ticker.toUpperCase()} Graph`,
        align: "left",
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    },
  };
  const stocksUrl = `https://yahoo-finance-api.vercel.app/${props.stock_ticker}`;

  async function getStocks() {
    const response = await fetch(stocksUrl);
    return response.json();
  }

  const getStockValidity = (stock) => {
    return (
      stock.meta.instrumentType === "CRYPTOCURRENCY" ||
      props.stock_ticker === ":entitySlug"
    );
  };

  useEffect(() => {
    let timeoutId;
    async function getLatestPrice() {
      try {
        const data = await getStocks();
        const stock = data.chart.result[0];
        if (getStockValidity(stock)) {
          setIsStockValid(false);
        }
        setPrevPrice(price);
        setPrice(stock.meta.regularMarketPrice.toFixed(2));
        const hours = 3;
        const hours_in_ms = hours * 60 * 60 * 1000;
        setPriceTime(new Date(stock.meta.regularMarketTime * 1000));
        const quote = stock.indicators.quote[0];

        const prices = stock.timestamp.map((timestamp, index) => ({
          x: new Date(timestamp * 1000 + hours_in_ms),
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
      } catch (error) {
        console.log(error);
      }
      timeoutId = setTimeout(getLatestPrice, 5000 * 2);
    }

    getLatestPrice();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [props.stock_ticker]);

  const direction = useMemo(
    () => (prevPrice < price ? "up" : prevPrice > price ? "down" : ""),
    [prevPrice, price]
  );

  const renderStockButton = () => {
    return (
      <Button
        variant="contained"
        size="medium"
        onClick={() =>
          navigate(navPaths["about"], {
            state: { ticker: props.stock_ticker, data: null },
          })
        }
      >
        {props.stock_name}
      </Button>
    );
  };

  return (
    <div>
      {isStockValid ? (
        <div style={{ marginTop: "10px" }}>
          <div style={{ textAlign: "center" }}>
            {!props.isAbout && renderStockButton()}
          </div>
          <div
            style={{ textAlign: "center" }}
            className={["price", direction].join(" ")}
          >
            {price}$ {directionEmojis[direction]}
          </div>
          <div style={{ textAlign: "center" }}>
            {priceTime &&
              priceTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
          </div>
          <Chart
            options={chart.options}
            series={series}
            type="candlestick"
            width="100%"
            height={320}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
