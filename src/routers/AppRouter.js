import React from "react";
import Landing from "../components/Landing";
import AboutMePage from "../components/AboutMePage";
import PortfolioPage from "../components/PortfolioPage";
import ContactPage from "../components/ContactPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Button } from "reactstrap";
import NavbarMenu from "../components/NavbarMenu";
import "../styles/styles.scss";

const AppRouter = () => (
  <BrowserRouter>
    {/* <div className="stripes" /> */}

    <NavbarMenu />

    <div className="stripes"></div>
    <Switch>
      <Route path="/" component={Landing} exact={true} />
      <Route path="/about" component={AboutMePage} exact={true} />
      <Route path="/portfolio" component={PortfolioPage} exact={true} />
      <Route path="/contact" component={ContactPage} exact={true} />
    </Switch>
    {/* <Button color="primary">Button</Button> */}
  </BrowserRouter>
);

export default AppRouter;
