import React from 'react';
import { Tween } from 'react-gsap';

const Greet = () => (
	<Tween from={{ opacity: 0 }} playState="paused">
		<div>
			<div className="main-title">
				<h1>
					Hi,
					<br /> I'm <span className="nahuel">Nahuel</span>
				</h1>
				<h2>I'm a Web Developer</h2>
			</div>
		</div>
	</Tween>
);

export default Greet;
