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
  console.log(props.name);
  let name = props.name;
  if (props.name && props.name.includes(".com")) {
    name = props.name.slice(0, -4);
  }
  let stockImageSrc = `https://logo.clearbit.com/${name}.com?size=80&greyscale=false`;
  const getPriceNow = () => {
    if (props.priceNow && props.priceNow !== 0) {
      return `Price Now: ${props.priceNow}\n`;
    }
    return "";
  };

  return (
    <Card sx={{ maxWidth: 200, margin: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={stockImageSrc}
          alt="No image was found..."
        />
        <CardContent>
          <Typography
            textAlign={"center"}
            gutterBottom
            variant="h5"
            component="div"
          >
            {props.name}
          </Typography>
          <Typography
            style={{ whiteSpace: "pre-wrap" }}
            variant="body2"
            color="text.secondary"
          >
            Symbol: {props.symbol}
            <br />
            Currency: {props.currency}
            <br />
            {getPriceNow()}
            Open: {props.openPrice}
            <br />
            Close: {props.closePrice} <br />
            <br />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button
          size="small"
          color="warning"
          variant="contained"
          onClick={() => props.deleteFav(props.symbol)}
        >
          remove
        </Button>
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={() =>
            navigate(navPaths["about"], {
              state: { ticker: props.symbol, data: null },
            })
          }
        >
          More...
        </Button>
      </CardActions>
    </Card>
  );
}
