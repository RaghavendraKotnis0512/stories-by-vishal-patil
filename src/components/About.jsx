import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const About = () => {

  const {pathname}=useLocation();

  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname]);

  return (
    <div className="min-h-screen bg-white px-6 lg:px-24 py-20 text-gray-800 mt-10">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif tracking-wide mb-4">
          Meet Vishal Patil
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto font-light text-gray-600">
          A visual storyteller crafting timeless memories — one frame at a time.
        </p>
      </div>

      {/* Image + Bio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/vishal.webp" // Replace with actual portrait
            alt="Vishal Patil"
            className="w-full h-auto rounded-xl shadow-xl object-cover"
          />
        </div>
        <div>
          <p className="text-lg leading-relaxed font-light mb-6">
            <span className="font-medium">Vishal Patil</span> is a destination photographer and filmmaker with a deep passion for capturing real, raw, and soulful emotions. With over a decade of experience, his work blends cinematic flair with genuine moments.
          </p>
          <p className="text-lg leading-relaxed font-light mb-6">
            From documenting opulent weddings in palaces to intimate vows exchanged under starlit skies, Vishal has travelled all over India to freeze memories in their purest form. His clients include actors, politicians, crickerters and countless beautiful souls celebrating love.
          </p>
          <p className="text-lg leading-relaxed font-light mb-6 italic text-gray-600">
            “To me, photography isn’t just about taking pictures — it’s about preserving feelings. It’s about creating art that brings back laughter, tears, and joy in an instant.”
          </p>
        </div>
      </div>

      {/* Journey Section */}
      <div className="mt-24 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-serif mb-6">The Journey So Far</h2>
        <p className="text-lg font-light leading-relaxed text-gray-700">
          What began as a passion has grown into a brand trusted by couples and families across India and beyond. 
          <br /><br />
          With a deep understanding of cultural rituals and aesthetics, Vishal’s team effortlessly blends tradition with modern storytelling — offering clients not just a photoshoot, but an unforgettable experience.
        </p>
      </div>

      {/* Philosophy */}
      <div className="mt-24 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-serif mb-6">Our Philosophy</h2>
        <p className="text-lg font-light leading-relaxed text-gray-700">
          We believe in preserving the soul of the moment — not just how it looked, but how it felt. Our shoots are relaxed, meaningful, and tailored to you. No stiff poses, no clichés — just authentic memories, artfully told.
          <br /><br />
          Whether it’s a wedding, maternity shoot, engagement session, or a portrait, we approach every story with reverence and passion.
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-24 text-center">
        <h2 className="text-2xl md:text-3xl font-serif mb-6">Available Worldwide 🌍</h2>
        <p className="text-lg font-light leading-relaxed text-gray-700 max-w-2xl mx-auto mb-8">
          Based in India — traveling anywhere your story takes us. We accept photography and videography bookings globally for weddings, engagements, pre-wedding, maternity, fashion, and editorial projects.
        </p>
       
      </div>
    </div>
  );
};

export default About;
