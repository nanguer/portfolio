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
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={state.isOpen} navbar>
            <Container className="d-flex justify-content-around">
              <Nav navbar>
                <NavItem>
                  <NavLink className="navbar-navlink" to="/" exact={true}>
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
                  <NavLink
                    className="navbar-navlink"
                    to="/contact"
                    exact={true}
                  >
                    contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Container>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarMenu;
