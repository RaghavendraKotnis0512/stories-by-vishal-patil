import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { useNavigate } from "react-router-dom";

// Images must be inside the `public/` folder
const images = ["/landing1.webp", "/landing2.webp", "/landing3.webp"];

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full border-[8px] border-white box-border relative overflow-hidden">
      {/* Background Image Slider */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="absolute inset-0 h-full w-full"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`slide-${i}`}
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
        <div className="text-center text-white max-w-xl">
          <h2 className="text-sm md:text-lg font-semibold tracking-widest uppercase mb-2">
            STORIES BY VISHAL PATIL
          </h2>
          <h1 className="text-3xl md:text-5xl font-light mb-4 leading-tight">
            Because we are all stories.
          </h1>
          <p className="text-xs md:text-base mb-5 leading-relaxed">
            Stories by Vishal Patil is a team of photographers who believe in
            capturing real moments, real stories — just the way you’ll remember them.
          </p>
          <button
            onClick={() => navigate("/home")}
            className="border border-white px-6 py-2 tracking-wider hover:bg-white hover:text-black transition duration-300 text-sm md:text-base"
          >
            WELCOME
          </button>

          {/* Social Media Links */}
          <div className="mt-6 flex justify-center gap-5 text-white text-xl">
            <a
              href="https://www.instagram.com/stories_by_vishalpatil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/share/12HYiiL34JF/?mibextid=wwXlfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
