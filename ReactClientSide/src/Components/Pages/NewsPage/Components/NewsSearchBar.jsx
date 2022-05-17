import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@mui/icons-material/Search";
import CssBaseline from "@material-ui/core/CssBaseline";
import { grey } from "@mui/material/colors";

export default function StockSearchBar(props) {
  const [ticker, setTicker] = useState("");

  const fetchNewsByTicker = () => {
    ticker.length > 2 && props.fetchNews(ticker);
  };
  const inputHandler = (e) => {
    setTicker(e.target.value.toUpperCase());
  };
  return (
    <div className="newsSearchBar">
      <CssBaseline />
      <TextField
        style={{ border: "1px solid", borderRadius: "5px" }}
        id="outlined-basic"
        onChange={inputHandler}
        onKeyPress={(e) => e.key === "Enter" && fetchNewsByTicker()}
        variant="filled"
        fullWidth
        label="Search Stock News"
      />
      <SearchIcon
        //fontSize="5vw"
        style={{ margin: "auto", marginLeft: "0.8vw", fontSize: "5vw" }}
        onClick={fetchNewsByTicker}
        onMouseEnter={(e) => {
          e.target.style.background = grey[400];
          e.target.style.borderRadius = "5px";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "none";
        }}
      />
    </div>
  );
}
