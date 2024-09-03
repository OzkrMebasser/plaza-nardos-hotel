import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../globals.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function RoomImgSlider({ imageHomeCards = [] }) {

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
          className="mySwiper h-48"
        >
          {Array.isArray(imageHomeCards) &&
            imageHomeCards.map((image, index) => (
              <SwiperSlide key={index}>
             <img src={image} alt={`Imagen ${index}`} loading="lazy"
             
             />
              
              </SwiperSlide>
            ))}
        
        </Swiper>
  
    </>
  );
}
