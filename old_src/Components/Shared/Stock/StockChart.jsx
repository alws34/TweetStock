import { React, useEffect, useState, useMemo } from "react";
import Chart from "react-apexcharts";
import StockChartPanel from "./Components/StockChartPanel";
import "../../Configs/Global";
import "./StockChartStyles.css";
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
  const [prevPrice, setPrevPrice] = useState(-1);
  const [priceTime, setPriceTime] = useState(null);
  const [isStockValid, setIsStockValid] = useState(true);

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
  const stocksUrl = `https://yahoo-finance-api.vercel.app/${props.stock_ticker}`;

  const isInvalidStock = (stock) => {
    return (
      stock.meta.instrumentType === "CRYPTOCURRENCY" ||
      props.stock_ticker === ":entitySlug"
    );
  };

  useEffect(() => {
    let timeoutId;
    const getLatestPrice = async () => {
      try {
        fetch(stocksUrl)
          .then((res) => res.json())
          .then((data) => {
            const stock = data.chart.result[0];

            if (isInvalidStock(stock)) {
              setIsStockValid(false);
              props.updateInvalidStocksCounter &&
                props.updateInvalidStocksCounter();
            }
            setPrevPrice(price);
            setPrice(stock.meta.regularMarketPrice.toFixed(2));
            setPriceTime(new Date(stock.meta.regularMarketTime * 1000));

            const quote = stock.indicators.quote[0];
            const hours = 3;
            const hours_in_ms = hours * 60 * 60 * 1000;
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
          });
      } catch (error) {
        console.log(error);
      }
      timeoutId = setTimeout(getLatestPrice, 5000 * 2);
    };

    getLatestPrice();

    return () => {
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.stock_ticker, global.config.theme]);

  const direction = props.predictionDir;

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
        prevPrice={prevPrice}
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
