import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Navbar from "../components/Navbar";
import { Stripes } from "../components/Stripes";
import particlesConfig from "./ParticlesConfig";
import ParticlesBg from "particles-bg";

import "../styles/styles.scss";

const AppRouter = () => {
	return (
		<Router>
			<Navbar />
			<Stripes />
			<ParticlesBg
				type="custom"
				config={particlesConfig}
				bg={true}
				style={{ position: "absolute" }}
			/>
			<Routes />
		</Router>
	);
};

export default AppRouter;
