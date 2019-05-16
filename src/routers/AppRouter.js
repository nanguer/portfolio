import React from 'react';
import Greet from '../components/Greet';
import Submenu from '../components/Submenu';
import AboutMePage from '../components/AboutMePage';
import PortfolioPage from '../components/PortfolioPage';
import ContactPage from '../components/ContactPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/styles.scss';

const AppRouter = () => (
	<BrowserRouter>
		<div>
			{/* <div className="stripes" /> */}
			<div className="wrapper">
				<Switch>
					<Route path="/" component={Greet} exact={true} />
					<Route path="/about" component={AboutMePage} exact={true} />
					<Route path="/portfolio" component={PortfolioPage} exact={true} />
					<Route path="/contact" component={ContactPage} exact={true} />
				</Switch>
			</div>
			<Submenu />
		</div>
	</BrowserRouter>
);

export default AppRouter;
