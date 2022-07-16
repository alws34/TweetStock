import React from "react";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Tweet from "../../../../Shared/Tweet/Tweet";
import PredictionTable from "./PredictionTable";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
    borderRadius: 10,
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

export function PredictionStatsPopUp(props) {
  const [open, setOpen] = React.useState(false);
  const predStats = props.predictionData;
  console.log(predStats);
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

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Statistics
      </Button>
      <BootstrapDialog
        className="predStatsPopUp"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        //sx={{ backgroundColor: "black" }}
      >
        <BootstrapDialogTitle
          dividers
          id="customized-dialog-title"
          onClose={handleClose}
          sx={theme_sx}
        >
          Prediction based on:
        </BootstrapDialogTitle>
        <Divider
          sx={{
            backgroundColor: global.config.theme === "dark" ? "white" : "black",
          }}
        />

        <Typography sx={theme_sx}>
          <PredictionTable tableData={""} />
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
