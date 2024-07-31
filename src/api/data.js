import {
  FaWifi,
  FaSnowflake,
  FaTv,
  FaSmokingBan,
  FaShower,
  FaSwimmer,
  FaUmbrellaBeach,
} from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
import { MdFamilyRestroom } from "react-icons/md";
import { Ri24HoursFill } from "react-icons/ri";
import { GiBroom, GiWifiRouter } from "react-icons/gi";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { GrMonitor } from "react-icons/gr";





export const roomsData = [
  //id: 1
  {
    id: 1,
    roomType: "Habitación Doble Deluxe",
    beds: 2,
    doubleBeds: "Camas dobles",
    sofa: 0,
    capacity: 2,
    price: { MXN: 1700, USD: 96.43, CAD: 130.97, EUR: 87.99 },
    fees: { MXN: 374, USD: 21.21, CAD: 28.81, EUR: 19.36 },
    description:
      "Providing free toiletries, this twin room includes a private bathroom with a shower. This twin room features air conditioning, a wardrobe, a flat-screen TV and pool views. The unit offers 2 beds.",

    amenities: [
      {
        title: "20 m² ",
        icon: TbRulerMeasure,
      },
      {
        title: "Vistas a la piscina",
        icon: FaSwimmer,
      },
      {
        title: "Vistas a un patio interior ",
        icon: HiBuildingOffice2,
      },

      {
        title: "Aire acondicionado",
        icon: FaSnowflake,
      },
      {
        title: "Baño privado",
        icon: FaShower,
      },
      {
        title: "TV de pantalla plana",
        icon: GrMonitor,
      },
      {
        title: " WiFi gratis",
        icon: FaWifi,
      },
  
    ],
    imageUrl:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/581805281.jpg?k=f6dde082aa3b621d4ccebb9a0ee7e6e3a15a2e2ca1291e07367689ccad6d020c&o=&hp=1",
  },
  //id: 2
  {
    id: 2,
    roomType: "Habitación Doble Deluxe - 2 camas dobles",
    beds: 2,
    sofa: 0,
    capacity: 3,
    price: { MXN: 3000, USD: 170.16, CAD: 231.12, EUR: 155.28 },
    fees: { MXN: 660, USD: 37.44, CAD: 50.85, EUR: 34.16 },
  },
  //id: 3
  {
    id: 3,
    roomType: "Habitación Doble Deluxe - 2 camas dobles",
    beds: 2,
    sofa: 0,
    capacity: 4,
    price: { MXN: 3200, USD: 181.51, CAD: 246.53, EUR: 165.63 },
    fees: { MXN: 704, USD: 39.93, CAD: 54.24, EUR: 36.44 },
  },
  //id: 4
  {
    id: 4,
    roomType: "Habitación Doble - 2 camas dobles",
    beds: 2,
    sofa: 0,
    capacity: 2,
    price: { MXN: 2100, USD: 119.12, CAD: 161.79, EUR: 108.7 },
    fees: { MXN: 462, USD: 26.21, CAD: 35.59, EUR: 23.91 },
  },
  //id: 5
  {
    id: 5,
    roomType: "Habitación Doble - 2 camas dobles",
    beds: 2,
    sofa: 0,
    capacity: 3,
    price: { MXN: 3700, USD: 209.87, CAD: 285.05, EUR: 191.51 },
    fees: { MXN: 814, USD: 46.17, CAD: 62.71, EUR: 42.13 },
  },
  //id: 6
  {
    id: 6,
    roomType: "Habitación Doble - 2 camas dobles",
    beds: 2,
    sofa: 0,
    capacity: 4,
    price: { MXN: 3900, USD: 221.21, CAD: 300.46, EUR: 201.86 },
    fees: { MXN: 858, USD: 48.67, CAD: 66.1, EUR: 44.41 },
  },
  //id: 7
  {
    id: 7,
    roomType:
      "Habitación Triple Deluxe - 1 cama doble extragrande y 1 sofá cama",
    beds: 1,
    sofa: 1,
    capacity: 3,
    price: { MXN: 3000, USD: 170.16, CAD: 231.12, EUR: 155.28 },
    fees: { MXN: 660, USD: 37.44, CAD: 50.85, EUR: 34.16 },
  },
  //id: 8
  {
    id: 8,
    roomType: "Habitación Deluxe con 2 camas grandes",
    beds: 2,
    sofa: 0,
    capacity: 4,
    price: { MXN: 3200, USD: 181.51, CAD: 246.53, EUR: 165.63 },
    fees: { MXN: 704, USD: 39.93, CAD: 54.24, EUR: 36.44 },
  },
];

