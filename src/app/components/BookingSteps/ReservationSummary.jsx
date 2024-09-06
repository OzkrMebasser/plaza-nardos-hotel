"use client";

const ReservationSummary = ({ data }) => {
  if (!data) return null;

  const { checkInDate, checkOutDate, numberOfPeople, totalPrice, currency } = data;

  return (
    <div>
      <h2>Resumen de la Reservación</h2>
      <p>Fecha de Check-In: {checkInDate}</p>
      <p>Fecha de Check-Out: {checkOutDate}</p>
      <p>Número de Personas: {numberOfPeople}</p>
      <p>
        Precio Total:{currency === "EUR" ? "€" : "$"} {totalPrice} {currency}
      </p>
      <button
        onClick={() => (window.location.href = "/confirmacion")}
        className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded"
      >
        Finalizar
      </button>
    </div>
  );
};

export default ReservationSummary;
