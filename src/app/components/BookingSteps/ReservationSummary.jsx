"use client";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { useRoomsAndCurrency } from "@/app/contexts/RoomsAndCurrencyContext";

const ReservationSummary = ({ data, personalData, onSubmit, onBack }) => {
  console.log(data);
  const { getTranslations } = useLanguage();
  const translations = getTranslations();

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
  console.log(checkOutDate);
  // roomType={translations.dlbBedRoom.title}

  return (
    <>
      <div className="p-4 bg-white">
        <h2 className="text-lg font-medium text-gray-900">
          Resumen de la Reserva
        </h2>
        <p>
          <strong>Tipo de Habitación:</strong> {roomName}
        </p>
        <p>
          <strong>Nombre:</strong> {name + " " + lastName}
        </p>
        <p>
          <strong>Número de Personas:</strong> {numberOfPeople}
        </p>
        <p>
          <strong>Check-In:</strong> {checkInDate}
        </p>
        <p>
          <strong>Arriving time: </strong> {estimatedArrivalTime}
        </p>
        <p>
          <strong>Check-Out:</strong> {checkOutDate}
        </p>
        <p>
          <strong>Total a Pagar:</strong> {totalPrice}
        </p>
      </div>
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
          onClick={() => onSubmit()}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Confirmar
        </button>
      </div>
    </>
  );
};

export default ReservationSummary;
