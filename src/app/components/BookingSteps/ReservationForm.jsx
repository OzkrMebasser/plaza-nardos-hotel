"use client";
import { useState } from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { useRoomsAndCurrency } from "@/app/contexts/RoomsAndCurrencyContext";

const ReservationForm = ({ onSubmit }) => {
  const { getTranslations } = useLanguage();
  const translations = getTranslations();
  const { roomsData, currency } = useRoomsAndCurrency();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [formData, setFormData] = useState({
    roomType: "",
    checkInDate: "",
    checkOutDate: "",
  });

  const today = new Date().toISOString().split("T")[0];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleRoomChange = (e) => {
    const translatedRoomType = e.target.value;
    const originalRoomType = roomsData.find(
      (r) => translations[r.roomType]?.title === translatedRoomType
    )?.roomType;

    const room = roomsData.find((r) => r.roomType === originalRoomType);

    setSelectedRoom(room);
    setNumberOfPeople(2);
    setFormData((prev) => ({
      ...prev,
      roomType: originalRoomType,
    }));
  };

  const handlePeopleChange = (e) => {
    const selectedNumber = Number(e.target.value);
    setNumberOfPeople(selectedNumber);

    const room = roomsData.find(
      (r) =>
        r.roomType === selectedRoom.roomType && r.capacity === selectedNumber
    );
    if (room) {
      setSelectedRoom(room);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateNights = () => {
    if (!formData.checkInDate || !formData.checkOutDate) return 0;

    const checkInDate = new Date(formData.checkInDate);
    const checkOutDate = new Date(formData.checkOutDate);

    const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);
    return Math.ceil(daysDifference);
  };

  const calculateTotalPrice = () => {
    if (!selectedRoom || !formData.checkInDate || !formData.checkOutDate)
      return 0;

    const nights = calculateNights();
    const pricePerNight = selectedRoom.price[currency] || 0;
    const fees = selectedRoom.fees[currency] || 0;

    return (pricePerNight * nights + fees).toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalPrice = calculateTotalPrice();
    onSubmit({ ...formData, numberOfPeople, totalPrice });
  };

  const uniqueRoomTypes = [...new Set(roomsData.map((room) => room.roomType))];
  const roomTypeTranslations = uniqueRoomTypes.map(
    (roomType) => translations[roomType]?.title || roomType
  );
  const availableCapacities = roomsData
    .filter((r) => r.roomType === selectedRoom?.roomType)
    .map((r) => r.capacity);

  const totalPrice = parseFloat(calculateTotalPrice());
  const formatNumber = (number) => number.toLocaleString();

  return (
    <form onSubmit={handleSubmit} className="space-y-4 ">
      <div className="mt-[3rem]">
        <label
          htmlFor="roomType"
          className="block text-sm font-medium text-gray-700"
        >
          Tipo de Habitación
        </label>
        <select
          id="roomType"
          name="roomType"
          onChange={handleRoomChange}
          value={translations[selectedRoom?.roomType]?.title || ""}
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        >
          <option value="">Selecciona una habitación</option>
          {roomTypeTranslations.map((roomType) => (
            <option key={roomType} value={roomType}>
              {roomType}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="numberOfPeople"
          className="block text-sm font-medium text-gray-700"
        >
          Número de Personas
        </label>
        <select
          id="numberOfPeople"
          name="numberOfPeople"
          onChange={handlePeopleChange}
          value={numberOfPeople}
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        >
          <option value="">Selecciona el número de personas</option>
          {availableCapacities.map((capacity) => (
            <option key={capacity} value={capacity}>
              {capacity}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="checkInDate"
          className="block text-sm font-medium text-gray-700"
        >
          Fecha de Check-In
        </label>
        <input
          type="date"
          name="checkInDate"
          id="checkInDate"
          value={formData.checkInDate}
          onChange={handleChange}
          min={today}
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        />
        {formData.checkInDate && (
          <p>Check-In: {formatDate(formData.checkInDate)}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="checkOutDate"
          className="block text-sm font-medium text-gray-700"
        >
          Fecha de Check-Out
        </label>
        <input
          type="date"
          name="checkOutDate"
          id="checkOutDate"
          value={formData.checkOutDate}
          onChange={handleChange}
          min={formData.checkInDate || today}
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        />
        {formData.checkOutDate && (
          <p>Check-Out: {formatDate(formData.checkOutDate)}</p>
        )}
      </div>

      <label className="block">
        Total de noches: {calculateNights()} noches
      </label>

      <div>
        <label className="block">Precio por Noche:</label>
        <span>
          {selectedRoom?.price[currency]} {currency}
        </span>
        <label className="block">Impuestos:</label>
        <span>
          {selectedRoom?.fees[currency]} {currency}
        </span>
        <label className="block">Total:</label>
        <span>
          {currency === "EUR" ? "€" : "$"} {formatNumber(totalPrice)} {currency}
        </span>
      </div>
    </form>
  );
};

export default ReservationForm;
