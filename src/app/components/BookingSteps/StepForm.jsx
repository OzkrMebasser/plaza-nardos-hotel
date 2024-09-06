"use client";
import { useState } from "react";
import ReservationForm from "./ReservationForm";
import PersonalInfoForm from "./PersonalInfoForm";
import ReservationSummary from "./ReservationSummary";

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
    setReservationData(data);
    setCurrentStep(2); // Move to the next step
  };

  const handleConfirm = (personalInfo) => {
    setReservationData({ ...reservationData, personalInfo });
    setCurrentStep(3); // Move to the summary step
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleFinish = () => {
    // Handle finish logic here
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      {/* Steps Bar */}
      <div>
        <h2 className="sr-only">Steps</h2>

        <div className="relative mt-4">
          <ol className="grid grid-cols-4 text-sm font-medium text-gray-500">
            {steps.map((step, index) => (
              <li
                key={step.number}
                className={`relative flex justify-center ${currentStep >= step.number ? 'text-blue-600' : 'text-gray-500'}`}
              >
                <span
                  className={`absolute -bottom-6 rounded-full ${
                    currentStep >= step.number ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'
                  }`}
                >
                  <svg
                    className="w-5 h-5"
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
                <span className="hidden sm:block">{step.label}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Step Content */}
      <div className="mt-8">
        {currentStep === 1 && <ReservationForm onSubmit={handleFormSubmit} />}
        {currentStep === 2 && (
          <PersonalInfoForm
            data={reservationData}
            onSubmit={handleConfirm}
            onBack={() => setCurrentStep(1)}
          />
        )}
        {currentStep === 3 && <ReservationSummary data={reservationData} />}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        {currentStep > 1 && (
          <button
            className="px-4 py-2 bg-gray-300 text-black rounded"
            onClick={handleBack}
          >
            Back
          </button>
        )}
        {currentStep < steps.length && (
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => {
              currentStep === steps.length - 1 ? handleFinish() : setCurrentStep(currentStep + 1);
            }}
          >
            {currentStep === steps.length - 1 ? "Finish" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
};

export default StepForm;
