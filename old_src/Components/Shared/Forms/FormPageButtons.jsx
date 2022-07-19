import React from "react";
import "./FormStyles.css";
import { Button, Grid, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { navPaths } from "../../Configs/navPaths";

export default function FormPageButtons(props) {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        color={props.buttonColor}
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        {props.primaryButtonText}
      </Button>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item>
          <Button
            onClick={() => navigate(navPaths[props.navPathKey])}
            variant="body2"
          >
            <Link>{props.linkText}</Link>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
