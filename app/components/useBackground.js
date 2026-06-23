import { createContext, useContext, useState, useEffect, useLayoutEffect } from "react";

const BackgroundContext = createContext(null);

export const BackgroundProvider = ({ children }) => {
	const [background, setBackground] = useState("topographic");

	useEffect(() => {
		const saved = localStorage.getItem("karyam-background");
		if (saved === "topographic" || saved === "starfield") {
			setBackground(saved);
		}
	}, []);

	useLayoutEffect(() => {
		document.documentElement.setAttribute("data-background", background);
	}, [background]);

	useEffect(() => {
		localStorage.setItem("karyam-background", background);
	}, [background]);

	const toggleBackground = () => {
		setBackground((current) =>
			current === "topographic" ? "starfield" : "topographic"
		);
	};

	return (
		<BackgroundContext.Provider
			value={{ background, toggleBackground }}
		>
			{children}
		</BackgroundContext.Provider>
	);
};

export const useBackground = () => {
	const context = useContext(BackgroundContext);
	if (!context) {
		throw new Error("useBackground must be used within BackgroundProvider");
	}
	return context;
};
