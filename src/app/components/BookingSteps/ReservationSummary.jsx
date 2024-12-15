"use client";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { useRoomsAndCurrency } from "@/app/contexts/RoomsAndCurrencyContext";
import { PiCheckSquareFill } from "react-icons/pi";
import GooglyEyesB from "@/app/components/GooglyEyesB";
import RoomSumary from "./RoomSumary";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ReservationSummary = ({ data, personalData, onSubmit, onBack }) => {
  // Referencia al formulario para usar con EmailJS
  const form = useRef();

  // Contextos para obtener traducciones, datos de habitaciones y moneda
  const { getTranslations } = useLanguage();
  const { roomsData, currency } = useRoomsAndCurrency();
  const translations = getTranslations();

  // Estado para gestionar la carga durante el envío del formulario
  const [loading, setLoading] = useState(false);

  // Filtrar habitaciones para mostrar solo las que están activas en el home
  const filteredRooms = roomsData.filter((room) => room.homeShow);

  // Validación inicial: Si no hay datos, no renderiza el componente
  if (!data) return null;

  // Desestructuración de los datos de reserva
  const {
    roomType,
    numberOfPeople,
    checkInDate,
    checkOutDate,
    estimatedArrivalTime,
    totalPrice,
    grandTotalPriceCurrency,
  } = data;

  // Calcular noches entre fechas de check-in y check-out
  const calculateNights = (checkIn, checkOut) => {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    return Math.ceil((checkOutDate - checkInDate) / (1000 * 3600 * 24)); // Convertir ms a días
  };
  const nights = calculateNights(checkInDate, checkOutDate);

  // Desestructuración de los datos personales
  const { name, lastName, email, phone, request, country, city } = personalData;

  // Obtener el nombre traducido de la habitación
  const roomName = translations[roomType]?.title || "Habitación desconocida";

  // Mapeo de los tipos de habitación a índices
  const roomTypeMapping = {
    dlbBedRoom: 0,
    dlbDeluxe: 1,
    dlbDeluxeWithBalcony: 2,
    tripleDeluxe: 3,
    cuadrupleBedRoom: 4,
  };
  let roomIndex = roomTypeMapping[roomType] || 0;

  // Función para obtener información detallada de una habitación
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

  // Formatear una fecha a texto legible según el idioma
  const formatDate = (dateString) => {
    const date = new Date(dateString + "T00:00:00");
    const localeLng = translations.bookingInfo.localeLng;
    return date.toLocaleDateString(localeLng, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Formatear un número para incluir separadores de miles
  const formatNumber = (number) => number.toLocaleString();

  // Generar el precio total formateado con moneda
  const grandTotal = `${currency === "EUR" ? "€" : "$"} ${formatNumber(
    totalPrice
  )} ${currency}`;

  // Enviar correo electrónico con EmailJS
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
          onSubmit(); // Ejecutar función para confirmar la reserva
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      )
      .finally(() => setLoading(false));
  };

  // Renderizado del formulario de resumen de reserva
  return (
    <form ref={form} onSubmit={sendEmail}>
      {/* Decoración visual */}
      <section className="relative lg:mt-[8rem]">
        <GooglyEyesB />
      </section>

      {/* Inputs ocultos para enviar datos a través de EmailJS */}
      <div className="p-4 bg-white">
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
          totalPrice: grandTotalPriceCurrency,
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

      {/* Información de la reserva */}
      <div className="lg:-mt-[21rem] lg:relative">
        <h3 className="text-center font-bold uppercase text-[#2b3163]">
          {translations.bookingInfo.reviewBooking}
        </h3>
        <hr className="w-full md:w-[35%] mt-2 mb-2" />
        {Object.entries({
          [translations.bookingInfo.roomType]: roomName,
          [translations.bookingInfo.firstName]: `${name} ${lastName}`,
          [translations.bookingInfo.email]: email,
          [translations.bookingInfo.phone]: phone,
          [translations.bookingInfo.country]: country,
          [translations.bookingInfo.city]: city,
          [translations.bookingInfo.numberOfPax]: numberOfPeople,
          [translations.bookingInfo.arrivalDate]: formatDate(checkInDate),
          [translations.bookingInfo.arrivalTime]: `${estimatedArrivalTime} hrs`,
          [translations.bookingInfo.departureDate]: formatDate(checkOutDate),
          [translations.bookingInfo.nights]: nights,
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

      {/* Resumen de la habitación */}
      <RoomSumary
        roomType={translations[roomType]?.title}
        bathRoomStuffTitle={translations[roomType]?.bathRoomStuffTitle}
        roomStuffTitle={translations[roomType]?.roomStuffTitle}
        viewsTitle={translations[roomType]?.viewsTitle}
        noSmokingTitle={translations[roomType]?.noSmokingTitle}
        noSmoking={translations[roomType]?.noSmoking}
        {...getRoomInfo(roomIndex)}
      />

      {/* Botones de navegación */}
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
          {loading
            ? `${translations.bookingInfo.sending}`
            : `${translations.bookingInfo.confirm}`}
        </button>
      </div>
    </form>
  );
};

export default ReservationSummary;
