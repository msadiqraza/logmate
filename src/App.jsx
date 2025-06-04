import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

// --- Animation Variants ---
const fadeIn = {
	initial: { opacity: 0 },
	animate: { opacity: 1, transition: { duration: 0.5 } },
	whileInView: { opacity: 1, transition: { duration: 0.5 } },
	viewport: { once: true, amount: 0.2 },
};

const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	animate: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" },
	},
	whileInView: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" },
	},
	viewport: { once: true, amount: 0.2 },
};

const scaleIn = {
	initial: { scale: 1.05, opacity: 0.8 },
	animate: {
		scale: 1,
		opacity: 1,
		transition: {
			type: "spring",
			damping: 36,
			stiffness: 120,
			mass: 4,
			delay: 0.2,
		},
	},
};

const heroTextContainerVariants = {
	initial: { opacity: 0.001 },
	animate: {
		opacity: 1,
		transition: {
			delay: 0.5,
			duration: 1,
			ease: [0.25, 0.02, 0, 0.97],
		},
	},
};

const heroTextChildVariants = {
	initial: { opacity: 0, y: 20 },
	animate: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.7, ease: "easeOut" },
	},
};

const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
	initial: {},
	animate: {
		transition: {
			staggerChildren,
			delayChildren,
		},
	},
	whileInView: {
		// Ensure this is triggered when parent is in view
		transition: {
			staggerChildren,
			delayChildren,
		},
	},
	viewport: { once: true, amount: 0.1 },
});

// Helper component for SVG icons (ArrowRight example)
const ArrowRightIcon = ({ className = "w-5 h-5", color = "currentColor" }) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" className={className} fill={color}>
		<g color={color} weight="regular">
			<path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
		</g>
	</svg>
);

const CheckCircleIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" className={className} fill={color}>
		<g color={color} weight="regular">
			<path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
		</g>
	</svg>
);

const BatteryIcon = ({ className = "w-8 h-8", color = "currentColor" }) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" className={className} fill={color}>
		<g>
			<path d="M200,56H32A24,24,0,0,0,8,80v96a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V80A24,24,0,0,0,200,56Zm8,120a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8Zm48-80v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0ZM138.81,123.79a8,8,0,0,1,.35,7.79l-16,32a8,8,0,0,1-14.32-7.16L119.06,136H100a8,8,0,0,1-7.16-11.58l16-32a8,8,0,1,1,14.32,7.16L112.94,120H132A8,8,0,0,1,138.81,123.79Z"></path>
		</g>
	</svg>
);
const QualityIcon = ({ className = "w-8 h-8", color = "currentColor" }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" className={className} fill={color}>
		<path d="M49.77 16.2A23.31 23.31 0 0043 14.45a23.85 23.85 0 00-21.92 0 23.31 23.31 0 00-6.77 1.75C10.2 18.31 8 22.53 8 27.2v1.6c0 4.67 2.2 8.89 6.31 10.95a23.31 23.31 0 006.77 1.75c3.92.83 8 1.25 12.08 1.25s8.16-.42 12.08-1.25a23.31 23.31 0 006.77-1.75C54.05 37.69 56 33.47 56 28.8v-1.6c0-4.67-2.2-8.89-6.23-10.95zM32.08 44c-9.83 0-18.67-2.33-22.5-6V26c3.83-3.67 12.67-6 22.5-6s18.67 2.33 22.5 6v12c-3.83 3.67-12.67 6-22.5 6z"></path>
		<path d="M32.08 23c-7.83 0-14.67 1.67-17.5 3.58V18c4.83-2.67 12.5-4 17.5-4s12.67 1.33 17.5 4v8.58c-2.83-1.91-9.67-3.58-17.5-3.58z"></path>
	</svg>
);
const StartupIcon = ({ className = "w-8 h-8", color = "currentColor" }) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill={color}>
		<path d="M13 2v8h-2V2H9v6H7V2H5v10h2v4h2v-4h2v4h2v-4h2V2h-2v6h-2V2h-2zM7 18h10v2H7v-2z"></path>
	</svg>
);
const SavingsIcon = ({ className = "w-8 h-8", color = "currentColor" }) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 488" className={className} fill={color}>
		<path d="M392.6,206.3c-3.2-10.7-8.8-20.4-16.4-28.7c-15.5-16.9-39.3-22.6-61.3-15.3c-10.1,3.4-19.4,8.8-27.2,15.9 c-1.8-0.6-3.6-1.1-5.5-1.5c-10.1-2.3-20.7-1.3-30.1,2.9c-10.7,4.8-19.2,12.5-24.7,22.4c-8.9-4.2-18.9-6.5-29.5-6.5 c-33.9,0-61.4,27.5-61.4,61.4s27.5,61.4,61.4,61.4c7.3,0,14.3-1.3,20.7-3.6c6.3,16.1,20.4,28.5,37.9,34.4 c14.4,4.9,30,5.8,44.7,2.7c12.7-2.6,24.3-8.8,33.8-17.6c12-11.1,19.4-26.3,20.6-42.7c10.6-2.9,19.8-8.9,26.8-17.2 C400.5,240.3,401.3,221.5,392.6,206.3z M201.8,322.2c-22.6,0-40.9-18.3-40.9-40.9s18.3-40.9,40.9-40.9s40.9,18.3,40.9,40.9 S224.4,322.2,201.8,322.2z M310.4,292.3c-17.3,0-32.2-10.8-38.2-26.2c2.4,0.4,4.8,0.6,7.3,0.6c22.6,0,40.9-18.3,40.9-40.9 s-18.3-40.9-40.9-40.9c-5.3,0-10.4,1-15,2.8c4.8-18.7,20.3-32.9,39.6-36.7c24.8-4.9,49.1,4.5,59.5,26.9 c7.8,16.8,5.3,37.1-6.1,50.9C348.9,286.2,330.9,292.3,310.4,292.3z"></path>
	</svg>
);

