import React, { useState, useEffect, useRef } from "react";
import { Tween } from "react-gsap";
import bgImg from "../assets/me-bg.jpg";
import { Footer } from "./Footer";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Landing = () => {
  const [state, setState] = useState({
    playState: "pause"
  });

  let tween = useRef(null);

  useEffect(() => {}, []);

  const handleClick = () => {
    setState({ playState: "play" });
  };
  const iconStyle = {
    margin: "7px 0px"
  };

  return (
    <div className="wrapper d-flex flex-column justify-content-between">
      <div
        className="container-fluid d-flex flex-row"
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
        <div className="social-media flex-column justify-content-end h-100">
          <div className="d-flex align-items-center flex-column justify-content-end">
            <div className="follow text-nowrap mb-sm-4">Follow Me</div>
            <div className="singleLine mt-sm-5">
              <svg
                viewBox="0 0 80 20"
                style={{ height: "1rem", display: "flex", stroke: "white" }}
              >
                <path d="M 0,10 L 80, 10" />
              </svg>
            </div>

            <div className="icons-sm d-flex flex-column mt-sm-5 mb-sm-5">
              <FaInstagram size="1.5em" style={iconStyle} />
              <FaLinkedinIn size="1.5em" style={iconStyle} />
              <FaGithub size="1.5em" style={iconStyle} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
