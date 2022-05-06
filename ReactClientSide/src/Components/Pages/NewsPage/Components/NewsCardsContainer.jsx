import React from "react";
import NewsCard from "./NewsCard";

export default function NewsCardsContainer(props) {
  return (
    props.news &&
    props.news.map((newsData) => (
      <NewsCard key={newsData.id} newsData={newsData} />
    ))
  );
}
