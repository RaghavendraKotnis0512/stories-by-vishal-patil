import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white px-6 lg:px-24 py-20 text-gray-800 mt-10">
      {/* Heading */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-serif tracking-wide mb-4 text-gray-500">
          Meet Vishal Patil
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto font-light text-gray-600">
          A visual storyteller crafting timeless memories — one frame at a time.
        </p>
      </motion.div>

      {/* Bio Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/vishal.webp"
            alt="Vishal Patil"
            className="w-full h-auto rounded-2xl shadow-2xl object-cover border border-gray-200"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg leading-relaxed font-light mb-6">
            <span className="font-medium text-gray-900">Vishal Patil</span> is a destination photographer and filmmaker with a deep passion for capturing real, raw, and soulful emotions. With over a decade of experience, his work blends cinematic flair with genuine moments.
          </p>
          <p className="text-lg leading-relaxed font-light mb-6">
            From documenting opulent weddings in palaces to intimate vows exchanged under starlit skies, Vishal has travelled all over India to freeze memories in their purest form. His clients include actors, politicians, cricketers and countless beautiful souls celebrating love.
          </p>
          <p className="text-lg italic leading-relaxed text-gray-600">
            “To me, photography isn’t just about taking pictures — it’s about preserving feelings. It’s about creating art that brings back laughter, tears, and joy in an instant.”
          </p>
        </motion.div>
      </div>

      {/* Journey */}
      <motion.div
        className="max-w-5xl mx-auto text-center mb-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-serif mb-6 text-gray-800">The Journey So Far</h2>
        <p className="text-lg font-light leading-relaxed text-gray-700">
          What began as a passion has grown into a brand trusted by couples and families across India and beyond. 
          <br /><br />
          With a deep understanding of cultural rituals and aesthetics, Vishal’s team effortlessly blends tradition with modern storytelling — offering clients not just a photoshoot, but an unforgettable experience.
        </p>
      </motion.div>

      {/* Philosophy */}
      <motion.div
        className="max-w-5xl mx-auto text-center mb-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-serif mb-6 text-gray-800">Our Philosophy</h2>
        <p className="text-lg font-light leading-relaxed text-gray-700">
          We believe in preserving the soul of the moment — not just how it looked, but how it felt. Our shoots are relaxed, meaningful, and tailored to you. No stiff poses, no clichés — just authentic memories, artfully told.
          <br /><br />
          Whether it’s a wedding, maternity shoot, engagement session, or a portrait, we approach every story with reverence and passion.
        </p>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-serif mb-6 text-gray-800">Available Worldwide 🌍</h2>
        <p className="text-lg font-light leading-relaxed text-gray-700 max-w-2xl mx-auto mb-8">
          Based in India — traveling anywhere your story takes us. We accept photography and videography bookings globally for weddings, engagements, pre-wedding, maternity, fashion, and editorial projects.
        </p>
        
      </motion.div>
    </div>
  );
};

export default About;
