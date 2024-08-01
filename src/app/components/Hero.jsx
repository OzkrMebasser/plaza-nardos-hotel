"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import {useLanguage} from "../contexts/LanguageContext";


const Hero = () => {
  const { getTranslations, changeLanguage } = useLanguage();
  const translations = getTranslations();

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-center text-white">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="min-w-full min-h-full absolute object-cover"
          src="https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FslowMotionHeroVid.mp4?alt=media&token=4ed5eff5-a933-4a2d-95ae-f838d187cea4"
          type="video/mp4"
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 "></div>
      </div>
      <div className="video-content z-10 space-y-2 px-4 md:px-0">
        <div className="  h-[4rem] lg:h-auto">
          {" "}
          <h1 className="lg:text-4xl text-2xl font-bold ">
            {/* Hero title Tu Hogar en el Corazón de Playa del Carmen */}
            <ReactTyped
              strings={[`${translations.hero.h1Hero}`]}
              loop
              typeSpeed={120}
              backSpeed={120}
            />
          </h1>
        </div>
        <h3 className="font-light text-xl lg:text-3xl">
          {/* ¡Relájate y Disfruta en la Zona Más Vibrante! */}
          {translations.hero.h3Hero}
        </h3>
      </div>
    </section>
  );
};

export default Hero;
