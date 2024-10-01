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
    <div className="googly-eyes-container">
      <div className="eyes">
        <div className="eye">
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
