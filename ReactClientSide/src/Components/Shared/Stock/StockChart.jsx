import { React, useEffect, useState, useMemo } from "react";
import Chart from "react-apexcharts";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { navPaths } from "../../Configs/navPaths";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { blueGrey } from "@mui/material/colors";

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
  const [price, setPrice] = useState(null);
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
        align: "center",
        style: { fontSize: "28px", fontWeight: "bold", color: "" },
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
    },
  };
  const stocksUrl = `https://yahoo-finance-api.vercel.app/${props.stock_ticker}`;

  async function fetchStocks() {
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
        const data = await fetchStocks();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.stock_ticker]);

  const direction = useMemo(
    () => (prevPrice < price ? "up" : prevPrice > price ? "down" : ""),
    [prevPrice, price]
  );

  const StockButton = () => (
    <div style={{ textAlign: "center", marginBottom: "vh" }}>
      <Button
        size="small"
        color="primary"
        variant="contained"
        onClick={() =>
          navigate(navPaths["about"], {
            state: { ticker: props.stock_ticker, data: null },
          })
        }
      >
        <ReadMoreIcon>details</ReadMoreIcon>
      </Button>
    </div>
  );

  const QuickInfo = () => (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "1vh",
        //flexDirection: "column",
      }}
    >
      <Time />
      <Price />
      {!props.isAbout && <StockButton />}
    </div>
  );

  const Price = () => (
    <Typography>
      {price} $ {directionEmojis[direction]}
    </Typography>
  );

  const Time = () => (
    <Typography>
      {priceTime &&
        priceTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
    </Typography>
  );

  return isStockValid ? (
    <div
      style={{
        margin: "auto",
        marginTop: "1vh",
        borderBottom: "0.6px solid",
        borderTop: "0.6px solid",
        padding: "1vw",
        borderRadius: "7.5px",
        maxWidth: "1250px",
      }}
    >
      <div
        style={{ textAlign: "center" }}
        className={["price", direction].join(" ")}
      ></div>
      <Chart
        options={chart.options}
        series={series}
        type="candlestick"
        width="100%"
        height={320}
      />
      <QuickInfo />
    </div>
  ) : (
    ""
  );
}
