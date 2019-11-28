import React, { useState, useEffect, useRef } from "react";
import { Tween } from "react-gsap";

const Landing = () => {
  const [state, setState] = useState({
    playState: "pause"
  });

  let tween = useRef(null);

  useEffect(() => {
    console.log(tween);
  }, []);

  const handleClick = () => {
    setState({ playState: "play" });
  };

  return (
    <Tween
      to={{ color: "red" }}
      playState={state.playState}
      ref={ref => (tween = ref)}
    >
      <div className="main-title">
        <h1>
          <span className="nahuel" onClick={handleClick}>
            {" "}
            NNG
          </span>
        </h1>
      </div>
    </Tween>
  );
};

export default Landing;
