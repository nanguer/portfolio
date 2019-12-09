import React, { useState, useEffect, useRef } from "react";
import { Tween } from "react-gsap";
import bgImg from "../assets/me-bg.jpg";
import { Footer } from "./Footer";

const Landing = () => {
  const [state, setState] = useState({
    playState: "pause"
  });

  let tween = useRef(null);

  useEffect(() => {}, []);

  const handleClick = () => {
    setState({ playState: "play" });
  };

  return (
    <div className="wrapper d-flex flex-column justify-content-between">
      <div
        className="container d-flex flex-row justify-content-center"
        style={{ height: "-webkit-fill-available" }}
      >
        <Tween
          to={{ color: "red" }}
          playState={state.playState}
          ref={ref => (tween = ref)}
        >
          {/* <div className="main-title">
          <h1>
            <span className="nahuel" onClick={handleClick}>
              {" "}
              NNG
            </span>
          </h1>
        </div> */}
        </Tween>

        <div className="container greet" style={{ alignSelf: "center" }}>
          <div className="d-flex flex-column">
            <div>
              {" "}
              <h1 style={{ fontSize: "4.5rem" }}>
                I build beautiful<span className="dot"> web apps</span>
              </h1>
            </div>
            <div className="subtitle">
              <h2>I'm a tech passionate human.</h2>
            </div>
          </div>
        </div>
        <div className="meBg"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
