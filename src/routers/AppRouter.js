import React, { useState, useRef } from "react";
import LandingLoader from "../components/loaders/LandingLoader";
//import Landing from "../components/Landing";
import AboutMePage from "../components/AboutMePage";
import PortfolioPage from "../components/PortfolioPage";
import ContactPage from "../components/ContactPage";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import NavbarMenu from "../components/NavbarMenu";
import "../styles/styles.scss";
import AbsoluteWrapper from "../components/AbsoluteWrapper";
import gsap from "gsap";

const tlStripes = gsap.timeline();

const routes = [
  { path: "/", name: "Landing", Component: LandingLoader },
  { path: "/about", name: "About", Component: AboutMePage },
  { path: "/portfolio", name: "Portfolio", Component: PortfolioPage },
  { path: "/contact", name: "Contact", Component: ContactPage }
];

const AppRouter = () => {
  const [state, setState] = useState({
    initial: false,
    Landing: true,
    About: false,
    Portfolio: false,
    Contact: false
  });
  let stripes = useRef(null);

  const setTimeLine = option => {
    if (option === "About") {
      console.log("about clicked");
      return tlStripes.to(stripes, {
        x: 300,
        duration: 1,
        delay: 0.5,
        ease: "power3.Out"
      });
    } else if (option === "Landing") {
      console.log("home clicked");
      return tlStripes.to(stripes, {
        x: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.Out"
      });
    } else if (option === "Portfolio") {
      console.log("home clicked");
      return tlStripes.to(stripes, {
        x: 600,
        duration: 1,
        delay: 0.5,
        ease: "power3.Out"
      });
    } else if (option === "Contact") {
      console.log("home clicked");
      return tlStripes.to(stripes, {
        x: 900,
        duration: 1,
        delay: 0.5,
        ease: "power3.Out"
      });
    }
    return;
  };

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

      setTimeLine(option);
    }
  };
  // const onEnter = (match, props) => {
  //   if (match != null) {
  //     console.log(props);
  //   }
  // };

  // const onExit = (match, history) => {
  //   setTimeout(()=>{
  //     console.log('wating...');
  //   }, 600)
  // };

  return (
    <Router>
      <NavbarMenu handleSetNav={handleSetNav} />
      <div className="stripes" ref={el => (stripes = el)} />
      {routes.map(({ path, Component, name }) => (
        <Route key={name} path={path} exact>
          {({ match, history, ...props }) => (
            <AbsoluteWrapper>
              <CSSTransition
                in={match != null}
                timeout={1600}
                classNames="page"
                // addEndListener={onAddListener}
                unmountOnExit
                // onExit={onExit}
                // onEnter={() => onEnter(match, props)}
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
