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
function App() {
  const location = useLocation();
  const hideNavbarOn = ["/"]; // hide on Landing Page

  return (
    <>
      {!hideNavbarOn.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/destination" element={<Destination />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
