import React, { createRef, useEffect, useRef, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import MovingComponent from "react-moving-text";

const hat_animation_path = "./Images/hat2.json";

const pred_css = {
  flex: 1,
  textAlign: "center",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Loading = () => {
  return (
    <Player
      autoplay
      loop
      src={hat_animation_path}
      style={{ height: "300px", width: "300px" }}
    ></Player>
  );
};

const Pred = (props) => {
  const symbol = props.dir === "up" ? "⬆️" : "⬇️";
  const dir = props.dir === "up" ? "normal" : "reverse";

  return (
    <div>
      <MovingComponent
        type="bounce"
        duration="1000ms"
        delay="0s"
        direction={dir}
        timing="ease"
        iteration="1"
        fillMode="none"
        style={{ height: "200px", flex: 1, "padding-top": "100px" }}
      >
        <h1 style={{ "padding-right": "20px" }}>
          {props.ticker}
          <br />
          {symbol}
        </h1>
      </MovingComponent>
    </div>
  );
};

export default function Prediction(props) {
  const [isLoading, setIsLoading] = useState(true);
  const pred_here = () => {
    setIsLoading(false);
  };

  return (
    <div>
      <div style={pred_css}>
        {isLoading ? (
          <Loading />
        ) : (
          <Pred ticker={props.ticker} dir={props.dir} />
        )}
      </div>
      <button onClick={pred_here}>pred</button>
    </div>
  );
}
