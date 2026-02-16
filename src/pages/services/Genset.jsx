import React from "react";
import { Link } from "react-router-dom";

const Genset = () => {
  return (
    <div className="bg-white pt-[88px]">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          {/* Placeholder image for Genset */}
          <img
            src="https://framerusercontent.com/images/3Aeu9iGuQ88nUZJ0fEhi5yxCKLI.jpeg"
            alt="Genset Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-['Instrument_Sans']">
            Diesel & Gas Gensets
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-['Instrument_Sans']">
            Reliable power generation for uninterrupted operations.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-[#181818] mb-6 font-['Instrument_Sans']">
                Overview
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg font-['Instrument_Sans']">
                Logmate Engineering & Services Pvt. Ltd. operates as a
                comprehensive power and electro-mechanical engineering company
                offering diversified solutions under one integrated platform.
                Our core expertise begins with diesel and gas genset solutions,
                where we provide sales, purchase, rental, and leasing services
                for industrial and commercial clients.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg font-['Instrument_Sans']">
                We undertake complete supply, installation, commissioning,
                synchronization, load management systems, and long-term
                maintenance contracts to ensure operational continuity and
                efficiency.
              </p>

              <h3 className="text-2xl font-bold text-[#181818] mb-4 font-['Instrument_Sans']">
                Our Services Include:
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8 font-['Instrument_Sans']">
                <li>
                  <strong>Sales & Supply:</strong> Branded diesel and gas
                  generators tailored to your load requirements.
                </li>
                <li>
                  <strong>Rental & Leasing:</strong> Flexible power rental
                  solutions for short-term and long-term needs.
                </li>
                <li>
                  <strong>Installation & Commissioning:</strong> Professional
                  turnkey installation services.
                </li>
                <li>
                  <strong>Maintenance Contracts:</strong> Regular servicing and
                  24/7 support to ensure maximum uptime.
                </li>
                <li>
                  <strong>Synchronization:</strong> Advanced load management and
                  syncing multiple gensets for efficiency.
                </li>
              </ul>

              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-[#EF2E24] text-white font-medium rounded-full hover:bg-red-700 transition-colors font-['Instrument_Sans']"
              >
                Request a Quote
              </Link>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 sticky top-28">
                <h3 className="text-xl font-bold mb-4 font-['Instrument_Sans']">
                  Other Services
                </h3>
                <ul className="space-y-3 font-['Instrument_Sans']">
                  <li>
                    <Link
                      to="/services/solar"
                      className="text-gray-600 hover:text-[#EF2E24] block py-2 border-b border-gray-200"
                    >
                      Solar Power Systems
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/transformers"
                      className="text-gray-600 hover:text-[#EF2E24] block py-2 border-b border-gray-200"
                    >
                      Transformers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/panels"
                      className="text-gray-600 hover:text-[#EF2E24] block py-2 border-b border-gray-200"
                    >
                      HT/LT Panels
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/elevators"
                      className="text-gray-600 hover:text-[#EF2E24] block py-2 border-b border-gray-200"
                    >
                      Elevators & Escalators
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Genset;
