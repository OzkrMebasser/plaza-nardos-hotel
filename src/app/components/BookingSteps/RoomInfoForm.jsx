"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { useRoomsAndCurrency } from "@/app/contexts/RoomsAndCurrencyContext";
import { MdBedroomParent } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoCalendarSharp } from "react-icons/io5";
import { FaCalendarCheck } from "react-icons/fa";
import { PiWatchFill } from "react-icons/pi";

import { IoTime } from "react-icons/io5";
import SubTitle from "../SubTitle";

const RoomInfoForm = ({ onSubmit }) => {
  const { getTranslations } = useLanguage();
  const translations = getTranslations();
  const { roomsData, currency } = useRoomsAndCurrency();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const today = new Date().toISOString().split("T")[0];

  const localeLng = translations.bookingInfo.localeLng;

  const formatDate = (dateString) => {
    const date = new Date(dateString + "T00:00:00");
    return date.toLocaleDateString(`${localeLng}`, {
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

    console.log("Número de personas seleccionadas:", selectedNumber);
  };

  const validationSchema = Yup.object({
    roomType: Yup.string().required(
      `${translations.validationsYup.roomTypeRequired}`
    ),
    checkInDate: Yup.date().required(
      `${translations.validationsYup.checkInRequired}`
    ),
    checkOutDate: Yup.date()
      .min(
        Yup.ref("checkInDate"),
        `${translations.validationsYup.checkOutLaterThanCheckIn}`
      )
      .required(`${translations.validationsYup.checkOutRequired}`),
    estimatedArrivalTime: Yup.string().required(
      `${translations.validationsYup.arrivalTime}`
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

  const calculateTotalTaxes = (values) => {
    if (!selectedRoom || !values.checkInDate || !values.checkOutDate) return 0;

    const nights = calculateNights(values);
    const pricePerNight = selectedRoom.price?.[currency] || 0;
    const fees = selectedRoom.fees?.[currency] || 0;
    const perNight = pricePerNight + fees;
    const totalTaxes = fees * nights;

    return totalTaxes;
  };

  const totalPrice = parseFloat(calculateTotalPrice(formik.values));
  const totalTaxes = parseFloat(calculateTotalTaxes(formik.values));
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
      <SubTitle title={translations.bookingInfo.roomDetails} />
      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
        <div className="mt-6 lg:mt-0">
          <label
            htmlFor="roomType"
            className="block text-sm font-medium text-[#2b3163] align-middle"
          >
            <MdBedroomParent className="inline w-6 h-6 mr-2" />
            {/* Tipo de Habitación */}
            {translations.bookingInfo.roomType}
          </label>

          <select
            id="roomType"
            name="roomType"
            onChange={handleRoomChange}
            value={translations[selectedRoom?.roomType]?.title || ""}
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg text-sm border border-slate-200 transition duration-300 ease focus:outline-none focus:border-indigo-500 hover:border-indigo-300 shadow-sm focus:shadow"
          >
            <option value="">
              {/* Selecciona una habitación */}
              {translations.bookingInfo.selectRoomType}
            </option>
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

        <div className="mt-6 lg:mt-0">
          <label
            htmlFor="numberOfPeople"
            className="block text-sm font-medium text-[#2b3163]"
          >
            <FaPeopleGroup className="inline w-6 h-6 mr-2" />
            {/* Número de Personas */}
            {translations.bookingInfo.numberOfPax}{" "}
          </label>
          <select
            id="numberOfPeople"
            name="numberOfPeople"
            onChange={handlePeopleChange}
            value={numberOfPeople}
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg text-sm border border-slate-200 transition duration-300 ease focus:outline-none focus:border-indigo-500 hover:border-indigo-300 shadow-sm focus:shadow"
          >
            <option value="">
              {/* Selecciona el número de personas */}
              {translations.bookingInfo.selectNumberPax}
            </option>
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
        <div className="mt-6 lg:mt-0">
          <label
            htmlFor="checkInDate"
            className="block text-sm font-medium text-[#2b3163]"
          >
            <IoCalendarSharp className="inline w-6 h-6 mr-2" />
            {/* Fecha de Llegada */}
            {translations.bookingInfo.arrivalDate}
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
        </div>

        <div className="mt-6 lg:mt-0">
          <label
            htmlFor="estimatedArrivalTime"
            className="block text-sm font-medium text-[#2b3163]"
          >
            <IoTime className="inline w-6 h-6 mr-2" />
            {/* Hora estimada de llegada */}
            {translations.bookingInfo.arrivalTime}
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

        <div className="mt-6 lg:mt-0">
          <label
            htmlFor="checkOutDate"
            className="block text-sm font-medium text-[#2b3163]"
          >
            <IoCalendarSharp className="inline w-6 h-6 mr-2" />
            {/* Fecha de salida */}
            {translations.bookingInfo.departureDate}
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
        </div>
      </div>

      <div className="mt-6 lg:mt-0 border-red-500">
        {isBeforeCheckInTime() && (
          <strong>
            {" "}
            <p className="text-red-500 mt-4 mb-4">
              {/* Nota: El check-in es a partir de las 3:00 p.m. Sin embargo, puedes
              utilizar las instalaciones del hotel antes de esa hora. */}
              {translations.bookingInfo.note3pm}
            </p>
          </strong>
        )}
        {/*Selectioned inputs */}
        <h3 className="text-center mb-2 font-bold uppercase text-[#2b3163] ">
          {/* Usted ha seleccionado */}
          {translations.bookingInfo.youHaveSelected}
        </h3>
        <div className="flex flex-col md:flex-row gap-4 text-center lg:text-left">
          <div className="w-full md:w-1/2 h-auto  ">
            <label className="block text-[1rem]  font-medium text-[#2b3163]">
              {/* Habitación seleccionada:{" "} */}
              {translations.bookingInfo.selectedRoom}
            </label>
            <strong>
              {selectedRoom ? (
                <p className="text-[#2b3163] ">
                  {translations[selectedRoom?.roomType]?.title ||
                    selectedRoom?.roomType}
                </p>
              ) : (
                <p className="text-[#cececf] ">
                  {translations.bookingInfo.selectRoomType}
                </p>
              )}{" "}
            </strong>
            <span className="flex justify-start mt-1 mb-1 ">
              <hr className="w-full " />
            </span>
            {/*   Número de personas:*/}
            <label className="block text-[1rem]  font-medium text-[#2b3163]">
              {/* Número de personas: */}
              {translations.bookingInfo.numPax}
            </label>
            <strong>
              {numberOfPeople ? (
                <p className="text-[#2b3163] ">{numberOfPeople}</p>
              ) : (
                <p className="text-[#cececf] ">
                  {translations.bookingInfo.selectNumberPax}
                </p>
              )}{" "}
            </strong>
            <span className="flex justify-start mt-1 mb-1 ">
              <hr className="w-full " />
            </span>
            {/* Fecha de llegada */}
            <label className="block text-[1rem]  font-medium text-[#2b3163]">
              {/* Fecha de llegada seleccionada: */}
              {translations.bookingInfo.arrivalDateSelected}
            </label>
            <strong>
              {formik.values.checkInDate ? (
                // Check-In: <br />

                <p className=" text-[#2b3163] ">
                  {" "}
                  <FaCalendarCheck className="inline w-6 h-6 mr-2" />{" "}
                  {formatDate(formik.values.checkInDate)}
                </p>
              ) : (
                <p className="text-[#cececf] ">
                  {/* Seleccione la fecha de llegada */}
                  {translations.bookingInfo.selectArrivalDate}
                </p>
              )}
            </strong>
            <span className="flex justify-end mt-1 mb-1">
              <hr className="w-full" />
            </span>
            {/* Fecha de Salida */}
            <label className="block text-[1rem]  font-medium text-[#2b3163]">
              {/* Fecha de salida seleccionada: */}
              {translations.bookingInfo.departureDateSelected}
            </label>
            <strong>
              {formik.values.checkOutDate ? (
                // Check-In: <br />

                <p className=" text-[#2b3163] ">
                  {" "}
                  <FaCalendarCheck className="inline w-6 h-6 mr-2" />{" "}
                  {formatDate(formik.values.checkOutDate)}
                </p>
              ) : (
                <p className="text-[#cececf] ">
                  {/* Seleccione la fecha de salida */}
                  {translations.bookingInfo.selectDepartureDate}
                </p>
              )}
            </strong>
            <span className="flex justify-end mt-1 mb-1">
              <hr className="w-full" />
            </span>
            {/* Hora de llegada estimada */}
            <label className="block text-[1rem]  font-medium text-[#2b3163]">
              {/* Hora de llegada estimada: */}
              {translations.bookingInfo.estimatedArrivalHour}
            </label>
            <strong>
              {formik.values.estimatedArrivalTime && (
                // Check-In: <br />

                <p className=" text-[#2b3163] ">
                  {" "}
                  <PiWatchFill className="inline w-6 h-6 mr-2" />{" "}
                  {formik.values.estimatedArrivalTime} hrs.
                </p>
              )}
            </strong>
            <span className="flex justify-end mt-1 mb-1">
              <hr className="w-full" />
            </span>{" "}
            <span className="flex justify-end mt-1 mb-1 lg:hidden">
              <hr className="w-full" />
            </span>{" "}
            <span className="flex justify-end mt-1 mb-1 lg:hidden">
            <hr className="w-full md:w-[10rem] border-t-4" />
            </span>
          </div>
          {/*Price, taxes and total per night/s */}
          <div className="w-full md:w-1/2  h-auto text-right  md:text-right  ">
            <label className="block text-[1rem]  font-medium text-[#2b3163]">
              {/* Total de noches:{" "} */}
              {translations.bookingInfo.totalNights}
            </label>
            <strong>
              {" "}
              <p className="text-[#2b3163] ">
                {" "}
                {calculateNights(formik.values) === 1
                  ? `${calculateNights(formik.values)} ${
                      translations.bookingInfo.night
                    }`
                  : `${calculateNights(formik.values)} ${
                      translations.bookingInfo.nights
                    }`}
              </p>
            </strong>
            <span className="flex justify-end mt-1 mb-1">
              <hr className="w-full md:w-[10rem]" />
            </span>
            <label className="block text-[1rem]  font-medium text-[#2b3163]">
              {/* Precio por Noche: */}
              {translations.bookingInfo.pricePerNight}
            </label>
            <strong>
              {" "}
              <p className="text-[#2b3163]">
                {selectedRoom
                  ? `${formatNumber(selectedRoom.price[currency])} ${currency}`
                  : `0.00 ${currency}`}
              </p>
            </strong>
            <span className="flex justify-end mt-1 mb-1">
              <hr className="w-full md:w-[10rem]" />
            </span>
            <label className="block text-[1rem]  font-medium text-[#2b3163]">
              {/* Impuestos por noche: */}
              {translations.bookingInfo.taxesPerNight}
            </label>
            <strong>
              {" "}
              <p className="text-[#2b3163]">
                {selectedRoom
                  ? `${formatNumber(selectedRoom.fees[currency])} ${currency}`
                  : `0.00 ${currency}`}
              </p>
            </strong>
            <span className="flex justify-end mt-1 mb-1">
              <hr className="w-full md:w-[10rem]" />
            </span>

            <label className="block text-[1rem]  font-medium text-[#2b3163]">
              {/* Total Impuestos: */}
              {translations.bookingInfo.totalTaxes}
            </label>
            {/* <strong>
    {" "}
    <p className="text-[#2b3163]">
    {selectedRoom
      ? `${formatNumber(selectedRoom.fees[currency])} ${currency}`
      : `0.00 ${currency}`}
  </p>
  </strong> */}
            <strong>
              {" "}
              <p className="text-[#2b3163]">
                {currency === "EUR" ? "€" : "$"} {formatNumber(totalTaxes)}{" "}
                {currency}
              </p>
            </strong>
            <span className="flex justify-end mt-1 mb-1">
              <hr className="w-full md:w-[10rem] border-t-4" />
            </span>
            <label className="block text-[1rem]  font-bold text-[#2b3163]">
              {/* Total: */}
              {translations.bookingInfo.grandTotal}
            </label>

            <strong>
              {" "}
              <p className="text-[#2b3163]">
                {currency === "EUR" ? "€" : "$"} {formatNumber(totalPrice)}{" "}
                {currency}
              </p>
            </strong>
            <span className="flex justify-end mt-1 mb-1">
              <hr className="w-full md:w-[10rem] border-t-4" />
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="w-full px-4 py-2 bg-[#2b3163] text-white rounded"
          disabled={!formik.isValid || formik.isSubmitting}
        >
          {/* Next */}
          {translations.bookingInfo.next}
        </button>
      </div>
    </form>
  );
};

export default RoomInfoForm;
