import React, { createContext, useState, useRef } from "react";
import { setTimeLine } from "../components/Animations";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [state, setState] = useState({
    initial: false,
    Landing: true,
    About: false,
    Portfolio: false,
    Contact: false,
    isDesktop: window.innerWidth > 768
  });
  let stripes = useRef(null);

  const handleSetNav = option => {
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

  const defaultContext = {
    state,
    handleSetNav
  };

  console.log(stripes);

  return (
    <AppContext.Provider value={defaultContext}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
