import gsap from "gsap";

const tlStripes = gsap.timeline();

//NAVBAR ANIMATIONS
export const constructAnimation = (menuItems, hamburguer) => {
	const tlNavbar = gsap.timeline({ paused: true });
	tlNavbar.to(menuItems, {
		x: 0,
		duration: 0.5,
		opacity: 1,
		stagger: {
			ease: "power3.out",
			amount: 0.7
		}
	});
	tlNavbar.to(
		hamburguer[0],
		0.2,
		{
			x: 1,
			y: 6,
			rotation: "45deg"
		},
		0.9
	);
	tlNavbar.to(
		hamburguer[1],
		0.2,
		{
			opacity: 0,
			scale: (0.2, 0.2)
		},
		0.9
	);
	tlNavbar.to(
		hamburguer[2],
		0.2,
		{
			x: -1,
			y: 2,
			rotation: "-45deg"
		},
		0.9
	);

	return tlNavbar;
};

export const animateMenu = (timeline, direction) => {
	if (!direction) {
		timeline.current.play();
	} else {
		timeline.current.reverse();
	}
};

export const animateMenuOption = option => {
	gsap.from(option, {
		duration: 0.6,
		yPercent: 200,
		opacity: 0,
		ease: "power3.In"
	});
};

export const animateMenuBack = option => {
	gsap.from(option, {
		duration: 1,
		yPercent: 100,
		opacity: 0,
		ease: "power3.In"
	});
};

//Stripes background animation timeline
export const setTimeLine = (option, target) => {
	if (option === "About") {
		return tlStripes.to(target, {
			x: 300,
			duration: 1,
			delay: 1,
			ease: "power3.out"
		});
	} else if (option === "Landing") {
		return tlStripes.to(target, {
			x: 0,
			duration: 1,
			delay: 1,
			ease: "power3.out"
		});
	} else if (option === "Portfolio") {
		return tlStripes.to(target, {
			x: 600,
			duration: 1,
			delay: 1,
			ease: "power3.out"
		});
	} else if (option === "Contact") {
		return tlStripes.to(target, {
			x: 900,
			duration: 1,
			delay: 1,
			ease: "power3.out"
		});
	}
	return;
};

//Landing component Animations

export const setOpacity = target => {
	gsap.to(target, 0.2, {
		opacity: 1
	});
};
export const handleEnterTitle = target => {
	gsap.from(target, 0.2, {
		opacity: 0,
		delay: 1.8,
		ease: "power3.in",
		x: 25,
		stagger: {
			ease: "power3.in",
			amount: 0.4
		}
	});
};

export const handleExitTitle = target => {
	gsap.to(target, 0.2, {
		x: 255,
		delay: 0.2,
		opacity: 0,
		ease: "power3.in",
		stagger: {
			ease: "power3.in",
			amount: 0.5
		}
	});
};

export const enterPicture = picture => {
	gsap.from(picture, {
		opacity: 0,
		delay: 2,
		ease: "power3.in"
	});
};

export const exitPicture = picture => {
	gsap.to(picture, {
		x: 35,
		opacity: 0,
		delay: 0.3,
		ease: "power3.out"
	});
};

//Footer Component animations
export const handleFooterIn = target => {
	gsap.from(target, 0.2, {
		opacity: 0,
		delay: 1.2,
		x: 55,
		ease: "power3.in",
		stagger: {
			ease: "power3.in",
			amount: 0.3
		}
	});
};

export const handleFooterOut = target => {
	gsap.to(target, 0.2, {
		opacity: 0,
		x: 55,
		ease: "power3.in",
		stagger: {
			ease: "power3.in",
			amount: 0.3
		}
	});
};

//Contact Page Animations

export const animateContactScroll = anchor => {
	gsap.to(window, 1.3, {
		duration: 1,
		ease: "power3.inOut",
		scrollTo: { y: anchor }
	});
};

//spinner

export const spinnerLoad = target => {
	gsap.from(target, 1, {
		opacity: 0,
		scale: -10,
		ease: "power3.easeIn"
	});
};
