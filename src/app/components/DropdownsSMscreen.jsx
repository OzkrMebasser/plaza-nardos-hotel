"use client";
import React from "react";
import { BsCurrencyExchange, BsTranslate } from "react-icons/bs";

const DropdownsSMscreen = ({
  isScrolled,
  setMobileCurrencyOpen,
  isMobileCurrencyOpen,
  handleCurrencyChange,
  setMobileLanguageOpen,
  isMobileLanguageOpen,
  handleLanguageChange,
}) => {
  return (
    <>
      <li className="fixed right-9 top-[16rem] text-[#2b3163] flex flex-col items-center ">
        <div onClick={() => setMobileCurrencyOpen(!isMobileCurrencyOpen)}>
          <BsCurrencyExchange
            className={` text-[32px] cursor-pointer ${
              isScrolled ? "text-[#2b3163]" : "text-white"
            }`}
          />
        </div>
        {isMobileCurrencyOpen && (
          <div className="absolute bottom-full mb-2 w-auto px-2 justify-stretch bg-[#f0f1ec] border rounded shadow z-10">
            <div className="flex flex-col py-1">
              <button
                onClick={() => handleCurrencyChange("MXN")}
                className="flex items-center justify-between rounded hover:bg-gray-200"
              >
                MXN <span className="ml-1 fi fi-mx"></span>
              </button>
              <button
                onClick={() => handleCurrencyChange("USD")}
                className="flex items-center justify-between rounded hover:bg-gray-200"
              >
                USD <span className="ml-1 fi fi-us"></span>
              </button>
              <button
                onClick={() => handleCurrencyChange("CAD")}
                className="flex items-center justify-between rounded hover:bg-gray-200"
              >
                CAD <span className="ml-1 fi fi-ca"></span>
              </button>
              <button
                onClick={() => handleCurrencyChange("EUR")}
                className="flex items-center justify-between rounded hover:bg-gray-200"
              >
                EUR <span className="ml-1 fi fi-eu"></span>
              </button>
            </div>
          </div>
        )}
      </li>
      <li className="fixed right-9 bottom-[15rem] justify-center text-[#2b3163] flex flex-col items-center">
        <div onClick={() => setMobileLanguageOpen(!isMobileLanguageOpen)}>
          <BsTranslate
            className={` text-3xl cursor-pointer ${
              isScrolled ? "text-[#2b3163]" : "text-white"
            }`}
          />
        </div>
        {isMobileLanguageOpen && (
          <div className="absolute bottom-full w-auto px-2 mb-2 bg-[#f0f1ec] border rounded shadow z-10">
            <div className="flex flex-col p-1">
              <button
                onClick={() => handleLanguageChange("es")}
                className="flex items-center justify-between rounded hover:bg-gray-200"
              >
                ES <span className="ml-2 fi fi-mx"></span>
              </button>
              <button
                onClick={() => handleLanguageChange("en")}
                className="flex items-center justify-between rounded hover:bg-gray-200"
              >
                EN <span className="ml-2 fi fi-us"></span>
              </button>
              <button
                onClick={() => handleLanguageChange("it")}
                className="flex items-center justify-between rounded hover:bg-gray-200"
              >
                IT <span className="ml-2  fi fi-it"></span>
              </button>
              <button
                onClick={() => handleLanguageChange("fr")}
                className="flex items-center justify-between rounded hover:bg-gray-200"
              >
                FR <span className="ml-2 fi fi-fr"></span>
              </button>
            </div>
          </div>
        )}
      </li>
    </>
  );
};

export default DropdownsSMscreen;
