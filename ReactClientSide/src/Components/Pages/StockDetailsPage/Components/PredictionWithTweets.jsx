import React from "react";
import "../StockDetailsPageStyles.css";
import Tweet from "../../../Shared/Tweet/Tweet";
import PredTable from "./PredictionStatsTable/PredictionTable";
import Prediction from "../../../Shared/Prediction/Prediction";
import Divider from "@mui/material/Divider";

//import * as React from 'react';
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        style={{ backgroundColor: "black" }}
      >
        <BootstrapDialogTitle
          dividers
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Prediction based on:
        </BootstrapDialogTitle>
        <Divider />
        test
        <DialogContent dividers>
          <div className="tweetsAndTableContainer">
            {props.tweetsArr &&
              props.tweetsArr.length > 0 &&
              props.tweetsArr.map((tweet) => {
                return (
                  <div className="tweetsAndTableContainer">
                    <Typography gutterBottom>
                      <Tweet tweetId={tweet["tweet_id"]} />
                    </Typography>
                    {/* <div>
                      <PredTable tweet={tweet}></PredTable>
                    </div> */}
                  </div>
                );
              })}
          </div>

          {/* <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography> */}
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}

export default function PredictionWithTweets(props) {
  const predictionResponse = props.predictionResponse;
  const ticker = props.ticker;
  var tweetsArr = [];
  if (predictionResponse) {
    Object.keys(predictionResponse["Tweets"]).forEach((key, index) => {
      var tweet = predictionResponse["Tweets"][key];
      tweetsArr.push(tweet);
    });
  }

  return (
    <div className="predictionWithTweets">
      {predictionResponse === false ? (
        "no pred"
      ) : (
        <div className="predictionContainer">
          <Prediction
            isLoading={predictionResponse === null}
            size={"400px"}
            ticker={ticker}
            dir={
              predictionResponse &&
              predictionResponse["Prediction"]["prediction"] === 1
                ? "up"
                : "down"
            }
          ></Prediction>
          <CustomizedDialogs tweetsArr={tweetsArr} />
        </div>
      )}
    </div>
  );
}
