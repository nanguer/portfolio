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
    x: 145,
    stagger: {
      ease: "power3.in",
      amount: 0.4
    }
  });
};

export const handleExitTitle = target => {
  gsap.to(target, 0.2, {
    x: 145,
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
}

export const exitPicture = picture => {
  gsap.to(picture, {
    x:245,
    opacity: 0,
    delay: 0.3,
    ease: "power3.out"
  });
}

//Footer Component animations
export const handleFooterIn = target => {
  gsap.from(target, 0.2, {
    opacity: 0,
    delay: 1.2,
    x: 145,
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
    x: 145,
    ease: "power3.in",
    stagger: {
      ease: "power3.in",
      amount: 0.3
    }
  });
};


//Contact Page Animations

export const animateContactScroll = (anchor) => {
  gsap.to(window, 1.3, {
    duration:1,
    ease:"power3.inOut",
    scrollTo: {y:anchor}
})
}