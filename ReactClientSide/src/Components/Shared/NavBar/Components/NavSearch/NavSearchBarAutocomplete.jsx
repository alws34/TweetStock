import React from "react";
import { Autocomplete, Box } from "@mui/material";
import TextField from "@material-ui/core/TextField";
import { tickerOptions, capitalizeFirstLetters } from "./TickerOptions";

export default function NavSearchBarAutocomplete(props) {
  const getTickerFromSearchQuery = (val) => {
    //console.log(searchQuery);
    // if (searchQuery === undefined || searchQuery === null) {
    //   return undefined;
    // }
    return typeof val === "string" ? val : val.ticker;
  };

  return (
    <div>
      <Autocomplete
        id="navSearch"
        options={tickerOptions}
        //value={searchQuery}
        getOptionLabel={(option) => option.ticker}
        renderOption={(props, option) => (
          <Box {...props} component="li">
            {capitalizeFirstLetters(option.title)} - {option.ticker}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Stocks..."
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
            style={{ width: "100%" }}
            onChange={props.setSearchQuery(
              getTickerFromSearchQuery(params.inputProps.value)
            )}
          />
        )}
      />
    </div>
  );
}
