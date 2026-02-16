import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#001936] text-white pt-12 md:pt-16 pb-4">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          <div className="lg:w-1/3 mb-8 lg:mb-0 h-full pt-5">
            <img
              src="/final-logmate-logo.jpg"
              alt="Logmate Logo"
              className="h-12 md:h-16 w-auto object-contain mb-4 bg-white/10 rounded-lg p-2"
            />

            <p
              className="text-sm opacity-70 leading-[1.5em] mb-4"
              style={{ fontFamily: "'Instrument Sans', sans-serif" }}
            >
              Powering Industries. Engineering Reliability. Delivering
              Excellence across Pakistan.
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#EF2E24]">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <Link
                    to="/"
                    className="hover:text-[#EF2E24] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="hover:text-[#EF2E24] transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-[#EF2E24] transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="hover:text-[#EF2E24] transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-[#EF2E24] transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#EF2E24]">
                Services
              </h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <Link
                    to="/services/genset"
                    className="hover:text-[#EF2E24] transition-colors"
                  >
                    Diesel & Gas Gensets
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/solar"
                    className="hover:text-[#EF2E24] transition-colors"
                  >
                    Solar Power Systems
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/transformers"
                    className="hover:text-[#EF2E24] transition-colors"
                  >
                    Transformers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/panels"
                    className="hover:text-[#EF2E24] transition-colors"
                  >
                    HT/LT Panels
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/elevators"
                    className="hover:text-[#EF2E24] transition-colors"
                  >
                    Elevators
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#EF2E24]">
                Contact Us
              </h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li className="flex items-start gap-2">
                  <span className="font-semibold block min-w-[60px]">
                    Address:
                  </span>
                  <span>
                    Plot # 13, Street # 26, I-10/4 Industrial Area, Islamabad
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-semibold block min-w-[60px]">
                    Phone:
                  </span>
                  <span> +92 51 444 6666 / +92 300 123 4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-semibold block min-w-[60px]">
                    Email:
                  </span>
                  <a
                    href="mailto:info@logmate.com.pk"
                    className="hover:text-[#EF2E24]"
                  >
                    info@logmate.com.pk
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p
          className="text-sm opacity-70 leading-[1.5em] w-full pt-8 text-center"
          style={{ fontFamily: "'Instrument Sans', sans-serif" }}
        >
          © Logmate Engineering and Services Private Limited{" "}
          {new Date().getFullYear()} - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
