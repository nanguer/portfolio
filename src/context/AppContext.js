import React, { createContext, useState } from "react";

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

	const [currentOption, setCurrentOption] = useState("");

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
			return option;
		}
	};

	const defaultContext = {
		state,
		handleSetNav,
		setCurrentOption,
		currentOption
	};

	return (
		<AppContext.Provider value={defaultContext}>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext, AppContextProvider };
