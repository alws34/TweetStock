import React from "react";
import { Grid } from "@mui/material";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";

export default function FormField(props) {
  return (
    <Grid item xs={props.xs} sm={props.sm}>
      <CssBaseline />
      <TextField
        variant="filled"
        autoComplete={props.autoComplete}
        name={props.fieldName}
        id={props.fieldName}
        label={props.label}
        defaultValue={props.fieldValue}
        inputProps={props.inputProps}
        fullWidth
        style={{ border: "1px solid", borderRadius: "5px" }}
        {...props.sx}
      />
    </Grid>
  );
}
