import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";

// Mega Menu Data
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

const getServiceLink = (item) => {
  const lowerItem = item.toLowerCase();
  if (lowerItem.includes("transformer")) return "/services/transformers";
  if (lowerItem.includes("genset") || lowerItem.includes("engine"))
    return "/services/genset";
  if (lowerItem.includes("solar") || lowerItem.includes("inverter"))
    return "/services/solar";
  if (
    lowerItem.includes("panel") ||
    lowerItem.includes("enclosure") ||
    lowerItem.includes("switchgear")
  )
    return "/services/panels";
  if (lowerItem.includes("elevator")) return "/services/elevators";
  return "/services/electrical-equipment"; // Default fall-back
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
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services", isMegaMenu: true },
    { name: "Projects", href: "/projects" },
    // { name: "Blog", href: "/blog" }, // Temporarily disabled if no blog content provided yet
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
      {/* Add a subtle gradient background for better visibility on all pages if needed, or rely on page hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,25,54,0.8)] to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center max-w-screen-xl relative z-10">
        <Link to="/" className="flex-shrink-0 flex items-center gap-2">
          {/* Use the logo image if available, else text fallback */}
          {/* <img src="/final-logmate-logo.jpg" alt="Logmate" className="h-10 w-auto" /> */}
          <span className="text-2xl font-semibold text-white hidden sm:inline">
            Logmate
          </span>
        </Link>

        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              className="relative"
              onMouseEnter={
                link.isMegaMenu ? handleProductsMouseEnter : undefined
              }
              onMouseLeave={
                link.isMegaMenu ? handleProductsMouseLeave : undefined
              }
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.3 + index * 0.1,
              }}
            >
              <Link
                to={link.href}
                className="text-white text-sm font-['Instrument_Sans',_sans-serif] hover:text-gray-300 transition-colors py-2"
              >
                {link.name}
              </Link>
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
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-screen max-w-5xl xl:max-w-6xl"
                      onMouseEnter={handleProductsMouseEnter}
                      onMouseLeave={handleProductsMouseLeave}
                    >
                      <div className="bg-white text-gray-800 shadow-2xl rounded-lg p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 max-h-[80vh] overflow-y-auto">
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
                                    <Link
                                      to={getServiceLink(item)} // Changed to use helper function
                                      className="block text-sm text-gray-700 hover:text-[#EF2E24] transition-colors"
                                      style={{
                                        fontFamily:
                                          "'Instrument Sans', sans-serif",
                                      }}
                                    >
                                      {item}
                                    </Link>
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
                                    <Link
                                      to={getServiceLink(item)} // Changed to use helper function
                                      className="block text-sm text-gray-700 hover:text-[#EF2E24] transition-colors"
                                      style={{
                                        fontFamily:
                                          "'Instrument Sans', sans-serif",
                                      }}
                                    >
                                      {item}
                                    </Link>
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
                                    <Link
                                      to={getServiceLink(item)} // Changed to use helper function
                                      className="block text-sm text-gray-700 hover:text-[#EF2E24] transition-colors"
                                      style={{
                                        fontFamily:
                                          "'Instrument Sans', sans-serif",
                                      }}
                                    >
                                      {item}
                                    </Link>
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.3 + navLinks.length * 0.1,
            }}
          >
            <a
              href="/handbook.pdf"
              download="Logmate_Company_Profile.pdf"
              className="hidden lg:inline-flex items-center justify-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium rounded-full hover:bg-white/20 transition-colors mr-3"
              style={{ fontFamily: "'Instrument Sans', sans-serif" }}
            >
              <Download className="w-4 h-4 mr-2" />
              Company Profile
            </a>
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center justify-center px-4 py-2 bg-[#EF2E24] text-white text-sm font-medium rounded-full hover:bg-red-700 transition-colors"
              style={{ fontFamily: "'Instrument Sans', sans-serif" }}
            >
              Contact Sales
            </Link>
          </motion.div>
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
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
            <Link
              key={link.name}
              to={link.href}
              className="block text-white py-2.5 text-center hover:bg-[rgba(255,255,255,0.1)] rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/handbook.pdf"
            download="Logmate_Company_Profile.pdf"
            className="text-center mt-3 px-4 py-2.5 bg-white/10 border border-white/20 text-white text-sm font-medium rounded-full hover:bg-white/20 transition-colors flex items-center justify-center gap-2 w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Download className="w-4 h-4" />
            Company Profile
          </a>
          <Link
            to="/contact"
            className="block text-center mt-3 px-4 py-2.5 bg-[#EF2E24] text-white text-sm font-medium rounded-full hover:bg-red-700 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Sales
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
