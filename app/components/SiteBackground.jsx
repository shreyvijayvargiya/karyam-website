import React from "react";
import { useBackground } from "./useBackground";
import StarfieldBackground from "./StarfieldBackground";

const SiteBackground = () => {
	const { background } = useBackground();

	return (
		<>
			{background === "topographic" && (
				<div className="topographic-bg-layer" aria-hidden="true" />
			)}
			{background === "starfield" && <StarfieldBackground />}
		</>
	);
};

export default SiteBackground;
