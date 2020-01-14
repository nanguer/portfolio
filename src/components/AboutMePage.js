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
import {
	GiFullMotorcycleHelmet,
	GiBookCover,
	GiMusicalNotes
} from "react-icons/gi";
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

	const studiesArray = [
		{
			name:
				"Higher Technician in Telecommunications and Computer Systems",
			link:
				"https://drive.google.com/open?id=1VXaBlpR0BM1AJtzNbigJCJZms-v7Ymqy"
		},
		{ name: "Audio Engineering Diploma" },
		{ name: "Cisco CCNA Program" }
	];

	const techIcons = [
		{ IconComponent: FaReact, name: "react" },
		{ IconComponent: ReduxIcon, name: "redux" },
		{ IconComponent: FaHtml5, name: "html5" },
		{ IconComponent: FaCss3, name: "css3" },
		{ IconComponent: FaSass, name: "sass" },
		{ IconComponent: FaNodeJs, name: "node" },
		{ IconComponent: DiMongodb, name: "mongo" }
	];

	const languages = [
		{ language: "English", level: "Fluent" },
		{ language: "Spanish", level: "Native" },
		{ language: "Italian", level: "Fluent" }
	];

	const studies = studiesArray.map(({ name, link }) => {
		return link ? (
			<a
				key={name}
				style={{ zIndex: "5" }}
				target="_blank"
				rel="noopener noreferrer"
				href={link}
			>
				<li>{name}</li>
			</a>
		) : (
			<li key={name}>{name}</li>
		);
	});

	const language = languages.map(({ language, level }) => {
		return (
			<li key={language}>
				{language}
				<span className="dot">{level}</span>
			</li>
		);
	});

	const interestsArray = [
		{ id: 1, Icon: GiFullMotorcycleHelmet, text: "Motorcycles" },
		{ id: 2, Icon: GiMusicalNotes, text: "Music and Audio Production" },
		{ id: 3, Icon: GiBookCover, text: "Books and literature" }
	];

	const interest = interestsArray.map(({ id, Icon, text }) => {
		return (
			<div key={id} className="d-flex flex-column justify-content-center">
				<div className="text-center">
					<Icon size={isDesktop ? "3em" : "2em"} color="#fff" />
				</div>
				{text}
			</div>
		);
	});

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
					<div className="paragraphs pt-5">
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
				className="container about-down d-flex flex-column justify-content-center"
				id="about-down"
				style={{ height: "50%", marginBottom: "4rem" }}
			>
				<div className="d-flex flex-column flex-md-row">
					<div className="studies" style={{ zIndex: "2" }}>
						<div className="study-list">
							<h4>Studies {"&"} more</h4>
							<ul>{studies}</ul>
						</div>
						<div className="laguage-list pt-5">
							<h5>Language Skills</h5>
							<ul>{language}</ul>
						</div>
					</div>
					<div className="interests pl-5">
						<h4>Interests</h4>
						<div className="d-flex flex-column flex-md-row">
							{interest}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMePage;
