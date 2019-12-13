import React from "react";
import Landing from "../components/Landing";
import AboutMePage from "../components/AboutMePage";
import PortfolioPage from "../components/PortfolioPage";
import ContactPage from "../components/ContactPage";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { gsap } from "gsap";
import NavbarMenu from "../components/NavbarMenu";
import "../styles/styles.scss";

const routes = [
  { path: "/", name: "Landing", Component: Landing },
  { path: "/about", name: "About", Component: AboutMePage },
  { path: "/portfolio", name: "Portfolio", Component: PortfolioPage },
  { path: "/contact", name: "Contact", Component: ContactPage }
];

const AppRouter = () => {
  const onEnter = node => {
    // console.log(node);
  };

  const onExit = node => {
    console.log(node);
  };

  return (
    <Router>
      <NavbarMenu />

      <div className="stripes" />
      {routes.map(({ path, Component, name }) => (
        <Route key={name} path={path} exact>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={1200}
              classNames="page"
              unmountOnExit
              onExit={onExit}
              onEnter={onEnter}
            >
              <div className="page">
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </Router>
  );
};

export default AppRouter;
