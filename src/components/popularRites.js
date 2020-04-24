import React, { Component } from "react";
import Title from "./Title";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Rites from "./Rites";

class popularRites extends Component {
	static contextType = RoomContext;
	render() {
		let { loading, popularRites: rites } = this.context;
		rites = rites.map((item) => {
			return <Rites key={item.id} rite={item} />;
		});
		return (
			<section className="popular-rites">
				<Title title="Popular rites" />
				<div className="popular-rites-center">
					{" "}
					{loading ? <Loading /> : rites}{" "}
				</div>{" "}
			</section>
		);
	}
}
export default popularRites;
