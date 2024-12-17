import React, { useEffect } from "react";
import "../globals.css"; 



const GooglyEyes = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const eyeElements = document.querySelectorAll(".eye");

      eyeElements.forEach((eye) => {
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.right + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2 ;

        const rad = Math.atan2(event.pageX - eyeCenterX, event.pageY - eyeCenterY);
        const rot = (rad * (180 / Math.PI) * -1) + 180;

        eye.style.transform = `rotate(${rot}deg)`;
      });
    };

    // Add event listener for mouse movement
    document.querySelector(".move-area").addEventListener("mousemove", handleMouseMove);

    return () => {
      document.querySelector(".move-area").removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="mx-auto h-auto w-auto relative ">


    <div className="flex justify-center move-area opacity-30">
    <img className="h-auto w-auto absolute flex justify-center " src="https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2Fsnorkel.png?alt=media&token=8d4727dd-2c8d-4ebc-8166-cb7c5697af12" alt="snorkel" />

    <div className="eye mt-[5.3rem] md:mt-[13.5rem] absolute mr-8 md:mr-10 inline-block border-solid border-2 border-[#666666ab]"></div>
    <div className="eye mt-[13.5rem] absolute ml-12 inline-block border-solid border-2 border-[#666666ab]"></div>
   
    </div>

    </section>
  );
};

export default GooglyEyes;
