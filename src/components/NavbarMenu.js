import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from "reactstrap";

const NavbarMenu = ({ navstate, handleSetNav }) => {
  const [state, setState] = useState({
    isOpen: false
  });
  // const [disabled, setDisabled] = useState(false);

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

  // const disableMenu = () => {
  //   setDisabled(!disabled);
  //   setTimeout(() => {
  //     setDisabled(false);
  //   }, 1200);
  // };

  return (
    <div>
      <Navbar dark expand="md" style={{ zIndex: "2" }}>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={state.isOpen} navbar>
          <Container className="name justify-content-start">
            nahuel <strong style={{ color: "#fff" }}>Gimenez</strong>
          </Container>
          <Container className="d-flex justify-content-end">
            <Nav
              className="container d-flex justify-content-end navbar-nav"
              navbar
            >
              <NavItem>
                <NavLink
                  className="navbar-navlink"
                  to="/"
                  exact={true}
                  activeClassName="active"
                  onClick={e => handleNavClick("Landing")}
                >
                  home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="navbar-navlink"
                  to="/about"
                  onClick={() => handleNavClick("About")}
                  exact={true}
                >
                  about
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="navbar-navlink"
                  to="/portfolio"
                  exact={true}
                  onClick={() => handleNavClick("Portfolio")}
                >
                  works
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="navbar-navlink"
                  to="/contact"
                  onClick={() => handleNavClick("Contact")}
                  exact={true}
                >
                  contact
                </NavLink>
              </NavItem>
            </Nav>
          </Container>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarMenu;
