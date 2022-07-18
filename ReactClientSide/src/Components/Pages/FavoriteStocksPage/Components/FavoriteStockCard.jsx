import React, { useState } from "react";
import { navPaths } from "../../../Configs/navPaths";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  Typography,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function FavoriteStockCard(props) {
  const navigate = useNavigate();
  const stockData = props.stockData;
  var name = stockData.displayName;
  if (name && name.includes(".com")) {
    name = name.slice(0, -4);
  }
  const [stockImageSrc, setStockImageSrc] = useState(
    `https://logo.clearbit.com/${name}.com?size=80&greyscale=false`
  );
  const defaultImageSrc = `https://i5.walmartimages.com/asr/538e6ee9-b8ce-4c50-bb78-e0ef9ca3e5d7.d92a2e915d667614f121ea11f0d1ec7e.jpeg`;

  const CardImage = () => {
    return (
      <CardMedia
        className="cardImage"
        component="img"
        image={stockImageSrc}
        onError={() => setStockImageSrc(defaultImageSrc)}
      />
    );
  };

  const CardHeader = () => {
    return (
      <Typography
        className="cardHeader"
        gutterBottom
        variant="h5"
        component="div"
      >
        {name}
      </Typography>
    );
  };

  const CardDetails = () => {
    return (
      <Typography
        className="cardDetails"
        variant="body2"
        color="text.secondary"
      >
        Symbol: {stockData.symbol}
        <br />
        Currency: {stockData.currency}
        <br />
        <PriceNow />
        Open: {stockData.regularMarketOpen}
        <br />
        Close: {stockData.regularMarketPrice} <br />
        <br />
      </Typography>
    );
  };

  const CardButtonsRow = () => {
    return (
      <CardActions className="cardButtonsContainer">
        <Button
          size="small"
          color="warning"
          variant="contained"
          onClick={() => props.deleteFavoriteStock(stockData.symbol)}
        >
          remove
        </Button>
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={navigateToStockDetailsPage}
        >
          More...
        </Button>
      </CardActions>
    );
  };

  const PriceNow = () => {
    let priceNow = stockData.postMarketPrice;
    return priceNow && priceNow !== 0 ? `Price Now: ${priceNow}\n` : "";
  };

  const navigateToStockDetailsPage = () => {
    navigate(navPaths["stock details"], {
      state: {
        ticker: stockData.symbol,
        data: null,
      },
    });
  };

  return (
    <Card className="favoriteStockCard" sx={{ borderRadius: "7.5px" }}>
      <CardActionArea onClick={navigateToStockDetailsPage}>
        <CardImage />
        <CardContent className="favoriteCardContentWrapper">
          <CardHeader />
          <CardDetails />
        </CardContent>
      </CardActionArea>
      <CardButtonsRow />
    </Card>
  );
}
