import React from "react";

import "./ritepage.styles.scss";

import NavList from "../../components/navigation/nav.component";
import riteData from "../../components/directory/directory.components";
import DisplayInfo from "../../components/displayinfo/display-info.component";

class RiteSite extends React.Component {
	state = {
		rites: riteData
	};
	render() {
		const { rites } = this.state;
		return (
			<section className="standard-bg">
				<NavList />
				{rites.map(rite => (
					<DisplayInfo key={rite.id} rite={rite} />
				))}
			</section>
		);
	}
}
export default RiteSite;
