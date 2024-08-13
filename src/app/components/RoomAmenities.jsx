// import React from 'react'
import { HiBadgeCheck } from "react-icons/hi";
import Link from "next/link";

const RoomAmenities = () => {
  return (
    <>
      <div className="text-justify w-[800px] bg-[white] p-4 lg:p-4 lg:mt-10 ">
        <p className="text-justify">
          {/* Contamos con 6 Departamentos en villas por cada módulo de 90 m²
                y/o 110 m². */}
          Amenidad 1
          {/* 
                ASI ES COMO VA A AQUEDAR PARA LAS TRADUCIONES
                {language === es ? es[amenidad_1] : en[amenidad_1]} */}
        </p>
        <p className="text-justify pt-4 pb-4">
          {/* Contamos con 6 Departamentos en villas por cada módulo de 90 m²
                y/o 110 m². */}
          Amenidad 1
          {/* 
                ASI ES COMO VA A AQUEDAR PARA LAS TRADUCIONES
                {language === es ? es[amenidad_1] : en[amenidad_1]} */}
        </p>
        <p className="text-justify">
          {/* Contamos con 6 Departamentos en villas por cada módulo de 90 m²
                y/o 110 m². */}
          Amenidad 1
          {/* 
                ASI ES COMO VA A AQUEDAR PARA LAS TRADUCIONES
                {language === es ? es[amenidad_1] : en[amenidad_1]} */}
        </p>
        <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0 mt-6 lg:mt-12">
          <ul className="space-y-3">
            <li className="flex">
              <span className="mr-1">
                <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
              </span>
              {/* 1 Recámaras */}
              Amenidad 1
            </li>
            <li className="flex">
              <span className="mr-1">
                <HiBadgeCheck className="w-5 h-5 text-teal-500" />
              </span>
              {/* Sala */}
              Amenidad 1
            </li>
            <li className="flex">
              <span className="mr-1">
                <HiBadgeCheck className="w-5 h-5 text-teal-500" />
              </span>
              {/* "Comedor" */}
              Amenidad 1
            </li>
            <li className="flex">
              <span className="mr-1">
                <HiBadgeCheck className="w-5 h-5 text-teal-500" />
              </span>
              Amenidad 1
            </li>
          </ul>
          <ul className="space-y-3">
            <li className="flex">
              <span className="mr-1">
                <HiBadgeCheck className="w-5 h-5 text-teal-500" />
              </span>
              Amenidad 1
            </li>
            <li className="flex">
              <span className="mr-1">
                <HiBadgeCheck className="w-5 h-5 text-teal-500" />
              </span>
              Amenidad 1
            </li>
            <li className="flex">
              <span className="mr-1">
                <HiBadgeCheck className="w-5 h-5 text-teal-500" />
              </span>
              Amenidad 1
            </li>
            {/* 
            {amenidad_8 ? (
              <li className="flex">
                <span className="mr-1">
                  <HiBadgeCheck className="w-5 h-5 text-teal-500" />
                </span>
                {amenidad_8}
              </li>
            ) : (
              <li className="flex">
                <span className="mr-1">
                  <HiBadgeCheck className="w-5 h-5 text-teal-500" />
                </span>
                Y mucho mas...
                {language === es ? es.and_much_more : en.and_much_more}
              </li>
            )} */}

            {/* <li className="flex">
                    <span className="mr-1">
                      <HiBadgeCheck className="w-5 h-5 text-teal-500" />
                    </span>
                    {amenidad_8}
                  </li> */}
          </ul>
        </div>
        <Link href="/reservaciones">
          <button className="lg:absolute bottom-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
            Book
          </button>
        </Link>
      </div>
    </>
  );
};

export default RoomAmenities;
