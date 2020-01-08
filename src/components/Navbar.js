import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default ({ navstate, handleSetNav }) => {
  const [state, setState] = useState({
    isOpen: false
  });
  const toggle = () => {
    setState({
      isOpen: !state.isOpen
    });
  };
  const handleNavClick = option => {
    //disableMenu();

    if (state.isOpen) {
      handleSetNav(option);
      return toggle();
    }
    return handleSetNav(option);
  };
  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul id="menuHamb">
          <NavLink
            to="/"
            exact={true}
            activeClassName="active"
            onClick={e => handleNavClick("Landing")}
          >
            <li className="hambHome">Home</li>
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => handleNavClick("About")}
            exact={true}
          >
            <li className="hambAbout"> About</li>
          </NavLink>
          <NavLink
            to="/portfolio"
            exact={true}
            onClick={() => handleNavClick("Portfolio")}
          >
            <li className="hambWorks">Works</li>
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => handleNavClick("Contact")}
            exact={true}
          >
            <li className="hambContact"> Contact</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
