import React from "react";
import StockChat from "./StockChat";
import Popup from "reactjs-popup";
import { Button, Checkbox } from "@mui/material";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import Sticky from "react-sticky-el";

export default function PopUpStockChat(props) {
  return (
    <Sticky mode="bottom">
      <div
        style={{
          display: "flex",
          justifyContent: "start",
        }}
      >
        <Popup
          trigger={
            <Checkbox
              checked={false}
              icon={
                <ForumRoundedIcon
                  sx={{
                    fontSize: 40,
                  }}
                  color="info"
                ></ForumRoundedIcon>
              }
              checkedIcon={
                <ForumRoundedIcon
                  sx={{
                    fontSize: 40,
                  }}
                  color="info"
                ></ForumRoundedIcon>
              }
            />
          }
          position="right bottom"
        >
          <Sticky>
            <StockChat ticker={props.ticker} />
          </Sticky>
        </Popup>
      </div>
    </Sticky>
  );
}
