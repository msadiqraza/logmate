import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

// Standard Arrow Icon used across the site
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

const UseCasesCard = ({ icon, title, description, linkText, linkHref }) => (
  <motion.div
    className="block bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
    whileHover={{ y: -5 }}
  >
    <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500"></div>

    <div className="relative z-10 mb-6 text-[#EF2E24] bg-red-50 w-16 h-16 flex items-center justify-center rounded-lg group-hover:bg-[#EF2E24] group-hover:text-white transition-colors duration-300">
      {React.cloneElement(icon, { className: "w-8 h-8" })}
    </div>

    <h3 className="relative z-10 text-2xl font-bold text-[#181818] tracking-[-0.03em] leading-[1.3em] mb-3 font-['Instrument_Sans']">
      {title}
    </h3>
    <p className="relative z-10 text-base text-[#636363] font-medium tracking-[-0.02em] leading-[1.6em] mb-6 font-['Instrument_Sans']">
      {description}
    </p>
    <div className="relative z-10 flex items-center text-[#181818] font-bold text-sm font-['Instrument_Sans'] group-hover:text-[#EF2E24] transition-colors">
      <Link to={linkHref} className="flex items-center">
        {linkText}
        <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  </motion.div>
);

export default UseCasesCard;
