import { motion } from "framer-motion";
import React from "react";

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

const staggerContainer = (staggerChildren = 0.1) => ({
  initial: {},
  animate: { transition: { staggerChildren } },
  whileInView: { transition: { staggerChildren } },
  viewport: { once: true, amount: 0.1 },
});

const AboutUs = () => {
  const coreValues = [
    "Integrity & Transparency",
    "Engineering Excellence",
    "Innovation & Sustainability",
    "Client-Centric Approach",
    "Long-Term Partnerships",
  ];

  return (
    <div className="bg-white pt-[88px]">
      {" "}
      {/* Padding for fixed navbar */}
      {/* HERO / HEADER */}
      <section className="bg-[#001936] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://framerusercontent.com/images/x1OVtwxXi3sfdrcex4YR52vSg08.jpeg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 max-w-screen-xl relative z-10 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 font-['Instrument_Sans']"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Logmate
          </motion.h1>
          <motion.p
            className="text-xl opacity-80 max-w-2xl mx-auto font-['Instrument_Sans']"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Powering Industries. Engineering Reliability. Delivering Excellence.
          </motion.p>
        </div>
      </section>
      {/* COMPANY OVERVIEW */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://framerusercontent.com/images/XsJ1PkifHloiUtRMUoOZJNB5j4.jpg"
                alt="Logmate Team"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#181818] mb-6 font-['Instrument_Sans']">
                Who We Are
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed text-lg font-['Instrument_Sans']">
                Logmate Engineering & Services Pvt. Ltd. is established with a
                vision to provide reliable and innovative power solutions. We
                have grown into a trusted name in Pakistan’s energy and
                infrastructure sector.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed text-lg font-['Instrument_Sans']">
                We specialize in power generation, renewable energy systems,
                electrical infrastructure, and electro-mechanical solutions for
                industrial, commercial, and institutional clients.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg font-['Instrument_Sans']">
                From project design and engineering to execution and long-term
                maintenance, we ensure quality, safety, and performance at every
                stage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* MISSION & VISION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              className="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-[#EF2E24]"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#181818] mb-4 font-['Instrument_Sans']">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed font-['Instrument_Sans']">
                To deliver reliable, cost-effective, and sustainable engineering
                solutions that empower industries and communities through
                innovation, integrity, and technical excellence.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-[#001936]"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-[#181818] mb-4 font-['Instrument_Sans']">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed font-['Instrument_Sans']">
                To become Pakistan’s leading integrated power and engineering
                solutions provider, recognized for quality manufacturing,
                renewable energy leadership, and long-term client partnerships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* CORE VALUES */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-screen-xl text-center">
          <motion.h2
            className="text-3xl font-bold text-[#181818] mb-12 font-['Instrument_Sans']"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            variants={staggerContainer(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-50 px-8 py-6 rounded-full border border-gray-200 shadow-sm"
                variants={fadeInUp}
              >
                <span className="text-lg font-medium text-[#181818] font-['Instrument_Sans']">
                  {value}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
