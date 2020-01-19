import React, { Component } from "react";
import "./display-info.styles.scss";
//import NavList from "../../components/navigation/nav.component";

class DisplayInfo extends Component {
	state = {
		showContent: false
	};
	handleinfo = () => {
		this.setState({
			showContent: !this.state.showContent
		});
	};
	render() {
		const { img, title, content } = this.props.rite;
		return (
			<article className="holy-container">
				<div className="img-container">
					<img src={img} alt="rites" />
				</div>

				<div className="content-info">
					<h1>{title} </h1>
					<h5>
						<span onClick={this.handleinfo}>
							more info
							<i className="fas fa-caret-square-down" />
						</span>
					</h5>

					{this.state.showContent ? <p>{content} </p> : null}
				</div>
			</article>
		);
	}
}
export default DisplayInfo;
