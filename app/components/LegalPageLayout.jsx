import React from "react";
import { motion } from "framer-motion";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { useTheme } from "./useTheme";

const LegalPageLayout = ({ title, children }) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className="min-h-screen bg-background text-foreground max-w-5xl mx-auto flex flex-col">
			<SiteHeader theme={theme} toggleTheme={toggleTheme} />

			<main className="flex-1 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="container mx-auto max-w-3xl text-center"
				>
					<h1 className="text-4xl font-bold mb-8">{title}</h1>
					<div className="space-y-6 text-muted-foreground text-center text-sm leading-relaxed">
						{children}
					</div>
				</motion.div>
			</main>

			<SiteFooter />
		</div>
	);
};

export const LegalParagraph = ({ children }) => <p>{children}</p>;

export const LegalHeading = ({ children }) => (
	<h2 className="text-lg font-semibold text-foreground pt-4">{children}</h2>
);

export default LegalPageLayout;
