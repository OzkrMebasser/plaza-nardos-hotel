"use client";
import React, { useEffect, useState } from "react";
import { MdChat } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { PiPhoneOutgoingFill } from "react-icons/pi";
import { FaFacebookMessenger } from "react-icons/fa6";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { TbTimeDuration10 } from "react-icons/tb";
import { ReactTyped } from "react-typed";
import { useLanguage } from "../contexts/LanguageContext";

const ChatCard = () => {
  const { getTranslations, changeLanguage } = useLanguage();

  const translations = getTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [hasName, setHasName] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.body.offsetHeight;

      const footer = document.getElementById("footer");
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top + window.scrollY;
        setIsAtBottom(scrollPosition >= footerTop);
      } else {
        setIsAtBottom(documentHeight - scrollPosition < 450);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setName(storedName);
      setHasName(true);

      // Limpiar localStorage después de 10 minutos
      const timeoutId = setTimeout(() => {
        localStorage.removeItem("userName");
        setName("");
        setHasName(false);
      }, 10 * 60 * 1000);

      // Limpiar el temporizador
      return () => clearTimeout(timeoutId);
    }
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleNameSubmit = () => {
    if (name) {
      localStorage.setItem("userName", name);
      setHasName(true);
    }
  };

  const callCenterImgs = [
    "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FcallCenter1.jpeg?alt=media&token=cf9f5bbd-a67b-4634-a170-3b6ae50bb5d5",
    "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FcallCenter2.png?alt=media&token=65e77511-8ad8-4ae4-81ef-cfc88bb4e61d",
    "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FcallCenter3.png?alt=media&token=12a0ab69-47bc-4457-8e49-65cccc7946a3",
  ];

  // Función para seleccionar imágenes aleatorias
  const getRandomImages = () => {
    let selectedImages = [];
    let usedIndices = new Set();
    while (selectedImages.length < 3) {
      const randomIndex = Math.floor(Math.random() * callCenterImgs.length);
      if (!usedIndices.has(randomIndex)) {
        usedIndices.add(randomIndex);
        selectedImages.push(callCenterImgs[randomIndex]);
      }
    }
    return selectedImages;
  };

  useEffect(() => {
    setImages(getRandomImages());
  }, []);
  return (
    <>
      <div
        className={`fixed w-full px-4 lg:w-[29rem] bottom-[5.5rem] lg:bottom-16 md:px-4 md:right-4 lg:px-4 lg:right-16 ${
          isOpen ? "z-50" : "-z-50"
        } `}
      >
        <div
          className={`transition-all duration-300 transform ${
            isOpen ? "scale-100" : "scale-0"
          } h-[65vh] lg:h-[70vh] bg-white shadow-xl rounded-lg relative overflow-hidden`}
        >
          <div className="bg-[#f0f1ec] h-full rounded-t-lg absolute w-full lg:w-full z-0"></div>

          <div className="flex flex-col overflow-y-auto h-full">
            <div className="flex flex-col z-10 text-[#2b3163]">
              {!hasName && (
                <>
                  <div className="text-xl p-2 text-center mt-4 font-bold">
                    <ReactTyped
                      strings={[translations.chatCard.typedMessage]}
                      loop
                      typeSpeed={120}
                      backSpeed={50}
                    />
                  </div>
                  <ReactTyped
                    strings={[translations.chatCard.inputPlaceholder]}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                    loop
                  >
                    <input
                      type="text"
                      placeholder={`${translations.chatCard.inputPlaceholder}`}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full h-16 px-8 mt-8 text-gray-500 border rounded text-sm shadow-inner outline-none bg-gray-50 focus:bg-white"
                    />
                  </ReactTyped>

                  <button
                    onClick={handleNameSubmit}
                    className="bg-[#2b3163] text-white rounded-full py-4 px-8 mt-8 mx-auto justify-center"
                  >
                    {translations.chatCard.submitButton}
                    <BsArrowRightCircleFill className="inline ml-4 text-2xl" />
                  </button>
                </>
              )}
              {hasName && (
                <div className="text-2xl text-center font-bold mt-4">
                  {translations.chatCard.welcomeMessage} {name}!👋{" "}
                </div>
              )}
            </div>

            {hasName && (
              <>
                <div className="border-0 border-t-4 mt-4 border-[#2b3163] rounded z-10 shadow-md text-sm">
                  <div className="bg-white border border-t-0 rounded-t-none rounded-b flex flex-col space-y-2">
                    <div className="px-6 py-2 flex flex-col items-start gap-3">
                      <div className="font-semibold text-center ">
                        {translations.chatCard.contactMessage} 🏖️
                      </div>
                      <div className="flex flex-row gap-1 h-[auto] justify-left align-middle lg:w-full">
                        <div className="flex flex-row -space-x-12">
                          <img
                            className="w-16 h-16 rounded-full border-2 border-white"
                            src={images[0]}

                            alt="user1"
                          />
                          <img
                            className="w-16 h-16 rounded-full border-2 border-white"
                            src={images[1]}
                            alt="user2"
                          />
                          <img
                            className="w-16 h-16 rounded-full border-2 border-white"
                            src={images[2]}
                            alt="user3"
                          />
                        </div>
                        <div className="flex flex-col w-full ml-10 lg:ml-0 lg:w-[17rem] text-center">
                          <div className=" text-gray-400 text-[.75rem] md:text-[.9rem] lg:text-[.95rem] text-center">
                            {translations.chatCard.usualReplyTime}
                          </div>
                          <div className="mt-2 flex flex-row items-center justify-center gap-1 font-semibold text-[.75rem] md:text-[.9rem] lg:text-[.95rem]">
                            <MdChat className="w-4 h-4 text-blue-700" />
                            {translations.chatCard.replyTime}
                            <TbTimeDuration10 className="w-5 h-5 text-blue-700" />
                            {translations.chatCard.replyTimeMinutos}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-6 py-3 flex flex-col justify-center ">
                      <div className="w-auto h-auto mx-auto mb-4">
                        <button
                          type="button"
                          className="bg-[#2b3163] rounded-full text-white py-3 px-5"
                        >
                          <FaFacebookMessenger className="w-5 h-5 inline mr-3" />
                          <a
                            href="https://m.me/342504035620912"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {translations.chatCard.sendMessage}
                          </a>
                        </button>
                      </div>

                      <div className="w-auto h-auto mx-auto mb-4">
                        <a
                          href="https://wa.me/+529843133309"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#2b3163] rounded-full text-white py-3 px-5 flex items-center justify-center"
                        >
                          <IoLogoWhatsapp className="w-5 h-5 inline mr-3" />
                          {translations.chatCard.sendWhatsApp}
                        </a>
                      </div>

                      <div className="w-auto h-auto mx-auto mb-4">
                        <a
                          href="tel:+529843618302"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#2b3163] rounded-full text-white py-3 px-5 flex items-center justify-center"
                        >
                          <PiPhoneOutgoingFill className="w-5 h-5 inline mr-3" />
                          {translations.chatCard.phoneCall}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div
        onClick={toggleChat}
        className={`fixed z-50 shadow-2xl right-4 bottom-4 rounded-full w-16 h-16 flex items-center justify-center cursor-pointer roll-in-blurred-left ${
          isAtBottom
            ? "text-[#2b3163] bg-white text-[26px]"
            : isScrolled
            ? "bg-[#2b3163] text-white text-[24px]"
            : "text-[#2b3163] bg-white text-[26px]"
        }`}
      >
        <MdChat />
      </div>
    </>
  );
};

export default ChatCard;

