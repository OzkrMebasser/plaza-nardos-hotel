"use client";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { useRoomsAndCurrency } from "@/app/contexts/RoomsAndCurrencyContext";


const ReservationSummary = ({ data }) => {
  const { getTranslations } = useLanguage();
  const translations = getTranslations();

  if (!data) return null;

  const { roomType, numberOfPeople, checkInDate, checkOutDate, totalPrice } = data;

  const roomName = translations[roomType]?.title || "Habitación desconocida";
  // console.log( roomName)
  // roomType={translations.dlbBedRoom.title}

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-medium text-gray-900">Resumen de la Reserva</h2>
      <p><strong>Tipo de Habitación:</strong> {roomName}</p>
      <p><strong>Número de Personas:</strong> {numberOfPeople}</p>
      <p><strong>Check-In:</strong> {checkInDate}</p>
      <p><strong>Check-Out:</strong> {checkOutDate}</p>
      <p><strong>Total a Pagar:</strong> {totalPrice}</p>
      
    </div>
  );
};

export default ReservationSummary;
