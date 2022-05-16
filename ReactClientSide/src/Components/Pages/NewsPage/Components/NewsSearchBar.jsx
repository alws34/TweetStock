import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

export default function StockSearchBar(props) {
  const [ticker, setTicker] = useState("");

  const fetchNewsByTicker = () => {
    console.log("Searching");
    ticker.length > -1 && props.fetchNews(ticker);
  };
  const inputHandler = (e) => {
    setTicker(e.target.value.toUpperCase());
  };
  return (
    <div className="newsSearchBar">
      <TextField
        id="outlined-basic"
        onChange={inputHandler}
        onKeyPress={(e) => e.key === "Enter" && fetchNewsByTicker()}
        variant="outlined"
        fullWidth
        color="primary"
        label="Search Stock News"
      />
      <SearchIcon
        style={{ marginTop: 14 }}
        onClick={fetchNewsByTicker}
        onMouseEnter={(e) => {
          e.target.style.background = "rgb(239, 239, 245)";
          e.target.style.borderRadius = "20px";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "none";
        }}
      />
    </div>
  );
}