export const homeAmenities = [
  {
    title: "WiFi gratis",
    icon: FaWifi,
    description: "Disfruta de una conexión a internet rápida y gratuita.",
  },
  {
    title: "Aire acondicionado",
    icon: FaSnowflake,
    description: "Mantente fresco con nuestro aire acondicionado.",
  },
  {
    title: "Habitaciones familiares",
    icon: MdFamilyRestroom,
    description: "Espacio adecuado para toda la familia.",
  },
  {
    title: "TV de pantalla plana",
    icon: FaTv,
    description:
      "Relájate viendo tus programas favoritos en una pantalla plana.",
  },
  {
    title: "Habitaciones No fumar",
    icon: FaSmokingBan,
    description: "Disfruta de un ambiente libre de humo.",
  },
  {
    title: "Baño y ducha privada",
    icon: FaShower,
    description: "Disfruta de la privacidad de tu propio baño y ducha.",
  },
  {
    title: "Piscina al aire libre",
    icon: FaSwimmer,
    description: "Refrescate en nuestra piscina al aire libre.",
  },
  {
    title: "Recepción 24 horas",
    icon: Ri24HoursFill,
    description: "Atención y asistencia disponible las 24 horas del día.",
  },
  {
    title: "Servicio de limpieza diario",
    icon: GiBroom,
    description: "Tu habitación limpia y ordenada todos los días.",
  },
  {
    title: "Zona privada de playa",
    icon: FaUmbrellaBeach,
    description: "Acceso exclusivo a nuestra playa privada.",
  },
];

// export const amenities = [
//   {
//     title: "WiFi gratis",
//     icon: FaWifi,
//     description: "Disfruta de una conexión a internet rápida y gratuita."
//   },
//   {
//     title: "Aire acondicionado",
//     icon: FaSnowflake,
//     description: "Mantente fresco con nuestro aire acondicionado."
//   },
//   {
//     title: "Habitaciones familiares",
//     icon: MdFamilyRestroom,
//     description: "Espacio adecuado para toda la familia."
//   },
//   {
//     title: "TV de pantalla plana",
//     icon: FaTv,
//     description: "Relájate viendo tus programas favoritos en una pantalla plana."
//   },
//   {
//     title: "Habitaciones No fumar",
//     icon: FaSmokingBan,
//     description: "Disfruta de un ambiente libre de humo."
//   },
//   {
//     title: "Baño y ducha privada",
//     icon: FaShower,
//     description: "Disfruta de la privacidad de tu propio baño y ducha."
//   },
//   {
//     title: "Piscina al aire libre",
//     icon: FaSwimmer,
//     description: "Refrescate en nuestra piscina al aire libre."
//   },
//   {
//     title: "Recepción 24 horas",
//     icon: Ri24HoursFill,
//     description: "Atención y asistencia disponible las 24 horas del día."
//   },
//   {
//     title: "Servicio de limpieza diario",
//     icon: GiBroom,
//     description: "Tu habitación limpia y ordenada todos los días."
//   },
//   {
//     title: "Zona privada de playa",
//     icon: FaUmbrellaBeach,
//     description: "Acceso exclusivo a nuestra playa privada."
//   }
// ];

export const callCenterImgs = [
  "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FcallCenter1.jpeg?alt=media&token=cf9f5bbd-a67b-4634-a170-3b6ae50bb5d5",
  "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FcallCenter2.png?alt=media&token=65e77511-8ad8-4ae4-81ef-cfc88bb4e61d",
  "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FcallCenter3.png?alt=media&token=12a0ab69-47bc-4457-8e49-65cccc7946a3",
];
