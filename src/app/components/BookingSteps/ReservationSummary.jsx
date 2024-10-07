"use client";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { useRoomsAndCurrency } from "@/app/contexts/RoomsAndCurrencyContext";
import { PiCheckSquareFill } from "react-icons/pi";
import GooglyEyesB from "@/app/components/GooglyEyesB";
import RoomSumary from "./RoomSumary";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";


const ReservationSummary = ({ data, personalData, onSubmit, onBack }) => {
  const form = useRef();
  const { getTranslations } = useLanguage();
  const { roomsData, currency } = useRoomsAndCurrency();
  const translations = getTranslations();
  const [loading, setLoading] = useState(false);

  const filteredRooms = roomsData.filter((room) => room.homeShow);

  if (!data) return null;

  const {
    roomType,
    numberOfPeople,
    checkInDate,
    checkOutDate,
    estimatedArrivalTime,
    totalPrice,
  } = data;

   // Calcular noches aquí
   const calculateNights = (checkIn, checkOut) => {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    return Math.ceil((checkOutDate - checkInDate) / (1000 * 3600 * 24)); // Convertir ms a días
  };
  

  const nights = calculateNights(checkInDate, checkOutDate);

  const { name, lastName, email, phone, request, country, city } = personalData;

  const roomName = translations[roomType]?.title || "Habitación desconocida";

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_smimw5k",
        "template_q2jitlf",
        form.current,
        "rZ6_7d53He4pfv50b"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result);
          onSubmit();
        },
        (error) => {
          console.log("FAILED...", error.text);
          // Handle error here
        }
      )
      .finally(() => setLoading(false));
  };

  const roomTypeMapping = {
    dlbBedRoom: 0,
    dlbDeluxe: 1,
    dlbDeluxeWithBalcony: 2,
    tripleDeluxe: 3,
    cuadrupleBedRoom: 4,
  };

  let roomIndex = roomTypeMapping[roomType] || 0;

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
  const today = new Date().toISOString().split("T")[0];

  const localeLng = translations.bookingInfo.localeLng;

  const formatDate = (dateString) => {
    const date = new Date(dateString + "T00:00:00");
    return date.toLocaleDateString(`${localeLng}`, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatNumber = (number) => number.toLocaleString();

  const grandTotal = `${currency === "EUR" ? "€" : "$"} ${formatNumber(totalPrice)}
  ${currency}`

  return (
    <form ref={form} onSubmit={sendEmail}>
     <section className="relative lg:mt-[8rem]"> <GooglyEyesB /></section>
      <div className="p-4 bg-white">
        
        {/* Hidden inputs for emailjs */}
        {Object.entries({
          roomName,
          fullName: `${name} ${lastName}`,
          email,
          phone,
          country,
          city,
          numberOfPeople,
          checkInDate: `${formatDate(checkInDate)}`,
          estimatedArrivalTime,
          checkOutDate: `${formatDate(checkOutDate)}`,
          totalPrice: grandTotal,
          request,
        }).map(([key, value]) => (
          <input
            key={key}
            type="text"
            name={key}
            value={value}
            readOnly
            className="hidden"
          />
        ))}
      </div>

      <div className=" lg:-mt-[21rem] lg:relative">
        <h3 className="text-center font-bold uppercase text-[#2b3163]  ">
          {translations.bookingInfo.reviewBooking}
        </h3>
        
        <hr className="w-full md:w-[35%] mt-2 mb-2" />
        {Object.entries({
          "Tipo de Habitación": roomName,
          "Nombre de la reserva": `${name} ${lastName}`,
          Email: email,
          Teléfono: phone,
          País: country,
          Ciudad: city,
          "Número de Personas": numberOfPeople,
          "Check-In": formatDate(checkInDate),
          "Hora Estimada de Llegada": `${estimatedArrivalTime} hrs`,
          "Check-Out": formatDate(checkOutDate),
          Noches: nights,
          // {/**ESTAMOS TRABAJANDO AQUI YA QUE MODIFICA EL SIMBOLO PERO NO EL PRECIO */}
          "Total a Pagar": `${currency === "EUR" ? "€" : "$"} ${formatNumber(totalPrice)}
  ${currency}` ,
          ...(request && { "Solicitudes Especiales": request }),
        }).map(([label, value]) => (
          <div key={label} className="">
            <label className="block text-[1rem] font-medium text-[#2b3163]">
              
              {label}:
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

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2 bg-gray-300 text-[#2b3163] font-semibold rounded"
        >
          {translations.bookingInfo.back}
        </button>
        <button
          type="submit"
          className={`px-4 py-2 bg-[#2b3163] text-white rounded ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? `${translations.bookingInfo.sendig}` : `${translations.bookingInfo.confirm}`}
        </button>
      </div>
    </form>
  );
};
export default ReservationSummary;
