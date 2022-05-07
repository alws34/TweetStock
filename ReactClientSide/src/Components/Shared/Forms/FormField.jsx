import React from "react";
import { Grid, TextField } from "@mui/material";

export default function FormField(props) {
  return (
    <Grid item xs={props.xs} sm={props.sm}>
      <TextField
        autoComplete={props.autoComplete}
        name={props.fieldName}
        id={props.fieldName}
        label={props.label}
        defaultValue={props.fieldValue}
        inputProps={props.inputProps}
        fullWidth
        {...props.sx}
      />
    </Grid>
  );
}
