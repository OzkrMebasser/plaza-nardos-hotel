"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { useRoomsAndCurrency } from "@/app/contexts/RoomsAndCurrencyContext";
import { MdBedroomParent } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";



const RoomInfoForm = ({ onSubmit }) => {
  const { getTranslations } = useLanguage();
  const translations = getTranslations();
  const { roomsData, currency } = useRoomsAndCurrency();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const today = new Date().toISOString().split("T")[0];

  const formatDate = (dateString) => {
    const date = new Date(dateString + "T00:00:00");
    return date.toLocaleDateString("es-MX", {
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
    formik.setFieldValue("roomType", originalRoomType);
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

  const validationSchema = Yup.object({
    roomType: Yup.string().required("Tipo de habitación es requerido."),
    checkInDate: Yup.date().required("Fecha de check-in es requerida."),
    checkOutDate: Yup.date()
      .min(
        Yup.ref("checkInDate"),
        "La fecha de check-out debe ser posterior a la fecha de check-in."
      )
      .required("Fecha de check-out es requerida."),
    estimatedArrivalTime: Yup.string().required(
      "Hora estimada de llegada es requerida."
    ),
  });

  const formik = useFormik({
    initialValues: {
      roomType: "",
      checkInDate: "",
      checkOutDate: "",
      estimatedArrivalTime: "15:00",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const totalPrice = calculateTotalPrice(values);
      onSubmit({ ...values, numberOfPeople, totalPrice });
    },
  });

  const calculateNights = (values) => {
    if (!values.checkInDate || !values.checkOutDate) return 0;

    const checkInDate = new Date(values.checkInDate);
    const checkOutDate = new Date(values.checkOutDate);

    const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);
    return Math.ceil(daysDifference);
  };

  const calculateTotalPrice = (values) => {
    if (!selectedRoom || !values.checkInDate || !values.checkOutDate) return 0;

    const nights = calculateNights(values);
    const pricePerNight = selectedRoom.price[currency] || 0;
    const fees = selectedRoom.fees[currency] || 0;
    const perNight = pricePerNight + fees;
    const totalPrice = perNight * nights;

    return totalPrice;
  };

  const totalPrice = parseFloat(calculateTotalPrice(formik.values));
  const formatNumber = (number) => number.toLocaleString();

  const uniqueRoomTypes = [...new Set(roomsData.map((room) => room.roomType))];
  const roomTypeTranslations = uniqueRoomTypes.map(
    (roomType) => translations[roomType]?.title || roomType
  );
  const availableCapacities = roomsData
    .filter((r) => r.roomType === selectedRoom?.roomType)
    .map((r) => r.capacity);

  const isBeforeCheckInTime = () => {
    const selectedTime = formik.values.estimatedArrivalTime;
    return selectedTime && parseInt(selectedTime.split(":")[0]) < 15;
  };

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4 mt-12 ">
      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
        <div className="">
          <label
            htmlFor="roomType"
            className="block text-sm font-medium text-gray-700 align-middle"
          >
             <MdBedroomParent className="inline w-6 h-6 mr-2" />Tipo de Habitación
           
          </label>

          <select
            id="roomType"
            name="roomType"
            onChange={handleRoomChange}
            value={translations[selectedRoom?.roomType]?.title || ""}
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg text-sm border border-slate-200 transition duration-300 ease focus:outline-none focus:border-indigo-500 hover:border-indigo-300 shadow-sm focus:shadow"
          >
            <option value="">Selecciona una habitación</option>
            {roomTypeTranslations.map((roomType) => (
              <option key={roomType} value={roomType}>
                {roomType}
              </option>
            ))}
          </select>
          {formik.touched.roomType && formik.errors.roomType ? (
            <div className="text-red-500 text-sm">{formik.errors.roomType}</div>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="numberOfPeople"
            className="block text-sm font-medium text-gray-700"
          >
              <FaPeopleGroup className="inline w-6 h-6 mr-2"/> {" "}Número de Personas{" "}
          
          </label>
          <select
            id="numberOfPeople"
            name="numberOfPeople"
            onChange={handlePeopleChange}
            value={numberOfPeople}
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg text-sm border border-slate-200 transition duration-300 ease focus:outline-none focus:border-indigo-500 hover:border-indigo-300 shadow-sm focus:shadow"
          >
            <option value="">Selecciona el número de personas</option>
            {availableCapacities.map((capacity) => (
              <option key={capacity} value={capacity}>
                {capacity}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Check-in, Check-out, and Arrival Time in 3 columns in lg */}
      <div className="lg:grid lg:grid-cols-3 lg:gap-4">
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
            value={formik.values.checkInDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            min={today}
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg text-sm border border-slate-200 transition duration-300 ease focus:outline-none focus:border-indigo-500 hover:border-indigo-300 shadow-sm focus:shadow"
          />
          {formik.touched.checkInDate && formik.errors.checkInDate ? (
            <div className="text-red-500 text-sm">
              {formik.errors.checkInDate}
            </div>
          ) : null}
          {formik.values.checkInDate && (
            <p>Check-In: {formatDate(formik.values.checkInDate)}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="estimatedArrivalTime"
            className="block text-sm font-medium text-gray-700"
          >
            Hora estimada de llegada
          </label>
          <select
            id="estimatedArrivalTime"
            name="estimatedArrivalTime"
            value={formik.values.estimatedArrivalTime}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg text-sm border border-slate-200 transition duration-300 ease focus:outline-none focus:border-indigo-500 hover:border-indigo-300 shadow-sm focus:shadow"
          >
            {Array.from({ length: 24 }, (_, i) => (
              <option key={i} value={i < 10 ? `0${i}:00` : `${i}:00`}>
                {i < 10 ? `0${i}:00` : `${i}:00`}
              </option>
            ))}
          </select>
          {formik.touched.estimatedArrivalTime &&
          formik.errors.estimatedArrivalTime ? (
            <div className="text-red-500 text-sm">
              {formik.errors.estimatedArrivalTime}
            </div>
          ) : null}
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
            value={formik.values.checkOutDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            min={formik.values.checkInDate || today}
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg text-sm border border-slate-200 transition duration-300 ease focus:outline-none focus:border-indigo-500 hover:border-indigo-300 shadow-sm focus:shadow"
          />
          {formik.touched.checkOutDate && formik.errors.checkOutDate ? (
            <div className="text-red-500 text-sm">
              {formik.errors.checkOutDate}
            </div>
          ) : null}
          {formik.values.checkOutDate && (
            <p>Check-Out: {formatDate(formik.values.checkOutDate)}</p>
          )}
        </div>
      </div>

      <div className="mt-4">
        {isBeforeCheckInTime() && (
          <p className="text-red-500 mt-2">
            Nota: El check-in es a partir de las 3:00 p.m. Sin embargo, puedes
            utilizar las instalaciones del hotel antes de esa hora.
          </p>
        )}
        <div className="text-right">
          <label className="block text-sm font-medium text-gray-700">
            Total de noches:{" "}
            {calculateNights(formik.values) === 1
              ? `${calculateNights(formik.values)} noche`
              : `${calculateNights(formik.values)} noches`}
          </label>
          <label className="block text-sm font-medium text-gray-700">
            Precio por Noche:
          </label>
          <span>
            {selectedRoom
              ? `${formatNumber(selectedRoom.price[currency])} ${currency}`
              : `0.00 ${currency}`}
          </span>
          <label className="block text-sm font-medium text-gray-700">
            Impuestos:
          </label>
          <span>
            {selectedRoom
              ? `${formatNumber(selectedRoom.fees[currency])} ${currency}`
              : `0.00 ${currency}`}
          </span>
          <label className="block text-sm font-medium text-gray-700">
            Total:
          </label>
          <span>
            {currency === "EUR" ? "€" : "$"} {formatNumber(totalPrice)}{" "}
            {currency}
          </span>
        </div>
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded"
          disabled={!formik.isValid || formik.isSubmitting}
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default RoomInfoForm;
