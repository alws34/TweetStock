import React from "react";
import { Box, Button } from "@mui/material";

export default function SpreadedNav(props) {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {props.pages.map((page) => (
        <Button
          key={page}
          onClick={() => props.handleCloseNavMenu(page)}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
}
