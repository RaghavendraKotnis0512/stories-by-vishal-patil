import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { useNavigate } from "react-router-dom";

const images = ["/landing1.png", "/landing2.png", "/landing3.jpg"]; // Make sure these are in your `public` folder

const LandingPage = () => {
    const navigate=useNavigate();
  return (
    <div className="h-screen w-full border-[8px] border-white box-border relative overflow-hidden">
      {/* Background Image Slider */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="absolute inset-0 h-full w-full"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`slide-${i}`}
              className="h-full w-full object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center text-white px-6">
          <h2 className="text-lg font-bold tracking-widest uppercase mb-3">
            STORIES BY VISHAL PATIL
          </h2>
          <h1 className="text-4xl md:text-5xl font-light mb-5 leading-snug">
            Because we are all stories.
          </h1>
          <p className="max-w-xl mx-auto mb-6 text-sm md:text-base leading-relaxed">
            Stories by Vishal Patil is a team of
            photographers who believe in capturing real moments, real stories - just the way you will remember them.
          </p>
          <button
          onClick={()=>navigate("/home")} className="border border-white px-6 py-2 tracking-wider hover:bg-white hover:text-black transition duration-300">
            WELCOME
          </button>

          <div className="mt-6 flex justify-center gap-6 text-white text-xl">
            <a href="https://www.instagram.com/stories_by_vishalpatil/"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
