"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "@/app/contexts/LanguageContext"; // Ajusta la ruta según tu estructura
import { useRoomsAndCurrency } from "@/app/contexts/RoomsAndCurrencyContext"; // Ajusta la ruta según tu estructura

const ReservationForm = ({ onSubmit }) => {
  const { getTranslations } = useLanguage();
  const translations = getTranslations();
  const { roomsData, currency } = useRoomsAndCurrency();
  console.log(currency)
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState(2); // Default to 2
  const [formData, setFormData] = useState({
    roomType: "",
    checkInDate: "",
    checkOutDate: "",
  });

  useEffect(() => {
    if (roomsData && roomsData.length > 0 && !selectedRoom) {
      setSelectedRoom(roomsData[0]);
      setFormData((prev) => ({
        ...prev,
        roomType: roomsData[0].roomType,
      }));
    }
  }, [roomsData, selectedRoom]);

  useEffect(() => {
    if (selectedRoom) {
      setFormData((prev) => ({
        ...prev,
        roomType: selectedRoom.roomType,
      }));
    }
  }, [selectedRoom]);

  const handleRoomChange = (e) => {
    const translatedRoomType = e.target.value;
    const originalRoomType = roomsData.find(
      (r) => translations[r.roomType]?.title === translatedRoomType
    )?.roomType;

    const room = roomsData.find((r) => r.roomType === originalRoomType);

    setSelectedRoom(room);
    setNumberOfPeople(2); // Reset number of people to default
    setFormData((prev) => ({
      ...prev,
      roomType: originalRoomType,
    }));
  };

  const handlePeopleChange = (e) => {
    const selectedNumber = Number(e.target.value);
    setNumberOfPeople(selectedNumber);

    const room = roomsData.find(
      (r) => r.roomType === selectedRoom.roomType && r.capacity === selectedNumber
    );
    if (room) {
      setSelectedRoom(room);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateTotalPrice = () => {
    if (!selectedRoom || !formData.checkInDate || !formData.checkOutDate)
      return 0;

    const checkInDate = new Date(formData.checkInDate);
    const checkOutDate = new Date(formData.checkOutDate);
    const days = Math.ceil(
      (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)
    );

    const pricePerNight = selectedRoom.price[currency] || 0;
    const fees = selectedRoom.fees[currency] || 0;

    return (pricePerNight * days + fees).toFixed(2);
  };

  


  const handleSubmit = (e) => {
    e.preventDefault();
    const totalPrice = calculateTotalPrice();
    onSubmit({ ...formData, numberOfPeople, totalPrice });
  };

  if (!selectedRoom) return null;

  const uniqueRoomTypes = [...new Set(roomsData.map((room) => room.roomType))];
  const roomTypeTranslations = uniqueRoomTypes.map(
    (roomType) => translations[roomType]?.title || roomType
  );
  const availableCapacities = roomsData
    .filter((r) => r.roomType === selectedRoom.roomType)
    .map((r) => r.capacity);

  const totalPrice = parseFloat(calculateTotalPrice());

  console.log(typeof totalPrice)

  const formatNumber = (number) => number.toLocaleString();

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="roomType" className="block text-sm font-medium text-gray-700">
          Tipo de Habitación
        </label>
        <select
          id="roomType"
          name="roomType"
          onChange={handleRoomChange}
          value={translations[selectedRoom?.roomType]?.title || ""}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          {roomTypeTranslations.map((roomType) => (
            <option key={roomType} value={roomType}>
              {roomType}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="numberOfPeople" className="block text-sm font-medium text-gray-700">
          Número de Personas
        </label>
        <select
          id="numberOfPeople"
          name="numberOfPeople"
          onChange={handlePeopleChange}
          value={numberOfPeople}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          {availableCapacities.map((capacity) => (
            <option key={capacity} value={capacity}>
              {capacity}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700">
          Fecha de Check-In
        </label>
        <input
          type="date"
          name="checkInDate"
          id="checkInDate"
          value={formData.checkInDate}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700">
          Fecha de Check-Out
        </label>
        <input
          type="date"
          name="checkOutDate"
          id="checkOutDate"
          value={formData.checkOutDate}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block">Precio por Noche:</label>
        <span>
          {selectedRoom.price[currency]} {currency}
        </span>
        <label className="block">Impuestos:</label>
        <span>
          {selectedRoom.fees[currency]} {currency}
        </span>
        <label className="block">Total:</label>
        <span>
        
        {currency === "EUR" ? "€" : "$"}{" "} {formatNumber(totalPrice)}{currency}
        </span>
      </div>

      <button type="submit" className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded">
        Continuar
      </button>
    </form>
  );
};

export default ReservationForm;
