import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, EffectCreative } from "swiper/modules";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import { FaQuoteLeft } from "react-icons/fa";

const images = ["/swiper1.webp", "/portfolio6.webp", "/swiper3.webp", "/swiper4.webp", "/swiper5.webp", "/swiper6.webp", "/swiper7.webp", "/portfolio12.webp"];
const featuredImages = ["/portfolio1.webp", "/portfolio2.webp", "/portfolio3.webp", "/featured1.webp", "/featured2.webp", "/featured3.webp"];
const testimonials = [
  {
    name: "Aarav & Meera",
    text: "Our maternity photoshoot was captured with so much grace and emotion. We’ll cherish it forever!",
  },
  {
    name: "Siddharth & Riya",
    text: "Our wedding was magical, and the photos brought every moment to life beautifully.",
  },
  {
    name: "Ishaan & Tanvi",
    text: "From candid moments to reception highlights, every picture is a masterpiece.",
  },
  {
    name: "Neha & Arjun",
    text: "The baby photoshoot melted our hearts—so natural and full of love.",
  },
  {
    name: "Karan & Ananya",
    text: "The reception photos perfectly captured the celebration and joy of the evening.",
  },
  {
    name: "Divya & Rohan",
    text: "Whether it was our pre-wedding, maternity, or baby shoot, every experience was flawless!",
  },
];


const Home = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen text-gray-800 font-sans relative overflow-x-hidden">
       {/* HERO SWIPER */}
       <section className="mt-24 px-4 md:px-10">
  {/* Enhanced Swiper Section */}
  <div className="relative border-8 border-white rounded-2xl overflow-hidden shadow-2xl h-[75vh]">
    {/* Gradient Overlay for wow effect */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 z-10" />

    {/* Text Overlay */}
    <div className="absolute z-20 inset-0 flex flex-col items-center justify-center text-center px-4">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-4xl md:text-6xl font-serif text-[#f5f5dc] drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] tracking-wide"
  >
    Moments. Memories. Forever.
  </motion.h2>
  
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 1 }}
    className="mt-6 text-lg md:text-2xl text-white font-light leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] max-w-3xl"
  >
    Through every frame, we don’t just capture what’s seen — we immortalize what’s felt.
  </motion.p>
</div>


    {/* Swiper with 2–3 Slides at once */}
    <Swiper
      modules={[Autoplay]}
      loop
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 },
        640: { slidesPerView: 2, spaceBetween: 15 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
      }}
      className="h-full brightness-95 saturate-150 z-0"
    >
      {images.map((src, idx) => (
        <SwiperSlide key={idx}>
          <img
            src={src}
            alt={`slide-${idx}`}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105 rounded-xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  {/* Optional Subheading or Call to Action */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.8 }}
    viewport={{ once: true }}
    className="text-center mt-12"
  >
  </motion.div>
</section>
    <section className="relative text-center py-28 px-6 sm:px-12 bg-gradient-to-br from-pink-50 via-white to-indigo-50 overflow-hidden isolate">
  {/* Decorative background texture */}
  <div className="absolute inset-0 -z-10 opacity-10 blur-sm">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="softDots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="#bbb" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#softDots)" />
    </svg>
  </div>

  {/* Floating gradient blobs */}
  <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-200 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
  <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-200 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>

  {/* Section heading */}


  {/* Main heading and content */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2, duration: 1 }}
    className="max-w-4xl mx-auto text-gray-700"
  >
    <img src="vplogo.webp" className="mx-auto w-90 h-35" />

    <p className="text-lg sm:text-xl leading-relaxed font-light">
      We believe the most magical moments are often unplanned—a soft glance, a shared smile, a silent vow. 
      Our lens doesn’t just capture what you see, it preserves how you *felt*.
      <br/><br/>
      Whether it’s the gentle anticipation of a pre-wedding, the vibrant joy of a celebration, or the quiet beauty of everyday love—we’re here to turn fleeting seconds into eternal memories.
    </p>
  </motion.div>

  {/* Gradient divider */}
  <div className="my-10 flex justify-center">
    <div className="h-1 w-28 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 rounded-full shadow-md"></div>
  </div>

  {/* Poetic quote */}
  <motion.blockquote
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.4, duration: 1 }}
  className="italic text-xl sm:text-2xl text-gray-700 drop-shadow-md mb-6 leading-tight"
