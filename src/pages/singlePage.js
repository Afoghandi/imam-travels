import React, { Component } from "react";
import { Link } from "react-router-dom";

import Banner from "../components/Banner";
import { RoomContext } from "../context";
import StyledHero from "../components/styledHero";
class singlePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slug: this.props.match.params.slug,
		};
	}
	static contextType = RoomContext;
	render() {
		const { getSites } = this.context;
		const sites = getSites(this.state.slug);
		if (!sites) {
			return (
				<div className="error ">
					<h3>Building our site </h3>
					<Link to="/sites/" className="btn-primary">
						{" "}
						Back to rooms
					</Link>
				</div>
			);
		}
		const { title, img, content } = sites;

		return (
			<>
				<StyledHero img={img}>
					<Banner title={title}>
						<Link to="/sites/" className="btn-primary">
							{" "}
							More Rites
						</Link>
					</Banner>
				</StyledHero>
				<div className="single-rite-info">
					<div className="desc">
						<h3>{title}</h3>
						<p>{content}</p>
					</div>
				</div>
			</>
		);
	}
}

export default singlePage;
