"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';
import { useCurrency } from '../contexts/CurrencyContext';

const logo = "../assets/plaza-nardos-logo.png"

const Navbar = () => {
  const { getTranslations, setLanguage } = useLanguage();
  const { setCurrency } = useCurrency();
  const translations = getTranslations();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const changeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  const changeCurrency = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <nav className="bg-white border border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          </span> */}
            {/* {translations.home} */}
        
         
          <img src={logo}  alt="logo" />
        </a>

        <div className="flex items-center">
          <button
            onClick={toggleMobileMenu}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div className={`w-full md:block md:w-auto ${isMobileMenuOpen ? '' : 'hidden'}`} id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            {Object.keys(translations).map((key, index) => (
              <li key={index}>
                <a
                  href={`/${key}`} 
                  className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  {translations[key]}
                </a>
              </li>
            ))}
            {/* <li className="mt-4">
              <select onChange={changeLanguage} className="px-3 py-2 rounded bg-gray-200">
                <option value="es">ES</option>
                <option value="en">EN</option>
                <option value="fr">FR</option>
                <option value="it">IT</option>
              </select>
            </li>
            <li className="mt-4">
              <select onChange={changeCurrency} className="px-3 py-2 rounded bg-gray-200">
                <option value="MXN">MXN</option>
                <option value="USD">USD</option>
                <option value="CAD">CAD</option>
                <option value="EUR">EUR</option>
              </select>
            </li> */}
          </ul>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <select onChange={changeLanguage} className="px-3 py-2 rounded bg-gray-200">
            <option value="es">ES</option>
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="it">IT</option>
          </select>

          <select onChange={changeCurrency} className="px-3 py-2 rounded bg-gray-200">
            <option value="MXN">MXN</option>
            <option value="USD">USD</option>
            <option value="CAD">CAD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
