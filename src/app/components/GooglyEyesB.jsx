import React, { useEffect } from "react";
import "../globals.css";

// Componente de ojos para pantallas móviles
    // A ESTE NO LE MUEVAS NADA

const MobileEyes = () => {
  return (
    <div className="eyes absolute lg:hidden flex justify-center items-center h-full">
      <div className="eye w-[10px] h-[10px] m-[4.5px] flex justify-center items-center">
        <div className="ball "></div>
      </div>
      <div className="eye w-[10px] h-[10px] m-[4.5px] flex justify-center items-center">
        <div className="ball "></div>
      </div>
    </div>
  );
};


// Componente de ojos para pantallas grandes
const LargeEyes = () => {
  return (
   
     <div className="eyes hidden lg:flex lg:-mt-[15.2rem]">
      <div className="eye lg:w-[20px] lg:h-[20px] lg:m-[12px] flex justify-center items-center">
        <div className="ball lg:w-[7px] lg:h-[7px]"></div>
      </div>
      <div className="eye lg:w-[20px] lg:h-[20px] lg:m-[12px] flex justify-center items-center">
        <div className="ball lg:w-[7px] lg:h-[7px]"></div>
      </div>
    </div>
  );
};

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
    <div className="flex justify-center items-center ">
      <div className=" h-auto flex flex-col justify-center items-center lg:ml-[15rem]  ">
        <div className="flex justify-center items-center relative ">
          <img
            className="lg:w-auto "
            src="https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2Fsnorkel.png?alt=media&token=8d4727dd-2c8d-4ebc-8166-cb7c5697af12"
            alt="snorkel"
          />
          {/* {Componente de ojos móviles} */}
          <MobileEyes />
        </div>

        {/* {Componente de ojos grandes} */}
        <LargeEyes  />
      </div>
    </div>
  );
};

export default GooglyEyes;
