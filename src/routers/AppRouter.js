import React, { useState } from "react";
import Landing from "../components/Landing";
import AboutMePage from "../components/AboutMePage";
import PortfolioPage from "../components/PortfolioPage";
import ContactPage from "../components/ContactPage";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import NavbarMenu from "../components/NavbarMenu";
import "../styles/styles.scss";
import AbsoluteWrapper from "../components/AbsoluteWrapper";

const routes = [
  { path: "/", name: "Landing", Component: Landing },
  { path: "/about", name: "About", Component: AboutMePage },
  { path: "/portfolio", name: "Portfolio", Component: PortfolioPage },
  { path: "/contact", name: "Contact", Component: ContactPage }
];

const AppRouter = () => {
  const [state, setState] = useState({
    initial: false,
    clicked: null
  });
  const onEnter = (match, props) => {
    if (match != null) {
      console.log(props);
    }
  };

  const onExit = (match, history) => {
    console.log(history.location.pathname);
  };

  return (
    <Router>
      <NavbarMenu />
      <div className="stripes" />
      {routes.map(({ path, Component, name }) => (
        <Route key={name} path={path} exact>
          {({ match, history, ...props }) => (
            <AbsoluteWrapper>
              <CSSTransition
                in={match != null}
                timeout={2000}
                classNames="page"
                // addEndListener={onAddListener}
                unmountOnExit
                onExit={() => onExit(match, history)}
                onEnter={() => onEnter(match, props)}
              >
                <div className="page h-100">
                  <Component state={state} />
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
