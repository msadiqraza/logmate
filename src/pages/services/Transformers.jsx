import React from "react";
import { Link } from "react-router-dom";

const Transformers = () => {
  return (
    <div className="bg-white pt-[88px]">
      <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://framerusercontent.com/images/JkvrN47DAtz5GlxOdbsBoP70CvE.jpeg"
            alt="Transformers Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-['Instrument_Sans']">
            Transformers
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-['Instrument_Sans']">
            Efficient power distribution and voltage regulation.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-[#181818] mb-6 font-['Instrument_Sans']">
                Overview
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg font-['Instrument_Sans']">
                Our transformer division specializes in both WAPDA and Non-WAPDA
                transformers, including supply, installation, testing,
                commissioning, and upgradation services. We facilitate
                regulatory approvals and ensure compliance with national
                standards, delivering reliable distribution and power
                transformers suitable for industrial and commercial operations.
              </p>

              <h3 className="text-2xl font-bold text-[#181818] mb-4 font-['Instrument_Sans']">
                Key Features:
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8 font-['Instrument_Sans']">
                <li>
                  <strong>WAPDA & Non-WAPDA:</strong> Compliant with all
                  regulatory standards.
                </li>
                <li>
                  <strong>Supply & Installation:</strong> Full-service setup
                  from delivery to activation.
                </li>
                <li>
                  <strong>Testing & Commissioning:</strong> Rigorous testing to
                  ensure safety and performance.
                </li>
                <li>
                  <strong>Upgradation Services:</strong> Modernizing existing
                  infrastructure for better efficiency.
                </li>
                <li>
                  <strong>Reliability:</strong> Designed for continuous
                  industrial and commercial operation.
                </li>
              </ul>

              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-[#EF2E24] text-white font-medium rounded-full hover:bg-red-700 transition-colors font-['Instrument_Sans']"
              >
                Contact for Transformers
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
                      to="/services/genset"
                      className="text-gray-600 hover:text-[#EF2E24] block py-2 border-b border-gray-200"
                    >
                      Diesel & Gas Gensets
                    </Link>
                  </li>
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

export default Transformers;
