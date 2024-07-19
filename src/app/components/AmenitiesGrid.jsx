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

const amenities = [
  { title: "WiFi gratis", icon: FaWifi },
  { title: "Aire acondicionado", icon: FaSnowflake },
  { title: "Habitaciones familiares", icon: MdFamilyRestroom },
  { title: "TV de pantalla plana", icon: FaTv },
  { title: "Habitaciones No fumar", icon: FaSmokingBan },
  { title: "Baño y ducha privada", icon: FaShower },
  { title: "Piscina al aire libre", icon: FaSwimmer },
  { title: "Recepción 24 horas", icon: Ri24HoursFill },
  { title: "Servicio de limpieza diario", icon: GiBroom },
  { title: "Zona privada de playa", icon: FaUmbrellaBeach },
];

const AmenitiesGrid = () => {
  return (
    <section className="py-5 relative bg-white  sm:py-16 lg:py-24 lg:pt-14 ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-light text-[#2b3163] sm:text-4xl sm:leading-tight">
            Amenidades del Hotel
          </h2>
        </div>
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
