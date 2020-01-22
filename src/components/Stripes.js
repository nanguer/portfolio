import React, { useState, useRef, useEffect, useContext } from "react";
import { setTimeLine } from "../components/Animations";
import { AppContext } from "../context/AppContext";

export const Stripes = () => {
	const [position, setPosition] = useState("");
	const { currentOption } = useContext(AppContext);
	let stripes = useRef(null);

	useEffect(() => {
		setPosition(currentOption);
		return () => {
			setPosition("");
		};
	}, [currentOption]);

	useEffect(() => {
		console.log(position);
		setTimeLine(position, stripes);
	}, [position]);

	return <div className="stripes" ref={el => (stripes = el)} />;
};
