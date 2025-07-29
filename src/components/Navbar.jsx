import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Contact, Locate, LocateIcon, Menu, X } from "lucide-react";
import { Home, Info, Image, Mail } from "lucide-react"; // Add this at the top

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Hide navbar on landing page
  if (location.pathname === "/") return null;

  return (
    <>
      {/* Top Navbar */}
      <nav className="w-full bg-white px-6 py-4 fixed top-0 left-0 z-50">
        <div className="flex items-center justify-between">
          {/* Hamburger Icon on the left */}
          <div className="flex items-center gap-4 cursor-pointer">
            <button
              onClick={() => setOpen(true)}
              className="text-black focus:outline-none"
            >
              <Menu size={24} />
            </button>
            <img src="vplogo.png" className="ml-8 w-40 h-20"></img>
          </div>
        </div>
      </nav>

      {/* Sidebar from left */}
      <div
        className={`fixed top-0 left-0 h-full w-1/3 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        

        <div className="text-3xl font-[DM_Serif_Display] flex flex-col p-6 space-y-6 tracking-wider">
  <Link to="/home" onClick={() => setOpen(false)} className="flex items-center gap-3 font-[Nunito] hover:text-gray-500 transition-all duration-300 cursor-pointer">
    <Home size={28} /> Home
  </Link>
  <Link to="/about" onClick={() => setOpen(false)} className="flex items-center gap-3 font-[Nunito] hover:text-gray-500 transition-all duration-300 cursor-pointer">
    <Info size={28} /> About
  </Link>
  {/* <Link to="/destination" onClick={() => setOpen(false)} className="flex items-center gap-3 font-[Nunito] hover:text-gray-500 transition-all duration-300 cursor-pointer">
    <LocateIcon size={28} /> Destinations Covered
  </Link> */}
  <Link to="/portfolio" onClick={() => setOpen(false)} className="flex items-center gap-3 font-[Nunito] hover:text-gray-500 transition-all duration-300 cursor-pointer">
    <Image size={28} /> Portfolio
  </Link>
  <Link to="/footer" onClick={() => setOpen(false)} className="flex items-center gap-3 font-[Nunito] hover:text-gray-500 transition-all duration-300 cursor-pointer">
    <Contact size={28} /> Contact Us
  </Link>
</div>

      </div>

      {/* Dim background */}
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
