import "./App.css";
import React, { useEffect, useState } from "react";
import NavBar from "./Components/Shared/NavBar/NavBar";
import HomePage from "./Components/Pages/HomePage/HomePage";
import StockDetailsPage from "./Components/Pages/StockDetailsPage/StockDetailsPage";
import SignUp from "./Components/Pages/SignUpPage/SignUpPage";
import SignIn from "./Components/Pages/SignInPage/SignInPage";
import NewsPage from "./Components/Pages/NewsPage/NewsPage";
import FavoriteStocksPage from "./Components/Pages/FavoriteStocksPage/FavoriteStocksPage";
import PopularTweets from "./Components/Pages/PopularTweetsPage/PopularTweetsPage";
import { Routes, Route } from "react-router-dom";
import { getRememberMe } from "./Components/Configs/getLoggedUser";
import ProfilePage from "./Components/Pages/ProfilePage/ProfilePage";
import { navPaths } from "./Components/Configs/navPaths";

import { lightTheme, darkTheme } from "./Themes/themes";
import { Paper, Switch, ThemeProvider } from "@material-ui/core";
import { createTheme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "2rem",
    //fontFamily: "roboto",
    textAlign: "center",
    //margin: "2rem",
  },
  typographyCustom: {
    marginBottom: "1rem",
  },
});

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    window.addEventListener("beforeunload", handleTabClosing);
    return () => {
      window.removeEventListener("beforeunload", handleTabClosing);
    };
  });

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
        style={{ padding: 10, margin: 0, minHeight: "100vh", height: "100%" }}
      >
        <NavBar />

        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />

        <Routes>
          <Route path={navPaths["home"]} element={<HomePage />} />
          <Route path={navPaths["about"]} element={<StockDetailsPage />} />
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
        </Routes>
      </Paper>
    </ThemeProvider>
    // </div>
  );
}
