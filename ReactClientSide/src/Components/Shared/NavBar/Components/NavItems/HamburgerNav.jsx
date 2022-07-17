import React from "react";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../../../../Configs/Global";

export default function HamburgerNav(props) {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={props.handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={props.anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(props.anchorElNav)}
        onClose={props.handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {props.pages.map((page) => (
          <MenuItem
            sx={{
              backgroundColor:
                global.config.theme === "dark"
                  ? global.config.darkBG
                  : global.config.lightBG,
              color: global.config.theme === "dark" ? "white" : "black",
            }}
            key={page}
            onClick={() => props.handleCloseNavMenu(page)}
          >
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
