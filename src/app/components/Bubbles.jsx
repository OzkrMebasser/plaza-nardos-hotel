import React, { useEffect } from 'react';
import '../globals.css'; 

const Bubbles = () => {
  useEffect(() => {
    const createBubble = () => {
      const section = document.querySelector('.bubble-section');
      const createElement = document.createElement('span');
      const size = Math.random() * 10;
      
      createElement.classList.add('bubble');
      createElement.style.width = 20 + size + 'px';
      createElement.style.height = 20 + size + 'px';
      createElement.style.left = Math.random() * window.innerWidth + 'px';
      section.appendChild(createElement);

      setTimeout(() => {
        createElement.remove();
      }, 4000);
    };

    const interval = setInterval(createBubble, 50);
    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <section className="bubble-section relative bg-red-700" >
      {/* Aquí van solo las burbujas */}
    </section>
  );
};

export default Bubbles;
