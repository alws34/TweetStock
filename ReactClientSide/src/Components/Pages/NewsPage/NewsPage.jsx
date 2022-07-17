import React, { useState, useEffect } from "react";
import "./NewsPageStyles.css";
import NewsCardsContainer from "./Components/NewsCardsContainer";
import PageHeader from "../../Shared/PageHeader/PageHeader";
import NewsSearchBar from "./Components/NewsSearchBar";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../../Configs/Global";

export default function NewsPage() {
  const [news, setNews] = useState(null);
  const MySwal = withReactContent(Swal);
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

  const fetchNews = (ticker) => {
    const key = "o0z0bQyW2KjLH9vqOEJazLZ76ztmTW8o";
    const limit = 15;
    const t = ticker ? ticker : "";
    const apiUrl = `https://api.polygon.io/v2/reference/news?ticker=${t}&limit=${limit}&apiKey=${key}`;
    fetch(apiUrl, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json; charset=UTF-8",
      }),
    })
      .then((res) => {
        console.log("res=", res);
        return res.json();
      })
      .then(
        (result) => {
          console.log("fetch News= ", result.results);
          if (result.results === undefined) {
            displayErrorMsg(
              `Too many requests...`,
              "Please try again in a moment"
            );
          } else if (result.results.length === 0) {
            displayErrorMsg(`Could not find news`, "No news were found");
          } else {
            let newsData = result.results;
            setNews(newsData);
          }
        },
        (error) => {
          console.log("err post=", error);
        }
      );
  };

  const fetchGeneralNews = () => {
    fetchNews(null); // ticker=null for general news
  };

  useEffect(() => {
    console.clear();
    fetchGeneralNews();
  }, []);

  return (
    <div className="newsPage">
      <PageHeader text={"News"} />
      <NewsSearchBar fetchNews={fetchNews} />
      <NewsCardsContainer news={news} />
    </div>
  );
}
