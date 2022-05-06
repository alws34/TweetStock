import * as React from "react";
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
  console.log(props.stockData);
  const stockData = props.stockData;
  var name = stockData.displayName;
  if (name && name.includes(".com")) {
    name = name.slice(0, -4);
  }
  // const isValidImageUrl = async (url) => {
  //   const res = await fetch(url);
  //   const buff = await res.blob();

  //   return buff.type.startsWith("image/");
  // };

  const stockImageSrc = `https://logo.clearbit.com/${name}.com?size=80&greyscale=false`;
  const defaultImageSrc =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";

  const CardImage = () => {
    return (
      <CardMedia
        className="cardImage"
        component="img"
        image={stockImageSrc}
        alt={"No image"}
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
    navigate(navPaths["about"], {
      state: {
        ticker: stockData.symbol,
        data: null,
      },
    });
  };

  return (
    <Card className="favoriteStockCard">
      <CardActionArea onClick={navigateToStockDetailsPage}>
        <CardImage />
        <CardContent>
          <CardHeader />
          <CardDetails />
        </CardContent>
      </CardActionArea>
      <CardButtonsRow />
    </Card>
  );
}
