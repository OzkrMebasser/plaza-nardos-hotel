"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import { useCurrency } from "../contexts/CurrencyContext";
import DropdownsLGscreen from "./DropdownsLGscreen";
import HamburguerMenu from "./HamburguerMenu";
import DropdownsSMscreen from "./DropdownsSMscreen";

const logo =
  "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2Flogo-plaza-nardos-bgt.PNG?alt=media&token=3fd75ec3-3b07-496a-94b2-835db367653f";

const Navbar = () => {
  const { getTranslations, changeLanguage } = useLanguage();
  const { setCurrency } = useCurrency();
  const translations = getTranslations();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileCurrencyOpen, setMobileCurrencyOpen] = useState(false);
  const [isMobileLanguageOpen, setMobileLanguageOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav
      className={` fixed top-0 left-0 w-full transition-all duration-300 ${
        isScrolled ? "bg-white " : "bg-transparent"
      }  py-2.5  z-50`}
    >
      <div className="p-2 lg:px-6 xl:px-8 2xl:px-11 flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            height={80}
            width={140}
            alt="logo Plaza Nardos Hotel"
            className={`transition-opacity duration-300 z-50 ml-[10px] md:ml-6 lg:ml-0 ${
              isScrolled
                ? "opacity-100"
                : "filter brightness-[100] contrast-100 transition duration-300 "
            }`}
          />
        </Link>

        <HamburguerMenu
          isScrolled={isScrolled}
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />

        <div className="hidden md:flex md:items-center">
          <ul
            className={`flex space-x-8 md:ml-6 
            ${isScrolled ? "ml-24 " : "text-white ml-8"}
            `}
          >
            {Object.keys(translations.nav).map((key, index) => (
              <li key={index}>
                <Link
                
                  href={`/${key}`}
                 
                  className={`font-semibold relative  cursor-pointer
                    ${isScrolled
                      ? "text-[#2b3163] hover:text-gray-400 after:bg-[#4d4d52] after:absolute after:h-[1px] after:w-0 after:bottom-[-3px] after:left-0 hover:after:w-full after:transition-all after:duration-300 "
                      : "text-white hover:text-[#2b3163] after:bg-white after:absolute after:h-[1px] after:w-0 after:bottom-[-3px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
                  }`}
                >
                  {translations.nav[key]}
                </Link>

              </li>
            ))}
            <DropdownsLGscreen
              isScrolled={isScrolled}
              handleLanguageChange={handleLanguageChange}
              handleCurrencyChange={handleCurrencyChange}
            />
          </ul>
        </div>
      </div>

      {/* MOBILE NAV */}
      <div
        className={`w-full h-screen mx-auto md:hidden  ${
          isMobileMenuOpen ? "" : "hidden"
        } 
        ${
          isScrolled
            ? "left-0"
            : "left-0 top-0 absolute bg-[#2b3163] bg-opacity-4 "
        }
        `}
      >
        <ul
          className={`flex flex-col ml-6  ${
            isScrolled ? "py-7 mt-[1rem]" : "py-7 mt-[8rem]"
          }`}
        >
          {Object.keys(translations.nav).map((key, index) => (
            <li className="w-80   " key={index}>
              <Link
                href={`/${key}`}
                className={`block py-4   ${
                  isScrolled
                    ? "text-[#2b3163]   hover:bg-gray-100 "
                    : "text-white   hover:bg-gray-700"
                }`}
              >
                {translations.nav[key]}
              </Link>
            </li>
          ))}
          <DropdownsSMscreen
            isScrolled={isScrolled}
            setMobileCurrencyOpen={setMobileCurrencyOpen}
            isMobileCurrencyOpen={isMobileCurrencyOpen}
            handleCurrencyChange={handleCurrencyChange}
            setMobileLanguageOpen={setMobileLanguageOpen}
            isMobileLanguageOpen={isMobileLanguageOpen}
            handleLanguageChange={handleLanguageChange}
          />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
