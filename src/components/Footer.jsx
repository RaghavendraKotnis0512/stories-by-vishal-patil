import React from "react";
import { FaInstagram, FaYoutube, FaVimeo, FaFacebook, FaLinkedin } from "react-icons/fa"; // Icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-12 text-center mt-8">
      {/* Title */}
      <h3 className="text-xl md:text-2xl font-semibold mb-4 tracking-widest uppercase">
        Let’s Connect
      </h3>

      {/* Contact Info */}
      <div className="text-sm md:text-base text-gray-400 space-y-2 mb-6">
        <p>📍 Based in India — Available Worldwide</p>
        <p>
          📧{" "}
          <a
            href="mailto:storiesbyvishalpatil@gmail.com"
            className="underline hover:text-white transition"
          >
            storiesbyvishalpatil@gmail.com
          </a>
        </p>
        <p>📞 +91 95616 56240</p>
      </div>

      {/* Social Media Links with Icons */}
      <div className="flex justify-center space-x-8 text-gray-400 text-lg mb-6">
        <a
          href="https://www.instagram.com/stories_by_vishalpatil/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white flex items-center space-x-2 transition"
        >
          <FaInstagram />
          <span className="text-sm">Instagram</span>
        </a>
        <a
          href="https://www.youtube.com/@storiesbyvishalpatil9707/videos"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white flex items-center space-x-2 transition"
        >
          <FaYoutube />
          <span className="text-sm">YouTube</span>
        </a>
        <a
          href="https://www.facebook.com/share/12HYiiL34JF/?mibextid=wwXlfr"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white flex items-center space-x-2 transition"
        >
          <FaFacebook />
          <span className="text-sm">Facebook</span>
        </a>
        <a
          href="https://www.linkedin.com/in/vishal-patil-9aa6ab304/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white flex items-center space-x-2 transition"
        >
          <FaLinkedin />
          <span className="text-sm">LinkedIn</span>
        </a>
        
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-600">
        © {new Date().getFullYear()} Stories by Vishal Patil. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
