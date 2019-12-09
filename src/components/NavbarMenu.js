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

const NavbarMenu = () => {
  const [state, setState] = useState({
    isOpen: false
  });

  const toggle = () => {
    setState({
      isOpen: !state.isOpen
    });
  };

  return (
    <div>
      <Navbar dark expand="md" style={{ zIndex: "1" }}>
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
                >
                  home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navbar-navlink" to="/about" exact={true}>
                  about
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="navbar-navlink"
                  to="/portfolio"
                  exact={true}
                >
                  portfolio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navbar-navlink" to="/contact" exact={true}>
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
