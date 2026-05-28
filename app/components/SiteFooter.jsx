import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { FaTwitter } from "react-icons/fa";

const SiteFooter = () => {
	return (
		<footer className="py-12 px-4 sm:px-6 lg:px-8">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="container mx-auto"
			>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
					<div>
						<div className="text-2xl font-bold mb-2">Karyam</div>
						<p className="text-sm text-muted-foreground">
							Crafting digital excellence worldwide
						</p>
					</div>
					<div>
						<h3 className="font-semibold mb-4">Services</h3>
						<ul className="space-y-2 text-sm text-muted-foreground">
							<li>
								<a
									href="/#services"
									className="hover:text-foreground transition-colors"
								>
									Web Development
								</a>
							</li>
							<li>
								<a
									href="/#services"
									className="hover:text-foreground transition-colors"
								>
									Mobile Apps
								</a>
							</li>
							<li>
								<a
									href="/#services"
									className="hover:text-foreground transition-colors"
								>
									API Development
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-semibold mb-4">Company</h3>
						<ul className="space-y-2 text-sm text-muted-foreground">
							<li>
								<a
									href="/#projects"
									className="hover:text-foreground transition-colors"
								>
									Projects
								</a>
							</li>
							<li>
								<a
									href="/#pricing"
									className="hover:text-foreground transition-colors"
								>
									Pricing
								</a>
							</li>
							<li>
								<a
									href="/#contact"
									className="hover:text-foreground transition-colors"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-semibold mb-4">Legal</h3>
						<ul className="space-y-2 text-sm text-muted-foreground">
							<li>
								<Link
									href="/terms-and-conditions"
									className="hover:text-foreground transition-colors"
								>
									Terms & Conditions
								</Link>
							</li>
							<li>
								<Link
									href="/privacy-policy"
									className="hover:text-foreground transition-colors"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href="/refund-policy"
									className="hover:text-foreground transition-colors"
								>
									Refund Policy
								</Link>
							</li>
							<li>
								<Link
									href="/policy"
									className="hover:text-foreground transition-colors"
								>
									Company Policy
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-semibold mb-4">Contact</h3>
						<ul className="space-y-2 text-sm text-muted-foreground">
							<li>
								<a
									href="https://twitter.com/xtreyvijay"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-foreground transition-colors flex items-center gap-2"
								>
									<FaTwitter className="w-4 h-4" />
									Twitter
								</a>
							</li>
							<li>
								<a
									href="mailto:shreyvijayvargiya26@gmail.com"
									className="hover:text-foreground transition-colors flex items-center gap-2"
								>
									<Mail className="w-4 h-4" />
									Email
								</a>
							</li>
							<li>
								<a
									href="tel:7030226230"
									className="hover:text-foreground transition-colors flex items-center gap-2"
								>
									<Phone className="w-4 h-4" />
									Phone
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
					<div className="text-sm text-muted-foreground">
						© 2025 Karyam. All rights reserved.
					</div>
				</div>
			</motion.div>
		</footer>
	);
};

export default SiteFooter;
