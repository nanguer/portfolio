import React, { Component } from 'react';

export class PortfolioItem extends Component {
	render() {
		return (
			<div className="portfolio-item d-flex align-items-start flex-column">
				<h2>{this.props.work.title}</h2>
				<img src={this.props.work.img} alt="" />
				<p>{this.props.work.description}</p>
			</div>
		);
	}
}

export default PortfolioItem;
