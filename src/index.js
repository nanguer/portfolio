import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import { AppContextProvider } from "../src/context/AppContext";
import "./styles/styles.scss";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<AppContextProvider>
		<AppRouter />
	</AppContextProvider>,

	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
