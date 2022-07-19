import React from "react";
import PageHeader from "../../Shared/PageHeader/PageHeader";
import marked from "marked";
import fetchJsonp from "fetch-jsonp";

export default function AboutPage() {
  return (
    <div>
      <PageHeader text={"About"} />
      <div style={{ marginLeft: 15, marginRight: 15, marginTop: 15 }}>
        This is ours final project in Computer Science B.Sc at Ruppin Academic
        Center 🇮🇱.
        <br />
        <br />
        In this project we are trying to predict stock price changes, for the
        end of the current trading day (for specific stocks), based on chatter
        analysis from twitter.
        <br />
        <br />
        The stocks that we monitor are:
        <br />-
        <a href="https://finance.yahoo.com/quote/AMZN/">Amazon [(AMZN)]</a>
        <br />-
        <a href="https://finance.yahoo.com/quote/AAPL/">Apple [(AAPL)]</a>
        <br />-
        <a href="https://finance.yahoo.com/quote/GOOG/">Google [(GOOG)]</a>
        <br />-
        <a href="https://finance.yahoo.com/quote/MSFT/">Microsoft [(MSFT)]</a>
        <br />-
        <a href="https://finance.yahoo.com/quote/TSLA/">Tesla [(TSLA)]</a>
        <br />
        <br />
        <div>
          <h1>Developed by:</h1>
          <br />
          <h3>Alon Weiss</h3>
          <br/>
          <h3>Guy Yaron</h3>
          <br/>
          <h3>Hadar Tayar</h3>
        </div>
      </div>
    </div>
  );
}
