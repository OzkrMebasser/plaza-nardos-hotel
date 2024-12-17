"use client";

import { useReactToPrint } from "react-to-print"; // Debe estar al inicio
import { PiCheckSquareFill, PiPhoneCallFill } from "react-icons/pi";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { useRoomsAndCurrency } from "@/app/contexts/RoomsAndCurrencyContext";
import RoomSumary from "./RoomSumary";
import CallCenter from "../CallCenter";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

const logo =
  "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2Flogo-plaza-nardos-bgt.PNG?alt=media&token=3fd75ec3-3b07-496a-94b2-835db367653f";

const FinishBooking = ({ data, personalData }) => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  const printFn = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "my booking",
  });

  useEffect(() => {
    const noPrintSection = document.getElementById("no-visible-to-print");
    setIsVisible(!!noPrintSection);

    return () => {
      setIsVisible(false);
    };
  }, []);

  const { getTranslations } = useLanguage();
  const { roomsData } = useRoomsAndCurrency();

  const translations = getTranslations();
  const filteredRooms = roomsData.filter((room) => room.homeShow);

  if (!data) return null;

  const {
    roomType,
    numberOfPeople,
    checkInDate,
    checkOutDate,
    estimatedArrivalTime,
    grandTotalPriceCurrency,
  } = data;

  const { name, lastName, email, phone, request, country, city } = personalData;
  const roomName = translations[roomType]?.title || "Habitación desconocida";

  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10);

  const formatDate = (dateString) => {
    const date = new Date(dateString + "T00:00:00");
    return date.toLocaleDateString(`${translations.bookingInfo.localeLng}`, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const calculateNights = (checkIn, checkOut) => {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    return Math.ceil((checkOutDate - checkInDate) / (1000 * 3600 * 24));
  };

  const nights = calculateNights(checkInDate, checkOutDate);

  // Obtener información detallada de la habitación
  const getRoomInfo = (index) => {
    const room = filteredRooms[index];
    return {
      images_A: room.imageHomeCards,
      images_B: room.images_B,
      description: translations[room.description].description,
      roomAmenities: [room],
      bathroomStuff: [room],
      roomStuff: [room],
      views: [room],
    };
  };

  // Determinar el índice de la habitación según el tipo
  let roomIndex = 0;
  if (roomType === "dlbBedRoom") roomIndex = 0;
  else if (roomType === "dlbDeluxe") roomIndex = 1;
  else if (roomType === "dlbDeluxeWithBalcony") roomIndex = 2;
  else if (roomType === "tripleDeluxe") roomIndex = 3;
  else if (roomType === "cuadrupleBedRoom") roomIndex = 4;

  return (
    <>
      <div className="px-4 pt-8 rounded-lg lg:pt-8" ref={componentRef}>
        <div>
          <h3 className="text-center font-bold uppercase text-[#2b3163]">
            {translations.bookingInfo.preBookingDone}
          </h3>
          <section
            id="no-visible-to-print"
            className="lg:absolute print:hidden"
          >
            <CallCenter />
          </section>
        </div>
        <div>
          {Object.entries({
            [translations.bookingInfo.roomType]: roomName,
            [translations.bookingInfo.firstName]: `${name} ${lastName}`,
            [translations.bookingInfo.email]: email,
            [translations.bookingInfo.phone]: phone,
            [translations.bookingInfo.country]: country,
            [translations.bookingInfo.city]: city,
            [translations.bookingInfo.numberOfPax]: numberOfPeople,
            [translations.bookingInfo.arrivalDate]: formatDate(checkInDate),
            [translations.bookingInfo.departureDate]: formatDate(checkOutDate),
            [translations.bookingInfo.nights]: nights,
            [translations.bookingInfo
              .arrivalTime]: `${estimatedArrivalTime} hrs`,
            [translations.bookingInfo.grandTotal]: grandTotalPriceCurrency,
            ...(request && { "Solicitudes Especiales": request }),
          }).map(([label, value]) => (
            <div key={label}>
              <label className="block text-[1rem] font-medium text-[#2b3163]">
                {label}
              </label>
              <strong>
                <p className="text-[#2b3163]">
                  <PiCheckSquareFill className="inline h-5 w-5" /> {value}
                </p>
              </strong>
              <hr className="w-full md:w-[35%] mt-2 mb-2" />
            </div>
          ))}
        </div>
        <RoomSumary
          roomType={translations[roomType]?.title}
          bathRoomStuffTitle={translations[roomType]?.bathRoomStuffTitle}
          roomStuffTitle={translations[roomType]?.roomStuffTitle}
          viewsTitle={translations[roomType]?.viewsTitle}
          noSmokingTitle={translations[roomType]?.noSmokingTitle}
          noSmoking={translations[roomType]?.noSmoking}
          {...getRoomInfo(roomIndex)}
        />

        <div className="mt-8 flex justify-center">
          <img src={logo} alt="Logo" className="w-auto h-24 hidden-on-print" />
        </div>
        <p className="text-center text-[#2b3163]">
          ¿ Dudas ?, Contáctanos{" "} <br />
          <PiPhoneCallFill className="h-5 w-5 mr-2 inline" />
          +52 984 361 8302
        </p>
        <span className="text-slate-500 p-4 flex justify-end">
          Fecha de pre-reserva {formattedDate}
        </span>
      </div>

      <div className="mt-4 flex gap-2 justify-around text-sm lg:text-lg">
        <button
          className="px-4 py-2 bg-green-600 text-white rounded"
          onClick={printFn}
        >
          Imprimir
        </button>
        <Link href={"/"}>
          <button className="px-4 py-2 bg-red-600 text-white rounded">
            Cerrar
          </button>
        </Link>
      </div>
    </>
  );
};

export default FinishBooking;
