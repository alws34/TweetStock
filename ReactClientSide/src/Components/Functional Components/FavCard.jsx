import * as React from "react";
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
import { navPaths } from "../Configs/navPaths";

export default function FavCard(props) {
  const navigate = useNavigate();
  console.log(props.name)
  let name = props.name;
  if (props.name && props.name.includes(".com")) {
    name = props.name.slice(0, -4);
  }
  const getPriceNow = () => {
    if (props.priceNow && props.priceNow != 0) {
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
          image={`https://logo.clearbit.com/${name}.com?size=80&greyscale=false`}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            textAlign={"center"}
            gutterBottom
            variant="h5"
            component="div"
          >
            {name}
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