const TwitterIcon = ({ className = "w-8 h-8", color = "currentColor" }) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" className={className} fill={color}>
		<g>
			<path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
		</g>
	</svg>
);
const LinkedInIcon = ({ className = "w-8 h-8", color = "currentColor" }) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" className={className} fill={color}>
		<g>
			<path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
		</g>
	</svg>
);
const FacebookIcon = ({ className = "w-8 h-8", color = "currentColor" }) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" className={className} fill={color}>
		<g>
			<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
		</g>
	</svg>
);
const InstagramIcon = ({ className = "w-8 h-8", color = "currentColor" }) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" className={className} fill={color}>
		<g>
			<path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
		</g>
	</svg>
);

// Mega Menu Data (based on the provided image)
const productsMegaMenuData = {
	column1: [
		{
			category: "POWER DISTRIBUTION",
			items: ["Cast Resin Dry Type Transformers", "Busbar Trunking System"],
		},
		{
			category: "LOW VOLTAGE SWITCHGEAR",
			items: [
				"Circuit Breakers",
				"Residual Current Devices",
				"Enclosures & Type Tested Panels",
				"HRC And Cylindrical Fuses",
				"Surge Protective Devices",
				"Control Relays, Voltage Protection Relays & EOCRs",
			],
		},
	],
	column2: [
		{
			category: "MEDIUM VOLTAGE SOLUTION",
			items: ["Vacuum Circuit Breaker", "Automatic Voltage Regulators"],
		},
		{
			category: "ENERGY MANAGEMENT",
			items: [
				"Digital Multimeters Energy Analyzers",
				"Engine & Genset Controller",
				"Automatic Transfer Controllers",
				"PFI Controller",
				"Power Capacitors",
				"Harmonics Filter Reactors",
				"Variable Frequency Drives/Inverters",
			],
		},
	],
	column3: [
		{
			category: "INSTRUMENTATION & CONTROLS",
			items: [
				"Magnetic Contactors",
				"Timers and Counters",
				"Tachometers",
				"Float Type Control Switches",
				"DOL Starters",
				"Panel Meters",
				"Portable Meters & Quality Analyzers",
				"Frequency Meters",
				"Digital Panel Meters, Ammeters & Voltmeters",
				"Current Transformers",
				"Changeover Switches & Phase Selector Switches",
				"Load break Switches",
			],
		},
	],
};

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
	let productsTimeoutId; // For debouncing mouse leave

	const handleProductsMouseEnter = () => {
		clearTimeout(productsTimeoutId);
		setIsProductsMenuOpen(true);
	};

	const handleProductsMouseLeave = () => {
		productsTimeoutId = setTimeout(() => {
			setIsProductsMenuOpen(false);
		}, 200);
	};

	const navLinks = [
		{ name: "Solutions", isDropdown: true, href: "#solutions" },
		{ name: "Products", href: "#products", isMegaMenu: true },
		{ name: "Applications", isDropdown: true, href: "#applications" },
		{ name: "Use Cases", isDropdown: true, href: "#use-cases" },
		{ name: "Blog", href: "./blog" },
		{ name: "Our Mission", href: "./about-us" },
	];

	return (
		<motion.nav
			className="fixed top-0 left-0 right-0 z-[100] h-[88px] bg-transparent flex items-center" // Increased z-index
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.2 }}
			onMouseLeave={() => {
				clearTimeout(productsTimeoutId);
				setIsProductsMenuOpen(false);
			}}
		>
			<div className="container mx-auto px-4 md:px-8 flex justify-between items-center max-w-screen-xl">
				<a href="./" className="flex-shrink-0">
					<span className="text-2xl font-semibold text-white hidden sm:inline">Logmate</span>
				</a>

				<div className="hidden lg:flex items-center space-x-6">
					{navLinks.map((link, index) => (
						<motion.div
							key={link.name}
							className="relative"
							onMouseEnter={link.isMegaMenu ? handleProductsMouseEnter : undefined}
							onMouseLeave={link.isMegaMenu ? handleProductsMouseLeave : undefined}
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.3,
								delay: 0.3 + index * 0.1,
							}}
						>
							<a
								href={link.href || "#"}
								className="text-white text-sm font-['Instrument_Sans',_sans-serif] hover:text-gray-300 transition-colors py-2"
								onClick={(e) => !link.href && !link.isMegaMenu && e.preventDefault()}
							>
								{link.name}
							</a>
							{link.isMegaMenu && (
								<AnimatePresence>
									{isProductsMenuOpen && (
										<motion.div
											initial={{
												opacity: 0,
												y: 10,
											}}
											animate={{
												opacity: 1,
												y: 0,
											}}
											exit={{
												opacity: 0,
												y: 10,
											}}
											transition={{
												duration: 0.2,
											}}
											className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-screen max-w-5xl xl:max-w-6xl" // Adjusted max-width
											onMouseEnter={handleProductsMouseEnter}
											onMouseLeave={handleProductsMouseLeave}
										>
											<div className="bg-white text-gray-800 shadow-2xl rounded-lg p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">
												{/* Column 1 */}
												<div className="space-y-6">
													{productsMegaMenuData.column1.map((section) => (
														<div key={section.category}>
															<h3
																className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3"
																style={{
																	fontFamily: "'Instrument Sans', sans-serif",
																}}
															>
																{section.category}
															</h3>
															<ul className="space-y-1.5">
																{section.items.map((item) => (
																	<li key={item}>
																		<a
																			href="#"
																			className="block text-sm text-gray-700 hover:text-[#EF2E24] transition-colors"
																			style={{
																				fontFamily: "'Instrument Sans', sans-serif",
																			}}
																		>
																			{item}
																		</a>
																	</li>
																))}
															</ul>
														</div>
													))}
												</div>
												{/* Column 2 */}
												<div className="space-y-6">
													{productsMegaMenuData.column2.map((section) => (
														<div key={section.category}>
															<h3
																className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3"
																style={{
																	fontFamily: "'Instrument Sans', sans-serif",
																}}
															>
																{section.category}
															</h3>
															<ul className="space-y-1.5">
																{section.items.map((item) => (
																	<li key={item}>
																		<a
																			href="#"
																			className="block text-sm text-gray-700 hover:text-[#EF2E24] transition-colors"
																			style={{
																				fontFamily: "'Instrument Sans', sans-serif",
																			}}
																		>
																			{item}
																		</a>
																	</li>
																))}
															</ul>
														</div>
													))}
												</div>
												{/* Column 3 */}
												<div className="space-y-6">
													{productsMegaMenuData.column3.map((section) => (
														<div key={section.category}>
															<h3
																className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3"
																style={{
																	fontFamily: "'Instrument Sans', sans-serif",
																}}
															>
																{section.category}
															</h3>
															<ul className="space-y-1.5">
																{section.items.map((item) => (
																	<li key={item}>
																		<a
																			href="#"
																			className="block text-sm text-gray-700 hover:text-[#EF2E24] transition-colors"
																			style={{
																				fontFamily: "'Instrument Sans', sans-serif",
																			}}
																		>
																			{item}
																		</a>
																	</li>
																))}
															</ul>
														</div>
													))}
												</div>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							)}
						</motion.div>
					))}
				</div>

				<div className="flex items-center space-x-4">
					<motion.a
						href="./contact-sales"
						className="hidden lg:inline-flex items-center justify-center px-4 py-2 bg-[#EF2E24] text-white text-sm font-medium rounded-full hover:bg-red-700 transition-colors"
						style={{ fontFamily: "'Instrument Sans', sans-serif" }}
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 0.3,
							delay: 0.3 + navLinks.length * 0.1,
						}}
					>
						Contact Sales
					</motion.a>
					<button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
						</svg>
					</button>
				</div>
			</div>
			{isMobileMenuOpen && (
				<motion.div
					className="lg:hidden absolute top-[88px] left-0 right-0 bg-[rgba(0,25,54,0.95)] p-5 shadow-lg"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
				>
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.href || "#"}
							className="block text-white py-2.5 text-center hover:bg-[rgba(255,255,255,0.1)] rounded-md transition-colors"
						>
							{link.name}
						</a>
					))}
					<a
						href="./contact-sales"
						className="block text-center mt-3 px-4 py-2.5 bg-[#EF2E24] text-white text-sm font-medium rounded-full hover:bg-red-700 transition-colors"
					>
						Contact Sales
					</a>
				</motion.div>
			)}
		</motion.nav>
	);
};

