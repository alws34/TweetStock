import { React, useEffect, useState, useMemo } from 'react';
import Chart from 'react-apexcharts';
import { Button } from '@mui/material';

const directionEmojis = {
  up: '🚀',
  down: '💩',
  '': '',
};

const chart = {
  options: {
    chart: {
      type: 'candlestick',
      height: 350
    },
    title: {
      text: 'Stock Graph',
      align: 'left'
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  },
};

const round = (number) => {
  return number ? +(number.toFixed(2)) : null;
};

export default function Stock(props) {
  const [series, setSeries] = useState([{
    data: []
  }]);
  const [price, setPrice] = useState(-1);
  const [prevPrice, setPrevPrice] = useState(-1);
  const [priceTime, setPriceTime] = useState(null);

  const stocksUrl = `https://yahoo-finance-api.vercel.app/${props.stock_ticker}`;

async function getStocks() {
  const response = await fetch(stocksUrl);
  return response.json();
}

  useEffect(() => {
    let timeoutId;
    async function getLatestPrice() {
      try {
        const data = await getStocks();
        //console.log(data);
        const stock = data.chart.result[0];
        setPrevPrice(price);
        setPrice(stock.meta.regularMarketPrice.toFixed(2));
        setPriceTime(new Date(stock.meta.regularMarketTime * 1000));
        const quote = stock.indicators.quote[0];
        const prices = stock.timestamp.map((timestamp, index) => ({
          x: new Date(timestamp * 1000),
          y: [quote.open[index], quote.high[index], quote.low[index], quote.close[index]].map(round)
        }));
        setSeries([{
          data: prices,
        }]);
      } catch (error) {
        console.log(error);
      }
      timeoutId = setTimeout(getLatestPrice, 5000 * 2);
    }

    getLatestPrice();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const direction = useMemo(() => prevPrice < price ? 'up' : prevPrice > price ? 'down' : '', [prevPrice, price]);

  return (
    <div style={{marginTop: "15px"}}>
      <div style={{textAlign:"center"}}>
        <Button variant="outlined" size="medium">{props.stock_name}</Button>
      </div>
      <div style={{textAlign:"center"}} className={['price', direction].join(' ')}>
        {price}$ {directionEmojis[direction]}
      </div>
      <div style={{textAlign:"center"}}>
        {priceTime && priceTime.toLocaleTimeString()}
      </div>
      <Chart options={chart.options} series={series} type="candlestick" width="100%" height={320} />
    </div>
  );
}

