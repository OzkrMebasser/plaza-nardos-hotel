import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../globals.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function RoomImgSlider({ imageHomeCards = [] }) {
//   const progressCircle = useRef(null);
//   const progressContent = useRef(null);

//   const onAutoplayTimeLeft = (s, time, progress) => {
//     progressCircle.current.style.setProperty("--progress", 1 - progress);
//     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//   };

  return (
    <>
      
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        //   onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper h-48"
        >
          {Array.isArray(imageHomeCards) &&
            imageHomeCards.map((image, index) => (
              <SwiperSlide key={index}>
             <img src={image} alt={`Imagen ${index}`} loading="lazy"
             
             />
              
              </SwiperSlide>
            ))}
          {/* <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div> */}
        </Swiper>
  
    </>
  );
}
