"use client";
import React, { useRef } from "react";
import { BiMailSend } from "react-icons/bi";
import emailjs from "@emailjs/browser";
import Title from "../components/Title";
import "../globals.css"

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0001lfs",
        "template_02ypadr",
        form.current,
        "rZ6_7d53He4pfv50b"
      )
      .then(
        (result) => {
          console.log("Mensaje enviado con éxito:", result.text);
          alert("¡Mensaje enviado con éxito!");
        },
        (error) => {
          console.log("Error al enviar el mensaje:", error.text);
          alert("Error al enviar el mensaje.");
        }
      );
    e.target.reset();
  };

  return (
    <>
      {/* Fake nav background */}
      <section className="h-[125px] bg-[#2b3163] shadow-lg top-0 left-0 w-full transition-all duration-300"></section>

      <section className="py-8">
        <Title title="Contáctanos" />
      </section>

      {/* Form Section */}
      <div className="container mx-auto pb-[100px] lg:px-16 ">
        <div className="shadow-[0px_0px_20px_1px_#718096] rounded-lg grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side Image */}
          <div className="flex justify-center">
            <img
              className="sm:rounded-l-lg lg:rounded-l-lg object-cover "
              src="https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-regular%2FHabitaci%C3%B3n-Doble-4.webp?alt=media&token=36f9afdf-95b7-4ede-b332-54b62000da8a"
              alt="Hotel Plaza Nardo's"
            />
          </div>

          {/* Right Side Form */}
          <div className="flex items-center justify-center bg-gray-100 lg:rounded-r-lg">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-full p-8 bg-white lg:rounded-lg"
            >
              {/* Full Name */}
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block text-base font-bold mb-2 text-[#2b3163]"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-md border border-gray-300 py-3 px-4 text-gray-700 focus:border-[#2b3163] focus:outline-none"
                />
              </div>

              {/* Phone Number */}
              <div className="mb-5">
                <label
                  htmlFor="phone"
                  className="block text-base font-bold mb-2 text-[#2b3163]"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  required
                  className="w-full rounded-md border border-gray-300 py-3 px-4 text-gray-700 focus:border-[#2b3163] focus:outline-none"
                />
              </div>

              {/* Email Address */}
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-base font-bold mb-2 text-[#2b3163]"

                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-md border border-gray-300 py-3 px-4 text-gray-700 focus:border-[#2b3163] focus:outline-none"
                />
              </div>

              {/* Message */}
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="block text-base font-bold mb-2 text-[#2b3163]"

                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  placeholder="Write your message here"
                  required
                  className="w-full rounded-md border border-gray-300 py-3 px-4 text-gray-700 focus:border-[#2b3163] focus:outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              {/* <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 focus:outline-none"
                >
                  Send Message
                </button>
              </div> */}
              <div className="flex-1 p-4 flex justify-center items-center ">
          
                  <button 
                  type="submit"
                  className="shake-btn cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-[#2b3163] rounded-lg">
                    <span className="font-bold text-white text-xl relative z-10 group-hover:text-[#2b3163] duration-500">
                      {/* Reservar{" "} bookNow */}
                      <p className="inline mr-4">  Send Message</p>
                      <BiMailSend className="  mb-1 inline h-5 w-5" />
                    </span>
                    <span className="absolute top-0 left-0 w-full bg-[#2b3163] duration-500 group-hover:-translate-x-full h-full"></span>
                    <span className="absolute top-0 left-0 w-full bg-[#2b3163] duration-500 group-hover:translate-x-full h-full"></span>

                    <span className="absolute top-0 left-0 w-full bg-[#2b3163] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                    <span className="absolute delay-300 top-0 left-0 w-full bg-[#2b3163] duration-500 group-hover:translate-y-full h-full"></span>
                  </button>
               
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;
