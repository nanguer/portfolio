import React from "react";
import {
	FaReact,
	FaNodeJs,
	FaHtml5,
	FaSass,
	FaCss3,
	FaAngleDown
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { animateScroll } from "./Animations";
import ReduxIcon from "./ReduxIcon";

const AboutMePage = ({ navState }) => {
	const { isDesktop } = navState;
	const iconStyle = {
		margin: "0px 7px",
		minWidth: "3em"
	};
	const iconStyleReact = {
		margin: "0px 7px 0px 0px",
		minWidth: "3em"
	};

	const handleScrollDown = anchor => {
		animateScroll(anchor);
	};

	const techIcons = [
		{ IconComponent: FaReact, name: "react" },
		{ IconComponent: ReduxIcon, name: "redux" },
		{ IconComponent: FaHtml5, name: "html5" },
		{ IconComponent: FaCss3, name: "css3" },
		{ IconComponent: FaSass, name: "sass" },
		{ IconComponent: FaNodeJs, name: "node" },
		{ IconComponent: DiMongodb, name: "mongo" }
	];
	return (
		<div
			className="container
	d-flex flex-column pt-md-5"
			style={{ height: "200%" }}
		>
			<div
				className="container d-flex flex-column justify-content-between about-me-up pb-5"
				style={{ height: "50%", zIndex: "2" }}
			>
				<div className="aboutMe pt-5">
					<div>
						<h2>
							Keeping it <span className="dot">simple</span>{" "}
						</h2>
					</div>
					<div
						className="paragraphs pt-5"
					
					>
						<p>
							I'm a poland-based Web Developer and IT and
							Telecommunications Technician, with strong interest
							for web development and networking, with special
							care in simplicity and efficiency.
						</p>
						<p>
							I've been in the IT Service industry for more than 6
							years, in different countries and cultures, where I
							learned to participate and deliver in projects
							following the ITIL framework for quality management.
						</p>
						<p>
							Nowadays I spend most of my time developing in the
							most modern stack web technologies and frameworks,
							aiming to participate in creative projects that can
							affect people in positive ways.
						</p>
					</div>
				</div>
				<div className="about-footer d-flex flex-row justify-content-between">
					<div className="tech-stack mb-3">
						<div className="mb-4" style={{ fontSize: "0.8rem" }}>
							Favourite tools and technologies
						</div>
						<div className="tech-icons d-flex flex-row flex-sm-nowrap flex-wrap justify-content-start">
							{techIcons.map(({ IconComponent, name }) => {
								return (
									<div
										className={`icon-container icon-${name}`}
										key={name}
									>
										<IconComponent
											isdesktop={isDesktop}
											size={isDesktop ? "3em" : "2em"}
											style={
												name === "react"
													? iconStyleReact
													: iconStyle
											}
										/>
									</div>
								);
							})}
						</div>
					</div>
					<div
						className="arrow-container-about d-inline-flex "
						onClick={() => handleScrollDown("#about-down")}
					>
						<FaAngleDown size="2em" />
					</div>
				</div>
			</div>

			<div
				className="container about-down d-flex flex-column justify-content-between"
				id="about-down"
				style={{ height: "50%", marginBottom: "4rem" }}
			></div>
		</div>
	);
};

export default AboutMePage;
