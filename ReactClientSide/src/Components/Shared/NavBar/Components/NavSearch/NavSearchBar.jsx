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
const StyledAutocomplete = styled(NavSearchBarAutocomplete)(({ theme }) => ({
  color: "inherit",
  "& .MuiAutocomplete-input": {
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
  const [searchQuery, setSearchQuery] = useState(null);

  const inputHandler = (e) => {
    console.log(e);
    setSearchQuery(e.target.value.toUpperCase());
  };

  const autoCompleteInputHandler = (e) => {
    setSearchQuery(e);
    console.log(e);
  };

  //useEffect(() => console.log(searchQuery));

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
      {/* <StyledInputBase
        id="navSearch"
        placeholder="Search Stock…"
        inputProps={{ "aria-label": "search" }}
        input={{ paddingLeft: 0 }}
        style={{ width: "80%", paddingLeft: 1 }}
        sx={{ input: { paddingLeft: 0 } }}
        onChange={inputHandler}
        onKeyPress={(e) => e.key === "Enter" && props.onSubmit(searchQuery)}
      /> */}
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

// return (
//   <Autocomplete
//     id="navSearch"
//     sx={{ input: { paddingLeft: 0 } }}
//     options={ticker_dict}
//     autoHighlight
//     getOptionLabel={(option) => option.title + "  (" + option.ticker + ")"}
//     //placeholder="Search Stock…"
//     inputProps={{ "aria-label": "search" }}
//     input={{ paddingLeft: 0 }}
//     style={{ width: "80%", paddingLeft: 1 }}
//     //       onKeyPress={(e) => e.key === "Enter" && props.onSubmit(searchQuery)}
//     onKeyPress={(e) => e.key === "Enter" && props.onSubmit(searchQuery)}
//     renderOption={(props, option) => (
//       <Box
//         component="li"
//         sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
//         {...props}
//       >
//         {/* <img
//                   loading="lazy"
//                   width="20"
//                  //https://logo.clearbit.com/${name}.com?size=80&greyscale=false
//                   src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
//                   srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
//                   alt=""
//               /> */}
//         {option.title} ({option.ticker})
//       </Box>
//     )}
//     renderInput={(params) => (
//       <Search sx={{ paddingLeft: 0.5, marginLeft: 2 }}>
//         <StyledInputBase
//           id="navSearch"
//           placeholder="Search Stock…"
//           inputProps={{ "aria-label": "search" }}
//           input={{ paddingLeft: 0 }}
//           style={{ width: "80%", paddingLeft: 1 }}
//           sx={{ input: { paddingLeft: 0 } }}
//           onChange={setSearchQuery(params.inputProps.value)}
//           {...params}
//           onKeyPress={(e) => e.key === "Enter" && props.onSubmit(searchQuery)}
//         />
//         <SearchIcon
//           onClick={() => props.onSubmit(searchQuery)}
//           onMouseEnter={(e) => {
//             e.target.style.background = "rgb(255, 255, 255, 0.5)";
//             e.target.style.borderRadius = "5px";
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.background = "none";
//           }}
//         />
//       </Search>

//       // <div>
//       //   <TextField
//       //     {...params}
//       //     style={{ border: "1px solid", borderRadius: "5px" }}
//       //     label="Choose a Stock"
//       //     inputProps={{
//       //       ...params.inputProps,
//       //       autoComplete: "new-password", // disable autocomplete and autofill
//       //     }}
//       //     onChange={() => console.log(params.inputProps)}
//       //   />
//       // </div>
//     )}
//   />
// );
