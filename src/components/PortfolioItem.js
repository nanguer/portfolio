import React, { Component } from 'react';

export class PortfolioItem extends Component {
	render() {
		return (
			<div>
				<p>{this.props.work.title}</p>
			</div>
		);
	}
}

export default PortfolioItem;
