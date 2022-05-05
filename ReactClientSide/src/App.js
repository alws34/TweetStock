import "./App.css";
import React, { useEffect } from "react";
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

function App() {
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
    <div>
      <NavBar />
      <Routes>
        <Route path={navPaths["home"]} element={<HomePage />} />
        <Route path={navPaths["about"]} element={<StockDetailsPage />} />
        <Route path={navPaths["news"]} element={<NewsPage />} />
        <Route
          path={navPaths["favorite stocks"]}
          element={<FavoriteStocksPage />}
        />
        <Route path={navPaths["popular tweets"]} element={<PopularTweets />} />
        <Route path={navPaths["sign up"]} element={<SignUp />} />
        <Route path={navPaths["sign in"]} element={<SignIn />} />
        <Route path={navPaths["profile"]} element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
