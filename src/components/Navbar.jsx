import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Info,
  Image,
  Contact,
  Menu,
  X,
  Mail,
  Sun,
  Moon,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  // Hide navbar on landing page
  if (location.pathname === "/") return null;

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const navLinks = [
    { to: "/home", icon: <Home size={20} />, label: "Home" },
    { to: "/about", icon: <Info size={20} />, label: "About" },
    { to: "/portfolio", icon: <Image size={20} />, label: "Portfolio" },
    { to: "/footer", icon: <Contact size={20} />, label: "Contact" },
  ];

  const socialLinks = [
    { icon: <Github />, url: "https://github.com" },
    { icon: <Linkedin />, url: "https://linkedin.com" },
    { icon: <Twitter />, url: "https://twitter.com" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className="w-full px-6 py-4 fixed top-0 left-0 z-50 shadow-md bg-white/60 dark:bg-black/30 backdrop-blur-md border-b border-gray-300 dark:border-gray-700 font-roboto">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <img
              src="vplogo.webp"
              alt="VP Logo"
              className="w-36 h-16 object-contain"
            />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-10 text-lg font-semibold">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`hover:text-[#f5d77c] transition-all duration-300 text-sm uppercase tracking-[0.35em] font-semibold text-gray-500 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text mb-6 ${
                  location.pathname === to
                    ? "text-blue-700 underline underline-offset-8"
                    : "text-gray-700 dark:text-gray-100"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          

          {/* Mobile Hamburger */}
          <button
            className="ml-0 md:hidden dark:text-white text-sm uppercase tracking-[0.35em] font-semibold text-gray-500 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text mb-6"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Glassmorphism Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-50 backdrop-blur-lg bg-white/20 dark:bg-black/30 text-black dark:text-white border-r border-gray-300 dark:border-gray-700 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-700">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setOpen(false)} aria-label="Close menu">
            <X />
          </button>
        </div>

        <div className="flex flex-col p-6 space-y-6 text-lg">
          {navLinks.map(({ to, icon, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 transition duration-300 hover:text-blue-500 ${
                location.pathname === to ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {icon} {label}
            </Link>
          ))}

          <div className="flex gap-4 mt-8 justify-center">
            {socialLinks.map(({ icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-blue-500 hover:text-white transition-all"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
