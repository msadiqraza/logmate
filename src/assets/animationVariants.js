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

export { fadeIn, fadeInUp, scaleIn, heroTextContainerVariants, heroTextChildVariants, staggerContainer };
