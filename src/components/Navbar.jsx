import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Contact, Menu, X, Home, Info, Image, Mail } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Hide navbar on landing page
  if (location.pathname === "/") return null;

  const navLinks = [
    { to: "/home", icon: <Home size={28} />, label: "Home" },
    { to: "/about", icon: <Info size={28} />, label: "About" },
    { to: "/portfolio", icon: <Image size={28} />, label: "Portfolio" },
    { to: "/footer", icon: <Contact size={28} />, label: "Contact Us" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className="w-full bg-white px-6 py-4 fixed top-0 left-0 z-50 shadow-md">
        <div className="flex items-center justify-between">
          {/* Hamburger Icon + Logo */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="text-black focus:outline-none cursor-pointer"
            >
              <Menu size={24} />
            </button>
            <img
              src="vplogo.webp"
              alt="VP Logo"
              title="Visit Places"
              className="ml-8 w-40 h-20 object-contain"
            />
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 sm:w-1/3 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button aria-label="Close menu" onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="text-2xl font-[DM_Serif_Display] flex flex-col p-6 space-y-6 tracking-wider">
          {navLinks.map(({ to, icon, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 font-[Nunito] transition-all duration-300 cursor-pointer hover:text-gray-500 ${
                location.pathname === to ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {icon} {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Background Overlay */}
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
