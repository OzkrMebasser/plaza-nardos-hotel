import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  const logo =
    "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2Flogo-plaza-nardos-bgt.PNG?alt=media&token=3fd75ec3-3b07-496a-94b2-835db367653f";
  const currentYear = new Date().getFullYear();

  return (
    <div id="footer" className="flex items-end w-full ">
      <footer className="w-full text-white bg-[#2b3163] body-font">
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex flex-wrap flex-grow mt-10 -mb-10   md:mt-0 md:text-left lg:text-left">
            <div className=" w-full px-4 lg:w-1/5 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font ">
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
            <div className="w-full px-4 lg:w-1/5 md:w-1/2">
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
            <div className=" w-full px-4 lg:w-1/5 md:w-1/2">
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
            <div className=" w-full px-4 lg:w-1/5 md:w-1/2">
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
            <div className="mb- w-full px-4 lg:w-1/5 md:w-1/2 flex-shrink-0  justify-center  mx-auto text-left lg:text-center md:mx-0">
              <div className="">
                {/* <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
                  Siguenos en:
                </h2> */}
                {/* <span className="inline-flex justify-center  sm:ml-auto sm:mt-0 sm:justify-start text-center"> */}
                  {/* <button class="group relative w-7 h-7 overflow-hidden rounded-full bg-white text-lg shadow justify-center">
                    <div class=" text-center flex align-middle justify-center absolute inset-0 w-0 bg-gray-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                   
                    <a className="relative text-[#2b3163] group-hover:text-white text-center  ">
                      <FaInstagram className="w-5 h-5 mx-auto" />
                    </a>
                  </button> */}
                  {/* <a className="text-white cursor-pointer hover:text-indigo-300">
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
                  </a> */}
                {/* </span> */}
              </div>
              <p className="text-[.8rem] mb-2 mx-auto">
                &copy; {currentYear}, All Rights Reserved.
               
              </p>
              <a className="flex items-left justify-left lg:items-center lg:justify-center font-medium text-gray-900 title-font ">
                <img
                  src={logo}
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
