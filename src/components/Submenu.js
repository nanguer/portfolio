import React from 'react';
import { NavLink } from 'react-router-dom';

const Submenu = () => {
	return (
		<div className="submenu">
			<NavLink to="/" exact={true}>
				home
			</NavLink>
			<NavLink to="/about" exact={true}>
				about me
			</NavLink>
			<NavLink to="/portfolio" exact={true}>
				portfolio
			</NavLink>
			<NavLink to="/contact" exact={true}>
				contact me
			</NavLink>
		</div>
	);
};

export default Submenu;
