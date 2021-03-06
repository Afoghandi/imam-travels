import React from "react";
import "./Footer.styles.scss";
import { Link } from "react-router-dom";

const Footer = () => (
	<div className="main-footer">
		<div className="main-footer-container">
			<Link to="/">
				<img src={require("../../images/imam logo.png")} alt="imam-travels" />
			</Link>{" "}
			<div className="icon">
				<Link to="" target="_blank">
					<img
						className="icon-img"
						src={require("../../images/IATA logo.png")}
						alt="none"
					></img>{" "}
				</Link>{" "}
				<Link>
					<img
						className="icon-img"
						src={require("../../images/nahcon logo.jpg")}
						alt="none"
					></img>{" "}
				</Link>{" "}
				<Link>
					<img
						className="icon-img"
						src={require("../../images/Facebook Logo.png")}
						alt="none"
					></img>{" "}
				</Link>{" "}
				<Link>
					<img
						className="icon-img"
						src={require("../../images/nanta.png")}
						alt="none"
					></img>{" "}
				</Link>{" "}
			</div>{" "}
		</div>{" "}
	</div>
);
export default Footer;
