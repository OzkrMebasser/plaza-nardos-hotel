"use client";
import React, { useState } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Image from "next/image";
import Link from "next/link";
import { BsCurrencyExchange, BsTranslate } from "react-icons/bs";

import { useLanguage } from "./contexts/LanguageContext";
import { useCurrency } from "./contexts/CurrencyContext";

const logo =
  "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2Flogo-plaza-nardos-bgt.PNG?alt=media&token=3fd75ec3-3b07-496a-94b2-835db367653f";

const Navbar = () => {
  const { getTranslations, changeLanguage } = useLanguage();
  const { setCurrency } = useCurrency();
  const translations = getTranslations();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileCurrencyOpen, setMobileCurrencyOpen] = useState(false);
  const [isMobileLanguageOpen, setMobileLanguageOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLanguageChange = (lng) => {
    changeLanguage(lng);
  };

  const handleCurrencyChange = (value) => {
    setCurrency(value);
  };

  return (
    <nav className="bg-white border border-gray-200 px-4 py-2.5 shadow">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            height={80}
            width={140}
            alt="logo Plaza Nardos Hotel"
          />
        </Link>

        <div className="flex items-center md:hidden">
          <button
            className="flex flex-col h-12 w-12 border-2 border-black rounded justify-center items-center group"
            onClick={toggleMobileMenu}
          >
            <div
              className={`h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-3" : ""
              }`}
            />
            <div
              className={`h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <div
              className={`h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-3" : ""
              }`}
            />
          </button>
        </div>

        <div className="hidden md:flex md:items-center">
          <ul className="flex space-x-8">
            {Object.keys(translations.nav).map((key, index) => (
              <li key={index}>
                <Link
                  href={`/${key}`}
                  className="relative text-black hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-[#2b3163] before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-[#2b3163] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
                >
                  {translations.nav[key]}
                </Link>
              </li>
            ))}
            <li className="text-[#2b3163] md:mt-0 relative flex items-center group">
              <BsCurrencyExchange className="text-[#2b3163] text-2xl cursor-pointer" />
              <div className="absolute bg-[#f0f1ec] border rounded shadow mt-[8.7rem] right-[-2rem] w-[5rem] z-10 hidden group-hover:block">
                <div className="flex flex-col p-1">
                  <button
                    onClick={() => handleCurrencyChange("MXN")}
                    className="flex items-center justify-between rounded hover:bg-gray-200"
                  >
                    MXN <span className="fi fi-mx"></span>
                  </button>
                  <button
                    onClick={() => handleCurrencyChange("USD")}
                    className="flex items-center justify-between rounded hover:bg-gray-200"
                  >
                    USD <span className="fi fi-us"></span>
                  </button>
                  <button
                    onClick={() => handleCurrencyChange("CAD")}
                    className="flex items-center justify-between rounded hover:bg-gray-200"
                  >
                    CAD <span className="fi fi-ca"></span>
                  </button>
                  <button
                    onClick={() => handleCurrencyChange("EUR")}
                    className="flex items-center justify-between rounded hover:bg-gray-200"
                  >
                    EUR <span className="fi fi-eu"></span>
                  </button>
                </div>
              </div>
            </li>
            <li className="text-[#2b3163] md:mt-0 relative flex items-center group">
              <BsTranslate className="text-[#2b3163] text-2xl cursor-pointer" />
              <div className="absolute bg-[#f0f1ec] border rounded shadow mt-[8.7rem] right-[-1.7rem] w-[4rem] z-10 hidden group-hover:block">
                <div className="flex flex-col p-1">
                  <button
                    onClick={() => handleLanguageChange("es")}
                    className="flex items-center justify-between rounded hover:bg-gray-200"
                  >
                    ES <span className="fi fi-mx"></span>
                  </button>
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className="flex items-center justify-between rounded hover:bg-gray-200"
                  >
                    EN <span className="fi fi-us"></span>
                  </button>
                  <button
                    onClick={() => handleLanguageChange("it")}
                    className="flex items-center justify-between rounded hover:bg-gray-200"
                  >
                    IT <span className="fi fi-it"></span>
                  </button>
                  <button
                    onClick={() => handleLanguageChange("fr")}
                    className="flex items-center justify-between rounded hover:bg-gray-200"
                  >
                    FR <span className="fi fi-fr"></span>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* MOBILE NAV */}
      <div
        className={`container h-screen mx-auto md:hidden ${
          isMobileMenuOpen ? "" : "hidden"
        }`}
      >
        <ul className="flex flex-col ">
          {Object.keys(translations.nav).map((key, index) => (
            <li className="mt-8" key={index}>
              <Link
                href={`/${key}`}
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50"
              >
                {translations.nav[key]}
              </Link>
            </li>
          ))}
          <li className="absolute left-[3.5rem] bottom-[3.5rem] text-[#2b3163] flex flex-col items-center">
            <div onClick={() => setMobileCurrencyOpen(!isMobileCurrencyOpen)}>
              <BsCurrencyExchange className="text-[#2b3163] text-3xl cursor-pointer" />
            </div>
            {isMobileCurrencyOpen && (
              <div className="absolute bottom-full mb-2 bg-[#f0f1ec] border rounded shadow z-10">
                <div className="flex flex-col py-1">
                  <button
                    onClick={() => handleCurrencyChange("MXN")}
                    className="flex items-center justify-between rounded hover:bg-gray-200"
                  >
                    MXN <span className="fi fi-mx"></span>
                  </button>
                  <button
                    onClick={() => handleCurrencyChange("USD")}
                    className="flex items-center justify-between rounded hover:bg-gray-200"
                  >
                    USD <span className="fi fi-us"></span>
                  </button>
                  <button
                    onClick={() => handleCurrencyChange("CAD")}
                    className="flex items-center justify-between rounded hover:bg-gray-200"
                  >
                    CAD <span className="fi fi-ca"></span>
                  </button>
                  <button
                    onClick={() => handleCurrencyChange("EUR")}
                    className="flex items-center justify-between rounded hover:bg-gray-200"
                  >
                    EUR <span className="fi fi-eu"></span>
                  </button>
                </div>
              </div>
            )}
          </li>
          <li className="absolute right-[3.5rem] bottom-[3.5rem] text-[#2b3163] flex flex-col items-center">
            <div onClick={() => setMobileLanguageOpen(!isMobileLanguageOpen)}>
              <BsTranslate className="text-[#2b3163] text-3xl cursor-pointer" />
            </div>
            {isMobileLanguageOpen && (
              <div className="absolute bottom-full mb-2 bg-[#f0f1ec] border rounded shadow z-10">
                <div className="flex flex-col p-1">
                  <button
                    onClick={() => handleLanguageChange("es")}
                    className="flex items-center justify-between rounded hover:bg-gray-200"
                  >
                    ES <span className="fi fi-mx"></span>
                  </button>
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className="flex items-center justify-between rounded hover:bg-gray-200"
                  >
                    EN <span className="fi fi-us"></span>
                  </button>
                  <button
                    onClick={() => handleLanguageChange("it")}
                    className="flex items-center justify-between rounded hover:bg-gray-200"
                  >
                    IT <span className="fi fi-it"></span>
                  </button>
                  <button
                    onClick={() => handleLanguageChange("fr")}
                    className="flex items-center justify-between rounded hover:bg-gray-200"
                  >
                    FR <span className="fi fi-fr"></span>
                  </button>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
