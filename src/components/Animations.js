import gsap from "gsap";

const tlStripes = gsap.timeline();
const tlNavbar = gsap.timeline();

export const animateMenu = (target, direction) => {
	if (direction === "forward") {
		return tlNavbar.from(target, {
			x: 320,
			duration: 1,
			delay: 0.5,
			ease: "power3.out",
			stagger: {
				ease: "power3.out",
				amount: 0.4
			}
		});
	} else if (direction === "backwards") {
		return tlNavbar.reverse();
	}
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
