"use client";
import { useState, useEffect } from "react";
import RoomImgSlider from "@/app/components/Sliders/RoomImgSlider";
import { useRoomsAndCurrency } from "@/app/contexts/RoomsAndCurrencyContext";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { FaInfoCircle, FaBed } from "react-icons/fa";
import { PiCouchFill } from "react-icons/pi";
import { FaEye } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";
import { BiSolidBed } from "react-icons/bi";

import AOS from 'aos';
import 'aos/dist/aos.css';
import Title from "../Title";

const HomeRoomsCards = () => {
  const { roomsData, setRoomsData, currency } = useRoomsAndCurrency();
  const { getTranslations } = useLanguage();
  const translations = getTranslations();
  const [isMobile, setIsMobile] = useState();


  useEffect(() => {
    setRoomsData(roomsData);
    AOS.init();
  }, [roomsData, setRoomsData]);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };


    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize, { passive: true });
    };
  }, []);

  const formatNumber = (number) => number.toLocaleString();

  const filteredRooms = roomsData.filter((room) => room.homeShow);

  return (
    <>
      <div className="mx-auto bg-gray-200 p-6">
        <Title title={translations.homeTitles.ourRooms} className="mt-4" />
        <div className="flex items-center justify-center h-full">
          <div 
          className="w-full lg:max-w-screen-lg lg:mx-auto mt-6" 
         

          >
            {filteredRooms.map((room) => (
              <div
               data-aos="fade-up"
                key={room.id}
                className="w-full mb-8 lg:flex lg:justify-center"
              >
                <div
                  className={`lg:h-[20rem] rounded-md shadow-lg max-w-5xl bg-white sm:flex  hover:shadow-[0_10px_20px_rgba(0,0,0,0.38)] transition-transform duration-300 ${
                    isMobile ? "hover:scale-95" : "hover:scale-110"
                  }`}
                >
                  <div className="w-full sm:w-[30%] h-[20rem] relative bg-cover bg-center shadow-inner border hotel-cover">
                    <RoomImgSlider imageHomeCards={room.imageHomeCards} />
                  </div>
                  <div className="w-full sm:w-3/4 p-3 lg:px-8 relative">
                    <div className="flex justify-between items-center border-b pb-3">
                      <div>
                        <div className="sm:flex items-center mb-1">
                          <h2 className=" text-lg lg:text-2xl font-semibold text-[#2b3163]">
                            {translations[room.roomType]?.title}
                          </h2>
                        </div>
                        {room.beds ? (
                          <div className="flex items-center">
                            <div>
                              <IoBed className="w-5 h-5 text-[#2b3163]" />
                            </div>
                            <p className="text-sm ml-2 text-[#2b3163] font-semibold">
                              <span className="inline mr-1">{room.beds}</span>
                              {translations[room.roomType]?.doubleBeds}
                            </p>
                          </div>
                        ) : null}
                        {room.sofa ? (
                          <div className="flex items-center">
                            <div>
                              <PiCouchFill className="w-5 h-5 text-[#2b3163]" />
                            </div>
                            <p className="text-sm ml-2 text-[#2b3163] font-semibold">
                              <span className="inline mr-1">{room.sofa}</span>
                              {translations[room.roomType]?.sofaBed}
                            </p>
                          </div>
                        ) : null}
                           {room.singleBed ? (
                          <div className="flex items-center">
                            <div>
                              <BiSolidBed className="w-5 h-5 text-[#2b3163]" />
                            </div>
                            <p className="text-sm ml-2 text-[#2b3163] font-semibold">
                              <span className="inline mr-1">{room.singleBed}</span>
                              {translations[room.roomType]?.singleBed}
                            </p>
                          </div>
                        ) : null}
                      </div>
                      <div>
                        {isMobile ? (
                          <div className="text-right text-[.65rem] leading-tight text-[#2b3163] font-semibold">
                            <span className="">
                              {translations.priceFrom}
                              <br />
                              {currency === "EUR" ? "€" : "$"}
                            </span>{" "}
                            <strong className="">
                              {formatNumber(room.price[currency])}
                            </strong>{" "}
                            <br />
                            {currency === "MXN"
                              ? "MXN"
                              : currency === "USD"
                              ? "USD"
                              : currency === "EUR"
                              ? "EUR"
                              : currency === "CAD"
                              ? "CAD"
                              : ""}
                            ,<br />
                            {translations.perNight}
                          </div>
                        ) : (
                          <div className="text-right lg:text-lg leading-tight text-[#2b3163] font-semibold">
                            <span className="">
                              {translations.priceFrom}{" "}
                              {currency === "EUR"
                                ? "€"
                                : currency === "USD"
                                ? "$"
                                : currency === "MXN"
                                ? "$"
                                : currency === "CAD"
                                ? "$"
                                : ""}
                            </span>{" "}
                            <strong className="">
                              {formatNumber(room.price[currency])}
                            </strong>{" "}
                            <span className="text-sm inline mr-1">
                              {currency === "MXN"
                                ? "MXN"
                                : currency === "USD"
                                ? "USD"
                                : currency === "EUR"
                                ? "EUR"
                                : currency === "CAD"
                                ? "CAD"
                                : ""}
                              ,
                            </span>
                            {translations.perNight}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex mt-4">
                      <div>
                        <FaInfoCircle className="w-4 h-4 text-[#2b3163] mt-2 mr-2" />
                      </div>
                      <p className="text-xs ml-1 text-[#2b3163]">
                        {translations[room.description]?.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap mt-3 items-center justify-center">
                      {room.amenities?.map((amenity, index) => (
                        <div
                          key={index}
                          className="mr-4 flex items-center justify-center h-auto w-auto py-2"
                        >
                          <amenity.icon className="w-5 h-5 text-[#2b3163] mr-1" />
                          <p className="text-xs ml-1 text-[#2b3163]">
                            {translations[room.roomType]?.amenities[
                              amenity.title
                            ] || amenity.title}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 mb-4 lg:mt-0 lg:mb-0 lg:absolute lg:bottom-5 lg:right-5 flex justify-center">
                      <button className="cursor-pointer font-semibold overflow-hidden relative z-10 border border-[#2b3163] group px-8 py-2 rounded-xl">
                        <span className="relative z-10 text-[#2b3163] group-hover:text-white text-base lg:text-xl duration-500">
                          {translations.seeDetails}{" "}
                          <FaEye className="inline mb-[2px] ml-[2px]" />
                        </span>
                        <span className="absolute w-full h-full bg-[#2b3163] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                        <span className="absolute w-full h-full bg-[#2b3163] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeRoomsCards;
