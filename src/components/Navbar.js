import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { animateMenu, animateHamb } from "./Animations";

export default ({ navstate, handleSetNav }) => {
  const [isOpen, setOpen] = useState(false);
  const [disableClick, setDisabled] = useState(false);
  let menu1 = useRef(null);
  let menu2 = useRef(null);
  let menu3 = useRef(null);
  let menu4 = useRef(null);
  let span1 = useRef(null);
  let span2 = useRef(null);
  let span3 = useRef(null);

  const toggle = booleanValue => {
    animateHamb([span1, span2, span3], booleanValue);
    animateMenu([menu1, menu2, menu3, menu4], booleanValue);
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

 
  return (
    <nav role="navigation">
      <div className="container-fluid menu d-flex flex-row position-absolute justify-content-end pt-2">
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
            <span ref={el => span3 = el}></span>
            <span ref={el => span2 = el}></span>
            <span ref={el => span1 = el}></span>
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
              onClick={() => handleNavClick("Landing", isOpen)}
            >
              <li ref={el => (menu1 = el)} className="hambHome">
                Home
              </li>
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => handleNavClick("About", isOpen)}
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
              onClick={() => handleNavClick("Portfolio", isOpen)}
            >
              <li ref={el => (menu3 = el)} className="hambWorks">
                Works
              </li>
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => handleNavClick("Contact", isOpen)}
              exact={true}
            >
              <li ref={el => (menu4 = el)} className="hambContact">
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
