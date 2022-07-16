import React from "react";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import Tweet from "../../../../Shared/Tweet/Tweet";
import PredictionTable from "./PredictionTable";
import {
  BootstrapDialog,
  BootstrapDialogTitle,
} from "../../../../Shared/PopupItems/BootstrapPopupItems";

export function PredictionStatsPopUp(props) {
  const [open, setOpen] = React.useState(false);
  const predStats = props.predictionData;
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const theme_sx = {
    backgroundColor:
      global.config.theme === "dark"
        ? global.config.darkBG
        : global.config.lightBG,
    color: global.config.theme === "dark" ? "white" : "black",
  };
  const getDateFromPredResponse = (pred_formatted_date) => {
    if (!pred_formatted_date) return "";
    let splitted = pred_formatted_date.split("_");
    let res = `${splitted[0]}/${splitted[1]}/${splitted[2]} at ${splitted[3]}:${splitted[4]}`;
    return res;
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        {props.ticker && props.dir
          ? `${props.ticker} Prediction - ${props.dir}`
          : ""}
      </Button>
      <BootstrapDialog
        className="predStatsPopUp"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          dividers
          id="customized-dialog-title"
          onClose={handleClose}
          sx={theme_sx}
        >
          <p style={{ fontSize: 15, fontWeight: "bold", marginRight: 3 }}>
            Last Updated:{" "}
            {predStats &&
              predStats[0] &&
              getDateFromPredResponse(props.lastUpdated)}
          </p>
          <Divider />
          {props.ticker} Prediction based on:
        </BootstrapDialogTitle>
        <Divider
          sx={{
            backgroundColor: global.config.theme === "dark" ? "white" : "black",
          }}
        />

        <Typography sx={theme_sx}>
          <PredictionTable tableData={predStats} />
        </Typography>

        <Divider
          sx={{
            backgroundColor: global.config.theme === "dark" ? "white" : "black",
          }}
        />

        <DialogContent sx={theme_sx} dividers>
          <div className="tweetsAndTableContainer">
            {props.tweetsArr &&
              props.tweetsArr.length > 0 &&
              props.tweetsArr.map((tweet) => {
                return (
                  <div className="tweetsAndTableContainer">
                    <Typography gutterBottom>
                      <Tweet tweetId={tweet["tweet_id"]} />
                    </Typography>
                  </div>
                );
              })}
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
