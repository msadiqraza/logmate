import React from "react";
import { Link } from "react-router-dom";

const Solar = () => {
  return (
    <div className="bg-white pt-[88px]">
      <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://framerusercontent.com/images/WVba1AFVu3OL2owQXRN9EHoj64.png"
            alt="Solar Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-['Instrument_Sans']">
            Solar Power Systems
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-['Instrument_Sans']">
            Sustainable energy solutions for a greener future.
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
                In the renewable energy sector, our Solar Energy Division
                delivers complete solar power solutions including on-grid,
                off-grid, and hybrid systems. We execute projects under various
                financial models such as outright sale, rental, leasing, BOT
                (Build-Operate-Transfer), and PPA (Power Purchase Agreement)
                structures.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg font-['Instrument_Sans']">
                From system design and engineering to procurement, installation,
                net metering approvals, and long-term operation & maintenance,
                Logmate provides end-to-end solar EPC services tailored to
                industrial and corporate energy demands.
              </p>

              <h3 className="text-2xl font-bold text-[#181818] mb-4 font-['Instrument_Sans']">
                Our Offerings:
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8 font-['Instrument_Sans']">
                <li>
                  <strong>On-Grid Systems:</strong> Seamless integration with
                  the national grid with Net Metering support.
                </li>
                <li>
                  <strong>Off-Grid & Hybrid:</strong> Independent power
                  solutions with battery storage backup.
                </li>
                <li>
                  <strong>Financial Models:</strong> Flexible options including
                  BOT (Build-Operate-Transfer) and Power Purchase Agreements
                  (PPA).
                </li>
                <li>
                  <strong>EPC Services:</strong> End-to-end Engineering,
                  Procurement, and Construction.
                </li>
                <li>
                  <strong>O&M:</strong> Comprehensive Operation and Maintenance
                  services for optimal yield.
                </li>
              </ul>

              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-[#EF2E24] text-white font-medium rounded-full hover:bg-red-700 transition-colors font-['Instrument_Sans']"
              >
                Get a Solar Quote
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

export default Solar;
