import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
	animateMenu,
	constructAnimation,
	animateMenuOption,
	animateMenuBack
} from "./Animations";

export default ({ navState, handleSetNav }) => {
	const [isOpen, setOpen] = useState(false);
	const [disableClick, setDisabled] = useState(false);
	const [isDesktop, setIsDesktop] = useState(navState.isDesktop);

	let menu1 = useRef(null);
	let menu1Sec = useRef(null);
	let menu2 = useRef(null);
	let menu2Sec = useRef(null);
	let menu3 = useRef(null);
	let menu3Sec = useRef(null);
	let menu4 = useRef(null);
	let menu4Sec = useRef(null);
	let span1 = useRef(null);
	let span2 = useRef(null);
	let span3 = useRef(null);

	let timeline = useRef(null);

	useEffect(() => {
		timeline.current = constructAnimation(
			[menu1, menu2, menu3, menu4],
			[span1, span2, span3],
			isDesktop
		);
	}, []);

	useEffect(() => {
		setIsDesktop(navState.isDesktop);
	}, [navState.isDesktop]);

	const toggle = booleanValue => {
		animateMenu(timeline, booleanValue);
		setDisabled(true);
		setTimeout(() => {
			setDisabled(false);
		}, 1000);
		setOpen(!isOpen);
	};

	const handleNavClick = (option, booleanValue) => {
		handleSetNav(option);
		toggle(booleanValue);
	};

	const handleMouseEnter = ([option, optionSec]) => {
		animateMenuOption([option, optionSec]);
	};

	const handleMouseLeave = ([option, optionSec]) => {
		animateMenuBack([option, optionSec]);
	};

	return (
		<nav role="navigation">
			<div
				id="top"
				className="menu d-flex flex-row justify-content-end pt-2"
			>
				<div id="menuToggle">
					<div
						className="checkbox-container d-flex justify-content-end flex-row"
						style={{ height: "2rem" }}
					>
						<input
							disabled={disableClick}
							type="checkbox"
							onClick={() => toggle(isOpen)}
						/>
						<span ref={el => (span3 = el)}></span>
						<span ref={el => (span2 = el)}></span>
						<span ref={el => (span1 = el)}></span>
					</div>
					<ul
						id="menuHamb"
						className="d-flex flex-column flex-md-row position-absolute"
					>
						<div className="full-option" ref={el => (menu1 = el)}>
							<NavLink
								to="/"
								className="main-option"
								exact={true}
								activeClassName="active"
								onMouseEnter={() =>
									handleMouseEnter([menu1, menu1Sec])
								}
								onMouseLeave={() =>
									handleMouseLeave([menu1, menu1Sec])
								}
								onClick={() =>
									handleNavClick("Landing", isOpen)
								}
							>
								<li>Home</li>
								<li
									ref={el => (menu1Sec = el)}
									className="second-option"
								>
									Home
								</li>
							</NavLink>
						</div>
						<div className="full-option" ref={el => (menu2 = el)}>
							<NavLink
								to="/about"
								onMouseEnter={() =>
									handleMouseEnter([menu2, menu2Sec])
								}
								onMouseLeave={() =>
									handleMouseLeave([menu2, menu2Sec])
								}
								className="main-option"
								onClick={() => handleNavClick("About", isOpen)}
								exact={true}
							>
								<li> About</li>
								<li
									ref={el => (menu2Sec = el)}
									className="second-option"
								>
									About
								</li>
							</NavLink>
						</div>

						<div className="full-option" ref={el => (menu3 = el)}>
							<NavLink
								to="/portfolio"
								className="main-option"
								exact={true}
								onMouseEnter={() =>
									handleMouseEnter([menu3, menu3Sec])
								}
								onMouseLeave={() =>
									handleMouseLeave([menu3, menu3Sec])
								}
								onClick={() =>
									handleNavClick("Portfolio", isOpen)
								}
							>
								<li>Works</li>
								<li
									ref={el => (menu3Sec = el)}
									className="second-option"
								>
									Works
								</li>
							</NavLink>
						</div>

						<div className="full-option" ref={el => (menu4 = el)}>
							<NavLink
								to="/contact"
								className="main-option"
								onMouseEnter={() =>
									handleMouseEnter([menu4, menu4Sec])
								}
								onMouseLeave={() =>
									handleMouseLeave([menu4, menu4Sec])
								}
								onClick={() =>
									handleNavClick("Contact", isOpen)
								}
								exact={true}
							>
								<li> Contact</li>
								<li
									ref={el => (menu4Sec = el)}
									className="second-option"
								>
									{" "}
									Contact
								</li>
							</NavLink>
						</div>
					</ul>
				</div>
			</div>
		</nav>
	);
};
