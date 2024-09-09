"use client";

const ReservationSummary = ({ data }) => {
  if (!data) return null;

  const { roomType, numberOfPeople, checkInDate, checkOutDate, totalPrice } = data;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-medium text-gray-900">Resumen de la Reserva</h2>
      <p><strong>Tipo de Habitación:</strong> {roomType}</p>
      <p><strong>Número de Personas:</strong> {numberOfPeople}</p>
      <p><strong>Check-In:</strong> {checkInDate}</p>
      <p><strong>Check-Out:</strong> {checkOutDate}</p>
      <p><strong>Total a Pagar:</strong> {totalPrice}</p>
    </div>
  );
};

export default ReservationSummary;
