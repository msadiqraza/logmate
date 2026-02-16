import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import UseCasesCard from "../components/UseCasesCard";

// --- Animation Variants ---
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
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
    transition: { delay: 0.5, duration: 1, ease: [0.25, 0.02, 0, 0.97] },
  },
};

const heroTextChildVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  initial: {},
  animate: { transition: { staggerChildren, delayChildren } },
  whileInView: { transition: { staggerChildren, delayChildren } },
  viewport: { once: true, amount: 0.1 },
});

// --- Icons ---
const ArrowRightIcon = ({ className = "w-5 h-5", color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    focusable="false"
    className={className}
    fill={color}
  >
    <g color={color} weight="regular">
      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
    </g>
  </svg>
);

const BatteryIcon = ({ className = "w-8 h-8", color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    focusable="false"
    className={className}
    fill={color}
  >
    <g>
      <path d="M200,56H32A24,24,0,0,0,8,80v96a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V80A24,24,0,0,0,200,56Zm8,120a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8Zm48-80v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0ZM138.81,123.79a8,8,0,0,1,.35,7.79l-16,32a8,8,0,0,1-14.32-7.16L119.06,136H100a8,8,0,0,1-7.16-11.58l16-32a8,8,0,1,1,14.32,7.16L112.94,120H132A8,8,0,0,1,138.81,123.79Z"></path>
    </g>
  </svg>
);

// --- Sub-Components ---
const FeatureCard = ({ imageSrc, title, description, linkText, linkHref }) => (
  <motion.div
    className="rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full border border-[rgb(239,241,243)]"
    variants={fadeInUp}
  >
    <img
      src={imageSrc}
      alt={title}
      className="w-full h-48 md:h-64 object-cover"
    />
    <div className="p-6 md:p-8 flex flex-col flex-grow justify-between bg-[radial-gradient(94%_69%_at_50%_100%,_rgb(24,24,24)_0%,_rgba(241,206,247,0)_100%)] bg-opacity-40 text-white">
      <div>
        <h3 className="text-2xl font-medium leading-[1.4em] mb-2 font-['Instrument_Sans']">
          {title}
        </h3>
        <p className="text-lg font-medium leading-[1.3em] mb-4 font-['Instrument_Sans']">
          {description}
        </p>
      </div>
      <Link
        to={linkHref}
        className="inline-block mt-auto px-6 py-3 bg-white text-[#181818] text-sm font-medium rounded-full hover:bg-gray-200 transition-colors self-start font-['Instrument_Sans']"
      >
        {linkText}
      </Link>
    </div>
  </motion.div>
);

const Home = () => {
  const businessAreas = [
    {
      title: "Diesel & Gas Gensets",
      desc: "Sale, Rental & Leasing",
      link: "/services/genset",
    },
    {
      title: "Solar Power Systems",
      desc: "On-grid, Off-grid, Hybrid",
      link: "/services/solar",
    },
    {
      title: "Transformers",
      desc: "WAPDA & Non-WAPDA",
      link: "/services/transformers",
    },
    {
      title: "HT/LT Panels",
      desc: "LOGMAK In-house Mfg",
      link: "/services/panels",
    },
    {
      title: "Elevators",
      desc: "JV with Emfor Corp",
      link: "/services/elevators",
    },
    {
      title: "Electrical Equipment",
      desc: "Cables, Breakers, Switchgear",
      link: "/services/electrical-equipment",
    },
  ];

  // Updated stats for "Why Choose Us" section
  const stats = [
    { label: "Years Experience", value: "22+" },
    { label: "Completed Projects", value: "500+" },
    { label: "Power Handling", value: "100+ MW" },
    { label: "Happy Customers", value: "200+" }, // Made up
    { label: "Expert Employees", value: "50+" }, // Made up
  ];

  const features = [
    {
      imageSrc:
        "https://framerusercontent.com/images/ZtrJ6NEmw2PrLMUpS2vpfHOILWU.jpeg",
      title: "Utility Companies",
      description:
        "Backup solutions that bridge supply gaps and enhance grid reliability.",
      linkText: "Explore Utility",
      linkHref: "/services",
    },
    {
      imageSrc:
        "https://framerusercontent.com/images/JkvrN47DAtz5GlxOdbsBoP70CvE.jpeg",
      title: "Data Centers",
      description: "Uninterrupted power, built for zero-failure environments.",
      linkText: "Explore Data Center",
      linkHref: "/services",
    },
    {
      imageSrc:
        "https://framerusercontent.com/images/3Aeu9iGuQ88nUZJ0fEhi5yxCKLI.jpeg",
      title: "Commercial Buildings",
      description: "Reliable backup to reduce downtime and energy costs.",
      linkText: "Explore Commercial",
      linkHref: "/services",
    },
  ];

  const useCases = [
    {
      icon: <BatteryIcon />,
      title: "Improve Power Quality",
      description:
        "Get customized plans designed to align with your unique business goals.",
      linkText: "Learn More",
      linkHref: "/services",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          focusable="false"
          fill="currentColor"
        >
          <g>
            <path d="M136,80v43.47l36.12,21.67a8,8,0,0,1-8.24,13.72l-40-24A8,8,0,0,1,120,128V80a8,8,0,0,1,16,0Zm88-24a8,8,0,0,0-8,8V82c-6.35-7.36-12.83-14.45-20.12-21.83a96,96,0,1,0-2,137.7,8,8,0,0,0-11-11.64A80,80,0,1,1,184.54,71.4C192.68,79.64,199.81,87.58,207,96H184a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V64A8,8,0,0,0,224,56Z"></path>
          </g>
        </svg>
      ),
      title: "Prevent Downtime",
      description:
        "Leverage data-driven insights to make smarter decisions and stay ahead.",
      linkText: "Learn More",
      linkHref: "/services",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          focusable="false"
          fill="currentColor"
        >
          <g>
            <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z"></path>
          </g>
        </svg>
      ),
      title: "Lower Energy Costs",
      description:
        "Work closely with our team for a hands-on, personalized consulting experience.",
      linkText: "Learn More",
      linkHref: "/services",
    },
  ];

  // Placeholder projects for the Home page
  const featuredProjects = [
    {
      title: "Industrial Power",
      image:
        "https://framerusercontent.com/images/3Aeu9iGuQ88nUZJ0fEhi5yxCKLI.jpeg",
    },
    {
      title: "Solar EPC",
      image:
        "https://framerusercontent.com/images/WVba1AFVu3OL2owQXRN9EHoj64.png",
    },
    {
      title: "Commercial",
      image:
        "https://framerusercontent.com/images/JkvrN47DAtz5GlxOdbsBoP70CvE.jpeg",
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <header
        id="hero"
        className="relative h-screen min-h-[600px] flex flex-col justify-end items-center text-white overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 z-0"
          variants={scaleIn}
          initial="initial"
          animate="animate"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src="https://framerusercontent.com/images/x1OVtwxXi3sfdrcex4YR52vSg08.jpeg"
            alt="Factory building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,25,54,0.8)] to-transparent opacity-80 z-10"></div>
        </motion.div>

        <motion.div
          className="relative z-20 container mx-auto px-4 md:px-8 pb-20 md:pb-28 lg:pb-32 max-w-screen-xl w-full"
          variants={heroTextContainerVariants}
          initial="initial"
          animate="animate"
        >
          <div className="max-w-4xl lg:max-w-[70%]">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight tracking-[-0.04em] mb-6 font-['Instrument_Sans']"
              variants={heroTextChildVariants}
            >
              Powering Industries. <br />
              Engineering Reliability. <br />
              Delivering Excellence.
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl opacity-90 leading-[1.6em] tracking-[-0.02em] max-w-2xl mb-8 font-['Instrument_Sans']"
              variants={heroTextChildVariants}
            >
              With over 25 years of expertise in power generation, solar energy,
              transformers, HT/LT panels, and electro-mechanical solutions,
              Logmate Engineering & Services Pvt. Ltd. delivers dependable
              engineering solutions across Pakistan.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              variants={heroTextChildVariants}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-[#EF2E24] text-white text-base font-medium rounded-full hover:bg-red-700 transition-colors font-['Instrument_Sans']"
              >
                Get a Quote
                <ArrowRightIcon className="w-5 h-5 ml-2" color="white" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-base font-medium rounded-full hover:bg-white/20 transition-colors font-['Instrument_Sans']"
              >
                Our Projects
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </header>

      {/* CORE BUSINESS AREAS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#181818] mb-4 font-['Instrument_Sans']">
              Our Core Business Areas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-['Instrument_Sans']">
              Comprehensive power and electro-mechanical engineering solutions
              under one integrated platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessAreas.map((area, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-[#181818] mb-2 font-['Instrument_Sans']">
                  {area.title}
                </h3>
                <p className="text-gray-600 font-['Instrument_Sans']">
                  {area.desc}
                </p>
                <Link
                  to={area.link}
                  className="inline-block mt-4 text-[#EF2E24] font-medium text-sm hover:underline font-['Instrument_Sans']"
                >
                  Learn more
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS PREVIEW */}
      <section id="features" className="py-20 bg-[#f5f5f5] overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={fadeInUp.viewport}
          >
            <p className="text-lg text-[rgba(24,24,24,0.8)] tracking-[-0.02em] mb-2 font-['Instrument_Sans']">
              Our Solutions
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#181818] mb-4 font-['Instrument_Sans']">
              Industry-Specific Power Solutions
            </h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
          >
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US - Updated with Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#181818] mb-6 font-['Instrument_Sans']">
                Why Choose Us?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 font-['Instrument_Sans']">
                Logmate Engineering & Services Pvt. Ltd. stands as a trusted
                engineering partner with over 22 years of experience in
                delivering reliable and performance-driven power solutions
                across Pakistan.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 font-['Instrument_Sans']">
                Our strength lies not only in supplying equipment but in
                engineering complete, integrated power systems tailored to the
                operational needs of industrial, commercial, and institutional
                clients.
              </p>
              <Link
                to="/about-us"
                className="inline-flex items-center px-6 py-3 bg-[#EF2E24] text-white font-medium rounded-full hover:bg-red-700 transition-colors font-['Instrument_Sans']"
              >
                More About Us
              </Link>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://framerusercontent.com/images/XsJ1PkifHloiUtRMUoOZJNB5j4.jpg"
                alt="Logmate Engineering Team"
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* INTEGRATED STATS */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 border-t border-gray-100 pt-16">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-[#EF2E24] mb-2 font-['Instrument_Sans']">
                  {stat.value}
                </h3>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider font-['Instrument_Sans']">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES - PROMINENCE IMPROVED */}
      <section className="py-24 bg-[#001936] relative overflow-hidden">
        {/* Background pattern or effect */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-[#001936] to-[#001936]"></div>

        <div className="container mx-auto px-4 md:px-8 max-w-screen-xl relative z-10">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={fadeInUp.viewport}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Instrument_Sans']">
              Meet key operational goals
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto font-['Instrument_Sans'] opacity-80">
              Our solutions are designed to address the most critical challenges
              in power management and efficiency.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer(0.15)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
          >
            {useCases.map((uc) => (
              <UseCasesCard key={uc.title} {...uc} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* NEW PROJECTS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#181818] mb-4 font-['Instrument_Sans']">
                Feautured Projects
              </h2>
              <p className="text-gray-600 max-w-xl font-['Instrument_Sans']">
                A glimpse into our portfolio of successful power engineering
                installations.
              </p>
            </div>
            <Link
              to="/projects"
              className="hidden md:inline-flex items-center text-[#EF2E24] font-medium hover:underline font-['Instrument_Sans']"
            >
              View All Projects
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={idx}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-md cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold font-['Instrument_Sans']">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center md:hidden">
            <Link
              to="/projects"
              className="inline-flex items-center text-[#EF2E24] font-medium hover:underline font-['Instrument_Sans']"
            >
              View All Projects
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        id="cta-section"
        className="relative py-20 md:py-28 lg:py-[100px] text-white overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <motion.img
            src="https://framerusercontent.com/images/55DjCSj1z9vb4fguh1SemcJfJN8.jpeg"
            alt="Background"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
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
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-medium leading-tight tracking-[-0.03em] mb-4 md:mb-6 font-['Instrument_Sans']">
            It's not the product, it's the company behind the product.
          </h2>
          <p className="text-base md:text-lg leading-[1.5em] mb-6 md:mb-8 font-['Instrument_Sans']">
            Logmate Engineering and Services offers after-sales support &amp;
            customer warranties that ensure long-term reliability, reduce
            downtime, and protect your investment.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-[#EF2E24] text-white text-base font-medium rounded-full hover:bg-red-700 transition-colors font-['Instrument_Sans']"
          >
            Contact Sales
            <ArrowRightIcon className="w-5 h-5 ml-2" color="white" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
