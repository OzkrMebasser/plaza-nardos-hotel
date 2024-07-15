"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import { useCurrency } from "../contexts/CurrencyContext";
import DropdownsLGscreen from "./DropdownsLGscreen";
import HamburguerMenu from "./HamburguerMenu";
import DropdownsSMscreen from "./DropdownsSMscreen";
import { BsCurrencyExchange, BsTranslate } from "react-icons/bs";

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
      className={`fixed top-0 left-0 w-full transition-all duration-300 ${
        isScrolled ? "bg-white " : "bg-transparent"
      } px-4 py-2.5  z-50`}
    >
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            height={80}
            width={140}
            alt="logo Plaza Nardos Hotel"
            className={`transition-opacity duration-300 ${
              isScrolled ? "opacity-100" : "filter brightness-[100] contrast-100 transition duration-300 hover:filter-none"
            }`}
          />
        </Link>

        <HamburguerMenu
         isScrolled={isScrolled ? "bg-[#2b3163]" : "bg-white"}
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />

        <div className="hidden md:flex md:items-center">
          <ul className="flex space-x-8">
            {Object.keys(translations.nav).map((key, index) => (
              <li key={index}>
                <Link
                  href={`/${key}`}
                  className={`relative font-semibold cursor-pointer transition-all ease-in-out ${
                    isScrolled
                      ? "text-[#2b3163] hover:text-gray-400"
                      : "text-white "
                  }`}
                >
                  {translations.nav[key]}
                </Link>
              </li>
            ))}
            <DropdownsLGscreen
              handleLanguageChange={handleLanguageChange}
              handleCurrencyChange={handleCurrencyChange}
            />
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
        <DropdownsSMscreen
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
