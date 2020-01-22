import React, { useEffect, useContext } from "react";
import {
	FaReact,
	FaNodeJs,
	FaHtml5,
	FaSass,
	FaCss3,
	FaAngleDown,
	FaAngleUp
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import {
	GiFullMotorcycleHelmet,
	GiBookCover,
	GiMusicalNotes
} from "react-icons/gi";
import { animateScroll } from "./Animations";
import ReduxIcon from "./ReduxIcon";
import { AppContext } from "../context/AppContext";

const AboutMePage = ({ navState }) => {
	const { setCurrentOption } = useContext(AppContext);
	useEffect(() => {
		return () => {
			setCurrentOption("");
		};
	}, []);

	const { isDesktop } = navState;
	const iconStyle = {
		margin: "0px 7px",
		minWidth: "3em"
	};
	const iconStyleReact = {
		margin: "0px 7px 0px 0px",
		minWidth: "3em"
	};

	const handleScroll = anchor => {
		animateScroll(anchor);
	};

	const studiesArray = [
		{
			name:
				"Higher Technician in Telecommunications and Computer Systems",
			link:
				"https://drive.google.com/open?id=1VXaBlpR0BM1AJtzNbigJCJZms-v7Ymqy"
		},
		{ name: "Modern Web Fullstack Certificate" },
		{ name: "Audio Engineering Diploma" },
		{ name: "Cisco CCNA Program" }
	];

	const techIcons = [
		{ IconComponent: FaReact, name: "React" },
		{ IconComponent: ReduxIcon, name: "Redux" },
		{ IconComponent: FaHtml5, name: "Html5" },
		{ IconComponent: FaCss3, name: "Css3" },
		{ IconComponent: FaSass, name: "Sass" },
		{ IconComponent: FaNodeJs, name: "NodeJS" },
		{ IconComponent: DiMongodb, name: "MongoDB" }
	];

	const languages = [
		{ language: "English", level: "Fluent" },
		{ language: "Spanish", level: "Native" },
		{ language: "Italian", level: "Fluent" }
	];

	const resumeLink =
		"https://drive.google.com/open?id=1slQl39nZTyyqDnBPJJx7Ricxt3QCoG31";

	const studies = studiesArray.map(({ name, link }) => {
		return link ? (
			<a
				key={name}
				className="my-link"
				style={{ zIndex: "5" }}
				target="_blank"
				rel="noopener noreferrer"
				href={link}
			>
				<li style={{ padding: "0.5rem 0" }}>{name}</li>
			</a>
		) : (
			<li key={name} style={{ color: "#fff", padding: "0.5rem 0" }}>
				{name}
			</li>
		);
	});

	const language = languages.map(({ language, level }) => {
		return (
			<li style={{ padding: "0.5rem 0" }} key={language}>
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
			<div
				key={id}
				className="interest-icon d-flex flex-column justify-content-center pt-3 pb-3 pb-xl-4 pl-xl-3 pr-xl-3"
			>
				<div
					className="text-center text-md-start"
					style={{ padding: "0 2rem" }}
				>
					<Icon size={isDesktop ? "3em" : "2em"} color="#fff" />
				</div>
				<p className="text-center text-md-start">{text}</p>
			</div>
		);
	});

	return (
		<div
			className="main-about container
	d-flex flex-column pt-md-5"
		>
			<div
				className="container d-flex flex-column justify-content-between about-me-up pb-5"
				style={{ height: "50%", zIndex: "2" }}
			>
				<div className="aboutMe pt-5 pt-md-1">
					<div>
						<h2>
							Keeping it <span className="dot">simple</span>{" "}
						</h2>
					</div>
					<div className="paragraphs pt-md-5 pt-2">
						<p>
							I'm a worldwide Web Developer and IT and
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
						<div className="mb-4">Favourite technology stack</div>
						<div className="tech-icons d-flex flex-row flex-sm-nowrap flex-wrap justify-content-start">
							{techIcons.map(({ IconComponent, name }) => {
								const style =
									name === "React"
										? iconStyleReact
										: iconStyle;
								return (
									<div
										className={`icon-container icon-${name}`}
										key={name}
									>
										<IconComponent
											size={isDesktop ? "3em" : "2em"}
											style={style}
										/>
										<div
											className="text-center"
											style={style}
										>
											{name}
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div
						className="arrow-container-about d-inline-md-flex "
						onClick={() => handleScroll("#about-down")}
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
				<div
					className="arrow-up justify-content-end d-inline-md-flex "
					onClick={() => handleScroll("#top")}
				>
					<FaAngleUp size="2em" />
				</div>
				<div className="d-flex flex-column flex-md-row">
					<div
						className="studies d-flex flex-column"
						style={{ zIndex: "2" }}
					>
						<div className="study-list pt-4">
							<h4 className="text-center text-md-start pb-3 studies-title">
								Studies {"&"} more
							</h4>

							<ul className="text-center text-md-start">
								{studies}
							</ul>
						</div>
						<div className="language-list pt-4">
							<h5
								className="text-center text-md-start pb-3"
								style={{ fontWeight: "700" }}
							>
								Language Skills
							</h5>
							<ul className="text-center text-md-start">
								{language}
							</ul>
						</div>
						<div className="Resume d-flex justify-content-center">
							<a
								className="my-link pb-5 pb-md-1 pt-5 pt-md-1"
								target="_blank"
								rel="noopener noreferrer"
								href={resumeLink}
							>
								Download a PDF version of my Resume
							</a>
						</div>
					</div>

					<div className="interests pl-md-5 pt-4 d-flex flex-column">
						<h4
							className="text-center text-md-start pb-3"
							style={{ fontWeight: "700" }}
						>
							Other interests...
						</h4>
						<div className="d-flex flex-column flex-xl-row">
							{interest}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMePage;
