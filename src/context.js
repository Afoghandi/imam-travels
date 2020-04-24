import React, { Component } from "react";
import items from "./data";

const RoomContext = React.createContext();

export default class RoomProvider extends Component {
	state = {
		rites: [],
		popularRites: [],
		loading: true,
	};
	componentDidMount() {
		let rites = this.formatData(items);
		let popularRites = rites.filter((rite) => rite.popular === true);
		this.setState({
			rites,
			popularRites,
			loading: false,
		});
	}
	formatData(items) {
		let tempRites = items.map((item) => {
			let id = item.sys.id;

			let rites = { ...item.fields, id };
			return rites;
		});
		return tempRites;
	}
	getSites = (slug) => {
		let tempSites = [...this.state.rites];
		let sites = tempSites.find((item) => {
			return item.slug === slug;
		});
		return sites;
	};
	render() {
		return (
			<RoomContext.Provider value={{ ...this.state, getSites: this.getSites }}>
				{this.props.children}
			</RoomContext.Provider>
		);
	}
}
const RoomConsumer = RoomContext.Consumer;

/*export function withRoomConsumer(Component) {
	return function ConsumerWrapper(props) {
		return <div>{(value) => <Component {...props} context={value} />}</div>;
	};
}*/

export { RoomProvider, RoomConsumer, RoomContext };
