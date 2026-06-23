import React from "react";
import "tailwindcss/tailwind.css";
import "../globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BackgroundProvider } from "../app/components/useBackground";
import SiteBackground from "../app/components/SiteBackground";

function MyApp({ Component, pageProps }) {
	return (
		<BackgroundProvider>
			<SiteBackground />
			<ToastContainer />
			<Component {...pageProps} />
		</BackgroundProvider>
	);
}

export default MyApp;
