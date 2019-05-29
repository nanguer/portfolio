import React from "react";
import Greet from "../components/Greet";
import AboutMePage from "../components/AboutMePage";
import PortfolioPage from "../components/PortfolioPage";
import ContactPage from "../components/ContactPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Button, Col, Row } from "reactstrap";
import NavbarMenu from "../components/NavbarMenu";
import "../styles/styles.scss";

const AppRouter = () => (
	<BrowserRouter>
		<Container>
			{/* <div className="stripes" /> */}
			<Container>
				<Row>
					<Col sm="12" md={{ size: 6, offset: 3 }}>
						<NavbarMenu />
					</Col>
				</Row>
			</Container>
			<div className="wrapper">
				<Switch>
					<Route path="/" component={Greet} exact={true} />
					<Route path="/about" component={AboutMePage} exact={true} />
					<Route
						path="/portfolio"
						component={PortfolioPage}
						exact={true}
					/>
					<Route
						path="/contact"
						component={ContactPage}
						exact={true}
					/>
				</Switch>
				<Button color="primary">Button</Button>
			</div>
		</Container>
	</BrowserRouter>
);

export default AppRouter;
