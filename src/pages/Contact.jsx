import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:info@logmate.com.pk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <motion.form
      className="bg-white p-8 lg:p-10 rounded-3xl shadow-lg border border-gray-100 h-full"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
    >
      <h3 className="text-2xl font-bold text-[#181818] mb-6 font-['Instrument_Sans']">
        Send us a Message
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 font-['Instrument_Sans']">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EF2E24] focus:border-transparent outline-none transition-all font-['Instrument_Sans'] bg-gray-50"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 font-['Instrument_Sans']">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EF2E24] focus:border-transparent outline-none transition-all font-['Instrument_Sans'] bg-gray-50"
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
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EF2E24] focus:border-transparent outline-none transition-all font-['Instrument_Sans'] bg-gray-50"
          placeholder="Inquiry about..."
        />
      </div>
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2 font-['Instrument_Sans']">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#EF2E24] focus:border-transparent outline-none transition-all h-32 font-['Instrument_Sans'] bg-gray-50"
          placeholder="How can we help you?"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full px-8 py-4 bg-[#EF2E24] text-white font-bold rounded-xl hover:bg-red-700 transition-colors font-['Instrument_Sans'] text-lg shadow-lg shadow-red-200"
      >
        Send Message
      </button>
    </motion.form>
  );
};

// Toast Notification Component
const Toast = ({ message, onClose }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 5; // Decrease progress to 0 over 5 seconds (roughly)
      });
    }, 100);

    const closeTimer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => {
      clearInterval(timer);
      clearTimeout(closeTimer);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      exit={{ opacity: 0, y: -20, x: "-50%" }}
      className="fixed bottom-2 right-0 transform -translate-x-1/2 z-50 min-w-[300px]"
    >
      <div className="bg-gray-100 text-[#181818] px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 relative overflow-hidden">
        <div className="flex-1 font-['Instrument_Sans'] text-sm font-medium">
          {message}
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ✕
        </button>
        {/* Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-1 bg-[#EF2E24] transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const [toast, setToast] = useState({ show: false, message: "" });

  const showToast = (message) => {
    setToast({ show: true, message });
  };

  return (
    <div className="bg-white pt-[88px]">
      {toast.show && (
        <Toast
          message={toast.message}
          onClose={() => setToast({ show: false, message: "" })}
        />
      )}
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

      <section className="bg-gray-50 py-16 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-screen-xl text-center">
          <h2 className="text-2xl font-bold text-[#181818] mb-8 font-['Instrument_Sans']">
            Connect on Social Media
          </h2>
          <div className="flex justify-center flex-wrap gap-8">
            <a
              href="https://wa.me/923134747876"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#20bd5a] transition-all hover:-translate-y-1 transform group"
            >
              <FaWhatsapp className="text-3xl group-hover:scale-110 transition-transform" />
              <span className="font-['Instrument_Sans'] text-lg">
                Chat on WhatsApp
              </span>
            </a>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 bg-[#1877F2] rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:bg-[#1559b3] transition-all hover:-translate-y-1 group"
              >
                <FaFacebookF className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 bg-[#0077B5] rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:bg-[#005e93] transition-all hover:-translate-y-1 group"
              >
                <FaLinkedinIn className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:info@logmate.com.pk"
                className="w-14 h-14 bg-[#EA4335] rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:bg-[#c53225] transition-all hover:-translate-y-1 group"
              >
                <FaEnvelope className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Details Cards */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-[#181818] mb-6 font-['Instrument_Sans']">
                  Contact Details
                </h3>
                <div className="grid gap-6">
                  <a
                    href="mailto:info@logmate.com.pk"
                    className="group flex items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#EF2E24]/20 transition-all"
                  >
                    <div className="w-14 h-14 bg-[#EF2E24]/10 rounded-full flex items-center justify-center text-[#EF2E24] text-2xl mr-5 group-hover:scale-110 transition-transform">
                      <FaEnvelope />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium mb-1">
                        Email Us
                      </p>
                      <p className="text-xl font-bold text-[#181818] group-hover:text-[#EF2E24] transition-colors">
                        info@logmate.com.pk
                      </p>
                    </div>
                  </a>

                  <div className="flex flex-col sm:flex-row gap-6">
                    <div
                      className="flex-1 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer active:scale-95 group"
                      onClick={() => {
                        navigator.clipboard.writeText("+92514848616");
                        showToast("Phone number copied to clipboard!");
                      }}
                      title="Click to copy number"
                    >
                      <p className="text-sm text-gray-500 font-medium mb-1 group-hover:text-[#EF2E24] transition-colors">
                        Phone
                      </p>
                      <p className="text-xl font-bold text-[#181818]">
                        +92 51 484 8616
                      </p>
                    </div>
                    <div
                      className="flex-1 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer active:scale-95 group"
                      onClick={() => {
                        navigator.clipboard.writeText("+923134747876");
                        showToast("Mobile number copied to clipboard!");
                      }}
                      title="Click to copy number"
                    >
                      <p className="text-sm text-gray-500 font-medium mb-1 group-hover:text-[#EF2E24] transition-colors">
                        Mobile
                      </p>
                      <p className="text-xl font-bold text-[#181818]">
                        +92 313 474 7876
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h4 className="text-xl font-bold text-[#181818] mb-4">
                  Office Hours
                </h4>
                <p className="text-gray-600 flex justify-between py-2 border-b border-gray-200">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </p>
                <p className="text-gray-600 flex justify-between py-2">
                  <span>Saturday - Sunday</span>
                  <span className="font-semibold text-[#EF2E24]">Closed</span>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>

          {/* Locations Section with Map Grid */}
          <div className="border-t border-gray-100 pt-20">
            <h2 className="text-3xl font-bold text-[#181818] mb-12 text-center font-['Instrument_Sans']">
              Visit Our Offices
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative">
              {/* Vertical Divider for large screens */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -ml-px"></div>

              {/* Head Office */}
              <div className="flex flex-col h-full bg-gray-50 p-6 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="mb-6">
                  <span className="inline-block px-4 py-1.5 bg-[#001936] text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                    Head Office
                  </span>
                  <h3 className="text-2xl font-bold text-[#181818] mb-3">
                    Islamabad
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Plot # 13, Street # 26,
                    <br />
                    I-10/4 Industrial Area,
                    <br />
                    Islamabad, Pakistan.
                  </p>
                </div>
                <div className="flex-grow w-full h-80 rounded-2xl overflow-hidden shadow-sm border border-white">
                  <iframe
                    title="Head Office Location"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?q=33.645889,73.048194&z=14&output=embed"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                </div>
              </div>

              {/* Regional Office */}
              <div className="flex flex-col h-full bg-gray-50 p-6 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="mb-6">
                  <span className="inline-block px-4 py-1.5 bg-[#EF2E24] text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                    Regional Office
                  </span>
                  <h3 className="text-2xl font-bold text-[#181818] mb-3">
                    Lahore
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    206, 2nd Floor, Sadiq Plaza,
                    <br />
                    The Mall, Lahore, Pakistan.
                  </p>
                </div>
                <div className="flex-grow w-full h-80 rounded-2xl overflow-hidden shadow-sm border border-white">
                  <iframe
                    title="Regional Office Location"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?q=31.561056974024844,74.32050915841968&z=14&output=embed"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
