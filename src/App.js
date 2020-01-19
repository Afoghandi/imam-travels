import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/hompage.component";
import RiteSite from "./pages/ritepage/ritepage.components";
import AboutPage from "./pages/about/about.component";
import contact from "./pages/contact/contact";
import Footer from "./components/footer/Footer.component";
//import NavList from "./components/navigation/nav.component";
function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />{" "}
				<Route path="/rites" component={RiteSite} />{" "}
				<Route path="/about" component={AboutPage} />{" "}
				<Route path="/contact" component={contact} />{" "}
			</Switch>{" "}
			<Footer />
		</div>
	);
}

export default App;
