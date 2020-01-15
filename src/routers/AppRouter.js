import React, { useState, useRef } from "react";
import LandingLoader from "../components/loaders/LandingLoader";
import AboutMeLoader from "../components/loaders/AboutMeLoader";
import PortfolioLoader from "../components/loaders/PortfolioLoader";
import ContactLoader from "../components/loaders/ContactLoader";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
//import NavbarMenu from "../components/NavbarMenu";
import Navbar from "../components/Navbar";
import AbsoluteWrapper from "../components/AbsoluteWrapper";
import { setTimeLine } from "../components/Animations";

import "../styles/styles.scss";

const routes = [
  { path: "/", name: "Landing", Component: LandingLoader },
  { path: "/about", name: "About", Component: AboutMeLoader },
  { path: "/portfolio", name: "Portfolio", Component: PortfolioLoader },
  { path: "/contact", name: "Contact", Component: ContactLoader }
];

const AppRouter = () => {
  const [state, setState] = useState({
    initial: false,
    Landing: true,
    About: false,
    Portfolio: false,
    Contact: false,
    isDesktop: window.innerWidth > 768
  });
  let stripes = useRef(null);


  const handleSetNav = option => {
    if (state[option]) {
      return null;
    } else {
      setState({
        ...state,
        Landing: false,
        About: false,
        Portfolio: false,
        Contact: false,
        [option]: true
      });

      setTimeLine(option, stripes);
    }
  };

  return (
    <Router>
      <Navbar handleSetNav={handleSetNav} navState={state} />
      <div className="stripes" ref={el => (stripes = el)} />

      {routes.map(({ path, Component, name }) => (
        <Route key={name} path={path} exact>
          {({ match, history, ...props }) => (
            <AbsoluteWrapper>
              <CSSTransition
                in={match != null}
                timeout={1600}
                classNames="page"
                unmountOnExit
              >
                <div className="page h-100">
                  <Component navState={state} handleSetNav={handleSetNav} />
                </div>
              </CSSTransition>
            </AbsoluteWrapper>
          )}
        </Route>
      ))}
    </Router>
  );
};

export default AppRouter;
