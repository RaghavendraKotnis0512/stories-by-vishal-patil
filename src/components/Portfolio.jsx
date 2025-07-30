// Portfolio.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";


const portfolioItems = [
  { title: "Rustic Arch Couple Portrait", category: "Wedding", img: "/portfolio1.webp" ,loading: "lazy"},
  { title: "Traditional Maharashtrian Wedding", category: "Wedding", img: "/portfolio2.webp",loading: "lazy" },
  { title: "Couple Walk in Nature", category: "Pre-Wedding", img: "/portfolio3.webp",loading: "lazy" },
  { title: "Reception Ring Ceremony", category: "Reception", img: "/featured1.webp",loading: "lazy" },
  { title: "Close-up Wedding Hug", category: "Wedding", img: "/featured2.webp",loading: "lazy" },
  { title: "Love Reflected by the Water", category: "Pre-Wedding", img: "/featured3.webp",loading: "lazy" },
  { title: "Colorful Mehendi Moment", category: "Mehendi", img: "/portfolio4.webp",loading: "lazy" },
  { title: "Black & White Couple Portrait", category: "Pre-Wedding", img: "/portfolio5.webp",loading: "lazy" },
  { title: "Traditional Ceremony Smiles", category: "Candid", img: "/portfolio6.webp",loading: "lazy" },
  { title: "Couple Portraits by the Sunset", category: "Casual-Photoshoot", img: "/portfolio7.webp",loading: "lazy" },
  { title: "Traditional Ceremony Smiles", category: "Wedding", img: "/portfolio8.webp",loading: "lazy" },
  { title: "Classic Black & White Portrait", category: "Tradition", img: "/portfolio9.webp",loading: "lazy" },
  { title: "Couple Shoot in Garden", category: "Wedding", img: "/portfolio10.webp",loading: "lazy" },
  { title: "Bridal Portrait with Greenery", category: "Bridal", img: "/portfolio11.webp",loading: "lazy" },
  { title: "Moments in a Garden of Dreams", category: "Bridal", img: "/portfolio12.webp",loading: "lazy" },

  { title: "Venue Entrance with Elegance", category: "Property", img: "/portfolio13.webp", loading: "lazy" },

  { title: "Modern Lobby with Wooden Finish", category: "Property", img: "/portfolio14.webp", loading: "lazy" },
  { title: "Twilight View of Hotel Exterior", category: "Property", img: "/portfolio15.webp", loading: "lazy" },

  { title: "Hotel Corridor with Ambient Light", category: "Property", img: "/portfolio16.webp", loading: "lazy" },
  { title: "Cozy Deluxe Room Interior", category: "Property", img: "/portfolio17.webp", loading: "lazy" },

  { title: "Plated Tandoori Appetizer", category: "Food", img: "/portfolio18.webp", loading: "lazy" },
  { title: "Royal Dum Biryani Platter", category: "Food", img: "/portfolio19.webp", loading: "lazy" },
  { title: "Baby is a Basket", category: "Babies", img: "/portfolio20.webp", loading: "lazy" },
  { title: "Couple Candids", category: "Couple", img: "/portfolio21.webp", loading: "lazy" },
 
];


const Portfolio = () => {
  const {pathname}=useLocation();

  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname]);

  return (
    <section className="bg-[#f9f9f9] px-4 md:px-12 py-24 mt-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-serif tracking-wide mb-16 text-gray-800">
          <span className="block">A Glimpse Into</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-500 to-indigo-600 font-extrabold">
            Our Portfolio
          </span>
        </h2>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {portfolioItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative w-full break-inside-avoid overflow-hidden rounded-xl shadow-sm group transition duration-500 hover:shadow-2xl"
            >
              <img
                src={item.img}
                alt={item.title}
                loading={item.loading}
                className="w-full h-auto object-cover rounded-xl transform group-hover:scale-105 transition duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-4 rounded-xl backdrop-blur-sm">
                <div className="text-white">
                  <h3 className="text-lg md:text-xl font-medium">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
