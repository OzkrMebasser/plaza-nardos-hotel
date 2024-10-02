"use client";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { useRoomsAndCurrency } from "@/app/contexts/RoomsAndCurrencyContext";
import { PiCheckSquareFill } from "react-icons/pi";
import GooglyEyesB from "@/app/components/GooglyEyesB";
import RoomSumary from "./RoomSumary";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ReservationSummary = ({ data, personalData, onSubmit, onBack }) => {
  const form = useRef();
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
    totalPrice,
  } = data;

  const { name, lastName, email, phone, request, country, city } = personalData;

  const roomName = translations[roomType]?.title || "Habitación desconocida";

  const sendEmail = (e) => {
    e.preventDefault();

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
        }
      );
  };

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

  // Definir el índice dinámicamente basado en roomType
  let roomIndex = 0;
  if (roomType === "dlbBedRoom") {
    roomIndex = 0;
  } else if (roomType === "dlbDeluxe") {
    roomIndex = 1;
  } else if (roomType === "dlbDeluxeWithBalcony") {
    roomIndex = 2;
  } else if (roomType === "tripleDeluxe") {
    roomIndex = 3;
  } else if (roomType === "cuadrupleBedRoom") {
    roomIndex = 4;
  }

  // const roomInfo = getRoomInfo(roomIndex);

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <div className="p-4 bg-white">
          <h3 className="text-center font-bold uppercase text-[#2b3163] mb-4 mt-4">
            {translations.bookingInfo.reviewBooking}
          </h3>
          <GooglyEyesB />
          {/* Inputs ocultos para emailjs */}
          <input
            type="text"
            name="roomName"
            value={roomName}
            readOnly
            className="hidden"
          />
          <input
            type="text"
            name="fullName"
            value={`${name} ${lastName}`}
            readOnly
            className="hidden"
          />
          <input
            type="email"
            name="email"
            value={email}
            readOnly
            className="hidden"
          />
          <input
            type="text"
            name="phone"
            value={phone}
            readOnly
            className="hidden"
          />
          <input
            type="text"
            name="country"
            value={country}
            readOnly
            className="hidden"
          />
          <input
            type="text"
            name="city"
            value={city}
            readOnly
            className="hidden"
          />
          <input
            type="text"
            name="numberOfPeople"
            value={numberOfPeople}
            readOnly
            className="hidden"
          />
          <input
            type="text"
            name="checkInDate"
            value={checkInDate}
            readOnly
            className="hidden"
          />
          <input
            type="text"
            name="estimatedArrivalTime"
            value={estimatedArrivalTime}
            readOnly
            className="hidden"
          />
          <input
            type="text"
            name="checkOutDate"
            value={checkOutDate}
            readOnly
            className="hidden"
          />
          <input
            type="text"
            name="totalPrice"
            value={totalPrice}
            readOnly
            className="hidden"
          />
          <input
            type="text"
            name="request"
            value={request}
            readOnly
            className="hidden"
          />

          {/* Renderizado de la información visible */}
          <hr className="w-full md:w-[50%] mt-2 mb-2" />
          <label className="block text-[1rem]  font-medium text-[#2b3163]">
            Tipo de Habitación:
          </label>
          <strong>
            <p className=" text-[#2b3163] ">
              {" "}
              <PiCheckSquareFill className="inline h-5 w-5" /> {roomName}
            </p>
          </strong>
          <hr className="w-full md:w-[50%] mt-2 mb-2" />
          <label className="block text-[1rem]  font-medium text-[#2b3163]">
            Nombre de la reserva:
          </label>
          <strong>
            <p className=" text-[#2b3163] ">
              {" "}
              <PiCheckSquareFill className="inline h-5 w-5" />{" "}
              {name + " " + lastName}
            </p>
          </strong>
          <hr className="w-full md:w-[50%] mt-2 mb-2" />
          {/* <p>
            <strong>Nombre:</strong> {name + " " + lastName}
          </p> */}
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Teléfono:</strong> {phone}
          </p>
          <p>
            <strong>País:</strong> {country}
          </p>
          <p>
            <strong>Ciudad:</strong> {city}
          </p>
          <p>
            <strong>Número de Personas:</strong> {numberOfPeople}
          </p>
          <p>
            <strong>Check-In:</strong> {checkInDate}
          </p>
          <p>
            <strong>Hora Estimada de Llegada:</strong> {estimatedArrivalTime}
          </p>
          <p>
            <strong>Check-Out:</strong> {checkOutDate}
          </p>
          <p>
            <strong>Total a Pagar:</strong> {totalPrice}
          </p>
          {request && (
            <p>
              <strong>Solicitudes Especiales:</strong> {request}
            </p>
          )}
        </div>

        {/* Componente RoomSummary con datos dinámicos */}
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
            className="px-4 py-2 bg-gray-300 text-black rounded"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Confirmar
          </button>
        </div>
      </form>
    </>
  );
};

export default ReservationSummary;
