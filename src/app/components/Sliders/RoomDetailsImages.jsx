"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ModalImg from "../ModalImg";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./carrousel.css";
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const RoomDetailed = ({ images_A, images_B }) => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleImageClick = (image) => {
    setModalImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalImage(null);
    setModalOpen(false);
  };

  return (
    <>
      <div >
        <section className={` mt-4 px-4 ${modalOpen ? "opacity-50" : ""}`}>
        <h6 className="text-center text-gray-400">Click to enlarge image</h6>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            loop={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="swiper"
          >
            {images_A.map((image) => (
              <SwiperSlide key={image}>
                
                <img
                  src={image}
                  alt="property images"
                  onClick={() => handleImageClick(image)}
                  className="cursor-pointer"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <section className={`px-4 ${modalOpen ? "opacity-50" : ""}`}>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={6}
            freeMode={true}
            loop={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {images_B.map((image) => (
              <SwiperSlide key={image}>
                <img src={image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>

      {/* Modal */}
      {modalImage && <ModalImg image={modalImage} closeModal={closeModal} />}
    </>
  );
};

export default RoomDetailed;