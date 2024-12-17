"use client";
import React from "react";
import { TfiNewWindow } from "react-icons/tfi";
import { FaWifi, FaSnowflake, FaTv, FaSmokingBan, FaShower, FaSwimmer, FaUmbrellaBeach } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { Ri24HoursFill } from "react-icons/ri";
import { GiBroom } from "react-icons/gi";
import Link from "next/link";

const HomeCards = () => {
  const rooms = [
    {
      id: 1,
      name: "Habitación Estándar",
      description: "Una habitación cómoda con todas las comodidades básicas para una estancia agradable.",
      pricePerNight: 75,
      beds: 1,
      amenities: [
        "WiFi gratis",
        "Aire acondicionado",
        "TV de pantalla plana",
        "Baño privado",
      ],
      imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/581805281.jpg?k=f6dde082aa3b621d4ccebb9a0ee7e6e3a15a2e2ca1291e07367689ccad6d020c&o=&hp=1",
    },
    {
      id: 2,
      name: "Habitación Doble",
      description: "Una espaciosa habitación con dos camas ideales para amigos o colegas.",
      pricePerNight: 90,
      beds: 2,
      amenities: [
        "WiFi gratis",
        "Aire acondicionado",
        "TV de pantalla plana",
        "Baño privado",
        "Minibar",
      ],
      imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/582014783.jpg?k=40e7f105b716be0b4b9819be76b0c2232542e3f92414b7c3f7848ed069e6ece9&o=&hp=1",
    },
    {
      id: 3,
      name: "Suite Junior",
      description: "Disfrute de más espacio y lujo en nuestra Suite Junior con área de estar separada.",
      pricePerNight: 120,
      beds: 1,
      amenities: [
        "WiFi gratis",
        "Aire acondicionado",
        "TV de pantalla plana",
        "Baño privado",
        "Minibar",
        "Área de estar",
      ],
      imageUrl: "https://example.com/junior-suite.jpg",
    }
  ];

  const amenityIcons = {
    "WiFi gratis": <FaWifi />,
    "Aire acondicionado": <FaSnowflake />,
    "TV de pantalla plana": <FaTv />,
    "Baño privado": <FaShower />,
    "Minibar": <FaTv />,
    "Área de estar": <MdFamilyRestroom />,
    "Balcón": <FaUmbrellaBeach />,
    "Jacuzzi": <FaSwimmer />,
    "Cuna disponible": <MdFamilyRestroom />,
  };

  return (
    <section className="pt-4 pb-4 lg:pt-4 lg:pb-4">
      <div className="lg:px-16 mx-auto pb-8">
        <div className="mx-auto grid gap-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <div
              className="p-4 mx-auto w-full rounded-lg shadow-md lg:max-w-sm mt-2 hover:scale-95 hover:shadow-[0_10px_20px_rgba(0,0,0,0.38)] transition-transform duration-300"
              key={room.id}
            >
              <h1 className="text-2xl text-sky-900 font-black">{room.name}</h1>
              <p className="mb-3">{room.description}</p>
              <img className="object-cover w-full h-48" src={room.imageUrl} alt={room.name} loading="lazy"/>
              <div className="p-4">
                <h4 className="text-xl font-semibold text-blue-800">${room.pricePerNight} por noche</h4>
                <p className="mb-2 leading-normal">Camas: {room.beds}</p>
                <div className="flex flex-wrap gap-2">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-1">
                      {amenityIcons[amenity]}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
                <Link href={`rooms/${room.id}`}>
                  <button className="mt-4 w-full px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                    Ver detalles
                    <TfiNewWindow className="inline ml-2 text-lg" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
