import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

const images = ["/swiper1.webp", "/swiper2.webp", "/swiper3.webp","/swiper4.webp","/swiper5.webp","/swiper6.webp","/swiper7.webp","/portfolio12.webp"];
const featuredImages = ["/portfolio1.webp","/portfolio2.webp","/portfolio3.webp","/featured1.webp","/featured2.webp","/featured3.webp"]
const testimonials = [
  {
    name: "Aarav & Meera",
    text: "The team captured every emotion beautifully. Our wedding memories are now truly unforgettable!",
  },
  {
    name: "Siddharth & Riya",
    text: "Incredible experience! Vishal and his team made us feel so comfortable and delivered stunning photos.",
  },
  {
    name: "Ishaan & Tanvi",
    text: "They turned our big day into timeless art. The best decision we made!",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Swiper */}
      <div className="w-full mt-30 border-8 border-white rounded-2xl overflow-hidden shadow-xl">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          className="h-[75vh]"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img src={src} alt={`slide-${idx}`} className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnail Strip */}
      <div className="flex overflow-x-auto gap-4 mt-6 px-4 lg:px-12 scrollbar-hide">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`thumb-${idx}`}
            className="h-24 w-36 rounded-lg border hover:opacity-90 transition object-cover"
          />
        ))}
      </div>

      {/* About Section */}
      <section className="text-center py-20 px-4 lg:px-12">
        <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Creating Timeless Visual Stories</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
          <span className="block font-medium mb-2">Stories by Vishal Patil</span>
          believe that the most beautiful moments are the ones that happen naturally—a glance, a laugh, a touch.
          <br /><br />
          Our photography captures those heartfelt seconds so you can treasure them forever. From the quiet excitement of a pre-wedding to the joyful chaos of your big day, baby showers, or everyday candid moments—we’re here to tell your story, just as it is.
          <br /><br />
          <span className="italic">Honest. Emotional. Unforgettable. Let’s turn your moments into memories that last a lifetime.</span>
        </p>
      </section>

      {/* Destination Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4 lg:px-12 py-20 items-center">
        <img
          src="/world.png"
          alt="Destination"
          className="w-full h-full object-cover rounded-xl shadow-md"
        />
        <div>
          <h2 className="uppercase tracking-widest text-sm text-gray-500 mb-3">Worldwide Presence</h2>
          <p className="text-3xl md:text-4xl font-serif italic mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-transparent bg-clip-text">
            Creating memories — anywhere in the world.
          </p>
          <p className="text-lg md:text-xl mb-4">
            Whether you’re getting married in a Rajasthani palace, your ancestral home, or on a Goan beach—
            <span className="font-medium"> we’ll be there to tell your story.</span>
          </p>
          <p className="italic text-gray-600">Enquire today to book us for your dream destination wedding — or any shoot, anywhere.</p>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="px-4 lg:px-12 py-20 bg-white">
        <h2 className="text-center text-3xl md:text-4xl font-serif tracking-wider mb-12">
          Glimpses of Our Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredImages.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`featured-${index}`}
              className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate("/portfolio")}
            className="text-red-500 font-medium hover:underline transition cursor-pointer"
          >
            View More →
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20 px-4 lg:px-12">
        <h2 className="text-center text-3xl md:text-4xl font-serif tracking-wider mb-16">
          What People Say About Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {testimonials.map((review, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow p-8 text-center hover:shadow-xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <p className="italic text-gray-600 text-lg mb-6">“{review.text}”</p>
              <h4 className="text-gray-900 font-semibold text-xl">— {review.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