const HeroSection = () => {
	return (
		<header
			id="hero"
			className="relative h-screen min-h-[600px] flex flex-col justify-end items-center text-white overflow-hidden"
		>
			<motion.div className="absolute inset-0 z-0" variants={scaleIn} initial="initial" animate="animate">
				<img
					src="https://framerusercontent.com/images/x1OVtwxXi3sfdrcex4YR52vSg08.jpeg"
					alt="Factory building"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,25,54,0.35)] to-[rgba(0,104,222,0)] opacity-60"></div>
				<div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,25,54,0.35)] via-transparent to-transparent"></div>
			</motion.div>

			<motion.div
				className="relative z-10 container mx-auto px-4 md:px-8 pb-20 md:pb-28 lg:pb-20 max-w-screen-xl w-full"
				variants={heroTextContainerVariants}
				initial="initial"
				animate="animate"
			>
				<div className="max-w-3xl lg:max-w-[60%]">
					<motion.h1
						className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight tracking-[-0.04em] mb-4 md:mb-6"
						style={{
							fontFamily: "'Instrument Sans', sans-serif",
						}}
						variants={heroTextChildVariants}
					>
						Diesel Generators &amp; Battery Energy Storage Systems
					</motion.h1>
					<motion.p
						className="text-lg md:text-xl opacity-80 leading-[1.4em] tracking-[-0.02em] max-w-xl lg:max-w-[80%] mb-6 md:mb-8"
						style={{
							fontFamily: "'Instrument Sans', sans-serif",
						}}
						variants={heroTextChildVariants}
						custom={1}
					>
						Logmate Engineering and Services delivers high performance diesel generators and advanced battery energy
						storage systems, ensuring uninterrupted power for industries across Pakistan.
					</motion.p>
					<motion.a
						href="#"
						className="inline-flex items-center px-6 py-3 bg-[#EF2E24] text-white text-base font-medium rounded-full hover:bg-red-700 transition-colors"
						style={{
							fontFamily: "'Instrument Sans', sans-serif",
						}}
						variants={heroTextChildVariants}
						custom={2}
					>
						Contact Sales
						<ArrowRightIcon className="w-5 h-5 ml-2" color="white" />
					</motion.a>
				</div>
			</motion.div>
		</header>
	);
};

