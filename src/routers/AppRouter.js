import React from "react";
import Landing from "../components/Landing";
import AboutMePage from "../components/AboutMePage";
import PortfolioPage from "../components/PortfolioPage";
import ContactPage from "../components/ContactPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { gsap } from "gsap";
import NavbarMenu from "../components/NavbarMenu";
import "../styles/styles.scss";

const AppRouter = () => (
  <BrowserRouter>
    {/* <div className="stripes" /> */}

    <NavbarMenu />

    <div className="stripes"></div>
    <Switch>
      <Route path="/" exact={true}>
        {({ match }) => (
          <CSSTransition
            in={match != null}
            timeout={1200}
            classNames="page"
            unmountOnExit
          >
            <div className="page">
              <Landing />
            </div>
          </CSSTransition>
        )}
      </Route>
      <Route path="/about" component={AboutMePage} exact={true} />
      <Route path="/portfolio" component={PortfolioPage} exact={true} />
      <Route path="/contact" component={ContactPage} exact={true} />
    </Switch>
    {/* <Button color="primary">Button</Button> */}
  </BrowserRouter>
);

export default AppRouter;
