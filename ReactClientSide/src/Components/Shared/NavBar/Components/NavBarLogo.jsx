import React from "react";
import TweetStockLogo from "../../Logo/TweetStockLogo";
import { Typography } from "@mui/material";

export default function NavBarLogo() {
  return (
    <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ mr: 2, display: { xs: "none", sm: "flex" } }}
    >
      <TweetStockLogo />
    </Typography>
  );
}
