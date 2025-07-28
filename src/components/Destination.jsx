// Destination.jsx
import React from "react";

const shoots = [
  { title: "Pre-Wedding – Santorini", location: "Greece", type: "Pre-Wedding", image: "/destination1.png" },
  { title: "Candid – Jaipur Palace", location: "India", type: "Candid", image: "/destination2.png" },
  { title: "Couple Portraits – Paris", location: "France", type: "Portrait", image: "/shoots/paris.jpg" },
  { title: "Traditional – Varanasi", location: "India", type: "Tradition", image: "/shoots/varanasi.jpg" },
  { title: "Beach Wedding – Goa", location: "India", type: "Wedding", image: "/shoots/goa.jpg" },
  { title: "Proposal – New York", location: "USA", type: "Proposal", image: "/shoots/newyork.jpg" },
  { title: "Haldi – Udaipur", location: "India", type: "Haldi", image: "/shoots/udaipur.jpg" },
  { title: "Maternity – Tuscany", location: "Italy", type: "Maternity", image: "/shoots/tuscany.jpg" },
];

const Destination = () => {
  return (
    <section id="destinations" className="py-20 px-6 lg:px-16 bg-gray-50 text-gray-800">
      <div className="text-center mb-12 mt-10">
        <h2 className="text-4xl font-semibold tracking-wider mb-4">
          Destinations We’ve Captured
        </h2>
        <p className="text-md text-gray-600 max-w-2xl mx-auto font-light">
          From the royal palaces of Jaipur to the cliffs of Santorini — here's where we've told stories of love.
        </p>
      </div>

      <div className="flex overflow-x-auto space-x-6 pb-4 hide-scrollbar">
        {shoots.map((shoot, index) => (
          <div
            key={index}
            className="min-w-[260px] sm:min-w-[300px] flex-shrink-0 rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white"
          >
            <img
              src={shoot.image}
              alt={shoot.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-md font-semibold">{shoot.title}</h3>
              <p className="text-sm text-gray-500">
                📍 {shoot.location} | 💍 {shoot.type}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-16 text-center text-gray-600 text-md italic">
        We accept bookings for weddings, portraits, maternity, editorial and more — worldwide 🌍
      </p>
    </section>
  );
};

export default Destination;
