import React, { useState, useEffect } from 'react'
import FavCard from './FavCard';
import EHeader from './EHeader';
// import { Container, Row, Col } from 'react-bootstrap';
import "./FavCardsStyle.css";

export default function FavStocksPage() {
  const [stockData, setStockData] = useState([]);
  const favStocksArr = ['tsla', 'msft','aapl', 'amzn'];

  useEffect(() => render(), []);

  const render = () => {
    favStocksArr.map(x => {
      fetchData(x);
    })
  };
  const fetchData = (ticker) => {
    fetch(`https://stock-data-yahoo-finance-alternative.p.rapidapi.com/v6/finance/quote?symbols=${ticker}%2CETH-USD`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "stock-data-yahoo-finance-alternative.p.rapidapi.com",
        "x-rapidapi-key": "0166b1ca95msh3727cc820e78dc0p1573d0jsnecd4751e5ee2"
      }
    })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch apiStock= ", result.quoteResponse.result[0]);
          let s = result.quoteResponse.result[0];

          let newCard = <FavCard style={{marginLeft: '5'}}
            name={s.displayName}
            symbol={s.symbol}
            priceNow={s.postMarketPrice}
            openPrice={s.regularMarketOpen}
            closePrice={s.regularMarketPrice}
            prediction={0} />
          setStockData(oldArr  => [...oldArr, newCard]);
        },
        (error) => {
          console.log("err post=", error);
        });
  }
  return (
    <div>
      <EHeader text={"Favorite Stocks"} />
      <div className='favCards'>
        {stockData}
      </div>
    </div>
  )
}
