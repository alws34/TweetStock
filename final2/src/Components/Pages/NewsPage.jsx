import React, { useState, useEffect } from "react";
import NewsCard from "../NewsCard";
import EHeader from "../EHeader";

export default function News() {
  const key = "rzZ0sm1Y1FmR1HaYkbF8lnDjTnRBc8CP";
  const apiUrlNews = "https://api.polygon.io/v2/reference/news?apiKey=" + key;
  const [news, setNews] = useState(null);
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

  return (
    <div>
      <EHeader text={"News"} />
      {news}
    </div>
  );
}
