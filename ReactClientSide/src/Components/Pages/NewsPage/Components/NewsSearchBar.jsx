import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@mui/icons-material/Search";
import CssBaseline from "@material-ui/core/CssBaseline";

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
        id="outlined-basic"
        onChange={inputHandler}
        onKeyPress={(e) => e.key === "Enter" && fetchNewsByTicker()}
        variant="filled"
        fullWidth
        label="Search Stock News"
      />
      <SearchIcon
        style={{ marginTop: 14 }}
        onClick={fetchNewsByTicker}
        onMouseEnter={(e) => {
          e.target.style.background = "text.secondary"; //"rgb(239, 239, 245)";
          e.target.style.borderRadius = "20px";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "none";
        }}
      />
    </div>
  );
}
