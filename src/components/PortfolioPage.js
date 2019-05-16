import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';

export default class PortfolioPage extends Component {
	state = {
		works: [
			{
				id: 1,
				title: 'YelpCamp',
				description: '',
				img: ''
			},
			{
				id: 2,
				title: 'Time Destroyer',
				description: '',
				img: ''
			},
			{
				id: 3,
				title: 'Personal Blog App',
				description: '',
				img: ''
			},
			{
				id: 4,
				title: 'Movie App',
				description: '',
				img: ''
			},
			{
				id: 5,
				title: 'Indecision App',
				description: '',
				img: ''
			},
			{
				id: 6,
				title: 'Expensify',
				description: '',
				img: ''
			},
			{
				id: 7,
				title: 'ZMP',
				description: '',
				img: ''
			},
			{
				id: 8,
				title: 'This Web',
				description: '',
				img: ''
			}
		]
	};
	render() {
		return <div>{this.state.works.map(work => <PortfolioItem key={work.id} work={work} />)}</div>;
	}
}