const AboutSection = () => {
	return (
		<section id="about" className="py-16 md:py-24 lg:py-28 bg-white overflow-hidden">
			<div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
				<div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
					<motion.div
						className="lg:w-1/2 text-center lg:text-left"
						initial={{
							opacity: 0,
							x: -50,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						viewport={{
							once: true,
							amount: 0.3,
						}}
						transition={{
							duration: 0.6,
							ease: "easeOut",
						}}
					>
						<p
							className="text-lg text-[rgba(24,24,24,0.8)] tracking-[-0.02em] mb-2"
							style={{
								fontFamily: "'Instrument Sans', sans-serif",
							}}
						>
							Authorized FPT Distributor
						</p>
						<h2
							className="text-3xl sm:text-4xl md:text-[44px] text-[#181818] font-normal leading-tight tracking-[-0.03em] mb-4"
							style={{
								fontFamily: "'Instrument Sans', sans-serif",
							}}
						>
							Official FPT Distributor in Pakistan
						</h2>
						<p
							className="text-base md:text-lg text-[rgba(24,24,24,0.8)] leading-[1.5em] tracking-[-0.02em] mb-6 lg:max-w-[80%]"
							style={{
								fontFamily: "'Instrument Sans', sans-serif",
							}}
						>
							Delivering world-class Italian-engineered power solutions with full authenticity, support, and reliability
							— only from Logmate.
						</p>
						<a
							href="#"
							className="inline-flex items-center px-6 py-3 bg-[#EF2E24] text-white text-base font-medium rounded-full hover:bg-red-700 transition-colors"
							style={{
								fontFamily: "'Instrument Sans', sans-serif",
							}}
						>
							View Details
							<ArrowRightIcon className="w-5 h-5 ml-2" color="white" />
						</a>
					</motion.div>
					<motion.div
						className="lg:w-1/2 mt-8 lg:mt-0"
						initial={{
							opacity: 0,
							x: 50,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						viewport={{
							once: true,
							amount: 0.3,
						}}
						transition={{
							duration: 0.6,
							ease: "easeOut",
							delay: 0.2,
						}}
					>
						<img
							src="https://framerusercontent.com/images/XsJ1PkifHloiUtRMUoOZJNB5j4.jpg"
							alt="Scientist in laboratorium"
							className="rounded-2xl w-full h-auto object-cover aspect-[1.76]"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

const ProductSection = () => {
	return (
		<motion.section
			id="product"
			className="py-16 md:py-24 lg:py-28 bg-[#f5f5f5] overflow-hidden"
			variants={fadeInUp}
			initial="initial"
			whileInView="animate"
			viewport={fadeInUp.viewport}
		>
			<div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
				<div className="text-center mb-10 md:mb-16">
					<p
						className="text-lg text-[rgba(24,24,24,0.8)] tracking-[-0.02em] mb-2"
						style={{
							fontFamily: "'Instrument Sans', sans-serif",
						}}
					>
						Battery Energy Storage
					</p>
					<h2
						className="text-3xl sm:text-4xl md:text-[44px] text-[#181818] font-normal leading-tight tracking-[-0.03em] mb-4"
						style={{
							fontFamily: "'Instrument Sans', sans-serif",
						}}
					>
						Meet Our Battery Energy Storage Solutions
					</h2>
					<p
						className="text-base md:text-lg text-[rgba(24,24,24,0.8)] leading-[1.5em] tracking-[-0.02em] max-w-2xl mx-auto mb-6"
						style={{
							fontFamily: "'Instrument Sans', sans-serif",
						}}
					>
						Engineered for excellence, backed by support you can count on discover the power systems trusted by
						professionals worldwide.
					</p>
					<a
						href="#"
						className="inline-flex items-center px-6 py-3 bg-[#EF2E24] text-white text-base font-medium rounded-full hover:bg-red-700 transition-colors"
						style={{
							fontFamily: "'Instrument Sans', sans-serif",
						}}
					>
						View Details
						<ArrowRightIcon className="w-5 h-5 ml-2" color="white" />
					</a>
				</div>
				<motion.div
					initial={{
						opacity: 0,
						scale: 0.9,
					}}
					whileInView={{
						opacity: 1,
						scale: 1,
					}}
					viewport={{
						once: true,
						amount: 0.3,
					}}
					transition={{ duration: 0.5 }}
				>
					<img
						src="https://framerusercontent.com/images/VD2vBgy6PUXOVunksUVmDCDkC2E.png"
						alt="Battery Energy Storage Solutions"
						className="rounded-2xl w-full h-auto object-cover aspect-[1.76]"
					/>
				</motion.div>
			</div>
		</motion.section>
	);
};

const BenefitCard = ({ icon, title, description }) => (
	<motion.div className="flex flex-col items-start" variants={fadeInUp}>
		<div className="mb-4 md:mb-6">{icon}</div>
		<h3
			className="text-xl font-medium text-[#181818] leading-[1.4em] mb-2 text-left"
			style={{
				fontFamily: "'Instrument Sans', sans-serif",
			}}
		>
			{title}
		</h3>
		<p
			className="text-sm text-[rgba(24,24,24,0.8)] leading-[1.5em] tracking-[-0.02em] text-left"
			style={{
				fontFamily: "'Instrument Sans', sans-serif",
			}}
		>
			{description}
		</p>
	</motion.div>
);

const ProductShowcaseCard = ({ imageSrc, title, subtitle }) => (
	<motion.div className="flex flex-col" variants={fadeInUp}>
		<div className="bg-white rounded-2xl p-0 overflow-hidden mb-4 md:mb-6 aspect-[1/1.15] flex items-center justify-center">
			<img src={imageSrc} alt={title} className="w-full h-full object-cover" />
		</div>
		<h3
			className="text-2xl font-medium text-[#181818] leading-[1.4em] tracking-[-0.02em] mb-1"
			style={{
				fontFamily: "'Instrument Sans', sans-serif",
			}}
		>
			{title}
		</h3>
		<p
			className="text-base text-[rgba(24,24,24,0.8)] leading-[1.5em] tracking-[-0.02em]"
			style={{
				fontFamily: "'Instrument Sans', sans-serif",
			}}
		>
			{subtitle}
		</p>
	</motion.div>
);

const BenefitSection = () => {
	const benefits = [
		{
			icon: <BatteryIcon className="w-8 h-8 text-red-600" color="#EF2E24" />,
			title: "Engineered for Reliability",
			description:
				"Whether it’s our rugged diesel generators or our industrial-grade battery systems, every Logmate solution is built for long-term durability and high uptime — even in extreme conditions.",
		},
		{
			icon: <QualityIcon className="w-8 h-8 text-red-600" color="#EF2E24" />,
			title: "Stable, High Quality Power",
			description:
				"Logmate delivers consistent power output — with stable frequency and voltage — through both gensets and advanced BESS solutions, ideal for mission-critical applications like hospitals, telecom, and data centers.",
		},
		{
			icon: <StartupIcon className="w-8 h-8 text-red-600" color="#EF2E24" />,
			title: "Rapid Response Startup",
			description:
				"Our diesel gensets and BESS systems are equipped with smart auto-start and synchronization capabilities, ensuring fast backup power during outages or grid instability — minimizing operational disruption.",
		},
		{
			icon: <SavingsIcon className="w-8 h-8 text-red-600" color="#EF2E24" />,
			title: "Real Bill Savings",
			description:
				"Fuel-efficient engines, smart battery dispatch, and optimized maintenance cycles make Logmate systems cost-effective. Our hybrid setups help reduce fuel consumption and extend generator life, cutting your energy expenses over time.",
		},
	];

	const products = [
		{
			imageSrc: "https://framerusercontent.com/images/WVba1AFVu3OL2owQXRN9EHoj64.png",
			title: "Hybrid Inverters",
			subtitle: "High & Low Voltage Inverters",
		},
		{
			imageSrc: "https://framerusercontent.com/images/dDGXQ60j7wZJrFDItoE9mBCQ4k.png",
			title: "Battery Energy Storage Systems",
			subtitle: "Commercial & Industrial Application",
		},
		{
			imageSrc: "https://framerusercontent.com/images/9g70XdjjLyUd3HCku1c7EmqXU.png",
			title: "Compact ESS",
			subtitle: "Variety of compact storage systems",
		},
	];

	return (
		<section id="benefit" className="py-16 md:py-24 lg:py-28 bg-white overflow-hidden">
			<div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
				<motion.div
					className="mb-12 md:mb-20"
					initial="initial"
					whileInView="animate"
					variants={staggerContainer(0.2)}
					viewport={{
						once: true,
						amount: 0.1,
					}}
				>
					<motion.h2
						className="text-3xl sm:text-4xl md:text-[44px] text-[#181818] font-normal leading-tight tracking-[-0.03em] mb-10 lg:max-w-[60%]"
						style={{
							fontFamily: "'Instrument Sans', sans-serif",
						}}
						variants={fadeInUp}
					>
						What sets Logmate's Solutions Apart?
					</motion.h2>
					<motion.div
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
						variants={staggerContainer(0.15)}
					>
						{benefits.map((benefit) => (
							<BenefitCard key={benefit.title} {...benefit} />
						))}
					</motion.div>
				</motion.div>

				<motion.div
					className="mb-10 md:mb-16"
					initial="initial"
					whileInView="animate"
					variants={staggerContainer(0.2)}
					viewport={{
						once: true,
						amount: 0.1,
					}}
				>
					<motion.h2
						className="text-3xl sm:text-4xl md:text-[44px] text-[#181818] font-normal leading-tight tracking-[-0.03em] mb-10 lg:max-w-[60%]"
						style={{
							fontFamily: "'Instrument Sans', sans-serif",
						}}
						variants={fadeInUp}
					>
						Cutting-Edge Battery Energy Storage Solutions
					</motion.h2>
					<motion.div
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
						variants={staggerContainer(0.15)}
					>
						{products.map((product) => (
							<ProductShowcaseCard key={product.title} {...product} />
						))}
					</motion.div>
				</motion.div>

				<motion.div
					className="text-center"
					variants={fadeInUp}
					initial="initial"
					whileInView="animate"
					viewport={fadeInUp.viewport}
				>
					<a
						href="#"
						className="inline-flex items-center px-6 py-3 bg-[#EF2E24] text-white text-base font-medium rounded-full hover:bg-red-700 transition-colors"
						style={{
							fontFamily: "'Instrument Sans', sans-serif",
						}}
					>
						Explore All Products
						<ArrowRightIcon className="w-5 h-5 ml-2" color="white" />
					</a>
				</motion.div>
			</div>
		</section>
	);
};

const FeatureCard = ({ imageSrc, title, description, linkText, linkHref }) => (
	<motion.div
		className="rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full border border-[rgb(239,241,243)]"
		variants={fadeInUp}
	>
		<img src={imageSrc} alt={title} className="w-full h-48 md:h-64 object-cover" />
		<div className="p-6 md:p-8 flex flex-col flex-grow justify-between bg-[radial-gradient(94%_69%_at_50%_100%,_rgb(24,24,24)_0%,_rgba(241,206,247,0)_100%)] bg-opacity-40 text-white">
			<div>
				<h3
					className="text-2xl font-medium leading-[1.4em] mb-2"
					style={{
						fontFamily: "'Instrument Sans', sans-serif",
					}}
				>
					{title}
				</h3>
				<p
					className="text-lg font-medium leading-[1.3em] mb-4"
					style={{
						fontFamily: "'Instrument Sans', sans-serif",
					}}
				>
					{description}
				</p>
			</div>
			<a
				href={linkHref}
				className="inline-block mt-auto px-6 py-3 bg-white text-[#181818] text-sm font-medium rounded-full hover:bg-gray-200 transition-colors self-start"
				style={{
					fontFamily: "'Instrument Sans', sans-serif",
				}}
			>
				{linkText}
			</a>
		</div>
	</motion.div>
);

const FeaturesSection = () => {
	const features = [
		{
			imageSrc: "https://framerusercontent.com/images/ZtrJ6NEmw2PrLMUpS2vpfHOILWU.jpeg",
			title: "Utility Companies",
			description: "Backup solutions that bridge supply gaps and enhance grid reliability.",
			linkText: "Explore Utility Solutions",
			linkHref: "#",
		},
		{
			imageSrc: "https://framerusercontent.com/images/JkvrN47DAtz5GlxOdbsBoP70CvE.jpeg",
			title: "Data Centers",
			description: "Uninterrupted power, built for zero-failure environments.",
			linkText: "Explore Data Center Solutions",
			linkHref: "#",
		},
		{
			imageSrc: "https://framerusercontent.com/images/3Aeu9iGuQ88nUZJ0fEhi5yxCKLI.jpeg",
			title: "Commercial Buildings",
			description: "Reliable backup to reduce downtime and energy costs.",
			linkText: "Explore C&I Solutions",
			linkHref: "#",
		},
		{
			imageSrc: "https://framerusercontent.com/images/JEsY5uwoyVAU6U66vHjozjV9aV4.jpeg",
			title: "Government Solutions",
			description: "Reliable power for essential public infrastructure.",
			linkText: "Explore Government Solutions",
			linkHref: "#",
		},
		{
			imageSrc: "https://framerusercontent.com/images/RCDo8FnzdVBXolN8PWanTLJIXE4.jpeg",
			title: "Residential Developers",
			description: "Energy systems for high-end homes and off-grid developments.",
			linkText: "Explore Residential Solutions",
			linkHref: "#",
		},
	];

	return (
		<section id="features" className="py-16 md:py-24 lg:py-28 bg-[#f5f5f5] overflow-hidden">
			<div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
				<motion.div
					className="text-center mb-10 md:mb-16"
					variants={fadeInUp}
					initial="initial"
					whileInView="animate"
					viewport={fadeInUp.viewport}
				>
					<p
						className="text-lg text-[rgba(24,24,24,0.8)] tracking-[-0.02em] mb-2"
						style={{
							fontFamily: "'Instrument Sans', sans-serif",
						}}
					>
						Our Solutions
					</p>
					<h2
						className="text-3xl sm:text-4xl md:text-[44px] text-[#181818] font-normal leading-tight tracking-[-0.03em] mb-4"
						style={{
							fontFamily: "'Instrument Sans', sans-serif",
						}}
					>
						Power &amp; Backup Solutions for Industry-Specific Demands
					</h2>
					<p
						className="text-base md:text-lg text-[rgba(24,24,24,0.8)] leading-[1.5em] tracking-[-0.02em] max-w-2xl mx-auto mb-6"
						style={{
							fontFamily: "'Instrument Sans', sans-serif",
						}}
					>
						Engineered to perform, trusted by industries across Pakistan and beyond. Discover resilient power systems
						tailored to your operational needs — with support you can count on.
					</p>
					<a
						href="#"
						className="inline-flex items-center px-6 py-3 bg-[#EF2E24] text-white text-base font-medium rounded-full hover:bg-red-700 transition-colors"
						style={{
							fontFamily: "'Instrument Sans', sans-serif",
						}}
					>
						View Details
						<ArrowRightIcon className="w-5 h-5 ml-2" color="white" />
					</a>
				</motion.div>
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
					variants={staggerContainer(0.1)}
					initial="initial"
					whileInView="animate"
					viewport={{
						once: true,
						amount: 0.1,
					}}
				>
					{features.slice(0, 3).map((feature) => (
						<FeatureCard key={feature.title} {...feature} />
					))}
				</motion.div>
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
					variants={staggerContainer(0.1, 0.3)}
					initial="initial"
					whileInView="animate"
					viewport={{
						once: true,
						amount: 0.1,
					}}
				>
					{features.slice(3).map((feature) => (
						<FeatureCard key={feature.title} {...feature} />
					))}
				</motion.div>
			</div>
		</section>
	);
};

const UseCasesCard = ({ icon, title, description, linkText, linkHref }) => (
	<motion.a
		href={linkHref}
		className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
		variants={fadeInUp}
	>
		<div className="mb-4 text-[#EF2E24]">{icon}</div>
		<h3
			className="text-xl font-medium text-[#131313] tracking-[-0.03em] leading-[1.5em] mb-2"
			style={{
				fontFamily: "'Instrument Sans', sans-serif",
			}}
		>
			{title}
		</h3>
		<p
			className="text-sm text-[#636363] font-medium tracking-[-0.02em] leading-[1.5em] mb-4"
			style={{
				fontFamily: "'Instrument Sans', sans-serif",
			}}
		>
			{description}
		</p>
		<div
			className="flex items-center text-[#181818] font-semibold text-sm"
			style={{
				fontFamily: "'Instrument Sans', sans-serif",
			}}
		>
			{linkText}
			<ArrowRightIcon className="w-5 h-5 ml-1" />
		</div>
	</motion.a>
);

const UseCasesSection = () => {
	const useCases = [
		{
			icon: <BatteryIcon className="w-9 h-9" />,
			title: "Improve Power Quality",
			description: "Get customized plans designed to align with your unique business goals.",
			linkText: "Learn More",
			linkHref: "./use-cases/power-quality",
		},
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 256 256"
					focusable="false"
					className="w-9 h-9"
					fill="currentColor"
				>
					<g>
						<path d="M136,80v43.47l36.12,21.67a8,8,0,0,1-8.24,13.72l-40-24A8,8,0,0,1,120,128V80a8,8,0,0,1,16,0Zm88-24a8,8,0,0,0-8,8V82c-6.35-7.36-12.83-14.45-20.12-21.83a96,96,0,1,0-2,137.7,8,8,0,0,0-11-11.64A80,80,0,1,1,184.54,71.4C192.68,79.64,199.81,87.58,207,96H184a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V64A8,8,0,0,0,224,56Z"></path>
					</g>
				</svg>
			),
			title: "Prevent Downtime",
			description: "Leverage data-driven insights to make smarter decisions and stay ahead.",
			linkText: "Learn More",
			linkHref: "./use-cases/backup-power",
		},
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 256 256"
					focusable="false"
					className="w-9 h-9"
					fill="currentColor"
				>
					<g>
						<path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z"></path>
					</g>
				</svg>
			),
			title: "Lower Energy Costs",
			description: "Work closely with our team for a hands-on, personalized consulting experience.",
			linkText: "Learn More",
			linkHref: "./use-cases/power-savings",
		},
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 256 256"
					focusable="false"
					className="w-9 h-9"
					fill="currentColor"
				>
					<g>
						<path d="M53.92,34.62A8,8,0,1,0,42.08,45.38L81.32,88.55l-.06.12A65,65,0,0,0,72,88a64,64,0,0,0,0,128h88a87.34,87.34,0,0,0,31.8-5.93l10.28,11.31a8,8,0,1,0,11.84-10.76ZM160,200H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.3.12A88.4,88.4,0,0,0,72,128a8,8,0,0,0,16,0,72.25,72.25,0,0,1,5.06-26.54l87,95.7A71.66,71.66,0,0,1,160,200Zm88-72a87.89,87.89,0,0,1-22.35,58.61A8,8,0,0,1,213.71,176,72,72,0,0,0,117.37,70a8,8,0,0,1-9.48-12.89A88,88,0,0,1,248,128Z"></path>
					</g>
				</svg>
			),
			title: "Reduce Emissions",
			description: "Implement practical strategies that deliver measurable and lasting results.",
			linkText: "Learn More",
			linkHref: "./use-cases/ghg-reduction",
		},
	];
	return (
		<section className="py-16 md:py-24 bg-[#f5f5f5] overflow-hidden">
			<div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
				<motion.h2
					className="text-3xl sm:text-4xl md:text-[44px] text-[#181818] font-normal leading-tight tracking-[-0.03em] mb-10 lg:max-w-[60%]"
					style={{
						fontFamily: "'Instrument Sans', sans-serif",
					}}
					variants={fadeInUp}
					initial="initial"
					whileInView="animate"
					viewport={fadeInUp.viewport}
				>
					Meet key operational goals with Logmate
				</motion.h2>
				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
					variants={staggerContainer(0.15)}
					initial="initial"
					whileInView="animate"
					viewport={{
						once: true,
						amount: 0.1,
					}}
				>
					{useCases.map((uc) => (
						<UseCasesCard key={uc.title} {...uc} />
					))}
				</motion.div>
			</div>
		</section>
	);
};

