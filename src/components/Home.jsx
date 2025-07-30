import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

const images = ["/swiper1.webp", "/swiper2.webp", "/swiper3.webp", "/swiper4.webp", "/swiper5.webp", "/swiper6.webp", "/swiper7.webp", "/portfolio12.webp"];
const featuredImages = ["/portfolio1.webp", "/portfolio2.webp", "/portfolio3.webp", "/featured1.webp", "/featured2.webp", "/featured3.webp"];
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
    <div className="min-h-screen bg-white text-gray-800 font-sans relative overflow-x-hidden">
       {/* HERO SWIPER */}
       <div className="relative mt-24 border-8 border-white rounded-2xl overflow-hidden shadow-2xl">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          className="h-[85vh] brightness-95 saturate-150"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`slide-${idx}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Overlay Text Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center text-white drop-shadow-xl"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold">Stories That Live Forever</h1>
          <p className="mt-3 text-lg md:text-xl font-light">Through our lens, every frame becomes a memory.</p>
        </motion.div>
      </div>

      {/* QUOTE UNDER HERO */}
      <section className="text-center py-12 bg-gradient-to-r from-pink-50 via-white to-indigo-50">
        <p className="text-xl md:text-2xl italic font-serif bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
          “We don’t shoot photos — we frame stories.”
        </p>
      </section>

      {/* About Section */}
      <section className="relative text-center py-24 px-4 lg:px-12 bg-gray-50 overflow-hidden">
  {/* Soft background accent */}
  <div className="absolute inset-0 opacity-10">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#ccc" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dotPattern)" />
    </svg>
  </div>

  {/* Animated title */}
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="relative inline-block text-sm uppercase tracking-[0.35em] text-gray-500 mb-4 font-semibold bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
  >
    creating timeless visual stories
  </motion.h2>

  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3, duration: 0.8 }}
    className="relative max-w-3xl mx-auto font-light text-gray-700 text-lg md:text-xl leading-relaxed"
  >
    <span className="block font-serif text-3xl md:text-4xl mb-4 text-gray-900">
      Stories by Vishal Patil
    </span>
    believe that the most beautiful moments are the ones that happen naturally—a glance, a laugh, a touch.
    <br/><br/>
    Our photography captures those heartfelt seconds so you can treasure them forever. From the quiet excitement of a pre‑wedding to the joyful chaos of your big day, baby showers, or everyday candid moments—we’re here to tell your story, just as it is.
  </motion.p>

  {/* Pull‑quote divider */}
  <div className="relative my-10 flex items-center justify-center">
    <span className="block w-24 h-0.5 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500"></span>
  </div>

  <motion.blockquote
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.5, duration: 0.8 }}
    className="relative italic text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
  >
    “Honest. Emotional. Unforgettable. Let’s turn your moments into memories that last a lifetime.”
  </motion.blockquote>
</section>


      {/* Destination Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 lg:px-16 py-24 items-center">
  <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200">
    <img
      src="/world.png"
      alt="Destination"
      className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
    />
  </div>
  <div>
    <h3 className="uppercase tracking-[0.2em] text-xs text-gray-400 mb-4">
      Worldwide Presence
    </h3>
    <h2 className="text-3xl md:text-4xl font-serif italic mb-6 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-600 text-transparent bg-clip-text drop-shadow">
      Creating memories — anywhere in the world.
    </h2>
    <p className="text-lg md:text-xl mb-4 text-gray-700 leading-relaxed">
      Whether you're getting married in a Rajasthani palace, your ancestral home, or on a sunlit Goan beach — 
      <span className="font-semibold text-gray-800"> we’ll be there to capture every frame of your story.</span>
    </p>
    <p className="italic text-gray-600">
      Enquire today to book us for your dream destination wedding — or any moment, anywhere.
    </p>
  </div>
</section>


       {/* Featured Work Section */}
       <section className="px-4 lg:px-20 py-24 bg-white">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-serif tracking-wider mb-14 text-gray-800"
        >
          Glimpses of Our Work
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredImages.map((src, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg bg-gray-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <img
                src={src}
                alt={`featured-${index}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/portfolio")}
            className="bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 text-white px-8 py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl transition"
          >
            View Full Portfolio →
          </motion.button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 lg:px-12">
  <h2 className="text-center text-3xl md:text-4xl font-serif tracking-wider text-gray-800 mb-16">
    What People Say About Us
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
    {testimonials.map((review, index) => (
      <motion.div
        key={index}
        className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 relative group hover:shadow-2xl transition-all"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2, duration: 0.6 }}
      >
        {/* Star Rating */}
        <div className="flex justify-center mb-4">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
              </svg>
            ))}
        </div>

        {/* Review Text */}
        <p className="italic text-gray-600 text-lg leading-relaxed mb-6">“{review.text}”</p>

        {/* Avatar & Name */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <img
            src={review.image || '/default-avatar.png'}
            alt={review.name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-300"
          />
          <h4 className="text-gray-800 font-serif text-lg font-semibold">— {review.name}</h4>
        </div>
      </motion.div>
    ))}
  </div>
</section>
    </div>
  );
};

export default Home;
