import React, { useEffect } from "react";
import Bubbles from "./Bubbles";
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
  // useEffect(() => {
  //   const createBubble = () => {
  //     const section = document.querySelector(".bubble-section");
  //     const createElement = document.createElement("span");
  //     const size = Math.random() * 10;

  //     createElement.classList.add("bubble");
  //     createElement.style.width = 10 + size + "px";
  //     createElement.style.height = 10 + size + "px";
  //     createElement.style.left = Math.random() * window.innerWidth + "px";
  //     section.appendChild(createElement);

  //     setTimeout(() => {
  //       createElement.remove();
  //     }, 4000);
  //   };

  //   const interval = setInterval(createBubble, 50);
  //   return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  // }, []);

  return (
    <div className="">
      <div className="flex justify-end  ">
        <img
          className=" lg:w-auto  "
          src="https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2Fsnorkel.png?alt=media&token=8d4727dd-2c8d-4ebc-8166-cb7c5697af12"
          alt="snorkel"
        />
      </div>

      <div className="eyes -mt-[6.4rem] lg:ml-[16rem] lg:-mt-[15.2rem] ">
        <div className="eye w-[10px] h-[10px]  m-[4.5px] lg:w-[20px] lg:h-[20px] lg:m-[12px] ">
          <div className="ball  lg:w-[7px]  lg:h-[7px]"></div>
        </div>
        <div className="eye w-[10px] h-[10px] m-[4.5px] lg:w-[20px] lg:h-[20px] lg:m-[12px] ">
          <div className="ball lg:w-[7px] lg:h-[7px]"></div>
        </div>
      </div>

      {/* <div className="eyes ">
        <div className="eye ">
          <div className="ball"></div>
        </div>
        <div className="eye">
          <div className="ball"></div>
        </div>
      </div> */}
    </div>
  );
};

export default GooglyEyes;
