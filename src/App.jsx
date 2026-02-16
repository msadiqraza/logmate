import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";

// Service Pages
import Genset from "./pages/services/Genset";
import Solar from "./pages/services/Solar";
import Transformers from "./pages/services/Transformers";
import Panels from "./pages/services/Panels";
import Elevators from "./pages/services/Elevators";
import ElectricalEquipment from "./pages/services/ElectricalEquipment";

// Other Pages
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />

          {/* Services Main & Sub-routes */}
          <Route path="services" element={<Services />} />
          <Route path="services/genset" element={<Genset />} />
          <Route path="services/solar" element={<Solar />} />
          <Route path="services/transformers" element={<Transformers />} />
          <Route path="services/panels" element={<Panels />} />
          <Route path="services/elevators" element={<Elevators />} />
          <Route
            path="services/electrical-equipment"
            element={<ElectricalEquipment />}
          />

          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
