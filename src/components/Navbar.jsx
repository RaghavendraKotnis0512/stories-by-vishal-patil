import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Info,
  Image,
  Contact,
  Menu,
  X,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

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
    { icon: <Instagram />, url: "https://www.instagram.com/stories_by_vishalpatil/" },
    { icon: <Youtube />, url: "https://www.youtube.com/@storiesbyvishalpatil9707/videos" },
    { icon: <Facebook />, url: "https://www.facebook.com/share/12HYiiL34JF/?mibextid=wwXlfr" },
    { icon: <Linkedin />, url: "https://www.linkedin.com/in/vishal-patil-9aa6ab304/" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className="w-full px-6 py-4 fixed top-0 left-0 z-50 shadow-md bg-white/60 dark:bg-black/30 backdrop-blur-md border-b border-gray-300 dark:border-gray-700 font-roboto">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Hamburger (left) */}
          <button
            className="md:hidden text-gray-700 dark:text-white"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>

          {/* Logo (center) */}
          <div className="flex-1 flex ">
            <img
              src="vplogo.webp"
              alt="VP Logo"
              className="w-36 h-16 object-contain"
            />
          </div>

          {/* Nav Links (right - desktop only) */}
          <div className="hidden md:flex gap-10 text-lg font-semibold">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`hover:text-[#f5d77c] transition-all duration-300 text-sm uppercase tracking-[0.35em] font-semibold text-gray-500 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text ${
                  location.pathname === to
                    ? "text-blue-700 underline underline-offset-8"
                    : "text-gray-700 dark:text-gray-100"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Sidebar (mobile) */}
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
              className={`flex items-center gap-3 transition duration-300 hover:text-[#f5d77c] ${
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
