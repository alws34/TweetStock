import "./App.css";
import React, { useEffect, useState } from "react";
import NavBar from "./Components/Shared/NavBar/NavBar";
import HomePage from "./Components/Pages/HomePage/HomePage";
import TrendingStocksPage from "./Components/Pages/TrendingStocksPage/TrendingStocksPage";
import StockDetailsPage from "./Components/Pages/StockDetailsPage/StockDetailsPage";
import SignUp from "./Components/Pages/SignUpPage/SignUpPage";
import SignIn from "./Components/Pages/SignInPage/SignInPage";
import NewsPage from "./Components/Pages/NewsPage/NewsPage";
import FavoriteStocksPage from "./Components/Pages/FavoriteStocksPage/FavoriteStocksPage";
import PopularTweets from "./Components/Pages/PopularTweetsPage/PopularTweetsPage";
import { Routes, Route } from "react-router-dom";
import { getRememberMe } from "./Components/Configs/getLoggedUser";
import "./Components/Configs/Global";
import ProfilePage from "./Components/Pages/ProfilePage/ProfilePage";
import AboutPage from "./Components/Pages/AboutPage/AboutPage";

import { navPaths } from "./Components/Configs/navPaths";

import IconButton from "@mui/material/IconButton";
import { lightTheme, darkTheme } from "./Themes/themes.jsx"; //"./Themes/Themes";
import { Paper, ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // light theme icon
import Brightness7Icon from "@mui/icons-material/Brightness7"; // dark theme icon
import Sticky from "react-sticky-el";

const useStyles = makeStyles({
  root: {
    //padding: "2rem",
    //fontFamily: "roboto",
    textAlign: "center",
    //margin: "2rem",
  },
  typographyCustom: {
    marginBottom: "1rem",
  },
});

export default function App() {
  const [darkMode, setDarkMode] = useState(global.config.theme);
  useEffect(() => {
    document.title = "TweetStock";
    window.addEventListener("beforeunload", handleTabClosing);
    return () => {
      window.removeEventListener("beforeunload", handleTabClosing);
    };
  });
  const toggleTheme = () => {
    global.config.theme = !darkMode ? "dark" : "light";
    setDarkMode(!darkMode);
  };
  const ThemeController = () => {
    return (
      <Sticky>
        <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Sticky>
    );
  };

  const handleTabClosing = (event) => {
    event.preventDefault();
    let remember_me = getRememberMe();
    if (!remember_me) {
      localStorage.clear();
    }
  };

  return (
    // <div>
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Paper
        className={useStyles().root}
        elevation={3}
        style={{ minHeight: "100vh", height: "100%" }}
      >
        <NavBar />

        {/* <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} /> */}
        <ThemeController />

        <Routes>
          <Route path={navPaths["home"]} element={<HomePage />} />
          <Route
            path={navPaths["stock details"]}
            element={<StockDetailsPage />}
          />
          <Route path={navPaths["news"]} element={<NewsPage />} />
          <Route
            path={navPaths["favorite stocks"]}
            element={<FavoriteStocksPage />}
          />
          <Route
            path={navPaths["popular tweets"]}
            element={<PopularTweets />}
          />
          <Route path={navPaths["sign up"]} element={<SignUp />} />
          <Route path={navPaths["sign in"]} element={<SignIn />} />
          <Route path={navPaths["profile"]} element={<ProfilePage />} />
          <Route
            path={navPaths["trending stocks"]}
            element={<TrendingStocksPage />}
          />
          <Route path={navPaths["about"]} element={<AboutPage />} />
        </Routes>
      </Paper>
    </ThemeProvider>
    // </div>
  );
}
