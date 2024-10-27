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
  const [isVisible, setIsVisible] = useState(false);
  const form = useRef();
  const hrRef = useRef();

  useEffect(() => {
    const noPrintSection = document.getElementById("no-visible-to-print");
    setIsVisible(!!noPrintSection); // Establece a true si existe

    // Limpiar el efecto si es necesario
    return () => {
      setIsVisible(false);
    };
  }, []);
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
    grandTotalPriceCurrency,
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
  const getCurrentTime = () => {
    const today = new Date();
    const options = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
    return today.toLocaleTimeString("es-ES", options);
  };

  const bookingName = `booking-Hotel-Plaza-Nardos-for-${name.replace(
    /\s+/g,
    "-"
  )}-${lastName.replace(/\s+/g, "-")}-${formattedDate}.pdf`;

  // const handleDownloadPDF = () => {
  //   const element = document.getElementById("finish-booking-summary");

  //   html2canvas(element, { scrollY: -window.scrollY }).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF("p", "mm", "a4");

  //     const pageWidth = 210; // Ancho en mm para A4
  //     const pageHeight = 297; // Alto en mm para A4
  //     const imgWidth = pageWidth;
  //     const imgHeight = (canvas.height * pageWidth) / canvas.width;

  //     let heightLeft = imgHeight;
  //     let position = 0;

  //     pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  //     heightLeft -= pageHeight;

  //     while (heightLeft > 0) {
  //       position = heightLeft - imgHeight;
  //       pdf.addPage();
  //       pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  //       heightLeft -= pageHeight;
  //     }

  //     pdf.save(bookingName);
  //   });
  // };

  // Función para imprimir la página
  // const handlePrint = () => {
  //   const printContent = document.getElementById(
  //     "finish-booking-summary"
  //   ).innerHTML;
  //   const originalContent = document.body.innerHTML;

  //   // Aplicar estilos de impresión
  //   document.body.innerHTML = `
  //     <style>
  //       @media print {
  //         body {
  //           margin: 20mm;
  //         }
  //         #finish-booking-summary {
  //           padding: 5mm;
  //         }
  //       }
  //     </style>
  //     ${printContent}
  //   `;

  //   window.print();
  //   document.body.innerHTML = originalContent;
  //   // window.location.reload();
  // };

  const handleDownloadPDF = () => {
    const element = document.getElementById("finish-booking-summary");
    const noPrintSection = document.getElementById("no-visible-to-print");

    // Ocultar la sección que no se debe imprimir
    if (noPrintSection) {
      noPrintSection.style.display = "none";
    }

    html2canvas(element, { scrollY: -window.scrollY }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pageWidth = 210; // Ancho en mm para A4
      const pageHeight = 297; // Alto en mm para A4
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

      // Volver a mostrar la sección que se ocultó
      if (noPrintSection) {
        noPrintSection.style.display = "block";
      }
    });
  };

  return (
    <>
      <div
        className="p-4 px-8  rounded-lg  relative lg:mt-[8rem]"
        id="finish-booking-summary"
      >
        <div className=" ">
          <h3 className="text-center font-bold uppercase text-[#2b3163]  ">
            Tu pre-reserva esta lista en breve, uno de nuestros ejecutivos te
            contactará para confirmar tu reservación
          </h3>
          <section id="no-visible-to-print">
            <CallCenter />
          </section>
          <hr
            ref={hrRef}
            className={`w-full md:w-[35%] mt-4 ${
              isVisible ? "lg:mt-[5rem]" : "lg:-mt-[12rem]"
            } relative`}
          />
          {/* <hr className="w-full md:w-[35%] mt-4 lg:-mt-[12rem] relative" /> */}
          {Object.entries({
            [translations.bookingInfo.roomType]: roomName,
            [translations.bookingInfo.firstName]: `${name} ${lastName}`,
            [translations.bookingInfo.email]: email,
            [translations.bookingInfo.phone]: phone,
            [translations.bookingInfo.country]: country,
            [translations.bookingInfo.city]: city,
            [translations.bookingInfo.numberOfPax]: numberOfPeople,
            // {{"ESTOY TRABAJANDO EN LAS FUNCIONES DE FORMADTE Y NIGHTS **************************************************************************
            // *******************************************
            // "}}

            // [translations.bookingInfo.arrivalDate]: formatDate(checkInDate),
            [translations.bookingInfo
              .arrivalTime]: `${estimatedArrivalTime} hrs`,
            // [translations.bookingInfo.departureDate]: formatDate(checkOutDate),
            // [translations.bookingInfo.nights]: nights,

            [translations.bookingInfo.grandTotal]: grandTotalPriceCurrency,

            ...(request && { "Solicitudes Especiales": request }),
          }).map(([label, value]) => (
            <div key={label} className="">
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
        <span className="text-slate-500 p-4 flex justify-end">
          Fecha de pre-reserva {formattedDate}, hora {getCurrentTime()}{" "}
        </span>
      </div>
      {/* Botones para descargar o imprimir */}
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
