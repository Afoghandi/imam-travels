import React from "react";
import MainBanner from "../components/MainBanner";
import Banner from "../components/Banner";
import RitesContainer from "../components/RitesContainer";
import { Link } from "react-router-dom";

export default function Sites() {
	return (
		<div>
			<MainBanner hero="roomsHero">
				<Banner title="learn about the rites">
					<Link to="/" className="btn-primary">
						{" "}
						Back to Home
					</Link>
				</Banner>
			</MainBanner>

			<RitesContainer />
		</div>
	);
}
