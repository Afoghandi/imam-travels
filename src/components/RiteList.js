import React from "react";
import Rites from "./Rites";

export default function RiteList({ rite }) {
	if (rite.length === 0) {
		return <div className="empty-search">No search mis matched</div>;
	}
	return (
		<section className=" ritelist">
			<div className="ritelist-center">
				{rite.map((item) => {
					return <Rites key={item.id} rite={item} />;
				})}
			</div>
		</section>
	);
}
