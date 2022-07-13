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

  const autoCompleteInputHandler = (e) => {
    setSearchQuery(e);
    console.log(e);
  };

  return (
    <Search
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 0.5,
        paddingRight: 0.5,
        marginLeft: 2,
      }}
    >
      <NavSearchBarAutocomplete
        //onKeyPress={(e) => console.log(e)} //e.key === "Enter" && props.onSubmit(searchQuery)}
        id="navSearch"
        setSearchQuery={autoCompleteInputHandler}
        inputProps={{ "aria-label": "search" }}
        input={{ paddingLeft: 0 }}
        sx={{ input: { paddingLeft: 0 }, width: "100%", paddingLeft: 1 }}
        autoHighlight
      />

      <SearchIcon
        onClick={() => props.onSubmit(searchQuery)}
        onMouseEnter={(e) => {
          e.target.style.background = "rgb(255, 255, 255, 0.5)";
          e.target.style.borderRadius = "5px";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "none";
        }}
      />
    </Search>
  );
}
