import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const logo =
    "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2Flogo-plaza-nardos-bgt.PNG?alt=media&token=3fd75ec3-3b07-496a-94b2-835db367653f";
  // const logo = "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2Flogo-plaza-nardos-bgt.PNG?alt=media&token=3fd75ec3-3b07-496a-94b2-835db367653f";
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex items-end w-full ">
      <footer className="w-full text-white bg-[#2b3163] body-font">
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex flex-wrap flex-grow mt-10 -mb-10  text-left md:mt-0 md:text-left">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
                About
              </h2>
              <nav className="mb-10 list-none">
                <li className="mb-3 hover:text-gray-300">
                  <a
                    href="#"
                    className="relative w-fit block after:block after:content-[''] after:absolute after:h-[.8px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    Terms
                  </a>
                </li>{" "}
                <li className="mb-3 hover:text-gray-300">
                  <a
                    href="#"
                    className="relative w-fit block after:block after:content-[''] after:absolute after:h-[.8px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    Company
                  </a>
                </li>{" "}
                <li className="mb-3 hover:text-gray-300">
                  <a
                    href="#"
                    className="relative w-fit block after:block after:content-[''] after:absolute after:h-[.8px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    Careers
                  </a>
                </li>{" "}
                <li className="mb-3 hover:text-gray-300">
                  <a
                    href="#"
                    className="relative w-fit block after:block after:content-[''] after:absolute after:h-[.8px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    Blog
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
                Support
              </h2>
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
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
                Platform
              </h2>
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
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
                Contact
              </h2>
              <nav className="mb-10 list-none">
                 <li className="mb-3 hover:text-gray-300">
                  <a
                    href="#"
                    className="relative w-fit block after:block after:content-[''] after:absolute after:h-[.8px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    Send a Message
                  </a>
                </li>
                 <li className="mb-3 hover:text-gray-300">
                  <a
                    href="#"
                    className="relative w-fit block after:block after:content-[''] after:absolute after:h-[.8px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    Request a Quote
                  </a>
                </li>
                <li className="mb-3 hover:text-gray-300">
                  <a
                    href="#"
                    className="relative w-fit block after:block after:content-[''] after:absolute after:h-[.8px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    +123-456-7890
                  </a>
                </li>
              </nav>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 flex-shrink-0 w-auto justify-center  mx-auto text-center md:mx-0">
            <a className="flex items-center justify-center font-medium text-gray-900 title-font ">
              <img
                src={logo}
                alt="logo"
                className="w-auto h-24 filter brightness-[100] contrast-100 transition duration-300 fill-current"
              />
            </a>
            <p className="mt-2 text-sm text-gray-500">Design, Code and Ship!</p>
            <div className="mt-4">
              <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                <a className="text-white cursor-pointer hover:text-indigo-300">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a className="ml-3 text-white cursor-pointer hover:text-indigo-300">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a className="ml-3 text-white cursor-pointer hover:text-indigo-300">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a className="ml-3 text-white cursor-pointer hover:text-indigo-300">
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="bg-gray-300">
          <div className="container px-5 py-4 mx-auto">
            <p className="text-sm text-gray-700 capitalize xl:text-center">
              © {currentYear} All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
