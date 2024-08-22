"use client";
import Link from "next/link";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { useRoomToggle } from "../contexts/RoomToggleContext";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

import Image from "next/image";

const Footer = () => {
  const { getTranslations } = useLanguage();
  const translations = getTranslations();
  const { openRoomToggle } = useRoomToggle();

  const logo =
    "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2Flogo-plaza-nardos-bgt.PNG?alt=media&token=3fd75ec3-3b07-496a-94b2-835db367653f";
  const currentYear = new Date().getFullYear();

  return (
    <div id="footer" className="flex items-end w-full ">
      <footer className="w-full text-white bg-[#2b3163] body-font">
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex flex-wrap flex-grow mt-10 -mb-10   md:mt-0 md:text-left lg:text-left">
            <div className=" w-full px-4 lg:w-1/5 md:w-1/2">
              {/* Rooms */}
              <p className=" mb-3 font-medium tracking-widest text-white uppercase title-font relative inline-block stroke-current">
                {translations.footer.rooms}
                <svg
                  className="absolute -bottom-0.5 w-full max-h-1.5"
                  viewBox="0 0 55 5"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                    strokeWidth="2"
                  ></path>
                </svg>
              </p>
              <nav className="mb-10 list-none">
                <li className="mb-3 hover:text-gray-300">
                  <Link
                    onClick={() => openRoomToggle("double")}
                    href="/habitaciones#double"
                    className="relative w-fit block after:block after:content-[''] after:absolute after:h-[.8px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    {translations.footer.dlbBedRoom}
                  </Link>
                </li>{" "}
                <li className="mb-3 hover:text-gray-300">
                  <Link
                    onClick={() => openRoomToggle("double-deluxe")}
                    href="/habitaciones#double-deluxe"
                    className="relative w-fit block after:block after:content-[''] after:absolute after:h-[.8px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    {translations.footer.dlbDeluxe}
                  </Link>
                </li>{" "}
                <li className="mb-3 hover:text-gray-300">
                  <Link
                    onClick={() => openRoomToggle("double-deluxe-balcony")}
                    href="/habitaciones#double-deluxe-balcony"
                    className="relative w-fit block after:block after:content-[''] after:absolute after:h-[.8px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    {translations.footer.dlbDeluxeWithBalcony}
                  </Link>
                </li>{" "}
                <li className="mb-3 hover:text-gray-300">
                  <Link
                    onClick={() => openRoomToggle("triple-deluxe")}
                    href="/habitaciones#triple-deluxe"
                    className="relative w-fit block after:block after:content-[''] after:absolute after:h-[.8px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    {translations.footer.tripleDeluxe}
                  </Link>
                </li>
                <li className="mb-3 hover:text-gray-300">
                  <Link
                    onClick={() => openRoomToggle("cuadruple")}
                    href="/habitaciones#cuadruple"
                    className="relative w-fit block after:block after:content-[''] after:absolute after:h-[.8px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    {translations.footer.cuadrupleBedRoom}
                  </Link>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/5 md:w-1/2">
              <p className=" mb-3 font-medium tracking-widest text-white uppercase title-font relative inline-block stroke-current">
                Contact
                <svg
                  className="absolute -bottom-0.5 w-full max-h-1.5"
                  viewBox="0 0 55 5"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                    strokeWidth="2"
                  ></path>
                </svg>
              </p>
              <nav className="mb-10 list-none">
                <li className="mb-3 hover:text-gray-300">
                  <a
                    href="#"
                    className="relative w-fit block after:block after:content-[''] after:absolute after:h-[.8px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    Contact Support
                  </a>
                </li>
                <li className="mb-3 hover:text-gray-300">
                  <a
                    href="#"
                    className="relative w-fit block after:block after:content-[''] after:absolute after:h-[.8px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    Help Resources
                  </a>
                </li>
                <li className="mb-3 hover:text-gray-300">
                  <a
                    href="#"
                    className="relative w-fit block after:block after:content-[''] after:absolute after:h-[.8px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    Release Updates
                  </a>
                </li>
              </nav>
            </div>
            <div className=" w-full px-4 lg:w-1/5 md:w-1/2">
              <p className=" mb-3 font-medium tracking-widest text-white uppercase title-font relative inline-block stroke-current">
                Reservations
                <svg
                  className="absolute -bottom-0.5 w-full max-h-1.5"
                  viewBox="0 0 55 5"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                    strokeWidth="2"
                  ></path>
                </svg>
              </p>
              <nav className="mb-10 list-none">
                <li className="mb-3 hover:text-gray-300">
                  <a
                    href="#"
                    className="relative w-fit block after:block after:content-[''] after:absolute after:h-[.8px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    Terms &amp; Privacy
                  </a>
                </li>
                <li className="mb-3 hover:text-gray-300">
                  <a
                    href="#"
                    className="relative w-fit block after:block after:content-[''] after:absolute after:h-[.8px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mb-3 hover:text-gray-300">
                  <a
                    href="#"
                    className="relative w-fit block after:block after:content-[''] after:absolute after:h-[.8px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    FAQ
                  </a>
                </li>
              </nav>
            </div>
            <div className=" w-full px-4 lg:w-1/5 md:w-1/2">
              <p className=" mb-3 font-medium tracking-widest text-white uppercase title-font relative inline-block stroke-current">
                Siguenos en:
                <svg
                  className="absolute -bottom-0.5 w-full max-h-1.5"
                  viewBox="0 0 55 5"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                    strokeWidth="2"
                  ></path>
                </svg>
              </p>
              <div className="">
                <span className="inline-flex justify-center  sm:ml-auto sm:mt-0 sm:justify-start text-center mb-8">
                  <button className="group relative w-7 h-7 overflow-hidden rounded-full bg-white text-lg shadow justify-center hover:border hover:border-white hover:scale-125  mr-4 ">
                    <div className=" text-center flex align-middle justify-center absolute inset-0 w-0 bg-[#2b3163] transition-all duration-[250ms] ease-out group-hover:w-full  "></div>

                    <a
                      className="relative text-[#2b3163] group-hover:text-white text-center  "
                      href="https://www.facebook.com/profile.php?id=61561964999266"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF className="w-5 h-5 mx-auto" />
                    </a>
                  </button>
                  <button className="group relative w-7 h-7 overflow-hidden rounded-full bg-white text-lg shadow justify-center hover:border hover:border-white hover:scale-125 ">
                    <div className=" text-center flex align-middle justify-center absolute inset-0 w-0 bg-[#2b3163] transition-all duration-[250ms] ease-out group-hover:w-full  "></div>

                    <a
                      href="https://www.instagram.com/plazanardos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative text-[#2b3163] group-hover:text-white text-center  "
                    >
                      <FaInstagram className="w-5 h-5 mx-auto" />
                    </a>
                  </button>
                </span>
              </div>
            </div>
            <div className="mb- w-full px-4 lg:w-1/5 md:w-1/2 flex-shrink-0  justify-center  mx-auto text-left lg:text-center md:mx-0">
              <p className="text-[.8rem] mb-2 mx-auto">
                &copy; {currentYear}, All Rights Reserved.
              </p>
              <a className="flex items-left justify-left lg:items-center lg:justify-center font-medium text-gray-900 title-font ">
                <Image
                  src={logo}
                  width={100}
                  height={100}
                  alt="logo"
                  className="w-auto h-24 filter brightness-[100] contrast-100 transition duration-300 fill-current"
                />
              </a>

              <p>
                <a
                  href="https://oscarmorenodev.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-thin text-[.6rem] mx-auto ml-3 lg:ml-0"
                >
                  Made with &#x1F9E1; by Ozkr Mebasser
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
