import React from 'react';
import { NavLink } from 'react-router-dom';

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
	Navbar,
	NavbarToggler,
	NavLink as NavLinkBS,
	Nav,
	NavItem,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';

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
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLinkBS>
									<NavLink to="/" exact={true}>
										home
									</NavLink>
								</NavLinkBS>
							</NavItem>
							<NavItem>
								<NavLinkBS>
									<NavLink to="/about" exact={true}>
										about
									</NavLink>
								</NavLinkBS>
							</NavItem>
							<NavItem>
								<NavLinkBS>
									<NavLink to="/portfolio" exact={true}>
										portfolio
									</NavLink>
								</NavLinkBS>
							</NavItem>
							<NavItem>
								<NavLinkBS>
									<NavLink to="/contact" exact={true}>
										contact
									</NavLink>
								</NavLinkBS>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Options
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>Option 1</DropdownItem>
									<DropdownItem>Option 2</DropdownItem>
									<DropdownItem divider />
									<DropdownItem>Reset</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}
