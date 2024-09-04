import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { TbHandClick } from "react-icons/tb";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./mySwyper.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import ModalImg from "../ModalImg";

const RoomSlidesPics = ({ images_A, images_B }) => {
  const { getTranslations } = useLanguage();
  const translations = getTranslations();
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
      <div className="swiper-container">
        <section className={`${modalOpen ? "opacity-30" : ""}`}>
          <h6 className="text-center text-gray-400 mb-2">
            {translations.enlargeImg} <TbHandClick className="inline ml-2" />
          </h6>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
  
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiperRoomDetails"
          >
            {images_A.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  onClick={() => handleImageClick(image)}
                  className="cursor-pointer"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiperRoomThumbs"
        >
          {images_B.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                // onClick={() => handleImageClick(image)}
                className="cursor-pointer"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {modalOpen && <ModalImg image={modalImage} closeModal={closeModal} />}
    </>
  );
};

export default RoomSlidesPics;
