// Portfolio.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const portfolioItems = [
  { title: "Rustic Arch Couple Portrait", category: "Wedding", img: "/portfolio1.png" ,loading: "lazy"},
  { title: "Traditional Maharashtrian Wedding", category: "Wedding", img: "/portfolio2.png",loading: "lazy" },
  { title: "Couple Walk in Nature", category: "Pre-Wedding", img: "/portfolio3.png",loading: "lazy" },
  { title: "Reception Ring Ceremony", category: "Reception", img: "/featured1.jpg",loading: "lazy" },
  { title: "Close-up Wedding Hug", category: "Wedding", img: "/featured2.jpg",loading: "lazy" },
  { title: "Love Reflected by the Water", category: "Pre-Wedding", img: "/featured3.jpg",loading: "lazy" },
  { title: "Colorful Mehendi Moment", category: "Mehendi", img: "/portfolio4.png",loading: "lazy" },
  { title: "Black & White Couple Portrait", category: "Pre-Wedding", img: "/portfolio5.png",loading: "lazy" },
  { title: "Traditional Ceremony Smiles", category: "Candid", img: "/portfolio6.jpg",loading: "lazy" },
  { title: "Couple Portraits by the Sunset", category: "Casual-Photoshoot", img: "/portfolio7.jpg",loading: "lazy" },
  { title: "Traditional Ceremony Smiles", category: "Wedding", img: "/portfolio8.jpg",loading: "lazy" },
  { title: "Classic Black & White Portrait", category: "Tradition", img: "/portfolio9.jpg",loading: "lazy" },
  { title: "Couple Shoot in Garden", category: "Wedding", img: "/portfolio10.jpg",loading: "lazy" },
  { title: "Bridal Portrait with Greenery", category: "Bridal", img: "/portfolio11.jpg",loading: "lazy" },
  { title: "Moments in a Garden of Dreams", category: "Bridal", img: "/portfolio12.JPG",loading: "lazy" },

  { title: "Venue Entrance with Elegance", category: "Property", img: "/portfolio13.JPG", loading: "lazy" },

  { title: "Modern Lobby with Wooden Finish", category: "Property", img: "/portfolio14.JPG", loading: "lazy" },
  { title: "Twilight View of Hotel Exterior", category: "Property", img: "/portfolio15.JPG", loading: "lazy" },

  { title: "Hotel Corridor with Ambient Light", category: "Property", img: "/portfolio16.JPG", loading: "lazy" },
  { title: "Cozy Deluxe Room Interior", category: "Property", img: "/portfolio17.JPG", loading: "lazy" },

  { title: "Plated Tandoori Appetizer", category: "Food", img: "/portfolio18.JPG", loading: "lazy" },
  { title: "Royal Dum Biryani Platter", category: "Food", img: "/portfolio19.JPG", loading: "lazy" },
 
];


const Portfolio = () => {
  const {pathname}=useLocation();

  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname]);

  return (
    <section className="px-6 py-20 bg-white text-gray-800 mt-10">
      <h2 className="text-center text-4xl font-light tracking-widest mb-12">
        OUR <span className="font-semibold">PORTFOLIO</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {portfolioItems.map((item, idx) => (
          <div key={idx} className="relative group overflow-hidden rounded-lg shadow-md">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div className="text-white">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
