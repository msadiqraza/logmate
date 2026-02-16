import { motion } from "framer-motion";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-white pt-[88px]">
      <section className="bg-[#001936] text-white py-20 text-center relative">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-['Instrument_Sans']">
            Contact Us
          </h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto font-['Instrument_Sans']">
            Get in touch with our team for any inquiries or support.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#181818] mb-3 font-['Instrument_Sans']">
                  Head Office
                </h3>
                <p className="text-gray-600 font-['Instrument_Sans']">
                  Plot # 13, Street # 26,
                  <br />
                  I-10/4 Industrial Area,
                  <br />
                  Islamabad, Pakistan.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#181818] mb-3 font-['Instrument_Sans']">
                  Regional Office
                </h3>
                <p className="text-gray-600 font-['Instrument_Sans']">
                  206, 2nd Floor, Sadiq Plaza,
                  <br />
                  The Mall, Lahore, Pakistan.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#181818] mb-3 font-['Instrument_Sans']">
                  Contact Details
                </h3>
                <p className="text-gray-600 font-['Instrument_Sans']">
                  <span className="block mb-1">Email: info@logmate.com.pk</span>
                  <span className="block mb-1">Phone: +92 51 444 6666</span>
                  <span className="block">Mobile: +92 300 123 4567</span>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <motion.form
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-['Instrument_Sans']">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EF2E24] focus:border-transparent outline-none transition-all font-['Instrument_Sans']"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-['Instrument_Sans']">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EF2E24] focus:border-transparent outline-none transition-all font-['Instrument_Sans']"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-['Instrument_Sans']">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EF2E24] focus:border-transparent outline-none transition-all font-['Instrument_Sans']"
                    placeholder="Inquiry about..."
                  />
                </div>
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-['Instrument_Sans']">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EF2E24] focus:border-transparent outline-none transition-all h-32 font-['Instrument_Sans']"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 bg-[#EF2E24] text-white font-bold rounded-full hover:bg-red-700 transition-colors font-['Instrument_Sans']"
                >
                  Send Message
                </button>
              </motion.form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
