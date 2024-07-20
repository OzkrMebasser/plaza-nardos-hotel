import React from 'react';
import {
  FaWifi,
  FaSnowflake,
  FaTv,
  FaSmokingBan,
  FaShower,
  FaSwimmer,
  FaUmbrellaBeach,
} from 'react-icons/fa';
import { MdFamilyRestroom } from 'react-icons/md';
import { Ri24HoursFill } from 'react-icons/ri';
import { GiBroom } from 'react-icons/gi';
import Title from './Title';

const amenities = [
  {
    title: "WiFi gratis",
    icon: FaWifi,
    description: "Disfruta de una conexión a internet rápida y gratuita en todo el establecimiento."
  },
  {
    title: "Aire acondicionado",
    icon: FaSnowflake,
    description: "Mantén la comodidad en cualquier época del año con aire acondicionado en todas las habitaciones."
  },
  {
    title: "Habitaciones familiares",
    icon: MdFamilyRestroom,
    description: "Habitaciones amplias y cómodas diseñadas para acomodar a toda la familia."
  },
  {
    title: "TV de pantalla plana",
    icon: FaTv,
    description: "Relájate con una variedad de canales en nuestra moderna TV de pantalla plana."
  },
  {
    title: "Habitaciones No fumar",
    icon: FaSmokingBan,
    description: "Habitaciones libres de humo para una estancia más saludable y cómoda."
  },
  {
    title: "Baño y ducha privada",
    icon: FaShower,
    description: "Cada habitación cuenta con un baño privado con ducha para tu total comodidad."
  },
  {
    title: "Piscina al aire libre",
    icon: FaSwimmer,
    description: "Disfruta de un refrescante chapuzón en nuestra piscina al aire libre durante todo el día."
  },
  {
    title: "Recepción 24 horas",
    icon: Ri24HoursFill,
    description: "Nuestro personal está disponible en todo momento para atender tus necesidades y consultas."
  },
  {
    title: "Servicio de limpieza diario",
    icon: GiBroom,
    description: "Mantén tu habitación siempre limpia y ordenada con nuestro servicio de limpieza diario."
  },
  {
    title: "Zona privada de playa",
    icon: FaUmbrellaBeach,
    description: "Accede a nuestra exclusiva zona de playa para relajarte con total privacidad."
  },
];

const AmenitiesGrid = () => {
  return (
    <section className="py-5 relative bg-white  sm:py-16 lg:py-24 lg:pt-10 ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
        {/* <div className="max-w-2xl mx-auto text-center"> */}
          {/* <h2 className="text-2xl font-light text-[#2b3163] sm:text-4xl sm:leading-tight">
            Amenidades del Hotel
          </h2> */}
     
        {/* </div> */}
        <Title title={"Amenidades del Hotel"}/>
        <div className=" grid items-center max-w-6xl grid-cols-2 gap-4 mx-auto mt-12 md:mt-20 md:grid-cols-4 lg:grid-cols-5">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={index}
                className="rounded-sm text-[#2b3163] hover:text-white  bg-white hover:bg-[#2b3163] h-32 flex flex-col shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 items-center justify-center p-4"
              >
                <Icon className="text-4xl mb-2 " />
                <p className="text-xs lg:text-sm font-medium ">{amenity.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesGrid;
