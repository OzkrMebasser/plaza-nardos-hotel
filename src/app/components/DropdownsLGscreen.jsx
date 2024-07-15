"use client";
import { BsCurrencyExchange, BsTranslate } from "react-icons/bs";

const DropdownsLGscreen = ({handleCurrencyChange, handleLanguageChange}) => {
  return (
    <>
     <li className="text-[#2b3163] md:mt-0 relative flex items-center group">
              <BsCurrencyExchange className="text-[#2b3163] text-[1.65rem] cursor-pointer" />
              <div className="absolute bg-[#f0f1ec] border rounded shadow mt-[8.5rem] right-[-2rem] w-[5rem] z-40 hidden group-hover:block">
                <div className="flex flex-col pt-1 px-[2px]">
                  <button
                    onClick={() => handleCurrencyChange("MXN")}
                    className="flex items-center justify-between rounded hover:bg-white"
                  >
                    MXN <span className="fi fi-mx"></span>
                  </button>
                  <button
                    onClick={() => handleCurrencyChange("USD")}
                    className="flex items-center justify-between rounded hover:bg-white"
                  >
                    USD <span className="fi fi-us"></span>
                  </button>
                  <button
                    onClick={() => handleCurrencyChange("CAD")}
                    className="flex items-center justify-between rounded hover:bg-white"
                  >
                    CAD <span className="fi fi-ca"></span>
                  </button>
                  <button
                    onClick={() => handleCurrencyChange("EUR")}
                    className="flex items-center justify-between rounded hover:bg-white"
                  >
                    EUR <span className="fi fi-eu"></span>
                  </button>
                </div>
              </div>
            </li>
            <li className="text-[#2b3163] md:mt-0 relative flex items-center group">
              <BsTranslate className="text-[#2b3163] text-2xl cursor-pointer" />
              <div className="absolute bg-[#f0f1ec] border rounded shadow mt-[8.4rem] right-[-1.3rem] w-[3.8rem] z-40 hidden group-hover:block">
                <div className="flex flex-col pt-1 px-[2px]">
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
  )
}

export default DropdownsLGscreen