import React from "react";

export default function MainBanner({ children, hero }) {
	return <div className={hero}> {children} </div>;
}
MainBanner.defaultProps = { hero: "defaultHero" };
