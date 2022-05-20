import { React, useEffect, useState, useMemo } from "react";
import Chart from "react-apexcharts";
import StockChartPanel from "./Components/StockChartPanel";
import "../../Configs/Global";

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
  const theme = global.config.isDarkTheme ? "dark" : "light";
  console.log(theme);
  // useEffect(() => {
  //   console.log(global.config.isDarkTheme);
  //   setTheme(global.config.isDarkTheme ? "dark" : "light");
  // }, [global.config.isDarkTheme]);

  let chart = {
    options: {
      // responsive: [
      //   {
      //     breakpoint: 500,
      //     options: {
      //       title: {
      //         align: "left",
      //       },
      //       // theme: {
      //       //   mode: theme,
      //       // },
      //     },
      //   },
      // ],

      theme: {
        mode: theme,
        palette: "palette1",
        // monochrome: {
        //   enabled: false,
        //   color: "#255aee",
        //   shadeTo: theme,
        //   shadeIntensity: 0.65,
        // },
      },
      chart: {
        type: "line",
        height: 350,
        toolbar: {
          show: true,
        },
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 10000,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
      },
      title: {
        text: `$${props.stock_ticker.toUpperCase()} Graph`,
        align: "left",
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
      sx: {
        borderRadius: "10px",
      },
    },
  };
  const stocksUrl = `https://yahoo-finance-api.vercel.app/${props.stock_ticker}`;

  // const fetchStocks = async () => {
  //   const response = await fetch(stocksUrl);
  //   return response.json();
  // };

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
            console.log(data);
            const stock = data.chart.result[0];

            if (isInvalidStock(stock)) setIsStockValid(false);

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
  }, [props.stock_ticker]);

  const direction = useMemo(
    () => (prevPrice < price ? "up" : prevPrice > price ? "down" : ""),
    [prevPrice, price]
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
      <StockChartPanel
        stock_ticker={props.stock_ticker}
        hideInfoPanel={props.hideInfoPanel}
        price={price}
        prevPrice={prevPrice}
        priceTime={priceTime}
        direction={direction}
      />
    </div>
  ) : (
    ""
  );
}

// const StockButton = () => (
//   <div style={{ textAlign: "center", marginBottom: "vh" }}>
//     <Button
//       size="small"
//       color="primary"
//       variant="contained"
//       onClick={() =>
//         navigate(navPaths["about"], {
//           state: { ticker: props.stock_ticker, data: null },
//         })
//       }
//     >
//       <ReadMoreIcon>details</ReadMoreIcon>
//     </Button>
//   </div>
// );

// const QuickInfo = () => (
//   <div
//     style={{
//       textAlign: "center",
//       display: "flex",
//       justifyContent: "space-around",
//       marginBottom: "1vh",
//       //flexDirection: "column",
//     }}
//   >
//     <Time />
//     <Price />
//     {!props.isAbout && <StockButton />}
//   </div>
// );

// const Price = () => (
//   <Typography>
//     {price} $ {directionEmojis[direction]}
//   </Typography>
// );

// const Time = () => (
//   <Typography>
//     {priceTime &&
//       priceTime.toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       })}
//   </Typography>
// );
