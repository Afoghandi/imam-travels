import React from "react";

import NavList from "../../components/navigation/nav.component";
import "./contact.scss";

const contact = () => (
	<section className="contact-body">
		<NavList />
		<div className="contact-container">
			<h1> Find Us In Lagos </h1>
			<p> Block 47, Flat 90 Oluwole Ogba Housing estate, </p>{" "}
			<p> Abiodun Jagun Way, OPP.Sunday Market, </p>{" "}
			<p> Ogba Bust stop, Ogba, Lagos </p> <p> Nigeria. </p>{" "}
			<h1> Find Us In Abuja </h1> <p> Suite A 31, 2 nd Floor, </p>{" "}
			<p> Area 11 Shopping Mall </p> <p> Off Ahmadu Bello Way </p>{" "}
			<p> Garki, Abuja </p> <p> Nigeria. </p> <h1> Our Telephone numbers </h1>
			<p className="tel"> +234 - 803 - 322 - 1304 </p>{" "}
			<p className="tel"> +44 - 75 - 840 - 40 - 980 </p>{" "}
			<p className="tel"> +234 - 810 - 677 - 7111 </p>{" "}
			<p className="tel"> +234 - 808 - 510 - 4028 </p> <h1> Email or DM Us </h1>
			<p className="contact-text">
				{" "}
				Email: independentimam6013 @gmail.com{" "}
			</p>{" "}
			<p className="contact-text"> FaceBook: imam Travels oshun </p>
		</div>{" "}
	</section>
);

export default contact;
