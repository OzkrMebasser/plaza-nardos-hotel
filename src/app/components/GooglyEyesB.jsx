import React, { useEffect } from "react";
import "../globals.css";

const GooglyEyes = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const balls = document.getElementsByClassName("ball");

      // Obtener coordenadas del ratón
      const x = (event.clientX * 100) / window.innerWidth + "%";
      const y = (event.clientY * 100) / window.innerHeight + "%";

      // Mover cada "ball" (pupila)
      for (let i = 0; i < balls.length; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].style.transform = `translate(-${x}, -${y})`;
      }
    };

    // Añadir event listener para el movimiento del ratón
    document.addEventListener("mousemove", handleMouseMove);

    // Limpiar event listener cuando el componente se desmonte
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="googly-eyes-container mx-auto h-full w-[70%] absolute   ">
      <div className="flex justify-center move-area opacity-30">
        <img
          className="h-auto w-auto absolute flex justify-center "
          src="https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2Fsnorkel.png?alt=media&token=8d4727dd-2c8d-4ebc-8166-cb7c5697af12"
          alt="snorkel"
        />
      </div>
      <div className="eyes opacity-30 ">
        <div className="eye mt-[5.3rem] md:mt-[13.5rem] absolute">
          <div className="ball"></div>
        </div>
        <div className="eye">
          <div className="ball"></div>
        </div>
      </div>
    </div>
  );
};

export default GooglyEyes;
