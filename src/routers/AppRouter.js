import React, { useRef, useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Navbar from "../components/Navbar";
import { AppContext } from "../context/AppContext";
import particlesConfig from "./ParticlesConfig";
import ParticlesBg from "particles-bg";

import "../styles/styles.scss";

const AppRouter = () => {
	const { handleSetNav, state } = useContext(AppContext);

	let stripes = useRef(null);

	return (
		<Router>
			<Navbar handleSetNav={handleSetNav} navState={state} />
			<div className="stripes" ref={el => (stripes = el)} />
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
