import React from "react";
//import { link } from "react-router-dom";
import NavList from "../../components/navigation/nav.component";
import "./contact.scss";

const contact = () => (
	<section className="contact-body">
		<NavList /> ;{" "}
		<div className="contact-container">
			<h1> Find Us In Lagos </h1>

			<p>Block 47, Flat 90 Oluwole Ogba Housing estate,</p>
			<p>Abiodun Jagun Way, OPP. Sunday Market,</p>
			<p>Ogba Bust stop, Ogba, Lagos</p>
			<p>Nigeria.</p>
			<p className="tel">Call Us:</p>
			<p className="tel">080-332-21304</p>
			<p className="tel">078-778-6486,</p>
			<p className="tel">080-230-84296</p>
			<p className="tel">081-388-19901</p>
			<p className="tel">Email: independentimam6013@gmail.com</p>

			<h1>Find Us In Abuja</h1>
			<p>Suite A 31, 2nd Floor,</p>
			<p>Area 11 Shopping Mall </p>
			<p>Off Ahmadu Bello Way</p>
			<p>Garki, Abuja</p>
			<p>Nigeria.</p>
			<p className="tel">Call Us:</p>
			<p className="tel">080-332-21304</p>
			<p className="tel">078-778-6486,</p>
			<p className="tel">080-230-84296</p>
			<p className="tel">081-388-19901</p>
			<p className="tel">Email: independentimam6013@gmail.com</p>
		</div>{" "}
	</section>
);

export default contact;
