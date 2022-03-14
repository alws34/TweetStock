import React, { useState, useEffect } from "react";
import NewsCard from "../NewsCard";
import EHeader from "../EHeader";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function News() {
  const [news, setNews] = useState(null);
  const [ticker, setTicker] = useState("");
  const MySwal = withReactContent(Swal);
  const key = "o0z0bQyW2KjLH9vqOEJazLZ76ztmTW8o";
  let apiUrlNews = "https://api.polygon.io/v2/reference/news?apiKey=" + key;

  const searchStock = () => {
    console.log("Searching")
    apiUrlNews = `https://api.polygon.io/v2/reference/news?ticker=${ticker}&limit=15&apiKey=${key}`
    fetch(apiUrlNews, {
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
          if (result.results.length === 0)
            displayErrorMsg("Something went wrong...", "Please try again");
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
        },
        (error) => {
          console.log("err post=", error);
        }
      );
  }
  useEffect(() => {
    fetch(apiUrlNews, {
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
        },
        (error) => {
          console.log("err post=", error);
        }
      );
  }, []);

  let inputHandler = (e) => { setTicker(e.target.value.toUpperCase()) };

  const displayErrorMsg = (text, footer) => {
    return MySwal.fire({
      icon: "error",
      title: "Oops...",
      text: text,
      footer: footer,
    });
  };

  return (
    <div>
      <EHeader text={"News"} />
      <div className="search" style={{ display: 'flex', justifyContent: 'center', width: '50%', margin: 'auto' }}>
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search Stock News"
        />
        <SearchIcon
          style={{ marginTop: 14 }}
          onClick={searchStock}
          onMouseEnter={(e) => {
            e.target.style.background = "rgb(239, 239, 245)";
            e.target.style.borderRadius = "20px";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "none";
          }}
        />
      </div>
      {news}
    </div>
  );
}
