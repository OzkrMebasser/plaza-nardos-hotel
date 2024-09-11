"use client";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Link from "next/link";
const FinishBooking = ({ data }) => {
  if (!data) return null;

  const { roomType, numberOfPeople, checkInDate, checkOutDate, estimatedArrivalTime, totalPrice } = data;

  // Función para descargar el resumen como PDF
  const handleDownloadPDF = () => {
    const element = document.getElementById("finish-booking-summary");

    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("reserva.pdf");
    });
  };

  // Función para imprimir la página
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md" id="finish-booking-summary">
      <h2 className="text-lg font-medium text-gray-900">Reserva Completada</h2>
      <p><strong>Tipo de Habitación:</strong> {roomType}</p>
      <p><strong>Número de Personas:</strong> {numberOfPeople}</p>
      <p><strong>Check-In:</strong> {checkInDate}</p>
      <p><strong>Arriving time: </strong> {estimatedArrivalTime}</p>
      <p><strong>Check-Out:</strong> {checkOutDate}</p>
      <p><strong>Total a Pagar:</strong> {totalPrice}</p>

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
        <button
          className="px-4 py-2 bg-red-600 text-white rounded"
          
        >
          Cerrar
        </button>
        </Link>
      </div>
    </div>
  );
};

export default FinishBooking;
