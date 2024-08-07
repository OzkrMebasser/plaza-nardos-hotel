"use client";
import { useState, useEffect } from "react";
import RoomImgSlider from "@/app/components/Sliders/RoomImgSlider";
import { useRoomsAndCurrency } from "@/app/contexts/RoomsAndCurrencyContext";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { FaInfoCircle, FaBed } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";

import Title from "../Title";

const HomeRoomsCards = () => {
  const { roomsData, setRoomsData, currency } = useRoomsAndCurrency();
  const { getTranslations } = useLanguage();
  const translations = getTranslations();
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    setRoomsData(roomsData);
  }, [roomsData, setRoomsData]);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize), { passive: true };

    return () => {
      window.removeEventListener("resize", handleResize, { passive: true });
    };
  }, []);

  const formatNumber = (number) => number.toLocaleString();

  const filteredRooms = roomsData.filter(room => room.homeShow);


  return (
    <>
      <div className=" mx-auto bg-gray-200 p-6 ">
        {/* <Title title={"Nuestras habitaciones"} className="mt-4" /> */}
        <Title title={translations.homeTitles.ourRooms} className="mt-4" />
        <div className="flex items-center justify-center h-full    ">
          <div className="w-full lg:max-w-screen-lg lg:mx-auto mt-6 ">
            {filteredRooms.map((room) => (
              <div
                key={room.id}
                className="w-full mb-8 lg:flex lg:justify-center"
              >
                <div
                  className={`lg:h-[20rem] rounded-md shadow-lg max-w-5xl bg-white sm:flex lg:w-full  hover:shadow-[0_10px_20px_rgba(0,0,0,0.38)] transition-transform duration-300 ${
                    isMobile ? "hover:scale-95" : "hover:scale-110"
                  }`}
                >
                  <div
                    className="w-full sm:w-[30%] h-48 sm:h-auto relative bg-cover bg-center shadow-inner border hotel-cover"
                    // style={{ backgroundImage: `url(${room.imageUrl})` }}
                  >
                    <RoomImgSlider imageHomeCards={room.imageHomeCards} />
                  </div>
                  <div className="w-full sm:w-3/4 p-3 lg:px-8">
                    <div className="flex justify-between items-center border-b pb-3">
                      <div>
                        <div className="sm:flex items-center mb-1">
                          <h2 className="mb-2 text-lg lg:text-2xl font-semibold text-[#2b3163]">
                            {translations[room.roomType]?.title}
                          </h2>
                        </div>
                        <div className="flex items-center">
                          <div>
                            <FaBed className="w-5 h-5 text-[#2b3163]" />
                          </div>
                          <p className="text-sm ml-2 text-[#2b3163] font-semibold">
                            {room.beds} {""}
                            {/* {room.doubleBeds} */}
                            {translations[room.roomType]?.doubleBeds}
                            {/* {room.beds > 1 ? "s" : ""} */}
                          </p>
                        </div>
                      </div>
                      <div>
                        {isMobile ? (
                          <div className="text-right text-[.65rem] leading-tight text-[#2b3163] font-semibold">
                            <span className="">
                              {/* From */}
                              {translations.priceFrom}
                              <br />
                              {currency === "EUR" ? "€" : "$"}
                            </span>{" "}
                            <strong className="">
                              {" "}
                              {formatNumber(room.price[currency])}
                            </strong>{" "}
                            <br />
                            {/* per night */}
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
                          <div className="text-right  lg:text-lg leading-tight text-[#2b3163] font-semibold">
                            <span className="">
                              {/* From */}
                              {translations.priceFrom}{" "}
                              {/* {currency === "EUR" ? "€" : "$"} */}
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
                              {" "}
                              {formatNumber(room.price[currency])}{" "}
                            </strong>{" "}
                            <span className="text-sm inline mr-1">
                              {" "}
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
                            {/* per night */}
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
                        {/*Descrption of Room*/}
                        {translations[room.description]?.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap mt-5 items-center justify-center ">
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

                    <div className="mt-4 mb-4 lg:mt-6 flex justify-center lg:justify-end ">
                      <button className="lg:mt-0 lg:mx-0 cursor-pointer font-semibold overflow-hidden relative z-100 border border-[#2b3163] group px-8 py-2 rounded-xl">
                     <span className="relative z-10 text-[#2b3163] group-hover:text-white text-base lg:text-xl duration-500">
                        {translations.seeDetails} <FaEye className="inline mb-[2px] ml-[2px]"/>
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
