import React, { Component } from "react";
import Logo from "../images/imam logo.png";
import { FiAlignLeft } from "react-icons/fi";
import { FiAlignCenter } from "react-icons/fi";
import { Link } from "react-router-dom";

class NavBar extends Component {
	//set state to false
	state = { isOpen: false };
	//function sets state to the opposite state
	handleToggle = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};
	render() {
		return (
			<nav className="navbar">
				<div className="nav-center">
					<div className="nav-header">
						<Link to="/">
							<img src={Logo} alt="imam-travels" />
						</Link>{" "}
					</div>{" "}
					<button type="button" onClick={this.handleToggle} className="nav-btn">
						{" "}
						{this.state.isOpen ? (
							<FiAlignCenter className="nav-icon" />
						) : (
							<FiAlignLeft className="nav-icon" />
						)}{" "}
					</button>{" "}
					<ul
						className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
					>
						<li>
							{" "}
							<Link to="/"> Home </Link>{" "}
						</li>{" "}
						<li>
							<Link to="/sites/"> sites </Link>{" "}
						</li>{" "}
					</ul>{" "}
				</div>{" "}
			</nav>
		);
	}
}

export default NavBar;
