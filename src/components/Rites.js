import React from "react";
import PropTypes from "prop-types";
import defaultImg from "../images/room-5.jpeg";
import { Link } from "react-router-dom";

function Rites({ rite }) {
	const { img, title, slug } = rite;

	return (
		<div>
			<article className="rites">
				<div className="img-container">
					<img src={img || defaultImg} alt="single rite" />
					<Link to={`/sites/${slug}`} className="btn-primary rites-link">
						{" "}
						Info{" "}
					</Link>{" "}
				</div>
				<p className="rites-info"> {title} </p>{" "}
			</article>{" "}
		</div>
	);
}
export default Rites;
Rites.propTypes = {
	rite: PropTypes.shape({
		title: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
		img: PropTypes.arrayOf(PropTypes.string).isRequired,
	}),
};
