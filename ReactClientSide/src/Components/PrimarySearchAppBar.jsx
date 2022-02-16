import * as React from "react";
import { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import Logo from "./Logo";
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Tooltip,
  Button,
  IconButton,
  Typography,
  InputBase,
  MenuItem,
  Menu,
  Avatar,
  // Badge,
  // AccountCircle,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
// import MailIcon from "@mui/icons-material/Mail";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import MoreIcon from "@mui/icons-material/MoreVert";
//import  from AccountCircle "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getLoggedUser } from "./Configs/getLoggedUser";
// import { useStateWithCallbackLazy } from "use-state-with-callback";
import { rapidApiKey } from "./Configs/apiUrlsKeys";
import "./Styles/NavBarStyle.css";
import { navPaths } from "./Configs/navPaths";

const MySwal = withReactContent(Swal);

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

// keys must be lower case
const navs = navPaths;

// new
export default function PrimarySearchAppBar() {
  const navigate = useNavigate();

  //const [user, setUser] = useStateWithCallbackLazy(null);
  //const [isLoggedIn, setIsLoggedIn] = useState(null);

  const [searchQuery, setSearchQuery] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  let u = getLoggedUser();
  let isLoggedIn = u.Id ? true : false;
  console.log(u);

  const settings = isLoggedIn ? ["Profile", "Logout"] : ["Sign In", "Sign Up"];
  const pages = isLoggedIn
    ? ["Home", "News", "Favorite Stocks"]
    : ["Home", "News"];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const searchStock = () => {
    const apiUrlStocks = `https://stock-data-yahoo-finance-alternative.p.rapidapi.com/v6/finance/quote?symbols=${searchQuery}%2CETH-USD`;
    fetch(apiUrlStocks, {
      method: "GET",
      headers: {
        "x-rapidapi-host":
          "stock-data-yahoo-finance-alternative.p.rapidapi.com",
        "x-rapidapi-key": rapidApiKey,
      },
    })
      .then((res) => {
        console.log("res=", res);
        console.log("ok", res.ok);
        return res.json();
      })
      .then(
        (result) => {
          try {
            console.log("fetch apiStock= ", result.quoteResponse.result[0]);

            let s = result.quoteResponse.result[0];
            if (s.displayName) {
              navigate(navs["about"], {
                state: {
                  ticker: searchQuery,
                  data: s,
                },
              });
            } else {
              displayErrorMsg(
                "Ticker search query wasnt found!",
                "Please try again, in the correct format (TSLA, MSFT, AAPL)"
              );
            }
          } catch (error) {
            console.log("error fetching stock details", result);
            displayErrorMsg("Something went wrong...", "Please try again");
          }
        },
        (error) => {
          console.log("err post=", error);
          displayErrorMsg("Something went wrong...", "Please try again");
        }
      );
  };

  const displayErrorMsg = (text, footer) => {
    return MySwal.fire({
      icon: "error",
      title: "Oops...",
      text: text,
      footer: footer,
    });
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    try {
      navigate(navs[page.toLowerCase()]);
    } catch (error) {
      console.log(error);
    }
    setAnchorElNav(null);
  };

  const logOut = () => {
    localStorage.clear(); // makes the user a guest
    navigate(navs["logout"]);
    return MySwal.fire({
      position: "center",
      icon: "success",
      title: "Successfuly logged out",
      showConfirmButton: false,
      timer: 800,
    });
  };

  const handleCloseUserMenu = (setting) => {
    setAnchorElUser(null);
    if (typeof setting != "string") return;
    if (setting === "Logout") {
      MySwal.fire({
        title: "Are you want to log out?",
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          logOut();
        }
      });
    } else {
      navigate(navs[setting.toLowerCase()]);
    }
  };

  const capitalizeFirstLetter = (text) => {
    return text && text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  const renderSearch = () => {
    return (
      <Search sx={{ paddingLeft: 0.5, marginLeft: 2 }}>
        <SearchIcon
          onClick={searchStock}
          onMouseEnter={(e) => {
            e.target.style.background = "rgb(255, 255, 255, 0.5)";
            e.target.style.borderRadius = "5px";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "none";
          }}
        />
        <StyledInputBase
          id="navSearch"
          placeholder="Search Stock…"
          inputProps={{ "aria-label": "search" }}
          input={{ paddingLeft: 0 }}
          style={{ width: "80%", paddingLeft: 1 }}
          sx={{ input: { paddingLeft: 0 } }}
          onChange={handleSearchChange}
          onKeyPress={(e) => e.key === "Enter" && searchStock()}
        />
      </Search>
    );
  };

  const renderSettings = () => {
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
              key={setting}
              onClick={() => handleCloseUserMenu(setting)}
            >
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    );
  };

  const renderHamburgerNav = () => {
    return (
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>

        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    );
  };
  const renderOpenNav = () => {
    return (
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={() => handleCloseNavMenu(page)}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            {page}
          </Button>
        ))}
      </Box>
    );
  };

  const renderLogo = () => {
    return (
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ mr: 2, display: { xs: "none", sm: "flex" } }}
      >
        <Logo />
      </Typography>
    );
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          {renderLogo()}

          {renderHamburgerNav()}

          {renderOpenNav()}

          {renderSearch()}

          {renderSettings()}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
