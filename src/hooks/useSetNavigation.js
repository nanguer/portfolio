import Reac, { useState } from "react";

export const useSetNavigation = () => {
  const [state, setState] = useState({
    initial: false,
    Landing: true,
    About: false,
    Portfolio: false,
    Contact: false,
    isDesktop: window.innerWidth > 768
  });

  const handleSetNav = (option, stripes) => {
    if (state[option]) {
      return null;
    } else {
      setState({
        ...state,
        Landing: false,
        About: false,
        Portfolio: false,
        Contact: false,
        [option]: true
      });

      setTimeLine(option, stripes);
    }
  };
};
