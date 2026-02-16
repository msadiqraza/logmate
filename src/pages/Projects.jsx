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

const Projects = () => {
  const projectCategories = [
    {
      title: "Industrial Power Solutions",
      description:
        "Providing backup power and electrical infrastructure for textile mills, manufacturing plants, and processing units.",
      image:
        "https://framerusercontent.com/images/3Aeu9iGuQ88nUZJ0fEhi5yxCKLI.jpeg",
    },
    {
      title: "Commercial High-Rise",
      description:
        "Complete electrification, elevator systems, and backup generators for shopping malls and office towers.",
      image:
        "https://framerusercontent.com/images/JkvrN47DAtz5GlxOdbsBoP70CvE.jpeg",
    },
    {
      title: "Solar EPC Projects",
      description:
        "Large-scale solar installations for industrial clients to reduce energy costs and carbon footprint.",
      image:
        "https://framerusercontent.com/images/WVba1AFVu3OL2owQXRN9EHoj64.png",
    },
    {
      title: "Public Sector Infrastructure",
      description:
        "Reliable power solutions for government buildings, hospitals, and educational institutions.",
      image:
        "https://framerusercontent.com/images/RCDo8FnzdVBXolN8PWanTLJIXE4.jpeg",
    },
  ];

  return (
    <div className="bg-white pt-[88px]">
      <section className="bg-[#001936] text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-gradient-to-r from-gray-900 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-['Instrument_Sans']">
            Our Projects
          </h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto font-['Instrument_Sans']">
            Delivering excellence across 500+ successful projects.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#181818] mb-6 font-['Instrument_Sans']">
              Sector Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-['Instrument_Sans']">
              We have successfully delivered critical power and engineering
              projects across diverse sectors in Pakistan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectCategories.map((category, idx) => (
              <motion.div
                key={idx}
                className="group relative overflow-hidden rounded-2xl shadow-lg h-80"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2 font-['Instrument_Sans']">
                    {category.title}
                  </h3>
                  <p className="text-gray-300 font-['Instrument_Sans']">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#181818] mb-8 font-['Instrument_Sans']">
            Ready to start your project?
          </h2>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-[#EF2E24] text-white font-bold rounded-full hover:bg-red-700 transition-colors font-['Instrument_Sans']"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