>
  “HONEST. EMOTIONAL. UNFORGETTABLE. LET’S TURN YOUR MOMENTS INTO MEMORIES THAT LAST A LIFETIME.”
</motion.blockquote>

</section>


   {/* Destination Section */}
   <section
  className="relative isolate overflow-hidden bg-gray-900 px-6 py-32 sm:px-10 lg:px-24 text-white"
  style={{
    backgroundImage: "url('/world-2.webp')",
    backgroundSize: "100%",
    backgroundPosition: "center 80%",
  }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

  <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
    <p className="uppercase tracking-wider text-sm text-[#FFD700] mb-4 font-medium">
      Your Story, Our Lens
    </p>
    <h2 className="text-2xl lg:text-5xl font-serif text-[#FFD700] drop-shadow-[0_2px_10px_rgba(255,215,0,0.5)] mb-6 leading-tight">
      MEMORIES ETCHED IN EVERY FRAME
    </h2>
    <p className="text-lg text-gray-200 font-light leading-relaxed max-w-2xl">
      From the vibrant deserts of Rajasthan to the calm shores of Kerala, we don’t just capture photos —
      <span className="text-white font-semibold"> we preserve the pulse of your most intimate moments.</span>
    </p>
    <p className="italic text-gray-400 mt-4">
      Because your love deserves nothing less than timeless.
    </p>
  </div>
</section>





{/*video*/}

<section
  id="reel"
  className="w-full min-h-screen relative overflow-hidden bg-black mt-24"
>
  <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#111827] to-transparent z-10" />
  
  <video
    className="absolute top-1/2 left-1/2 w-auto h-[120vh] max-w-none transform -translate-x-1/2 -translate-y-1/2 rotate-270 scale-[2.25] object-cover object-left"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</section>







      {/* Featured Work Section */}
      <section className="relative px-6 md:px-20 py-28 bg-gradient-to-b from-white via-neutral-100 to-white">
      {/* Background gradient shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-96 h-96 bg-rose-200 opacity-20 rounded-full blur-[120px] top-0 -left-32"></div>
        <div className="absolute w-96 h-96 bg-indigo-200 opacity-20 rounded-full blur-[120px] bottom-0 -right-32"></div>
      </div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-5xl font-serif tracking-wide text-yellow-500 mb-16"
        style={{ fontFamily: "'Roboto Slab', serif" }}
      >
        GLIMPSES OF OUR WORK
      </motion.h2>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {featuredImages.map((src, index) => (
          <motion.div
            key={index}
            className="group relative rounded-2xl overflow-hidden shadow-xl bg-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <img
              src={src}
              alt={`featured-${index}`}
              className="w-full h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-16">
      <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.96 }}
  onClick={() => navigate("/portfolio")}
  className="bg-slate-500 text-white px-10 py-3 rounded-full text-lg font-semibold shadow-xl hover:bg-slate-700 transition-all duration-300"
  style={{ fontFamily: "'Roboto Slab', serif" }}
>
  View Full Portfolio →
</motion.button>

      </div>
    </section>


    
<section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 lg:px-12">
  <h2 className="text-center text-3xl md:text-4xl font-serif tracking-wider text-gray-500 mb-16">
    WHAT PEOPLE SAY ABOUT US
  </h2>

  <Swiper
    modules={[Autoplay]}
    autoplay={{ delay: 4000, disableOnInteraction: false }}
    loop={true}
    slidesPerView={1}
    spaceBetween={5}
    breakpoints={{
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    }}
    className="max-w-7xl mx-auto"
  >
    {testimonials.map((testimonial, index) => (
      <SwiperSlide key={index}>
        <div className="bg-white shadow-lg rounded-2xl px-6 py-10 text-center h-full flex flex-col justify-between">
          <div>
            <div className="flex justify-center mb-6">
              <FaQuoteLeft className="text-3xl text-indigo-500" />
            </div>
            <p className="text-gray-700 text-lg italic leading-relaxed mb-3 font-medium">
              “{testimonial.text}”
            </p>
          </div>
          <p className="text-gray-900 font-semibold text-lg">-{testimonial.name}</p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

    </div>
  );
};

export default Home;
