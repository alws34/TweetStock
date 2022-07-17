import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { navPaths } from "../../../Configs/navPaths";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  Box,
  Tooltip,
  IconButton,
  Typography,
  MenuItem,
  Menu,
  Avatar,
} from "@mui/material";
import { isLoggedUser, getLoggedUser } from "../../../Configs/getLoggedUser";
import "../../../Configs/Global";
const MySwal = withReactContent(Swal);
const navs = navPaths;

export default function SettingsMenu() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const capitalizeFirstLetter = (text) => {
    return text && text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };
  const settings = isLoggedUser()
    ? ["Profile", "Logout"]
    : ["Sign In", "Sign Up"];

  const u = getLoggedUser();
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear(); // makes the user a guest
    navigate(navs["logout"]);
    return MySwal.fire({
      background:
        global.config.theme === "dark"
          ? global.config.darkBG
          : global.config.lightBG,
      color: global.config.theme === "dark" ? "white" : "black",
      position: "center",
      icon: "success",
      title: "Successfuly logged out",
      showConfirmButton: false,
      timer: 800,
    });
  };
  const handleCloseUserMenu = (setting) => {
    setAnchorElUser(null);
    //if (typeof setting != "string") return;
    if (setting === "Logout") {
      MySwal.fire({
        background:
          global.config.theme === "dark"
            ? global.config.darkBG
            : global.config.lightBG,
        color: global.config.theme === "dark" ? "white" : "black",
        title: "Are you sure?",
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          logOut();
        }
      });
    } else {
      try {
        navigate(navs[setting.toLowerCase()]);
      } catch (error) {
        return;
      }
    }
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0.2 }}>
            <Avatar alt="Remy Sharp" src={u.Picture} />
          </IconButton>
        </Tooltip>
        <p style={{ margin: 0.2, fontWeight: "bold" }}>
          {capitalizeFirstLetter(u.FirstName)}
        </p>
      </div>

      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem
            sx={{
              backgroundColor:
                global.config.theme === "dark"
                  ? global.config.darkBG
                  : global.config.lightBG,
              color: global.config.theme === "dark" ? "white" : "black",
            }}
            key={setting}
            onClick={() => handleCloseUserMenu(setting)}
          >
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
