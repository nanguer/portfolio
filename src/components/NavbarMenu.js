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
	Col,
	Container,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem,
	Row
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
				<Container>
				<Navbar color="light" light expand="md">
						
							<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Row>
								<Col
									xs="auto"
									sm="12"
									md={{ size: 6, offset: 3 }}
								>
									<Nav className="ml-auto" navbar>
										<NavItem>
											<NavLink to="/" exact={true}>
												home
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink to="/about" exact={true}>
												about
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												to="/portfolio"
												exact={true}
											>
												portfolio
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink to="/contact" exact={true}>
												contact
											</NavLink>
										</NavItem>
									</Nav>
								</Col>
							</Row>
							</Collapse>					
				</Navbar>
				</Container>
			</div>
		);
	}
}
