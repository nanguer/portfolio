import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { animateMenu } from "./Animations";

export default ({ navstate, handleSetNav }) => {
	const [isOpen, setOpen] = useState(false);
	let menu1 = useRef(null);
	let menu2 = useRef(null);
	let menu3 = useRef(null);
	let menu4 = useRef(null);

	useEffect(() => {
		if (isOpen) {
			animateMenu([menu1, menu2, menu3, menu4], "forward");
		}
	}, [isOpen]);

	const toggle = () => {
		setOpen(!isOpen);
	};
	const handleNavClick = option => {
		//disableMenu();

		if (isOpen) {
			handleSetNav(option);
			return toggle();
		}
		return handleSetNav(option);
	};
	return (
		<nav role="navigation">
			<div className="container-fluid menu d-flex flex-row position-absolute justify-content-end pt-2">
				<div id="menuToggle">
					<div
						className="checkbox-container d-flex justify-content-end flex-row"
						style={{ height: "2rem" }}
					>
						<input type="checkbox" onClick={toggle} />
						<span></span>
						<span></span>
						<span></span>
					</div>
					<ul
						id="menuHamb"
						className="d-flex flex-row position-absolute"
						style={{ right: "34px", top: "-10px" }}
					>
						<NavLink
							to="/"
							exact={true}
							activeClassName="active"
							onClick={e => handleNavClick("Landing")}
						>
							<li ref={el => (menu1 = el)} className="hambHome">
								Home
							</li>
						</NavLink>
						<NavLink
							to="/about"
							onClick={() => handleNavClick("About")}
							exact={true}
						>
							<li ref={el => (menu2 = el)} className="hambAbout">
								{" "}
								About
							</li>
						</NavLink>
						<NavLink
							to="/portfolio"
							exact={true}
							onClick={() => handleNavClick("Portfolio")}
						>
							<li ref={el => (menu3 = el)} className="hambWorks">
								Works
							</li>
						</NavLink>
						<NavLink
							to="/contact"
							onClick={() => handleNavClick("Contact")}
							exact={true}
						>
							<li
								ref={el => (menu4 = el)}
								className="hambContact"
							>
								{" "}
								Contact
							</li>
						</NavLink>
					</ul>
				</div>
			</div>
		</nav>
	);
};
