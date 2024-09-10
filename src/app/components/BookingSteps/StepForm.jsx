"use client";
import { useState } from "react";
import PersonalInfoForm from "./PersonalInfoForm";
import ReservationSummary from "./ReservationSummary";
import FormOne from "./FormOne.jsx";
import FinishBooking from "./FinishBooking"; // Importamos el nuevo componente

const steps = [
  { number: 1, label: "Reservation Details" },
  { number: 2, label: "Personal Information" },
  { number: 3, label: "Review" },
  { number: 4, label: "Finish" },
];

const StepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [reservationData, setReservationData] = useState(null);

  const handleFormSubmit = (data) => {
    if (isFormOneComplete(data)) {
      setReservationData(data);
      setCurrentStep(2); // Mover al siguiente paso
    }
  };

  const isFormOneComplete = (data) => {
    return (
      data.roomType &&
      data.checkInDate &&
      data.checkOutDate &&
      data.estimatedArrivalTime &&
      data.numberOfPeople
    );
  };

  const handleConfirm = (personalInfo) => {
    setReservationData({ ...reservationData, personalInfo });
    setCurrentStep(3); // Mover al paso de resumen
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleFinish = () => {
    setCurrentStep(4); // Mover al paso de finalización
  };

  const progressPercentage = (currentStep / steps.length) * 100;

  return (
    <div className="p-4 max-w-[48rem] mx-auto shadow-2xl rounded-lg">
      {/* Steps Bar */}
      <div className="relative">
        <h2 className="sr-only">Steps</h2>

        {/* Progress Bar Background */}
        <div className="absolute top-[9px] lg:top-[2.8rem] w-full h-1 bg-gray-200 rounded-lg"></div>

        {/* Progress Indicator */}
        <div
          className="absolute top-[9px] lg:top-[2.8rem] h-1 bg-[#2b3163] rounded-lg"
          style={{ width: `${progressPercentage}%`, transition: "width 0.3s" }}
        ></div>

        <ol className="relative z-10 grid grid-cols-4 text-sm font-medium text-gray-500">
          {steps.map((step) => (
            <li
              key={step.number}
              className={`relative flex justify-center ${
                currentStep >= step.number
                  ? "text-[#2b3163]"
                  : "text-gray-500"
              }`}
            >
              <span
                className={`absolute -bottom-6 rounded-full ${
                  currentStep >= step.number
                    ? "bg-white text-[#2b3163] border-2 border-[#2b3163]"
                    : "bg-[#2b3163] text-white"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="mb-4 hidden sm:block">{step.label}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Step Content */}
      <div className="mt-8">
        {currentStep === 1 && <FormOne onSubmit={handleFormSubmit} />}
        {currentStep === 2 && (
          <PersonalInfoForm
            data={reservationData}
            onSubmit={handleConfirm}
            onBack={() => setCurrentStep(1)}
          />
        )}
        {currentStep === 3 && (
          <>
            <ReservationSummary data={reservationData} />
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              onClick={handleFinish}
            >
              Finish
            </button>
          </>
        )}
        {currentStep === 4 && <FinishBooking data={reservationData} />}
      </div>
    </div>
  );
};

export default StepForm;
