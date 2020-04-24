import React from "react";
import MainBanner from "../components/MainBanner";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import PopularRites from "../components/popularRites";

export default function HomePage() {
	return (
		<>
			<MainBanner className="defaultHero">
				<Banner title="Imam Travels" subtitle="we make your dream come true">
					<div> </div>{" "}
				</Banner>{" "}
			</MainBanner>{" "}
			<Contact />
			<PopularRites />
		</>
	);
}
