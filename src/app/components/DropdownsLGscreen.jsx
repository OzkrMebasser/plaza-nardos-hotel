"use client";
import { BsCurrencyExchange, BsTranslate } from "react-icons/bs";

const DropdownsLGscreen = ({
  handleCurrencyChange,
  handleLanguageChange,
  isScrolled,
}) => {
  return (
    <>
      <li className={`md:mt-0 relative flex items-center group `}>
        {/*POR QUE NO FUNCIONA EL ISCROLLED? NO CAMBIA A AZUL CUANDO  SE HACE SCROLL?*/}
        <BsCurrencyExchange
          className={` text-[1.65rem] cursor-pointer ${
            isScrolled ? "text-[#2b3163]" : "text-white"
          }`}
        />

        <div className="absolute text-[#2b3163] bg-[#f0f1ec] w-[5rem]  border rounded shadow mt-[8.4rem] right-[-33px] z-40 hidden group-hover:block">
          <div className="flex flex-col p-1 ">
            <button
              onClick={() => handleCurrencyChange("MXN")}
              className="flex items-center justify-between rounded hover:bg-white"
            >
              MXN <span className="ml-3 fi fi-mx"></span>
            </button>
            <button
              onClick={() => handleCurrencyChange("USD")}
              className="flex items-center justify-between rounded hover:bg-white"
            >
              USD <span className="ml-3 fi fi-us"></span>
            </button>
            <button
              onClick={() => handleCurrencyChange("CAD")}
              className="flex items-center justify-between rounded hover:bg-white"
            >
              CAD <span className="ml-3 fi fi-ca"></span>
            </button>
            <button
              onClick={() => handleCurrencyChange("EUR")}
              className="flex items-center justify-between rounded hover:bg-white"
            >
              EUR <span className="ml-3 fi fi-eu"></span>
            </button>
          </div>
        </div>
      </li>
      <li className="text-[#2b3163] md:mt-0 relative flex items-center group">
        <BsTranslate
          className={` text-2xl cursor-pointer ${
            isScrolled ? "text-[#2b3163]" : "text-white"
          }`}
        />
        <div className="absolute bg-[#f0f1ec] border rounded shadow mt-[8.4rem] right-[-1.3rem] w-[4rem] z-40 hidden group-hover:block">
          <div className="flex flex-col p-1">
            <button
              onClick={() => handleLanguageChange("es")}
              className="flex items-center justify-between rounded hover:bg-white"
            >
              ES <span className="fi fi-mx"></span>
            </button>
            <button
              onClick={() => handleLanguageChange("en")}
              className="flex items-center justify-between rounded hover:bg-white"
            >
              EN <span className="fi fi-us"></span>
            </button>
            <button
              onClick={() => handleLanguageChange("it")}
              className="flex items-center justify-between rounded hover:bg-white"
            >
              IT <span className="fi fi-it"></span>
            </button>
            <button
              onClick={() => handleLanguageChange("fr")}
              className="flex items-center justify-between rounded hover:bg-white"
            >
              FR <span className="fi fi-fr"></span>
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default DropdownsLGscreen;
