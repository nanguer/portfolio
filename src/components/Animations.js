import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const tlStripes = gsap.timeline();

//NAVBAR ANIMATIONS
export const constructAnimation = (menuItems, hamburguer, isDesktop) => {
	const ul = menuItems[0].childNodes[0].parentElement.offsetParent;
	const x = isDesktop ? -1 : 0;
	const y = isDesktop ? 2 : 4;
	const ulRight = isDesktop ? "0vw" : "-7vw";

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

	tlNavbar.to(ul, { opacity: 1, right: ulRight, duration: 0.2 }, 0);
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
			x,
			y,
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

export const animateMenuOption = options => {
	gsap.to(options[0].childNodes[0].firstChild, {
		duration: 0.5,
		yPercent: -20,
		opacity: 0,
		ease: "power3.Out"
	});
	gsap.to(options[1], {
		duration: 0.5,
		yPercent: -100,
		opacity: 1,
		fontWeight: 700,
		ease: "power3.In"
	});
};

export const animateMenuBack = options => {
	gsap.to(options[0].childNodes[0].firstChild, {
		duration: 0.5,
		yPercent: 0,
		opacity: 1,
		ease: "power3.In"
	});
	gsap.to(options[1], {
		duration: 0.5,
		yPercent: 0,
		opacity: 0,
		ease: "power3.Out"
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
	gsap.from(target, {
		opacity: 0,
		duration: 0.5,
		delay: 1.8,
		scale: 0.5,
		ease: "power3.in",
		x: 25,
		stagger: {
			ease: "power3.in",
			amount: 0.4
		}
	});
};

export const handleExitTitle = target => {
	gsap.to(target, {
		x: 255,
		duration: 0.5,
		scale: 0.5,
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
		scale: 0.9,
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

export const animateScroll = anchor => {
	gsap.to(window, {
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
