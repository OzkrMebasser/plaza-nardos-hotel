import React, { useEffect } from "react";
import "../globals.css";

// Componente de ojos para pantallas móviles
    

const MobileEyes = () => {
  return (
    <div className="eyes absolute lg:hidden flex justify-center -mt-6 items-center h-full">
      <div className="eye w-[6px] h-[6px] m-[3px] flex justify-center items-center">
        <div className="ball "></div>
      </div>
      <div className="eye w-[6px] h-[6px] m-[3px] flex justify-center items-center">
        <div className="ball "></div>
      </div>
    </div>
  );
};


// Componente de ojos para pantallas grandes
const LargeEyes = () => {
  return (
   
     <div className="eyes hidden lg:flex lg:-mt-[18.3rem] ">
      <div className="eye lg:w-[16px] lg:h-[16px] lg:m-[8px]  flex justify-center items-center">
        <div className="ball lg:w-[7px] lg:h-[7px]"></div>
      </div>
      <div className="eye lg:w-[16px] lg:h-[16px] lg:m-[8px] flex justify-center items-center">
        <div className="ball lg:w-[7px] lg:h-[7px]"></div>
      </div>
    </div>
  );
};

const CallCenter = () => {
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
      <div className=" h-auto flex flex-col justify-center items-center lg:ml-[15.1rem]  ">
        <div className="flex justify-center items-center relative ">
          <img
            className="lg:w-auto "
            src="https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2Freservation-confirm.png?alt=media&token=7dc3c0a1-a32f-4854-b67e-2cd71c0f65f4"
            alt="call-center-hotel"
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

export default CallCenter;
