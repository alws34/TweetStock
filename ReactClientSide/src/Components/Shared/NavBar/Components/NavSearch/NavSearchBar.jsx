import React, { useState, useEffect } from "react";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import NavSearchBarAutocomplete from "./NavSearchBarAutocomplete";
import "../../NavBarStyle.css";
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
export default function NavSearchBar(props) {
  const [searchQuery, setSearchQuery] = useState(null);

  useEffect(() => searchQuery && props.onSubmit(searchQuery), [searchQuery]);
  //searchQuery && props.onSubmit(searchQuery);

  const autoCompleteInputHandler = (e) => {
    setSearchQuery(e);
  };

  return (
    <Search
      sx={{
        padding: 1,
        marginLeft: 2,
        paddingTop: 0,
      }}
    >
      <NavSearchBarAutocomplete
        id="navSearch"
        setSearchQuery={autoCompleteInputHandler}
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
  );
}

/* <SearchIcon
        onClick={() => props.onSubmit(searchQuery)}
        onMouseEnter={(e) => {
          e.target.style.background = "rgb(255, 255, 255, 0.5)";
          e.target.style.borderRadius = "5px";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "none";
        }}
      /> */
