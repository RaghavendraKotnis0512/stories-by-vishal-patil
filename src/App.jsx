// App.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./components/landingPage";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Destination from "./components/Destination";
import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
function App() {
  const location = useLocation();
  const hideOnLanding = ["/"]; // paths where you want to hide components

  return (
    <>
      {!hideOnLanding.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {!hideOnLanding.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
