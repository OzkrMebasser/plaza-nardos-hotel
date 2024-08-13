"use client"
import React, { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    const scrollListener = () => {
      requestAnimationFrame(calculateScrollProgress);
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[4px] bg-[#7c7498]"
      style={{ width: `${scrollProgress}%` }}
    />
  );
};

export default ScrollProgressBar;