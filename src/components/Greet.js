import React from 'react';
import { Tween } from 'react-gsap';

class Greet extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playState: 'pause'
		};
		this.handleClick = this.handleClick.bind(this);
	}
	tween;

	handleClick() {
		const tween = this.tween.getGSAP();
		tween.timeScale(0.5);
		this.setState({ playState: 'play' });
	}

	render() {
		return (
			<Tween to={{ color: 'red' }} playState={this.state.playState} ref={ref => (this.tween = ref)}>
				<div className="main-title">
					<h1>
						<span className="nahuel" onClick={this.handleClick}>
							{' '}
							NNG
						</span>
					</h1>
				</div>
			</Tween>
		);
	}
}

export default Greet;
