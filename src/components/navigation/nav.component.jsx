import React from "react";
import { Link } from "react-router-dom";
import "./nav.styles.scss";

const NavList = () => (
	<div className="main-nav">
		<h1 className="header">
			{" "}
			Imam <span className="secondary">- Travels </span>
		</h1>
		<ul>
			<Link to="/">
				<li className="options"> Home </li>
			</Link>
			<Link to="/rites">
				<li className="options">Rites</li>
			</Link>
			<Link to="/about">
				<li className="options">About Us</li>
			</Link>
			<Link to="/contact">
				<li className="options"> Contact Us</li>
			</Link>
		</ul>
	</div>
);

export default NavList;
