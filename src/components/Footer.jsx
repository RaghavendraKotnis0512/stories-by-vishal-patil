import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-20 mt-24 relative overflow-hidden isolate">
      {/* Optional floating background blobs */}
      <div className="absolute -top-20 -left-40 w-96 h-96 bg-yellow-500 opacity-10 rounded-full mix-blend-lighten blur-3xl -z-10"></div>
      <div className="absolute -bottom-20 -right-40 w-96 h-96 bg-pink-500 opacity-10 rounded-full mix-blend-lighten blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Left: Branding */}
        <div>
          <h3 className="text-2xl font-serif italic tracking-wider text-[#f5d77c] mb-4">
            Let’s Connect
          </h3>
          <p className="text-gray-400 text-sm">📍 Based in India — Available Worldwide</p>
          <p className="text-gray-400 text-sm mt-2">
            📧{" "}
            <a
              href="mailto:storiesbyvishalpatil@gmail.com"
              className="underline hover:text-[#f5d77c] transition"
            >
              storiesbyvishalpatil@gmail.com
            </a>
          </p>
          <p className="text-gray-400 text-sm mt-1">📞 +91 95616 56240</p>
        </div>

        {/* Center: Social Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold text-[#f5d77c] mb-3 tracking-wide">
            Follow Me
          </h4>
          <div className="flex gap-6 text-2xl text-gray-400">
            {[{
              Icon: FaInstagram, href: "https://www.instagram.com/stories_by_vishalpatil/"
            }, {
              Icon: FaYoutube, href: "https://www.youtube.com/@storiesbyvishalpatil9707/videos"
            }, {
              Icon: FaFacebook, href: "https://www.facebook.com/share/12HYiiL34JF/?mibextid=wwXlfr"
            }, {
              Icon: FaLinkedin, href: "https://www.linkedin.com/in/vishal-patil-9aa6ab304/"
            }].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f5d77c] transition duration-300 drop-shadow-sm"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Optional Right Block (can add site links later) */}
        <div className="hidden md:block">
          <h4 className="text-lg font-semibold text-[#f5d77c] mb-3 tracking-wide">
            Explore
          </h4>
          <ul className="text-sm space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/portfolio" className="hover:text-white transition">Portfolio</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom note */}
      <div className="border-t border-gray-800 mt-16 pt-4 text-center text-xs text-gray-600 tracking-wide">
        © {new Date().getFullYear()} <span className="text-[#f5d77c] font-medium">Stories by Vishal Patil</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
