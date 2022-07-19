import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@mui/icons-material/Search";
import CssBaseline from "@material-ui/core/CssBaseline";
import { grey } from "@mui/material/colors";
import { styled, alpha } from "@mui/material/styles";
import NavSearchBarAutocomplete from "../../../Shared/NavBar/Components/NavSearch/NavSearchBarAutocomplete";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

export default function StockSearchBar(props) {
  const [ticker, setTicker] = useState(null);
  React.useEffect(() => ticker && fetchNewsByTicker(ticker), [ticker]);

  const fetchNewsByTicker = () => {
    ticker.length > 2 && props.fetchNews(ticker);
  };
  const inputHandler = (e) => {
    setTicker(e.toUpperCase());
  };

  return (
    <div style={{ width: "100%" }} className="newsSearchBar">
      <Search
        sx={{
          padding: 1,
          marginLeft: 2,
          paddingTop: 0,
          width: "80%",
        }}
      >
        <NavSearchBarAutocomplete
          id="navSearch"
          setSearchQuery={inputHandler}
          inputProps={{ "aria-label": "search" }}
          input={{ paddingLeft: 0 }}
          sx={{
            input: { paddingLeft: 0 },
            width: "100%",
            paddingLeft: 0,
            marginRight: 0,
            paddingBottom: 2,
          }}
          autoHighlight
        />
      </Search>
    </div>
  );
}
