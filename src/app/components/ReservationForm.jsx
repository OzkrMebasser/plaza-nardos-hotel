"use client";
import React, { useEffect, useState } from "react";
import { useRoomsAndCurrency } from "../contexts/RoomsAndCurrencyContext";

const ReservationForm = () => {
  const { roomsData, currency } = useRoomsAndCurrency();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState(2); // Default to 2

  useEffect(() => {
    if (roomsData && roomsData.length > 0) {
      setSelectedRoom(roomsData[0]);
    }
  }, [roomsData]);

  const handleRoomChange = (e) => {
    const roomType = e.target.value;
    const room = roomsData.find((r) => r.roomType === roomType);

    setSelectedRoom(room);
    setNumberOfPeople(2); // Reset number of people to default
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

  if (!selectedRoom) return null;

  // Get unique room types
  const uniqueRoomTypes = [...new Set(roomsData.map((room) => room.roomType))];

  // Get available capacities for the selected room type
  const availableCapacities = roomsData
    .filter((r) => r.roomType === selectedRoom.roomType)
    .map((r) => r.capacity);

  // Calculate total price
  const totalPrice = (
    selectedRoom.price[currency] + selectedRoom.fees[currency]
  ).toFixed(2);

  return (
    <section className="flex w-full bg-red-600 lg:px-4  justify-center items-center">
      <form className="flex-wrap lg:flex   bg-green-500 w-auto justify-center lg:space-x-20 items-center py-4 ">
        <div>
          <label className="block">Selecciona el tipo de habitación:</label>
          <select
            className="border rounded p-2"
            onChange={handleRoomChange}
            value={selectedRoom.roomType}
          >
            {uniqueRoomTypes.map((roomType) => (
              <option key={roomType} value={roomType}>
                {roomType}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block">Número de personas:</label>
          <select
            className="border rounded p-2"
            onChange={handlePeopleChange}
            value={numberOfPeople}
          >
            {availableCapacities.map((capacity) => (
              <option key={capacity} value={capacity}>
                {capacity}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block">Precio:</label>
          <span>
            {selectedRoom.price[currency]} {currency}
          </span>
          <label className="block">Impuestos:</label>
          <span>
            {selectedRoom.fees[currency]} {currency}
          </span>
          <label className="block">Total:</label>
          <span>
            {totalPrice} {currency}
          </span>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded h-[3rem]"
        >
          Reservar
        </button>
      </form>
    </section>
  );
};

export default ReservationForm;
