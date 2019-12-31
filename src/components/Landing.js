import React, { useEffect, useRef } from "react";
import { handleEnterTitle, handleExitTitle, enterPicture, exitPicture } from "../components/Animations";
import { Footer } from "./Footer";
import { withRouter } from "react-router-dom";
  import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Landing = ({ navState, handleSetNav }) => {
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let picture = useRef(null);

  useEffect(() => {
    if (navState.Landing) {
      handleEnterTitle([line1, line2, line3]);
      enterPicture(picture);
    }
    if (!navState.Landing) {
      handleExitTitle([line3, line2, line1]);
      exitPicture(picture);
    }
  }, [navState.Landing]);

  // useEffect(() => {
  //   enterPicture(picture);
  // }, [picture]);

  const iconStyle = {
    margin: "7px 0px"
  };

  return (
    <div className="wrapper d-flex flex-column justify-content-between">
      <div
        className="container-fluid d-flex flex-row"
        style={{ height: "-webkit-fill-available" }}
      >
        <div className="container greet" style={{ alignSelf: "center" }}>
          <div className="d-flex flex-column">
            <div>
              {" "}
              <h1 style={{ fontSize: "4.5rem" }} ref={el => (line1 = el)}>
                I build beautiful<span className="dot"> web apps</span>
              </h1>
            </div>
            <div className="subtitle">
              <h2 ref={el => (line2 = el)}>I'm a tech passionate human.</h2>
            </div>
          </div>
        </div>
        <div className="meBg" ref={el => (picture = el)} />
        <div className="social-media flex-column justify-content-end h-100" ref={el=>line3=el}>
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
      <Footer navState={navState} />
    </div>
  );
};

export default withRouter(Landing);
