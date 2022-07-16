import React, { useState } from "react";
import Lottie from "react-lottie";
import MovingComponent from "react-moving-text";
import upChart from "./Images/up_chart_v2.json";
import downChart from "./Images/down_chart_v2.json";
import hat_ph from "./Images/pred_ph_hat.json";

export default function Prediction(props) {
  //const [isLoading, setIsLoading] = useState(props.dir === null ? true : false);

  //const pred_here = () => setIsLoading(false);
  const pred_prefix_text = `${props.ticker} Prediction`;

  const Loading = (props) => {
    const loading_lottie_opts = {
      loop: true,
      autoplay: true,
      speed: props.speed,
      animationData: hat_ph,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    return (
      <MovingComponent>
        <Lottie
          options={loading_lottie_opts}
          height={props.height}
          width={props.width}
        />
        <p style={{ margin: 0 }}>Fetching {pred_prefix_text}...</p>
      </MovingComponent>
    );
  };

  const Pred = (props) => {
    const animationsForChaining = ["fadeInFromBottom", "bounce"];
    const [animationIndex, setAnimationIndex] = useState(0);
    const [animationType, setAnimationType] = useState(
      animationsForChaining[0]
    );
    const handleChainAnimation = () => {
      setAnimationIndex(animationIndex + 1);
      setAnimationType(animationsForChaining[animationIndex + 1]);
    };

    const symbol_lottie_opts = {
      loop: false,
      autoplay: true,
      speed: props.speed,
      animationData: props.dir === "up" ? upChart : downChart,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    return (
      <div
        style={{ fontWeight: "bolder", marginBottom: 0, textAlign: "center" }}
      >
        <MovingComponent
          onAnimationEnd={handleChainAnimation}
          type={animationType}
          duration={animationType === "bounce" ? "1250ms" : "175ms"}
          direction={
            props.dir === "down" && animationType === "bounce"
              ? "reverse"
              : "normal"
          }
          timing="ease"
          iteration="1"
          fillmode="forward"
        >
          <Lottie options={symbol_lottie_opts} width={props.width} />
        </MovingComponent>
        {/* <p style={{ margin: 0 }}>
          {pred_prefix_text + " - " + props.dir.toUpperCase()}
        </p> */}
      </div>
    );
  };

  //useEffect(setIsLoading(props.dir === null ? true : false), []);

  return (
    <div
      style={{
        dsplay: "flex",
        justifyContent: "center",
        alignItems: "center",
        //height: props.size - 100,
        width: props.size,
      }}
    >
      <div>
        {props.isLoading ? (
          <Loading height={"100%"} width={"100%"} speed={0.6} />
        ) : (
          <Pred
            ticker={props.ticker}
            dir={props.dir}
            speed={0.75}
            width={"35%"}
          />
        )}
      </div>
      {/* <button onClick={pred_here}>pred</button> */}
    </div>
  );
}
