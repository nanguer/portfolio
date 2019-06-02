import React from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Container, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

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
								<Nav navbar>
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
