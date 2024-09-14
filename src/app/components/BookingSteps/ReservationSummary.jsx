"use client";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { useRoomsAndCurrency } from "@/app/contexts/RoomsAndCurrencyContext";
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
      .sendForm("service_smimw5k", "template_q2jitlf", form.current, "rZ6_7d53He4pfv50b")
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

  return (
    <>
      {/* <form ref={form} onSubmit={sendEmail}> */}
      <form >
        <div className="p-4 bg-white">
          <h2 className="text-lg font-medium text-gray-900">
            Resumen de la Reserva
          </h2>
          
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
          <p>
            <strong>Tipo de Habitación:</strong> {roomName}
          </p>
          <p>
            <strong>Nombre:</strong> {name + " " + lastName}
          </p>
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
        <RoomSumary
          id="double"
          roomType={translations.dlbBedRoom.title}
          bathRoomStuffTitle={translations.dlbBedRoom.bathRoomStuffTitle}
          roomStuffTitle={translations.dlbBedRoom.roomStuffTitle}
          viewsTitle={translations.dlbBedRoom.viewsTitle}
          noSmokingTitle={translations.dlbBedRoom.noSmokingTitle}
          noSmoking={translations.dlbBedRoom.noSmoking}
          {...getRoomInfo(0)}
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
