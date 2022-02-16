import React from 'react'
import Stock from './Stock';

export default function HomePage() {
    return (
        <div>
            <Stock stock_name="Tesla" stock_ticker="TSLA"/>
            <Stock stock_name="Apple" stock_ticker="AAPL"/>
            <Stock stock_name="Microsoft" stock_ticker="MSFT"/>
        </div>
    )
}
