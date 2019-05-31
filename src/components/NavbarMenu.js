import React from "react";
import { NavLink } from "react-router-dom";

// const Submenu = () => {
// 	return (
// 		<div className="submenu">
// 			<NavLink to="/" exact={true} className="submenu__home">
// 				home
// 			</NavLink>
// 			<NavLink to="/about" exact={true}>
// 				about me
// 			</NavLink>
// 			<NavLink to="/portfolio" exact={true}>
// 				portfolio
// 			</NavLink>
// 			<NavLink to="/contact" exact={true}>
// 				contact me
// 			</NavLink>
// 		</div>
// 	);
// };

import {
	Collapse,
	//Col,
	Container,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem
	//Row
} from "reactstrap";

export default class NavbarMenu extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<div>
				<Navbar color="light" light expand="md">
					<Container>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Container className="d-flex justify-content-around">
							<Nav navbar >
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
									<NavLink className="navbar-navlink" to="/portfolio" exact={true}>
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
					</Container>
				</Navbar>
			</div>
		);
	}
}
