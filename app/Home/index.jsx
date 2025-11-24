import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	Sun,
	Moon,
	Globe,
	MapPin,
	CheckCircle2,
	AlertTriangle,
	Info,
	Phone,
	Mail,
	Twitter,
	Copy,
	Send,
	Plus,
	ArrowRight,
	MessageCircle,
	ChevronDown,
	X,
	CreditCard,
	WorkflowIcon,
	BadgeAlert,
	Contact2,
} from "lucide-react";
import { FaTwitter } from "react-icons/fa";
import { toast } from "react-toastify";

const Home = () => {
	const [theme, setTheme] = useState("dark");
	const [copied, setCopied] = useState({ phone: false, email: false });
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		service: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedService, setSelectedService] = useState("");
	const dropdownRef = useRef(null);

	const serviceOptions = [
		{ value: "Mobile App", label: "Mobile App" },
		{ value: "Website", label: "Website" },
		{ value: "API", label: "API" },
		{ value: "Other", label: "Other" },
	];

	const getServiceMessage = (service) => {
		const messages = {
			"Mobile App":
				"I need a mobile app for my business. Please get in touch with me to discuss the requirements.",
			Website:
				"I need a website for my business. Please get in touch with me to discuss the requirements.",
			API: "I need API development services. Please get in touch with me to discuss the requirements.",
		};
		return (
			messages[service] ||
			"I need your services. Please get in touch with me to discuss the requirements."
		);
	};

	const handleGetStarted = (service) => {
		setSelectedService(service);
		setFormData({
			...formData,
			service: service,
			message: getServiceMessage(service),
		});
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedService("");
	};

	useEffect(() => {
		const root = document.documentElement;
		if (theme === "dark") {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	const copyToClipboard = (text, type) => {
		navigator.clipboard.writeText(text);
		setCopied({ ...copied, [type]: true });
		setTimeout(() => {
			setCopied({ ...copied, [type]: false });
		}, 2000);
	};

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (response.ok) {
				toast.success("Message sent successfully! We'll get back to you soon.");
				setFormData({
					name: "",
					email: "",
					service: "",
					message: "",
				});
				closeModal();
			} else {
				toast.error(data.error || "Failed to send message. Please try again.");
			}
		} catch (error) {
			console.error("Error:", error);
			toast.error("An error occurred. Please try again later.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="min-h-screen bg-background text-foreground max-w-5xl mx-auto">
			{/* Header */}
			<header className="fixed top-2 left-0 right-0 z-50 rounded-xl max-w-5xl  bg-muted/30 mx-auto backdrop-blur-sm border border-border">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-12">
						<div className="text-2xl font-bold">Karyam</div>
						<nav className="hidden md:flex items-center gap-6">
							<a
								href="#services"
								className="hover:text-primary transition-colors"
							>
								Services
							</a>
							<a
								href="#projects"
								className="hover:text-primary transition-colors"
							>
								Projects
							</a>
							<a
								href="#pricing"
								className="hover:text-primary transition-colors"
							>
								Pricing
							</a>
							<a
								href="#contact"
								className="hover:text-primary transition-colors"
							>
								Contact
							</a>
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
							{/* <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:bg-accent transition-colors">
								<Globe className="w-4 h-4" />
								<span className="text-sm">Hindi</span>
							</button> */}
						</div>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
				<div className="container mx-auto text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<div className="mb-6 bg-zinc-100 dark:bg-zinc-900 w-fit py-2 px-4 mx-auto rounded-full">
							ॐ कर्यम्
						</div>
						<h1 className="text-4xl font-bold mb-6">
							Software Development Company
						</h1>
						<p className="text-muted-foreground mb-8 max-w-xl mx-auto">
							We craft stunning websites, powerful mobile apps, and robust APIs
							that bring your ideas to life.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
							<button
								onClick={() => scrollToSection("services")}
								className="px-8 py-3 bg-foreground text-background rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
							>
								Our work
								<ArrowRight className="w-5 h-5" />
							</button>
							<button
								onClick={() => scrollToSection("contact")}
								className="px-8 py-3 border-2 border-border rounded-xl font-semibold hover:bg-accent transition-colors flex items-center justify-center gap-2"
							>
								Contact us
								<MessageCircle className="w-5 h-5" />
							</button>
						</div>
						<div className="flex items-center justify-center gap-2 text-muted-foreground">
							<MapPin className="w-5 h-5" />
							<a
								href="https://www.google.com/maps?q=25.19839753052676,75.8372114836017"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-primary transition-colors underline"
							>
								Kota, Rajasthan, India
							</a>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Statistics Section */}
			<section className="py-12 px-4 sm:px-6 lg:px-8">
				<div className="container mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className="bg-gradient-to-br from-orange-500 to-purple-600 p-8 rounded-xl text-white"
						>
							<div className="text-5xl font-bold mb-2">10+</div>
							<div className="text-lg">projects delivered</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className="bg-gradient-to-br from-purple-500 to-purple-700 p-8 rounded-xl text-white"
						>
							<div className="text-5xl font-bold mb-2">20+</div>
							<div className="text-lg">Happy Clients</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="bg-gradient-to-br from-green-500 to-green-700 p-8 rounded-xl text-white"
						>
							<div className="text-5xl font-bold mb-2">5+</div>
							<div className="text-lg">Years of experience</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
				<div className="container mx-auto">
					<div className="text-center mb-12">
						<div className="mb-6 text-black flex gap-2 items-center dark:text-zinc-200 dark:bg-zinc-900 bg-zinc-100  w-fit py-2 px-4 mx-auto rounded-full">
							<WorkflowIcon className="w-5 h-5" />
							What we do
						</div>
						<h2 className="text-4xl md:text-5xl font-bold mb-4">
							Our Services
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Comprehensive solutions tailored to your business needs.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className="bg-card border border-border p-6 rounded-xl"
						>
							<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-2">Web Development</h3>
							<p className="text-muted-foreground">
								Modern, responsive websites built with cutting-edge technologies
								and best practices for optimal performance.
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className="bg-card border border-border p-6 rounded-xl"
						>
							<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
							<p className="text-muted-foreground">
								Native and cross-platform mobile applications that deliver
								seamless user experiences on iOS and Android.
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="bg-card border border-border p-6 rounded-xl"
						>
							<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-2">APIs & Backend</h3>
							<p className="text-muted-foreground">
								Scalable backend systems and powerful APIs designed for
								reliability, security, and high performance.
							</p>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Pricing Section */}
			<section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
				<div className="container mx-auto">
					<div className="text-center mb-12">
						<div className="mb-6 text-black flex gap-2 items-center dark:text-zinc-200 dark:bg-zinc-900 bg-zinc-100  w-fit py-2 px-4 mx-auto rounded-full">
							<CreditCard className="w-5 h-5" />
							Pricing
						</div>
						<h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Starting prices for our core services. Final pricing may vary
							based on project requirements and complexity.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className="bg-card border border-border p-6 rounded-xl"
						>
							<h3 className="text-xl font-semibold mb-4">Web Development</h3>
							<div className="text-3xl font-bold mb-6">
								₹ 50,000 ($2000 USD)
							</div>
							<button
								onClick={() => handleGetStarted("Website")}
								className="w-full py-3 bg-foreground text-background rounded-xl font-semibold hover:opacity-90 transition-opacity mb-6"
							>
								Get Started
							</button>
							<ul className="space-y-2">
								<li className="flex items-center gap-2 text-sm">
									<CheckCircle2 className="w-4 h-4 text-green-500" />
									Website Development
								</li>
								<li className="flex items-center gap-2 text-sm">
									<CheckCircle2 className="w-4 h-4 text-green-500" />
									Website Design
								</li>
								<li className="flex items-center gap-2 text-sm">
									<CheckCircle2 className="w-4 h-4 text-green-500" />
									SEO Blogs
								</li>
								<li className="flex items-center gap-2 text-sm">
									<CheckCircle2 className="w-4 h-4 text-green-500" />
									Deployment
								</li>
								<li className="flex items-center gap-2 text-sm">
									<CheckCircle2 className="w-4 h-4 text-green-500" />
									Responsive source code
								</li>
								<li className="flex items-center gap-2 text-sm">
									<CheckCircle2 className="w-4 h-4 text-green-500" />
									Latest Technology
								</li>
								<li className="flex items-center gap-2 text-sm">
									<CheckCircle2 className="w-4 h-4 text-green-500" />
									SSL certificate
								</li>
								<li className="flex items-center gap-2 text-sm">
									<CheckCircle2 className="w-4 h-4 text-green-500" />
									Domain included
								</li>
							</ul>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className="bg-card border border-border p-6 rounded-xl"
						>
							<h3 className="text-xl font-semibold mb-4">
								Mobile App Development
							</h3>
							<div className="text-3xl font-bold mb-6">
								₹ 50,000 ($2000 USD)
							</div>
							<button
								onClick={() => handleGetStarted("Mobile App")}
								className="w-full py-3 bg-foreground text-background rounded-xl font-semibold hover:opacity-90 transition-opacity mb-6"
							>
								Get Started
							</button>
							<ul className="space-y-2">
								<li className="flex items-center gap-2 text-sm">
									<CheckCircle2 className="w-4 h-4 text-green-500" />
									iOS & Android Support
								</li>
								<li className="flex items-center gap-2 text-sm">
									<CheckCircle2 className="w-4 h-4 text-green-500" />
									Native App Development
								</li>
								<li className="flex items-center gap-2 text-sm">
									<CheckCircle2 className="w-4 h-4 text-green-500" />
									Cross-platform Development
								</li>
								<li className="flex items-center gap-2 text-sm">
									<CheckCircle2 className="w-4 h-4 text-green-500" />
									App Store Deployment
								</li>
								<li className="flex items-center gap-2 text-sm">
									<CheckCircle2 className="w-4 h-4 text-green-500" />
									UI/UX Design
								</li>
								<li className="flex items-center gap-2 text-sm">
									<CheckCircle2 className="w-4 h-4 text-green-500" />
									Push Notifications
								</li>
								<li className="flex items-center gap-2 text-sm">
									<CheckCircle2 className="w-4 h-4 text-green-500" />
									API Integration
								</li>
								<li className="flex items-center gap-2 text-sm">
									<CheckCircle2 className="w-4 h-4 text-green-500" />
									Source Code Included
								</li>
							</ul>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="bg-card border border-border p-6 rounded-xl"
						>
							<h3 className="text-xl font-semibold mb-4">API Development</h3>
							<div className="text-3xl font-bold mb-6">
								₹ 50,000 ($2000 USD)
							</div>
							<button
								onClick={() => handleGetStarted("API")}
								className="w-full py-3 bg-foreground text-background rounded-xl font-semibold hover:opacity-90 transition-opacity mb-6"
							>
								Get Started
							</button>
							<ul className="space-y-2">
								<li className="flex items-center gap-2 text-sm">
									<CheckCircle2 className="w-4 h-4 text-green-500" />
									RESTful API Development
								</li>
								<li className="flex items-center gap-2 text-sm">
									<CheckCircle2 className="w-4 h-4 text-green-500" />
									API Documentation
								</li>
								<li className="flex items-center gap-2 text-sm">
									<CheckCircle2 className="w-4 h-4 text-green-500" />
									Database Integration
								</li>
								<li className="flex items-center gap-2 text-sm">
									<CheckCircle2 className="w-4 h-4 text-green-500" />
									Authentication & Security
								</li>
								<li className="flex items-center gap-2 text-sm">
									<CheckCircle2 className="w-4 h-4 text-green-500" />
									Scalable Architecture
								</li>
								<li className="flex items-center gap-2 text-sm">
									<CheckCircle2 className="w-4 h-4 text-green-500" />
									API Testing
								</li>
								<li className="flex items-center gap-2 text-sm">
									<CheckCircle2 className="w-4 h-4 text-green-500" />
									Deployment & Hosting
								</li>
								<li className="flex items-center gap-2 text-sm">
									<CheckCircle2 className="w-4 h-4 text-green-500" />
									Source Code Included
								</li>
							</ul>
						</motion.div>
					</div>
					<div className="flex flex-wrap justify-center gap-6">
						<div className="flex items-center gap-2 text-sm">
							<CheckCircle2 className="w-5 h-5 text-green-500" />
							<span>No credit card needed</span>
						</div>
						<div className="flex items-center gap-2 text-sm">
							<AlertTriangle className="w-5 h-5 text-orange-500" />
							<span>20% Upfront and 80% after Delivery</span>
						</div>
						<div className="flex items-center gap-2 text-sm">
							<Info className="w-5 h-5 text-blue-500" />
							<span>Prices may vary based on project requirements</span>
						</div>
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 ">
				<div className="container mx-auto">
					<div className="text-center mb-12">
						<div className="mb-6 text-black flex gap-2 items-center dark:text-zinc-200 dark:bg-zinc-900 bg-zinc-100  w-fit py-2 px-4 mx-auto rounded-full">
							<BadgeAlert className="w-5 h-5" />
							Our work
						</div>
						<h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Showcasing our recent work and innovations.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{
								title: "ChainGPT",
								type: "Mobile App Development",
								url: "chaingpt.org",
							},
							{
								title: "iHateReading",
								type: "Website Development",
								url: "ihatereading.in",
							},
							{
								title: "GetTemplate",
								type: "Website Development",
								url: "gettemplate.website",
							},
							{
								title: "Custom",
								type: "Build your own",
								url: "Add yours",
								custom: true,
							},
						].map((project, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="bg-card border border-border p-6 rounded-xl hover:border-primary transition-colors"
							>
								<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
								<p className="text-sm text-muted-foreground mb-2">
									{project.type}
								</p>
								<div className="flex items-center justify-between">
									<span className="text-sm text-muted-foreground">
										{project.url}
									</span>
									{project.custom && (
										<button className="p-2 hover:bg-accent rounded-xl transition-colors">
											<Plus className="w-4 h-4" />
										</button>
									)}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Let's Connect Section */}
			<section className="py-20 px-4 sm:px-6 lg:px-8">
				<div className="container mx-auto text-center">
					<div className="mb-6 text-black flex gap-2 items-center dark:text-zinc-200 dark:bg-zinc-900 bg-zinc-100  w-fit py-2 px-4 mx-auto rounded-full">
						<Contact2 className="w-5 h-5" />
						Connect
					</div>
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Let's connect.
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Have a project in mind? Get in touch with us today.
					</p>
				</div>
			</section>

			{/* Contact Section */}
			<section
				id="contact"
				className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/10 rounded-2xl shadow-xl"
			>
				<div className="container mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Get in Touch */}
						<div>
							<h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
							<p className="text-muted-foreground mb-8">
								Reach out through any of these channels and we'll get back to
								you as soon as possible.
							</p>
							<div className="space-y-4 mb-8">
								<div className="bg-card border border-border p-4 rounded-xl flex items-center justify-between">
									<div className="flex items-center gap-3">
										<Phone className="w-5 h-5" />
										<span>7030226230</span>
									</div>
									<button
										onClick={() => copyToClipboard("7030226230", "phone")}
										className="p-2 hover:bg-accent rounded-xl transition-colors"
									>
										<Copy className="w-4 h-4" />
									</button>
								</div>
								<div className="bg-card border border-border p-4 rounded-xl flex items-center justify-between">
									<div className="flex items-center gap-3">
										<Mail className="w-5 h-5" />
										<span className="text-sm">
											shreyvijayvargiya26@gmail.com
										</span>
									</div>
									<button
										onClick={() =>
											copyToClipboard("shreyvijayvargiya26@gmail.com", "email")
										}
										className="p-2 hover:bg-accent rounded-xl transition-colors"
									>
										<Copy className="w-4 h-4" />
									</button>
								</div>
								<div className="bg-card border border-border p-4 rounded-xl flex items-center gap-3">
									<FaTwitter className="w-5 h-5" />
									<span>@xtreyvijay</span>
								</div>
							</div>
							<div className="bg-card border border-border p-4 rounded-xl mb-6">
								<div className="flex items-start gap-3">
									<MapPin className="w-5 h-5 mt-1" />
									<a
										href="https://www.google.com/maps?q=25.19839753052676,75.8372114836017"
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm hover:text-primary transition-colors underline"
									>
										Karyam A-235 Rishi Sulhi Kunkadi Kota, 324008 Rajasthan,
										India.
									</a>
								</div>
							</div>
							<div className="bg-card border border-border p-4 rounded-xl">
								<div className="space-y-2 text-sm">
									<div>
										<span className="font-semibold">Business Name:</span> Karyam
									</div>
									<div>
										<span className="font-semibold">BRN:</span> TBD
									</div>
									<div>
										<span className="font-semibold">SAN:</span> 8006660064000066
									</div>
									<div>
										<span className="font-semibold">Department:</span>{" "}
										Directorate of Economics & Statistics
									</div>
									<div>
										<span className="font-semibold">Authority:</span> Department
										of Statistics, Rajasthan, Jaipur
									</div>
									<div>
										<span className="font-semibold">Location:</span> Kota,
										Rajasthan
									</div>
								</div>
							</div>
						</div>

						{/* Contact Form */}
						<div>
							<h2 className="text-3xl font-bold mb-8">Contact Form</h2>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div>
									<label className="block text-sm font-medium mb-2">Name</label>
									<input
										type="text"
										name="name"
										value={formData.name}
										onChange={handleInputChange}
										placeholder="Your Name"
										required
										className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium mb-2">
										Email
									</label>
									<input
										type="email"
										name="email"
										value={formData.email}
										onChange={handleInputChange}
										placeholder="your@email.com"
										required
										className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium mb-2">
										Service Type
									</label>
									<select
										name="service"
										value={formData.service}
										onChange={handleInputChange}
										required
										className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring"
									>
										<option value="">Select a service</option>
										<option value="Mobile App">Mobile App</option>
										<option value="Website">Website</option>
										<option value="API">API</option>
										<option value="Other">Other</option>
									</select>
								</div>
								<div>
									<label className="block text-sm font-medium mb-2">
										Message
									</label>
									<textarea
										name="message"
										value={formData.message}
										onChange={handleInputChange}
										placeholder="Tell us about your project..."
										rows={6}
										required
										className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring resize-none"
									/>
								</div>
								<button
									type="submit"
									disabled={isSubmitting}
									className="w-full py-3 bg-foreground text-background rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
								>
									<Send className="w-5 h-5" />
									{isSubmitting ? "Sending..." : "Send Message"}
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>

			{/* Modal */}
			<AnimatePresence>
				{isModalOpen && (
					<>
						{/* Backdrop */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={closeModal}
							className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
						/>
						{/* Modal */}
						<motion.div
							initial={{ opacity: 0, scale: 0.95, y: 20 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.95, y: 20 }}
							transition={{ duration: 0.2 }}
							className="fixed inset-0 z-50 flex items-center justify-center p-4"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="bg-background border border-border rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
								<div className="flex items-center justify-between mb-6">
									<h2 className="text-3xl font-bold">Contact Us</h2>
									<button
										onClick={closeModal}
										className="p-2 hover:bg-accent rounded-xl transition-colors"
										aria-label="Close modal"
									>
										<X className="w-5 h-5" />
									</button>
								</div>
								<form onSubmit={handleSubmit} className="space-y-6">
									<div>
										<label className="block text-sm font-medium mb-2">
											Name
										</label>
										<input
											type="text"
											name="name"
											value={formData.name}
											onChange={handleInputChange}
											placeholder="Your Name"
											required
											className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring"
										/>
									</div>
									<div>
										<label className="block text-sm font-medium mb-2">
											Email
										</label>
										<input
											type="email"
											name="email"
											value={formData.email}
											onChange={handleInputChange}
											placeholder="your@email.com"
											required
											className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring"
										/>
									</div>
									<div>
										<label className="block text-sm font-medium mb-2">
											Service Type
										</label>
										<select
											name="service"
											value={formData.service}
											onChange={handleInputChange}
											required
											className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring"
										>
											<option value="">Select a service</option>
											<option value="Mobile App">Mobile App</option>
											<option value="Website">Website</option>
											<option value="API">API</option>
											<option value="Other">Other</option>
										</select>
									</div>
									<div>
										<label className="block text-sm font-medium mb-2">
											Message
										</label>
										<textarea
											name="message"
											value={formData.message}
											onChange={handleInputChange}
											placeholder="Tell us about your project..."
											rows={6}
											required
											className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring resize-none"
										/>
									</div>
									<button
										type="submit"
										disabled={isSubmitting}
										className="w-full py-3 bg-foreground text-background rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
									>
										<Send className="w-5 h-5" />
										{isSubmitting ? "Sending..." : "Send Message"}
									</button>
								</form>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>

			{/* Footer */}
			<footer className="py-12 px-4 sm:px-6 lg:px-8">
				<div className="container mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
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
										href="#services"
										className="hover:text-foreground transition-colors"
									>
										Web Development
									</a>
								</li>
								<li>
									<a
										href="#services"
										className="hover:text-foreground transition-colors"
									>
										Mobile Apps
									</a>
								</li>
								<li>
									<a
										href="#services"
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
										href="#projects"
										className="hover:text-foreground transition-colors"
									>
										Projects
									</a>
								</li>
								<li>
									<a
										href="#pricing"
										className="hover:text-foreground transition-colors"
									>
										Pricing
									</a>
								</li>
								<li>
									<a
										href="#contact"
										className="hover:text-foreground transition-colors"
									>
										Contact
									</a>
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

					<div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
						<div className="text-sm text-muted-foreground">
							© 2025 Karyam. All rights reserved.
						</div>
						
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Home;
