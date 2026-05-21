import React from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";

const SiteHeader = ({ theme, toggleTheme }) => {
	const navLinks = [
		{ href: "/#services", label: "Services" },
		{ href: "/#projects", label: "Projects" },
		{ href: "/#pricing", label: "Pricing" },
		{ href: "/#contact", label: "Contact" },
	];

	return (
		<header className="fixed top-2 left-0 right-0 z-50 rounded-xl max-w-5xl bg-muted/30 mx-auto backdrop-blur-sm border border-border">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-12">
					<Link href="/" className="text-2xl font-bold">
						Karyam
					</Link>
					<nav className="hidden md:flex items-center gap-6">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="hover:text-primary transition-colors"
							>
								{link.label}
							</a>
						))}
					</nav>
					<div className="flex items-center gap-4">
						<button
							onClick={toggleTheme}
							className="p-2 rounded-xl hover:bg-accent transition-colors"
							aria-label="Toggle theme"
						>
							{theme === "dark" ? (
								<Sun className="w-5 h-5" />
							) : (
								<Moon className="w-5 h-5" />
							)}
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default SiteHeader;
