import React from "react";
import { motion } from "framer-motion";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { useTheme } from "../components/useTheme";

const Policy = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className="min-h-screen bg-background text-foreground max-w-5xl mx-auto flex flex-col">
			<SiteHeader theme={theme} toggleTheme={toggleTheme} />

			<main className="flex-1 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="container mx-auto max-w-2xl text-center"
				>
					<h1 className="text-4xl font-bold mb-8">Company Policy</h1>

					<div className="space-y-8 text-muted-foreground text-center">
						<section>
							<h2 className="text-xl font-semibold text-foreground mb-3 text-center">
								Introduction
							</h2>
							<p>
								Karyam is committed to delivering high-quality software
								development services with transparency, integrity, and respect
								for our clients and partners. This policy outlines how we
								operate and what you can expect when working with us.
							</p>
						</section>

						<section>
							<h2 className="text-xl font-semibold text-foreground mb-3 text-center">
								Services & Deliverables
							</h2>
							<p>
								We provide web development, mobile application development, and
								API services. Project scope, timelines, and deliverables are
								agreed upon in writing before work begins. Changes to scope may
								affect timeline and pricing and will be communicated in advance.
							</p>
						</section>

						<section>
							<h2 className="text-xl font-semibold text-foreground mb-3 text-center">
								Confidentiality
							</h2>
							<p>
								We treat all client information, business data, and project
								details as confidential. We do not share your proprietary
								information with third parties without your consent, except where
								required by law.
							</p>
						</section>

						<section>
							<h2 className="text-xl font-semibold text-foreground mb-3 text-center">
								Intellectual Property
							</h2>
							<p>
								Upon full payment for completed work, ownership of custom
								deliverables created specifically for your project transfers to
								you, unless otherwise agreed in writing. We retain the right to
								showcase completed work in our portfolio unless you request
								otherwise.
							</p>
						</section>

						<section>
							<h2 className="text-xl font-semibold text-foreground mb-3 text-center">
								Payments & Refunds
							</h2>
							<p>
								Payment terms are defined per project. Deposits may be required
								before work starts. Refunds are considered on a case-by-case
								basis for work not yet performed; completed work is generally
								non-refundable.
							</p>
						</section>

						<section>
							<h2 className="text-xl font-semibold text-foreground mb-3 text-center">
								Contact
							</h2>
							<p className="text-center">
								Questions about this policy? Reach us at{" "}
								<a
									href="mailto:shreyvijayvargiya26@gmail.com"
									className="text-foreground underline hover:text-primary transition-colors"
								>
									shreyvijayvargiya26@gmail.com
								</a>{" "}
								or call{" "}
								<a
									href="tel:7030226230"
									className="text-foreground underline hover:text-primary transition-colors"
								>
									7030226230
								</a>
								.
							</p>
						</section>

						<p className="text-sm text-center pt-4">
							Last updated: May 2025
						</p>
					</div>
				</motion.div>
			</main>

			<SiteFooter />
		</div>
	);
};

export default Policy;
