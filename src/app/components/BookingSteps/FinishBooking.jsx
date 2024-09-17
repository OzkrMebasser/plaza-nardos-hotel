"use client";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { useRoomsAndCurrency } from "@/app/contexts/RoomsAndCurrencyContext";
import RoomSumary from "./RoomSumary";
import React, { useRef } from "react";
import Link from "next/link";

const FinishBooking = ({ data, personalData }) => {
  const form = useRef();
  const { getTranslations } = useLanguage();
  const { roomsData } = useRoomsAndCurrency();
  const translations = getTranslations();
  const filteredRooms = roomsData.filter((room) => room.homeShow);

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

  // Definir el índice dinámicamente basado en roomType
  let roomIndex = 0;
  if (roomType === "dlbBedRoom") {
    roomIndex = 0;
  } else if (roomType === "dlbDeluxe") {
    roomIndex = 1;
  } else if (roomType === "dlbDeluxeWithBalcony") {
    roomIndex = 2;
  } else if (roomType === "tripleDeluxe") {
    roomIndex = 3;
  } else if (roomType === "cuadrupleBedRoom") {
    roomIndex = 4;
  }
  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10); //
  const bookingName = `booking-Hotel-Plaza-Nardos-for-${name.replace(
    /\s+/g,
    "-"
  )}-${lastName.replace(/\s+/g, "-")}-${formattedDate}.pdf`;

  // console.log(bookingName);

  // Función para descargar el resumen como PDF
  const handleDownloadPDF = () => {
    const element = document.getElementById("finish-booking-summary");

    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save(`${bookingName}`);
    });
  };

  // Función para imprimir la página
  const handlePrint = () => {
    const printContent = document.getElementById("finish-booking-summary").innerHTML;
    const originalContent = document.body.innerHTML;
  
    // Reemplaza el contenido del body con el contenido del div a imprimir
    document.body.innerHTML = printContent;
  
    // Inicia el proceso de impresión
    window.print();
  
    // Restaura el contenido original de la página
    document.body.innerHTML = originalContent;
  
    // Recarga la página para evitar problemas con el DOM
    window.location.reload();
  };
  

  return (
    <>
      <div
        className="p-4 bg-white rounded-lg shadow-md"
        id="finish-booking-summary"
      >
        <h2 className="text-lg font-medium text-gray-900">
          Reserva Completada
        </h2>
        {/* Renderizado de la información visible */}
        <p>
          <strong>Tipo de Habitación:</strong> {roomName}
        </p>
        <p>
          <strong>Nombre:</strong> {name + " " + lastName}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Teléfono:</strong> {phone}
        </p>
        <p>
          <strong>País:</strong> {country}
        </p>
        <p>
          <strong>Ciudad:</strong> {city}
        </p>
        <p>
          <strong>Número de Personas:</strong> {numberOfPeople}
        </p>
        <p>
          <strong>Check-In:</strong> {checkInDate}
        </p>
        <p>
          <strong>Hora Estimada de Llegada:</strong> {estimatedArrivalTime}
        </p>
        <p>
          <strong>Check-Out:</strong> {checkOutDate}
        </p>
        <p>
          <strong>Total a Pagar:</strong> {totalPrice}
        </p>
        {request && (
          <p>
            <strong>Solicitudes Especiales:</strong> {request}
          </p>
        )}
        {/* Componente RoomSummary con datos dinámicos */}
        <RoomSumary
          roomType={translations[roomType]?.title}
          bathRoomStuffTitle={translations[roomType]?.bathRoomStuffTitle}
          roomStuffTitle={translations[roomType]?.roomStuffTitle}
          viewsTitle={translations[roomType]?.viewsTitle}
          noSmokingTitle={translations[roomType]?.noSmokingTitle}
          noSmoking={translations[roomType]?.noSmoking}
          {...getRoomInfo(roomIndex)}
        />

        {/* Botones para descargar o imprimir */}
        <div className="mt-4 flex gap-2 justify-around text-sm lg:text-lg">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={handleDownloadPDF}
          >
            Descargar PDF
          </button>
          <button
            className="px-4 py-2 bg-green-600 text-white rounded"
            onClick={handlePrint}
          >
            Imprimir
          </button>
          <Link href={"/"}>
            <button className="px-4 py-2 bg-red-600 text-white rounded">
              Cerrar
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FinishBooking;
