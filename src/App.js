import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Sites from "./pages/Sites";
import singlePage from "./pages/singlePage";
import Footer from "./components/footer/Footer.component";

function App() {
	return (
		<div>
			<NavBar />
			<Switch>
				<Route exact path="/" component={HomePage} />{" "}
				<Route exact path="/sites/" component={Sites} />{" "}
				<Route exact path="/sites/:slug" component={singlePage} />{" "}
			</Switch>{" "}
			<Footer />
		</div>
	);
}

export default App;