const CtaSection = () => {
	return (
		<section id="cta-section" className="relative py-20 md:py-28 lg:py-[100px] text-white overflow-hidden">
			<div className="absolute inset-0 z-0">
				<motion.img
					src="https://framerusercontent.com/images/55DjCSj1z9vb4fguh1SemcJfJN8.jpeg"
					alt="Background"
					className="w-full h-full object-cover"
					initial={{ scale: 1.1 }}
					whileInView={{ scale: 1 }}
					transition={{
						duration: 1,
						ease: "easeOut",
					}}
					viewport={{ once: true }}
				/>
				<div className="absolute inset-0 bg-black opacity-70"></div>
			</div>
			<motion.div
				className="relative z-10 container mx-auto px-4 md:px-8 max-w-screen-md text-center"
				variants={fadeInUp}
				initial="initial"
				whileInView="animate"
				viewport={fadeInUp.viewport}
			>
				<h2
					className="text-3xl sm:text-4xl md:text-[44px] font-medium leading-tight tracking-[-0.03em] mb-4 md:mb-6"
					style={{
						fontFamily: "'Instrument Sans', sans-serif",
					}}
				>
					It's not the product, it's the company behind the product.
				</h2>
				<p
					className="text-base md:text-lg leading-[1.5em] mb-6 md:mb-8"
					style={{
						fontFamily: "'Instrument Sans', sans-serif",
					}}
				>
					Logmate Engineering and Services offers after-sales support &amp; customer warranties that ensure long-term
					reliability, reduce downtime, and protect your investment.
				</p>
				<a
					href="./contact-sales"
					className="inline-flex items-center px-6 py-3 bg-[#EF2E24] text-white text-base font-medium rounded-full hover:bg-red-700 transition-colors"
					style={{
						fontFamily: "'Instrument Sans', sans-serif",
					}}
				>
					Contact Sales
					<ArrowRightIcon className="w-5 h-5 ml-2" color="white" />
				</a>
			</motion.div>
		</section>
	);
};

