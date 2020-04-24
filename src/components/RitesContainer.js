import React, { Component } from "react";
import Title from "./Title";
import { RoomContext } from "../context";
import Loading from "./Loading";
import RiteList from "./RiteList";

class RitesContainer extends Component {
	static contextType = RoomContext;
	render() {
		let { loading, rites } = this.context;
		if (loading) {
			return <Loading />;
		}
		return (
			<div>
				<RiteList rite={rites} />
			</div>
		);
	}
}

export default RitesContainer;
