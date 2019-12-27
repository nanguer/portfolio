import gsap from "gsap";

const tlStripes = gsap.timeline();

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
export const handleEnterTitle = target => {
  gsap.from(target, 0.2, {
    opacity: 0,
    delay: 1.8,
    ease: "power3.in",
    y: 45,
    stagger: {
      ease: "power3.in",
      amount: 0.4
    }
  });
};

export const handleExitTitle = target => {
  gsap.to(target, 0.2, {
    y: 45,
    delay: 0.2,
    opacity: 0,
    ease: "power3.in",
    stagger: {
      ease: "power3.in",
      amount: 0.5
    }
  });
};

//Footer Component animations
export const handleFooterIn = target => {
  gsap.from(target, 0.2, {
    opacity: 0,
    delay: 1.2,
    y: 45,
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
    y: 45,
    ease: "power3.in",
    stagger: {
      ease: "power3.in",
      amount: 0.3
    }
  });
};
