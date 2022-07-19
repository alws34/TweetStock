import * as React from "react";
import { useState } from "react";
import "./NavBarStyle.css";
import SpreadedNav from "./Components/NavItems/SpreadedNav";
import HamburgerNav from "./Components/NavItems/HamburgerNav";
import NavSearchBar from "./Components/NavSearch/NavSearchBar";
import NavBarLogo from "./Components/NavBarLogo";
import SettingsMenu from "./Components/SettingsMenu";
import { getLoggedUser, isLoggedUser } from "../../Configs/getLoggedUser";
import { rapidApiKey } from "../../Configs/apiUrlsKeys";
import { navPaths } from "../../Configs/navPaths";
import { AppBar, Toolbar, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

// keys must be lower case
const navs = navPaths;

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const navigate = useNavigate();

  const pages = isLoggedUser()
    ? ["Home", "News", "Trending Stocks", "Favorite Stocks", "About"]
    : ["Home", "News", "Trending Stocks", "About"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = (page) => {
    try {
      navigate(navs[page.toLowerCase()]);
    } catch (error) {
      console.log(error);
    }
    setAnchorElNav(null);
  };

  const fetchStock = (ticker) => {
    const apiUrlStocks = `https://stock-data-yahoo-finance-alternative.p.rapidapi.com/v6/finance/quote?symbols=${ticker}%2CETH-USD`;
    const displayErrorMsg = (text, footer) => {
      return MySwal.fire({
        background:
          global.config.theme === "dark"
            ? global.config.darkBG
            : global.config.lightBG,
        color: global.config.theme === "dark" ? "white" : "black",
        icon: "error",
        title: "Oops...",
        text: text,
        footer: footer,
      });
    };
    fetch(apiUrlStocks, {
      method: "GET",
      headers: {
        "x-rapidapi-host":
          "stock-data-yahoo-finance-alternative.p.rapidapi.com",
        "x-rapidapi-key": rapidApiKey,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then(
        (result) => {
          try {
            let s = result.quoteResponse.result[0];
            navigate(navs["stock details"], {
              state: {
                ticker: ticker,
                data: s,
              },
            });
          } catch (error) {
            console.log("error fetching stock details", result);
            displayErrorMsg(
              "Something went wrong...\nTicker not found",
              "Please try again"
            );
          }
        },
        (error) => {
          console.log("err fetching stock=", error);
          displayErrorMsg("Something went wrong...", "Please try again");
        }
      );
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <NavBarLogo />
          <HamburgerNav
            pages={pages}
            anchorElNav={anchorElNav}
            handleCloseNavMenu={handleCloseNavMenu}
            handleOpenNavMenu={handleOpenNavMenu}
          />
          <SpreadedNav pages={pages} handleCloseNavMenu={handleCloseNavMenu} />
          <NavSearchBar onSubmit={(searchQuery) => fetchStock(searchQuery)} />

          <SettingsMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
