import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop"; // We'll create this to fix scroll on nav

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen font-['Instrument_Sans',_sans-serif]">
      {/* ScrollToTop component ensures we start at the top of the page on route change */}
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
