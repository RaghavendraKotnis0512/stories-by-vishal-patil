// ContactUs.jsx
import React from "react";

const Contact = () => {
  return (
    <section className="bg-white text-gray-800 px-6 md:px-16 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide">
          Contact Us
        </h1>
        <p className="mb-10 text-gray-600">
          Have a project or an idea? Feel free to reach out anytime. I’m available for freelance work worldwide.
        </p>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-900 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
