"use client";

import jsPDF from "jspdf";
import { PiCheckSquareFill } from "react-icons/pi";

import html2canvas from "html2canvas";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { useRoomsAndCurrency } from "@/app/contexts/RoomsAndCurrencyContext";
import RoomSumary from "./RoomSumary";
import CallCenter from "../CallCenter";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

const FinishBooking = ({ data, personalData }) => {
  const [isVisible, setIsVisible] = useState(false); // Estado para manejar la visibilidad de la sección de no impresión
  const form = useRef();
  const hrRef = useRef();

  // Efecto para verificar si el elemento "no-visible-to-print" existe
  useEffect(() => {
    const noPrintSection = document.getElementById("no-visible-to-print");
    setIsVisible(!!noPrintSection);

    return () => {
      setIsVisible(false);
    };
  }, []);

  const { getTranslations } = useLanguage();
  const { roomsData } = useRoomsAndCurrency();
  const translations = getTranslations();
  const filteredRooms = roomsData.filter((room) => room.homeShow);

  if (!data) return null;

  // Datos de la reserva y datos personales
  const {
    roomType,
    numberOfPeople,
    checkInDate,
    checkOutDate,
    estimatedArrivalTime,
    totalPrice,
    grandTotalPriceCurrency,
  } = data;
  const { name, lastName, email, phone, request, country, city } = personalData;
  const roomName = translations[roomType]?.title || "Habitación desconocida";

  // Obtener información detallada de la habitación
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

  // Determinar el índice de la habitación según el tipo
  let roomIndex = 0;
  if (roomType === "dlbBedRoom") roomIndex = 0;
  else if (roomType === "dlbDeluxe") roomIndex = 1;
  else if (roomType === "dlbDeluxeWithBalcony") roomIndex = 2;
  else if (roomType === "tripleDeluxe") roomIndex = 3;
  else if (roomType === "cuadrupleBedRoom") roomIndex = 4;

  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10);

  // Obtener la hora actual en formato local
  const getCurrentTime = () => {
    const options = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
    return today.toLocaleTimeString("es-ES", options);
  };

  // Calcular el número de noches entre fechas
  const calculateNights = (checkIn, checkOut) => {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    return Math.ceil((checkOutDate - checkInDate) / (1000 * 3600 * 24));
  };

  const nights = calculateNights(checkInDate, checkOutDate);

  const localeLng = translations.bookingInfo.localeLng;

  // Formatear fechas a texto legible
  const formatDate = (dateString) => {
    const date = new Date(dateString + "T00:00:00");
    return date.toLocaleDateString(`${localeLng}`, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Formatear números con separadores de miles
  const formatNumber = (number) => number.toLocaleString();

  // Generar nombre del archivo PDF
  const bookingName = `booking-Hotel-Plaza-Nardos-for-${name.replace(
    /\s+/g,
    "-"
  )}-${lastName.replace(/\s+/g, "-")}-${formattedDate}.pdf`;

  // Manejar la descarga del PDF
  const handleDownloadPDF = () => {
    const element = document.getElementById("finish-booking-summary");
    const noPrintSection = document.getElementById("no-visible-to-print");

    if (noPrintSection) {
      noPrintSection.style.display = "none";
    }

    html2canvas(element, { scrollY: -window.scrollY }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pageWidth = 210;
      const pageHeight = 297;
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * pageWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(bookingName);

      if (noPrintSection) {
        noPrintSection.style.display = "block";
      }
    });
  };

  return (
    <>
      <div
        className="p-4 px-8  rounded-lg  relative lg:mt-[6rem]"
        id="finish-booking-summary"
      >
        <div>
          <h3 className="text-center font-bold uppercase text-[#2b3163]">
            {translations.bookingInfo.preBookingDone}
          </h3>
          <section id="no-visible-to-print">
            <CallCenter />
          </section>
          <div id="push-down-onPrint">
            {Object.entries({
              [translations.bookingInfo.roomType]: roomName,
              [translations.bookingInfo.firstName]: `${name} ${lastName}`,
              [translations.bookingInfo.email]: email,
              [translations.bookingInfo.phone]: phone,
              [translations.bookingInfo.country]: country,
              [translations.bookingInfo.city]: city,
              [translations.bookingInfo.numberOfPax]: numberOfPeople,
              [translations.bookingInfo.arrivalDate]: formatDate(checkInDate),
              [translations.bookingInfo.departureDate]: formatDate(checkOutDate),
              [translations.bookingInfo.nights]: nights,
              [translations.bookingInfo.arrivalTime]: `${estimatedArrivalTime} hrs`,
              [translations.bookingInfo.grandTotal]: grandTotalPriceCurrency,
              ...(request && { "Solicitudes Especiales": request }),
            }).map(([label, value]) => (
              <div key={label}>
                <label className="block text-[1rem] font-medium text-[#2b3163]">
                  {label}
                </label>
                <strong>
                  <p className="text-[#2b3163]">
                    <PiCheckSquareFill className="inline h-5 w-5" /> {value}
                  </p>
                </strong>
                <hr className="w-full md:w-[35%] mt-2 mb-2" />
              </div>
            ))}
          </div>
        </div>
  
        <RoomSumary
          roomType={translations[roomType]?.title}
          bathRoomStuffTitle={translations[roomType]?.bathRoomStuffTitle}
          roomStuffTitle={translations[roomType]?.roomStuffTitle}
          viewsTitle={translations[roomType]?.viewsTitle}
          noSmokingTitle={translations[roomType]?.noSmokingTitle}
          noSmoking={translations[roomType]?.noSmoking}
          {...getRoomInfo(roomIndex)}
        />
  
   
        <span className="text-slate-500 p-4 flex justify-end">
          Fecha de pre-reserva {formattedDate}, hora {getCurrentTime()}
        </span>
      </div>
      <div className="mt-4 flex gap-2 justify-around text-sm lg:text-lg">
        <button
          className="px-4 py-2 bg-green-600 text-white rounded"
          onClick={handleDownloadPDF}
        >
          Descargar PDF
        </button>
        <Link href={"/"}>
          <button className="px-4 py-2 bg-red-600 text-white rounded">
            Cerrar
          </button>
        </Link>
      </div>
    </>
  );
};

export default FinishBooking;
