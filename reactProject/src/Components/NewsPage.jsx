import React, { useState, useEffect } from 'react'
import New from './New';
import EHeader from './EHeader';

export default function News() {
  const key = "rzZ0sm1Y1FmR1HaYkbF8lnDjTnRBc8CP";
  let ticker = "TSLA";
  //const apiUrl = "https://api.polygon.io/v2/reference/news?ticker=" + {ticker} + "&limit=10&apiKey=" + key;
  const apiUrl = "https://api.polygon.io/v2/reference/news?apiKey=rzZ0sm1Y1FmR1HaYkbF8lnDjTnRBc8CP";
  const [news, setNews] = useState(null);
  useEffect(() => {
    fetch(apiUrl, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      })
    })
      .then(res => {
        console.log('res=', res);
        // console.log('res.status', res.status);
        // console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch News= ", result.results);
          setNews(result.results.map(n =>
            < New
              key={n.id}
              published={n.published_utc}
              title={n.title}
              author={n.publisher.name}
              description={n.description}
              image_url={n.image_url}
              article_url={n.article_url}
            />
          ));
        },
        (error) => {
          console.log("err post=", error);
        })

  }, [])

  return (
    <div>
      <EHeader text={"News"} />
      {news}
    </div>
  )
}
