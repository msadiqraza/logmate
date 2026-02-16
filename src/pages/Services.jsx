import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

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

const Services = () => {
  const services = [
    {
      title: "Diesel & Gas Gensets",
      description:
        "Complete sales, purchase, rental, and leasing services for industrial and commercial clients. We undertake supply, installation, commissioning, and long-term maintenance contracts.",
      link: "/services/genset",
      image:
        "https://framerusercontent.com/images/3Aeu9iGuQ88nUZJ0fEhi5yxCKLI.jpeg", // Placeholder
    },
    {
      title: "Solar Power Systems",
      description:
        "End-to-end solar EPC services including on-grid, off-grid, and hybrid systems. We execute projects under various financial models like BOT and PPA.",
      link: "/services/solar",
      image:
        "https://framerusercontent.com/images/WVba1AFVu3OL2owQXRN9EHoj64.png", // Placeholder
    },
    {
      title: "Transformers",
      description:
        "Specializing in WAPDA and Non-WAPDA transformers, including supply, installation, testing, commissioning, and upgradation services.",
      link: "/services/transformers",
      image:
        "https://framerusercontent.com/images/JkvrN47DAtz5GlxOdbsBoP70CvE.jpeg", // Placeholder
    },
    {
      title: "HT/LT Panels",
      description:
        "LOGMAK Brand: We design, fabricate, and commission high-quality HT and LT panels, including ATS, synchronization panels, and capacitor banks.",
      link: "/services/panels",
      image:
        "https://framerusercontent.com/images/JEsY5uwoyVAU6U66vHjozjV9aV4.jpeg", // Placeholder
    },
    {
      title: "Elevator & Escalator Systems",
      description:
        "Advanced vertical transportation solutions through our JV with Emfor Corporation. Installation, testing, commissioning, and maintenance.",
      link: "/services/elevators",
      image:
        "https://framerusercontent.com/images/RCDo8FnzdVBXolN8PWanTLJIXE4.jpeg", // Placeholder
    },
    {
      title: "Electrical Equipment Supply",
      description:
        "Supply of a wide range of electrical equipment including HT/LT cables, breakers, switchgear, busbars, and associated accessories.",
      link: "/services/electrical-equipment", // We will link to contact or a generic page for now
      image:
        "https://framerusercontent.com/images/ZtrJ6NEmw2PrLMUpS2vpfHOILWU.jpeg", // Placeholder
    },
  ];

  return (
    <div className="bg-white pt-[88px]">
      <section className="bg-[#001936] text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-gradient-to-r from-blue-900 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-['Instrument_Sans']">
            Our Services
          </h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto font-['Instrument_Sans']">
            Integrated power and engineering solutions tailored for your
            industry.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-[#181818] mb-3 font-['Instrument_Sans']">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow font-['Instrument_Sans']">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="text-[#EF2E24] font-medium hover:underline inline-flex items-center font-['Instrument_Sans']"
                  >
                    View Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
