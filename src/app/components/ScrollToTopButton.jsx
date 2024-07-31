"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll, { passive: true });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      title="Go To Top"
      className="upDown fixed z-50  left-4  w-10 h-10  bg-white rounded-full text-[#2b3163] text-lg font-semibold transition-colors duration-300"
    >
      <IoIosArrowDropupCircle className=" w-full h-full" />
    </button>
  );
};

export default ScrollToTopButton;
