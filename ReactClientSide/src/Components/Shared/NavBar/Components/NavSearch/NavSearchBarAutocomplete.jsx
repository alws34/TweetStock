import React from "react";
import { Autocomplete, Box } from "@mui/material";
import TextField from "@material-ui/core/TextField";
import { tickerOptions, capitalizeFirstLetters } from "./TickerOptions";

export default function NavSearchBarAutocomplete(props) {
  return (
    <div>
      <Autocomplete
        id="navSearch"
        clearOnEscape={true}
        autoSelect={true}
        //options={tickerOptions}
        options={tickerOptions.sort(
          (a, b) => -b.ticker[0].localeCompare(a.ticker[0])
        )}
        groupBy={(option) => option.ticker[0].toUpperCase()}
        //value={tickerOptions[0]}
        getOptionLabel={(option) => option.title + " - " + option.ticker}
        onChange={(event, newOption) => {
          props.setSearchQuery(newOption.ticker);
        }}
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
              autoComplete: "off", // disable autocomplete and autofill
            }}
            style={{ width: "100%" }}
            // onChange={props.setSearchQuery(
            //   getTickerFromSearchQuery(params.inputProps.value)
            // )}
          />
        )}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            // Prevent's default 'Enter' behavior.
            event.defaultMuiPrevented = true;
            // your handler code
          }
        }}
      />
    </div>
  );
}
