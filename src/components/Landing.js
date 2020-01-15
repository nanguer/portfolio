import React, { useEffect, useRef } from "react";
import {
	handleEnterTitle,
	handleExitTitle,
	enterPicture,
	exitPicture,
	setOpacity
} from "../components/Animations";
import { Footer } from "./Footer";
import SocialIcons from "./SocialIcons";
import { withRouter } from "react-router-dom";

const Landing = ({ navState, handleSetNav }) => {
	let line1 = useRef(null);
	let line2 = useRef(null);
	let line3 = useRef(null);
	let picture = useRef(null);
	let cover = useRef(null);

	useEffect(() => {
		if (navState.Landing) {
			handleEnterTitle([line1, line2, line3]);
			enterPicture(picture);
			setOpacity(cover);
		}
		if (!navState.Landing) {
			handleExitTitle([line3, line2, line1]);
			exitPicture(picture);
		}
	}, [navState.Landing]);

	const style = {
		margin: "7px 0px",
		color: "#9c9c9c"
	};

	return (
		<div className="wrapper d-flex flex-column justify-content-between">
			<div
				ref={el => (cover = el)}
				className="cover container-fluid d-flex flex-row"
				style={{ height: "-webkit-fill-available", opacity: 0 }}
			>
				<div
					className="container greet"
					style={{ alignSelf: "center" }}
				>
					<div className="d-flex flex-column">
						<div>
							{" "}
							<h1
								style={{ fontSize: "4.5rem" }}
								ref={el => (line1 = el)}
							>
								I build beautiful
								<span className="dot webapps"> web apps</span>
							</h1>
						</div>
						<div className="subtitle">
							<h2 ref={el => (line2 = el)}>
								I'm a tech passionate human.
							</h2>
						</div>
					</div>
				</div>
				<div className="meBg" ref={el => (picture = el)} />
				<div
					className="social-media flex-column justify-content-end h-100"
					ref={el => (line3 = el)}
					style={{ zIndex: "2" }}
				>
					<div className="d-flex align-items-center flex-column justify-content-end">
						<div className="follow text-nowrap mb-sm-4">
							Follow Me
						</div>
						<div className="singleLine mt-sm-5">
							<svg
								viewBox="0 0 80 20"
								style={{
									height: "1rem",
									display: "flex",
									stroke: "white"
								}}
							>
								<path d="M 0,10 L 80, 10" />
							</svg>
						</div>

						<div className="icons-sm d-flex flex-column mt-sm-5 mb-sm-5">
							<SocialIcons style={style} />
						</div>
					</div>
				</div>
			</div>
			<Footer navState={navState} />
		</div>
	);
};

export default withRouter(Landing);
