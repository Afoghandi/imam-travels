import React from "react";
import { link } from "react-router-dom";
import NavList from "../../components/navigation/nav.component";

import "./about.styles.scss";

const AboutPage = () => (
	<div className="about">
		<NavList /> ;{" "}
		<div className="contents">
			<div className="image" scr={require("../../images/ceo.jpg")} width="200">
				{" "}
			</div>
			<div className="mission-statement">
				<p className="main-paragraph">
					<span> Our Mission </span>{" "}
				</p>{" "}
				<p className="sub-paragraph">
					Assalam Alekun, brothers and sisters.My name is Alhaja Mujidat Oshun,
					and I am the CEO of Imam - Travels.Our mission at Imam_Travels is to
					make your pilgrimage dream come true.so we want to thank and
					congratulate you in taking the first by visiting our page.{" "}
				</p>
				<p className="sub-paragraph">
					We know that the pilgrimage you are about to embark on is a life long
					dream, life changing and humbling experience and we are pleased and
					honored that you have chosen us to help you fulfil that dream{" "}
				</p>{" "}
				<p className="main-paragraph">
					<span> Our History </span>{" "}
				</p>{" "}
				<p className="sub-paragraph">
					Imam_Travles was founded over ten years ago and it is really
					amazing(Thanks to Allah) how it has grown from strength to strength.We
					offer an unbeatable value and award - winning service in our package
					and we have been able to make over a 200 pilgrimage dreams come true
					and always thrive to do better.Have a look at our review to see for
					yourself.We are certified by AITA, NANTA and National Hajj
					Commission.So you can be rest assured that we will deliver our Promise{" "}
				</p>{" "}
				<p className="main-paragraph">
					<span> Our Promise </span>{" "}
				</p>{" "}
				<p className="sub-paragraph">
					We have made it our mission to fulfil your pilgrimage dream and This
					is what we thrive to achieve.Regardless if you are first time
					traveller or not.We will ensure your journey is as smooth as possible
					and the only thing you worry about is you having the strength to do
					the Tawaf.We only work with top brand airlines and have a variety of
					accommodation to suit your needs, so you can be rest assured that your
					comfort is guaranteed.So come, let Imam_Travels take care of your
					travels, afterall, it is what we do best{" "}
				</p>{" "}
			</div>{" "}
			<div className="blockqoute">
				<p className="title-review">
					<span> Reviews </span>{" "}
				</p>{" "}
				<p className="quoted">
					"Imam_Travels went above and beyond to ensure I did all the rites I
					was supposed to do . "{" "}
				</p>{" "}
			</div>{" "}
		</div>{" "}
	</div>
);

export default AboutPage;
