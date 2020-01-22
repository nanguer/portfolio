import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Navbar from "../components/Navbar";
import { Stripes } from "../components/Stripes";
import { AppContext } from "../context/AppContext";
import particlesConfig from "./ParticlesConfig";
import ParticlesBg from "particles-bg";

import "../styles/styles.scss";

const AppRouter = () => {
  const { state, handleSetNav, stripes } = useContext(AppContext);
	
  return (
    <Router>
      <Navbar handleSetNav={handleSetNav} navState={state} />
      <Stripes stripes={stripes} />
      <ParticlesBg
        type="custom"
        config={particlesConfig}
        bg={true}
        style={{ position: "absolute" }}
      />
      <Routes state={state} handleSetNav={handleSetNav} />
    </Router>
  );
};

export default AppRouter;
