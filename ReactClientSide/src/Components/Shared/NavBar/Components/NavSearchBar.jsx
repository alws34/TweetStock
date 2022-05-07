import React, { useState } from "react";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";

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
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function NavSearchBar(props) {
  console.log("test");

  const [searchQuery, setSearchQuery] = useState("");

  const inputHandler = (e) => {
    setSearchQuery(e.target.value.toUpperCase());
  };
  return (
    <Search sx={{ paddingLeft: 0.5, marginLeft: 2 }}>
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
      <StyledInputBase
        id="navSearch"
        placeholder="Search Stock…"
        inputProps={{ "aria-label": "search" }}
        input={{ paddingLeft: 0 }}
        style={{ width: "80%", paddingLeft: 1 }}
        sx={{ input: { paddingLeft: 0 } }}
        onChange={inputHandler}
        onKeyPress={(e) => e.key === "Enter" && props.onSubmit(searchQuery)}
      />
    </Search>
  );
}