const Footer = () => {
	const footerLinkSections = [
		{
			title: "Quick Links",
			links: [
				{ name: "Home", href: "./" },
				{
					name: "Our Mission",
					href: "./about-us",
				},
				{
					name: "Contact us",
					href: "./contact-sales",
				},
				{ name: "Blog", href: "./blog" },
			],
		},
		{
			title: "Main Pages",
			links: [
				{
					name: "Solutions",
					href: "./solutions/utility-companies",
				},
				{ name: "Products", href: "./fpt" },
				{
					name: "Applications",
					href: "./applications/warehouses-logistics",
				},
				{
					name: "Use Cases",
					href: "./use-cases/power-quality",
				},
			],
		},
		{
			title: "Legal",
			links: [
				{
					name: "Terms & Conditions",
					href: "#",
				},
				{ name: "Privacy Policy", href: "#" },
			],
		},
	];

	return (
		<motion.footer
			className="bg-[#181818] text-white py-12 md:py-16 lg:py-[60px] overflow-hidden"
			variants={fadeIn}
			initial="initial"
			whileInView="animate"
			viewport={fadeIn.viewport}
		>
			<div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
				<div className="flex flex-col lg:flex-row justify-between gap-10 md:gap-16 mb-12 md:mb-16">
					<motion.div className="lg:w-1/2" variants={fadeInUp}>
						<h2
							className="text-3xl md:text-4xl font-normal leading-tight tracking-[-0.03em] mb-4"
							style={{
								fontFamily: "'Instrument Sans', sans-serif",
							}}
						>
							Stay in touch
						</h2>
						<p
							className="text-base opacity-80 leading-[1.5em] tracking-[-0.02em] mb-6"
							style={{
								fontFamily: "'Instrument Sans', sans-serif",
							}}
						>
							Be the first to learn about our latest projects, product updates, and industry news. By clicking 'Sign Up'
							you agree to receive emails from Logmate. You may unsubscribe at any time.
						</p>
						<form className="flex">
							<input
								type="email"
								placeholder="name@email.com"
								className="flex-grow p-3 rounded-l-lg border-none text-gray-800 placeholder-gray-500 text-base"
								style={{
									fontFamily: "'Instrument Sans', sans-serif",
								}}
							/>
							<button
								type="submit"
								className="px-6 py-3 bg-[#2763AB] text-white text-base font-medium rounded-r-lg hover:bg-blue-700 transition-colors"
								style={{
									fontFamily: "'Instrument Sans', sans-serif",
								}}
							>
								Subscribe
							</button>
						</form>
					</motion.div>
					<motion.div className="lg:w-1/2 lg:pl-10" variants={fadeInUp} custom={0.2}>
						{" "}
						{/* Custom delay */}
						<h2
							className="text-2xl md:text-3xl font-normal leading-tight tracking-[-0.03em] mb-6"
							style={{
								fontFamily: "'Instrument Sans', sans-serif",
							}}
						>
							Keep up-to date with the future of energy
						</h2>
						<ul className="space-y-3">
							{[
								"Logmate product updates and launches",
								"Energy education from experts in the field",
								"Op-Eds and insights from our leadership",
							].map((item, idx) => (
								<motion.li key={idx} className="flex items-start" variants={fadeInUp}>
									<CheckCircleIcon className="w-6 h-6 mr-2 mt-0.5 flex-shrink-0" color="white" />
									<span
										className="text-base opacity-80 leading-[1.5em] tracking-[-0.02em]"
										style={{
											fontFamily: "'Instrument Sans', sans-serif",
										}}
									>
										{item}
									</span>
								</motion.li>
							))}
						</ul>
					</motion.div>
				</div>

				<hr className="border-gray-700 mb-10 md:mb-12" />

				<div className="flex flex-col lg:flex-row justify-between items-start gap-10">
					<div className="lg:w-1/3 mb-8 lg:mb-0">
						<img src="/logo.png" alt="Logmate Logo" className="h-12 md:h-16 w-auto object-contain mb-4" />
						<p
							className="text-sm opacity-70 leading-[1.5em]"
							style={{
								fontFamily: "'Instrument Sans', sans-serif",
							}}
						>
							© Logmate 2025 - All Rights Reserved
						</p>
						<div className="flex space-x-4 mt-4">
							<a href="#" aria-label="Twitter">
								<TwitterIcon className="w-6 h-6 hover:opacity-80 transition-opacity" />
							</a>
							<a href="#" aria-label="LinkedIn">
								<LinkedInIcon className="w-6 h-6 hover:opacity-80 transition-opacity" />
							</a>
							<a href="#" aria-label="Facebook">
								<FacebookIcon className="w-6 h-6 hover:opacity-80 transition-opacity" />
							</a>
							<a href="#" aria-label="Instagram">
								<InstagramIcon className="w-6 h-6 hover:opacity-80 transition-opacity" />
							</a>
						</div>
					</div>

					<div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:w-2/3">
						{footerLinkSections.map((section) => (
							<div key={section.title}>
								<h4
									className="text-lg font-medium mb-4"
									style={{
										fontFamily: "'Satoshi', sans-serif",
									}}
								>
									{section.title}
								</h4>
								<ul className="space-y-2">
									{section.links.map((link) => (
										<li key={link.name}>
											<a
												href={link.href}
												className="text-base opacity-70 hover:opacity-100 transition-opacity"
												style={{
													fontFamily: "'Instrument Sans', sans-serif",
												}}
											>
												{link.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</motion.footer>
	);
};

export default function App() {
	return (
		<div
			className="bg-white text-[#181818]"
			style={{
				fontFamily: "'Instrument Sans', sans-serif",
			}}
		>
			<Navbar />
			<main>
				<HeroSection />
				<AboutSection />
				<ProductSection />
				<BenefitSection />
				<FeaturesSection />
				<UseCasesSection />
				<CtaSection />
			</main>
			<Footer />
		</div>
	);
}
