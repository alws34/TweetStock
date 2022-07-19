import React from "react";
import "../FavoriteStocksPageStyles.css";
import FavoriteStockCard from "./FavoriteStockCard";

export function FavoriteStocksContainer(props) {
  return (
    <div className="favoriteStocksCardsContainer">
      {props.stocksData.map((stock) => (
        <FavoriteStockCard
          key={stock.symbol}
          stockData={stock}
          deleteFavoriteStock={props.deleteFavoriteStock}
          prediction={0}
        />
      ))}
    </div>
  );
}

export function NoFavoriteStocksContainer(props) {
  return (
    <div className="noFavoriteStocksContainer">
      <h3>
        <br />
        No favorite stocks
        <br />
      </h3>
      <h5>can be added by searching stocks</h5>
    </div>
  );
}
