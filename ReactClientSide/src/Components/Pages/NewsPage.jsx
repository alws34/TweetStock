import React, { useState, useEffect } from "react";
import NewsCard from "../Functional Components/NewsCard";
import PageHeader from "../Functional Components/PageHeader";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function News() {
  const [news, setNews] = useState(null);
  const MySwal = withReactContent(Swal);
  const displayErrorMsg = (text, footer) => {
    return MySwal.fire({
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
            setNews(
              result.results.map((n) => (
                <NewsCard
                  key={n.id}
                  published={n.published_utc}
                  title={n.title}
                  author={n.publisher.name}
                  description={n.description}
                  image_url={n.image_url}
                  article_url={n.article_url}
                />
              ))
            );
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

  const StockSearchBar = (props) => {
    const [ticker, setTicker] = useState("");

    const fetchNewsByTicker = () => {
      console.log("Searching");
      ticker.length > -1 && props.fetchNews(ticker);
    };
    const inputHandler = (e) => {
      setTicker(e.target.value.toUpperCase());
    };
    return (
      <div
        className="search"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "50%",
          margin: "auto",
        }}
      >
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          onKeyPress={(e) => e.key === "Enter" && fetchNewsByTicker()}
          variant="outlined"
          fullWidth
          label="Search Stock News"
        />
        <SearchIcon
          style={{ marginTop: 14 }}
          onClick={fetchNewsByTicker}
          onMouseEnter={(e) => {
            e.target.style.background = "rgb(239, 239, 245)";
            e.target.style.borderRadius = "20px";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "none";
          }}
        />
      </div>
    );
  };

  useEffect(() => {
    console.clear();
    fetchGeneralNews();
  }, []);

  return (
    <div>
      <PageHeader text={"News"} />
      <StockSearchBar fetchNews={fetchNews} />
      {news}
    </div>
  );
}
