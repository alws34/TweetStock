import React, { useState, useEffect } from "react";
import LoadingCircle from "../../../Shared/LoadingCircle";
//import PageHeader from "../../../Shared/PageHeader/PageHeader";
import TweetsContainer from "../../../Shared/Tweet/TweetsContainer";
import Button from "@mui/material/Button";

//import Prediction from "../../Shared/Stock/Prediction";
import { apiUrlTwitter } from "../../../Configs/apiUrlsKeys";
import { useStateWithCallbackLazy } from "use-state-with-callback";
//import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  BootstrapDialog,
  BootstrapDialogTitle,
} from "../../../Shared/PopupItems/BootstrapPopupItems";
import "../../../Configs/Global";

import Divider from "@mui/material/Divider";
// import PropTypes from "prop-types";
// import Button from "@mui/material/Button";
// import { styled } from "@mui/material/styles";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
// import Typography from "@mui/material/Typography";
// import Tweet from "../../../../Shared/Tweet/Tweet";
// import PredictionTable from "./PredictionTable";

export default function PopularTweetsPopup(props) {
  const MySwal = withReactContent(Swal);
  const [open, setOpen] = useState(false);

  //const navigate = useNavigate();
  const [tweetsArr, setTweetsArr] = useStateWithCallbackLazy([]);
  const [isLoading, setIsLoading] = useState(true);
  let ticker = props.ticker;
  try {
    ticker = ticker.toUpperCase();
  } catch (e) {
    console.log(e);
  }

  const handleClickOpen = () => {
    setOpen(true);
    fetchTwitterPopularTweets(ticker);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleNoTweetsFound = () => {
    setOpen(false);
  };
  const theme_sx = {
    backgroundColor:
      global.config.theme === "dark"
        ? global.config.darkBG
        : global.config.lightBG,
    color: global.config.theme === "dark" ? "white" : "black",
  };
  const fetchTwitterPopularTweets = (ticker) => {
    fetch(apiUrlTwitter + `/?ticker=${ticker}`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json; charset=UTF-8",
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then(
        (result) => {
          let res = JSON.parse(result);
          let tweets = res.statuses;
          if (tweets.length === 0) {
            handleNoTweetsFound();
            return MySwal.fire({
              background:
                global.config.theme === "dark"
                  ? global.config.darkBG
                  : global.config.lightBG,
              color: global.config.theme === "dark" ? "white" : "black",
              icon: "error",
              title: "Oops...",
              text: "No popular tweets were found about this stock!",
              footer: "Please try searching another one...",
            });
          } else {
            setTweetsArr(tweets, () => setIsLoading(false));
          }
        },
        (error) => {
          console.log("err=", error);
        }
      );
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        {ticker} Popular Tweets
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
            Twitter's Choice
          </p>
          <Divider
            sx={{
              backgroundColor:
                global.config.theme === "dark" ? "white" : "black",
            }}
          />
          {ticker} Popular Tweets
          <Divider
            sx={{
              backgroundColor:
                global.config.theme === "dark" ? "white" : "black",
            }}
          />
        </BootstrapDialogTitle>

        <DialogContent sx={theme_sx} dividers>
          {isLoading ? (
            <LoadingCircle />
          ) : tweetsArr.length === 0 ? (
            "test"
          ) : (
            <TweetsContainer tweets={tweetsArr} />
          )}
        </DialogContent>
      </BootstrapDialog>

      {/* <PageHeader text={`$${ticker.toUpperCase()} Tweets`} /> */}
    </div>
  );
}
