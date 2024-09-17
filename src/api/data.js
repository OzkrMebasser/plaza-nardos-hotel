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
import { MdOutlineBalcony } from "react-icons/md";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaTreeCity } from "react-icons/fa6";
import { AiOutlineBank } from "react-icons/ai";
import { GiTripleGate } from "react-icons/gi"; //patio
import { MdDeck } from "react-icons/md";

import es from "../app/locales/es";
import en from "../app/locales/en";
import it from "../app/locales/it";
import fr from "../app/locales/fr";

const translations = {
  es,
  en,
  it,
  fr,
};

const defaultLanguage = "es";

export const roomsData = [
  //id: 1 -- Habitación Doble, 2 personas // homeShow: true,
  {
    id: 1,
    roomId: "double",
    route: "/habitaciones#double",
    roomType: "dlbBedRoom",
    beds: 2,
    doubleBeds: "dlbBedRoom",
    sofa: 0,
    homeShow: true,
    capacity: 2,

    price: { MXN: 2100, USD: 119.12, CAD: 161.79, EUR: 108.7 },
    fees: { MXN: 462, USD: 26.21, CAD: 35.59, EUR: 23.91 },
    description: "dlbBedRoom",

    amenities: [
      {
        title: "m2",
        icon: TbRulerMeasure,
      },
      {
        title: "balcony",
        icon: MdOutlineBalcony,
      },

      {
        title: "poolView",
        icon: FaSwimmer,
      },
      {
        title: "cityView",
        icon: BsFillBuildingsFill,
      },
      {
        title: "courtyardView",
        icon: HiBuildingOffice2,
      },
      {
        title: "airConditioning",
        icon: FaSnowflake,
      },
      {
        title: "Patio",
        icon: MdDeck,
      },
      {
        title: "privateBathroom",
        icon: FaShower,
      },
      {
        title: "flatScreenTV",
        icon: GrMonitor,
      },
      {
        title: "terrace",
        icon: AiOutlineBank,
      },
      {
        title: "freeWiFi",
        icon: FaWifi,
      },
    ],
    // bathRoomStuffTitle: "bathRoomStuffTitle",
    bathroomStuff: [
      { title: "freeStuff" },
      { title: "wc" },
      { title: "toiletPaper" },
      { title: "shower" },
    ],
    // roomStuffTitle: "roomStuffTitle",
    roomStuff: [
      { title: "tv" },
      { title: "bedCovers" },
      { title: "stairs" },
      { title: "fan" },
      { title: "towels" },
      { title: "closet" },
      { title: "ac" },
      { title: "coatRack" },
      { title: "towelsSheets" },
    ],
    // viewsTitle: "viewsTitle",
    views: [
      { title: "toBalcony" },
      { title: "toTerrace" },
      { title: "toPool" },
      { title: "toCity" },
      { title: "toPatio" },
    ],
    imageHomeCards: [
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-regular%2FHabitaci%C3%B3n-Doble.webp?alt=media&token=16209fb6-62af-4c52-8bcd-981f56bc076f",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-regular%2FHabitaci%C3%B3n-Doble-1.webp?alt=media&token=34bc58db-7ac8-40ba-b75a-53ea944d49b1",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-regular%2FHabitaci%C3%B3n-Doble-2.webp?alt=media&token=d0f7e7f4-3752-4d1e-a68a-a05a087af3ed",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-regular%2FHabitaci%C3%B3n-Doble-3.webp?alt=media&token=a77704fa-2c32-4771-bf6d-89828e6f43af",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-regular%2FHabitaci%C3%B3n-Doble-4.webp?alt=media&token=36f9afdf-95b7-4ede-b332-54b62000da8a",
    ],
    images_B: [
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-regular%2FHabitaci%C3%B3n-Doble.webp?alt=media&token=16209fb6-62af-4c52-8bcd-981f56bc076f",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-regular%2FHabitaci%C3%B3n-Doble-1.webp?alt=media&token=34bc58db-7ac8-40ba-b75a-53ea944d49b1",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-regular%2FHabitaci%C3%B3n-Doble-2.webp?alt=media&token=d0f7e7f4-3752-4d1e-a68a-a05a087af3ed",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-regular%2FHabitaci%C3%B3n-Doble-3.webp?alt=media&token=a77704fa-2c32-4771-bf6d-89828e6f43af",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-regular%2FHabitaci%C3%B3n-Doble-4.webp?alt=media&token=36f9afdf-95b7-4ede-b332-54b62000da8a",
    ],
  },
  //id: 2 -- Habitación Doble, 3 personas,
  {
    id: 2,
    roomType: "dlbBedRoom",
    beds: 2,
    sofa: 0,
    capacity: 3,
    price: { MXN: 3700, USD: 209.87, CAD: 285.05, EUR: 191.51 },
    fees: { MXN: 814, USD: 46.17, CAD: 62.71, EUR: 42.13 },
  },
  //id: 3 -- Habitación Doble, 4 personas
  {
    id: 3,
    roomType: "dlbBedRoom",
    beds: 2,
    sofa: 0,
    capacity: 4,
    price: { MXN: 3900, USD: 221.21, CAD: 300.46, EUR: 201.86 },
    fees: { MXN: 858, USD: 48.67, CAD: 66.1, EUR: 44.41 },
  },
  //id: 4 -- "Habitación Doble Deluxe SIN BALCON, 2 personas // homeShow: true,
  {
    id: 4,
    roomId: "double-deluxe",
    route: "/habitaciones#double-deluxe",
    roomType: "dlbDeluxe",
    homeShow: true,
    beds: 2,
    doubleBeds: "dlbDeluxe",
    sofa: 0,
    capacity: 2,
    maxCapacity: "",
    price: { MXN: 1700, USD: 96.43, CAD: 130.97, EUR: 87.99 },
    fees: { MXN: 374, USD: 21.21, CAD: 28.81, EUR: 19.36 },
    description: "dlbDeluxe",

    amenities: [
      {
        title: "m2",
        icon: TbRulerMeasure,
      },
      {
        title: "poolView",
        icon: FaSwimmer,
      },
      {
        title: "courtyardView",
        icon: HiBuildingOffice2,
      },
      {
        title: "airConditioning",
        icon: FaSnowflake,
      },
      {
        title: "privateBathroom",
        icon: FaShower,
      },
      {
        title: "flatScreenTV",
        icon: GrMonitor,
      },
      {
        title: "freeWiFi",
        icon: FaWifi,
      },
    ],
    bathroomStuff: [
      { title: "freeStuff" },
      { title: "wc" },
      { title: "toiletPaper" },
      { title: "shower" },
    ],
    roomStuff: [
      { title: "tv" },
      { title: "bedCovers" },
      { title: "downStairs" },
      { title: "fan" },
      { title: "towels" },
      { title: "closet" },
      { title: "socket" },
      { title: "ac" },
      { title: "coatRack" },
      { title: "towelsSheets" },
    ],
    views: [{ title: "toPool" }, { title: "toPatio" }],

    imageHomeCards: [
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-Deluxe-2-camas-imagenes%2FHabitaci%C3%B3n-Doble%20-Deluxe-1.webp?alt=media&token=c9e2c685-6f04-4a2d-8220-8b8f3137e5f2",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-Deluxe-2-camas-imagenes%2FHabitaci%C3%B3n-Doble%20-Deluxe.webp?alt=media&token=30c4f45b-e359-44aa-a722-2dfe8ac54072",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-Deluxe-2-camas-imagenes%2FHabitaci%C3%B3n-Doble%20-Deluxe-2.webp?alt=media&token=891f6c9e-bffd-4ac7-b2e3-c63b2e5f7c9c",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-Deluxe-2-camas-imagenes%2FHabitaci%C3%B3n-Doble%20-Deluxe-3.webp?alt=media&token=bc8abd39-2a7a-4acd-88de-1b430fc69485",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-Deluxe-2-camas-imagenes%2FHabitaci%C3%B3n-Doble%20-Deluxe-4.webp?alt=media&token=cb5fe3b2-f42b-489c-913a-95800d4ed0bd",
    ],
    images_B: [
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-Deluxe-2-camas-imagenes%2FHabitaci%C3%B3n-Doble%20-Deluxe-1.webp?alt=media&token=c9e2c685-6f04-4a2d-8220-8b8f3137e5f2",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-Deluxe-2-camas-imagenes%2FHabitaci%C3%B3n-Doble%20-Deluxe.webp?alt=media&token=30c4f45b-e359-44aa-a722-2dfe8ac54072",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-Deluxe-2-camas-imagenes%2FHabitaci%C3%B3n-Doble%20-Deluxe-2.webp?alt=media&token=891f6c9e-bffd-4ac7-b2e3-c63b2e5f7c9c",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-Deluxe-2-camas-imagenes%2FHabitaci%C3%B3n-Doble%20-Deluxe-3.webp?alt=media&token=bc8abd39-2a7a-4acd-88de-1b430fc69485",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-Deluxe-2-camas-imagenes%2FHabitaci%C3%B3n-Doble%20-Deluxe-4.webp?alt=media&token=cb5fe3b2-f42b-489c-913a-95800d4ed0bd",
    ],
  },
  //id: 5 -- "Habitación Doble Deluxe SIN BALCON, 3 personas",
  {
    id: 5,
    roomType: "dlbDeluxe",
    beds: 2,
    sofa: 0,
    capacity: 3,
    price: { MXN: 3000, USD: 170.16, CAD: 231.12, EUR: 155.28 },
    fees: { MXN: 660, USD: 37.44, CAD: 50.85, EUR: 34.16 },
  },
  //id: 6 -- "Habitación Doble Deluxe SIN BALCON, 4 personas",
  {
    id: 6,
    roomType: "dlbDeluxe",
    beds: 2,
    sofa: 0,
    capacity: 4,
    price: { MXN: 3200, USD: 181.51, CAD: 246.53, EUR: 165.63 },
    fees: { MXN: 704, USD: 39.93, CAD: 54.24, EUR: 36.44 },
  },
  //id: 7 -- "Habitación Doble Deluxe **CON BALCON**, 2 personas // homeShow: true,
  {
    id: 7,
    roomId: "double-deluxe-balcony",
    route: "/habitaciones#double-deluxe-balcony",
    roomType: "dlbDeluxeWithBalcony",
    homeShow: true,
    beds: 2,
    doubleBeds: "dlbDeluxeWithBalcony",
    sofa: 0,
    capacity: 2,
    maxCapacity: "",
    price: { MXN: 1700, USD: 96.43, CAD: 130.97, EUR: 87.99 },
    fees: { MXN: 374, USD: 21.21, CAD: 28.81, EUR: 19.36 },
    description: "dlbDeluxeWithBalcony",

    amenities: [
      {
        title: "m2",
        icon: TbRulerMeasure,
      },
      {
        title: "balcony",
        icon: MdOutlineBalcony,
      },
      {
        title: "cityView",
        icon: BsFillBuildingsFill,
      },
      {
        title: "airConditioning",
        icon: FaSnowflake,
      },
      {
        title: "Patio",
        icon: MdDeck,
      },
      {
        title: "privateBathroom",
        icon: FaShower,
      },
      {
        title: "flatScreenTV",
        icon: GrMonitor,
      },
      {
        title: "terrace",
        icon: AiOutlineBank,
      },
      {
        title: "freeWiFi",
        icon: FaWifi,
      },
    ],
    bathroomStuff: [
      { title: "freeStuff" },
      { title: "wc" },
      { title: "toiletPaper" },
      { title: "shower" },
    ],
    roomStuff: [
      { title: "tv" },
      { title: "bedCovers" },
      { title: "downStairs" },
      { title: "fan" },
      { title: "towels" },
      { title: "closet" },
      { title: "socket" },
      { title: "ac" },
      { title: "coatRack" },
      { title: "towelsSheets" },
    ],

    views: [
      { title: "toBalcony" },
      { title: "toTerrace" },
      { title: "toCity" },
      { title: "toPatio" },
    ],
    imageHomeCards: [
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-Deluxe-balcon%2FHabitaci%C3%B3n-Doble-Deluxe-balcon-1.webp?alt=media&token=e9edf4d8-7584-4e16-96fe-27551e35c2cf",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-Deluxe-balcon%2FHabitaci%C3%B3n-Doble-Deluxe-balcon.webp?alt=media&token=8cef5d9e-d366-46ef-8861-1f15138a914a",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-Deluxe-balcon%2FHabitaci%C3%B3n-Doble-Deluxe-balcon-2.webp?alt=media&token=5848bc3d-462c-45c5-8a8c-a0add6a18415",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-Deluxe-balcon%2FHabitaci%C3%B3n-Doble-Deluxe-balcon-4.webp?alt=media&token=280be52c-a45c-4aea-b687-c4284c74a7a1",
    ],
    images_B: [
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-Deluxe-balcon%2FHabitaci%C3%B3n-Doble-Deluxe-balcon-1.webp?alt=media&token=e9edf4d8-7584-4e16-96fe-27551e35c2cf",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-Deluxe-balcon%2FHabitaci%C3%B3n-Doble-Deluxe-balcon.webp?alt=media&token=8cef5d9e-d366-46ef-8861-1f15138a914a",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-Deluxe-balcon%2FHabitaci%C3%B3n-Doble-Deluxe-balcon-2.webp?alt=media&token=5848bc3d-462c-45c5-8a8c-a0add6a18415",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-Deluxe-balcon%2FHabitaci%C3%B3n-Doble-Deluxe-balcon-4.webp?alt=media&token=280be52c-a45c-4aea-b687-c4284c74a7a1",
    ],
  },
  //id: 8 -- "Habitación Doble Deluxe **CON BALCON**, 3 personas",
  {
    id: 8,
    roomType: "dlbDeluxeWithBalcony",
    beds: 2,
    sofa: 0,
    capacity: 3,
    price: { MXN: 3000, USD: 170.16, CAD: 231.12, EUR: 155.28 },
    fees: { MXN: 660, USD: 37.44, CAD: 50.85, EUR: 34.16 },
  },
  //id: 9 -- "Habitación Doble Deluxe **CON BALCON**, 4 personas",
  {
    id: 9,
    roomType: "dlbDeluxeWithBalcony",
    beds: 2,
    sofa: 0,
    capacity: 4,
    price: { MXN: 3200, USD: 181.51, CAD: 246.53, EUR: 165.63 },
    fees: { MXN: 704, USD: 39.93, CAD: 54.24, EUR: 36.44 },
  },
  //id: 10 -- Habitación Triple Deluxe, 3 personas, // homeShow: true
  {
    id: 10,
    roomId: "triple-deluxe",
    route: "/habitaciones#triple-deluxe",
    roomType: "tripleDeluxe",
    beds: 1,
    sofa: 1,
    homeShow: true,
    capacity: 3,
    price: { MXN: 3000, USD: 170.16, CAD: 231.12, EUR: 155.28 },
    fees: { MXN: 660, USD: 37.44, CAD: 50.85, EUR: 34.16 },
    description: "tripleDeluxe",
    amenities: [
      {
        title: "m2",
        icon: TbRulerMeasure,
      },
      {
        title: "poolView",
        icon: FaSwimmer,
      },
      {
        title: "courtyardView",
        icon: HiBuildingOffice2,
      },
      {
        title: "airConditioning",
        icon: FaSnowflake,
      },
      {
        title: "privateBathroom",
        icon: FaShower,
      },
      {
        title: "flatScreenTV",
        icon: GrMonitor,
      },
      {
        title: "freeWiFi",
        icon: FaWifi,
      },
    ],
    bathroomStuff: [
      { title: "freeStuff" },
      { title: "wc" },
      { title: "toiletPaper" },
      { title: "shower" },
      // En tu baño privado:
      // Artículos de higiene gratis
      // Regadera
      // Inodoro
      // Papel de baño
    ],
    roomStuff: [
      { title: "tv" },
      { title: "bedCovers" },
      { title: "downStairs" },
      { title: "sofaBed" },
      { title: "fan" },
      { title: "towels" },
      { title: "closet" },
      { title: "seatingRoom" },
      { title: "socket" },
      { title: "ac" },
      { title: "coatRack" },
      { title: "towelsSheets" },
    ],

    views: [{ title: "toPool" }, { title: "toPatio" }],

    imageHomeCards: [
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Triple-Deluxe%2FHabitaci%C3%B3n-Triple-Deluxe.webp?alt=media&token=2d27a6a4-777c-4990-81b7-a44995e55221",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Triple-Deluxe%2FHabitaci%C3%B3n-Triple-Deluxe-1.webp?alt=media&token=414f7b38-f608-4b0e-b97b-3b4cbe0e4316",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Triple-Deluxe%2FHabitaci%C3%B3n-Triple-Deluxe-2.webp?alt=media&token=439b838a-2b67-4b92-acb4-857ee0fe4ba9",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Triple-Deluxe%2FHabitaci%C3%B3n-Triple-Deluxe-3.webp?alt=media&token=103a659b-b84b-4394-9e57-d929aace071d",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Triple-Deluxe%2FHabitaci%C3%B3n-Triple-Deluxe-4.webp?alt=media&token=01fb69d2-d2e1-498f-8282-ec5db00ef17d",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Triple-Deluxe%2FHabitaci%C3%B3n-Triple-Deluxe-5.webp?alt=media&token=d251d604-bea3-4307-9a4e-832123709be0",
    ],
    images_B: [
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Triple-Deluxe%2FHabitaci%C3%B3n-Triple-Deluxe.webp?alt=media&token=2d27a6a4-777c-4990-81b7-a44995e55221",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Triple-Deluxe%2FHabitaci%C3%B3n-Triple-Deluxe-1.webp?alt=media&token=414f7b38-f608-4b0e-b97b-3b4cbe0e4316",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Triple-Deluxe%2FHabitaci%C3%B3n-Triple-Deluxe-2.webp?alt=media&token=439b838a-2b67-4b92-acb4-857ee0fe4ba9",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Triple-Deluxe%2FHabitaci%C3%B3n-Triple-Deluxe-3.webp?alt=media&token=103a659b-b84b-4394-9e57-d929aace071d",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Triple-Deluxe%2FHabitaci%C3%B3n-Triple-Deluxe-4.webp?alt=media&token=01fb69d2-d2e1-498f-8282-ec5db00ef17d",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Triple-Deluxe%2FHabitaci%C3%B3n-Triple-Deluxe-5.webp?alt=media&token=d251d604-bea3-4307-9a4e-832123709be0",
    ],
  },
  //id: 11 -- Habitación Cuádruple Confort, 3 personas, // homeShow: true
  {
    id: 11,
    roomId: "cuadruple",
    route: "/habitaciones#cuadruple",
    roomType: "cuadrupleBedRoom",
    beds: 2,
    sofa: 0,
    singleBed: 1,
    homeShow: true,
    capacity: 4,
    price: { MXN: 3200, USD: 181.51, CAD: 246.53, EUR: 165.63 },
    fees: { MXN: 704, USD: 39.93, CAD: 54.24, EUR: 36.44 },
    description: "cuadrupleBedRoom",
    amenities: [
      {
        title: "m2",
        icon: TbRulerMeasure,
      },
      {
        title: "balcony",
        icon: MdOutlineBalcony,
      },
      {
        title: "cityView",
        icon: BsFillBuildingsFill,
      },
      {
        title: "airConditioning",
        icon: FaSnowflake,
      },
      {
        title: "Patio",
        icon: MdDeck,
      },
      {
        title: "privateBathroom",
        icon: FaShower,
      },
      {
        title: "flatScreenTV",
        icon: GrMonitor,
      },
      {
        title: "terrace",
        icon: AiOutlineBank,
      },
      {
        title: "freeWiFi",
        icon: FaWifi,
      },
    ],
    bathroomStuff: [
      { title: "freeStuff" },
      { title: "wc" },
      { title: "toiletPaper" },
      { title: "shower" },
    ],
    roomStuff: [
      { title: "tv" },
      { title: "bedCovers" },
      { title: "downStairs" },
      { title: "fan" },
      { title: "towels" },
      { title: "closet" },
      { title: "seatingRoom" },
      { title: "socket" },
      { title: "ac" },
      { title: "coatRack" },
      { title: "towelsSheets" },
    ],

    views: [
      { title: "toBalcony" },
      { title: "toTerrace" },
      {title: "toPool"},
      { title: "toCity" },
      { title: "toPatio" },
    ],
    imageHomeCards: [
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-Deluxe-balcon%2FHabitaci%C3%B3n-Doble-Deluxe-balcon-1.webp?alt=media&token=e9edf4d8-7584-4e16-96fe-27551e35c2cf",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-Deluxe-balcon%2FHabitaci%C3%B3n-Doble-Deluxe-balcon.webp?alt=media&token=8cef5d9e-d366-46ef-8861-1f15138a914a",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-Deluxe-balcon%2FHabitaci%C3%B3n-Doble-Deluxe-balcon-2.webp?alt=media&token=5848bc3d-462c-45c5-8a8c-a0add6a18415",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Doble-Deluxe-balcon%2FHabitaci%C3%B3n-Doble-Deluxe-balcon-4.webp?alt=media&token=280be52c-a45c-4aea-b687-c4284c74a7a1",
    ],

    imageHomeCards: [
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Cu%C3%A1druple-Confort%2FHabitaci%C3%B3n-Cu%C3%A1druple-Confort.webp?alt=media&token=08056e0c-c074-42ac-92d8-760f4e071818",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Cu%C3%A1druple-Confort%2FHabitaci%C3%B3n-Cu%C3%A1druple-Confort-1.webp?alt=media&token=99a1a021-6492-4e16-afda-0fa977840359",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Cu%C3%A1druple-Confort%2FHabitaci%C3%B3n-Cu%C3%A1druple-Confort-2.webp?alt=media&token=4fe29aad-7eab-46a8-8281-4e0d64a8d291",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Cu%C3%A1druple-Confort%2FHabitaci%C3%B3n-Cu%C3%A1druple-Confort-3.webp?alt=media&token=f90848c7-ecba-4f22-8021-918d5663d36e",
    ],
    images_B: [
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Cu%C3%A1druple-Confort%2FHabitaci%C3%B3n-Cu%C3%A1druple-Confort.webp?alt=media&token=08056e0c-c074-42ac-92d8-760f4e071818",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Cu%C3%A1druple-Confort%2FHabitaci%C3%B3n-Cu%C3%A1druple-Confort-1.webp?alt=media&token=99a1a021-6492-4e16-afda-0fa977840359",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Cu%C3%A1druple-Confort%2FHabitaci%C3%B3n-Cu%C3%A1druple-Confort-2.webp?alt=media&token=4fe29aad-7eab-46a8-8281-4e0d64a8d291",
      "https://firebasestorage.googleapis.com/v0/b/hotel-plaza-nardos.appspot.com/o/main-images%2FHabitaci%C3%B3n-Cu%C3%A1druple-Confort%2FHabitaci%C3%B3n-Cu%C3%A1druple-Confort-3.webp?alt=media&token=f90848c7-ecba-4f22-8021-918d5663d36e",
    ],
  },
];

export const homeAmenities = [
  {
    title: "freeWiFi",
    icon: FaWifi,
    description: "Disfruta de una conexión a internet rápida y gratuita.",
  },
  {
    title: "airConditioning",
    icon: FaSnowflake,
    description: "Mantente fresco con nuestro aire acondicionado.",
  },
  {
    title: "familyRooms",
    icon: MdFamilyRestroom,
    description: "Espacio adecuado para toda la familia.",
  },
  {
    title: "flatScreenTV",
    icon: FaTv,
    description:
      "Relájate viendo tus programas favoritos en una pantalla plana.",
  },
  {
    title: "nonSmokingRooms",
    icon: FaSmokingBan,
    description: "Disfruta de un ambiente libre de humo.",
  },
  {
    title: "privateBathroom",
    icon: FaShower,
    description: "Disfruta de la privacidad de tu propio baño y ducha.",
  },
  {
    title: "outdoorPool",
    icon: FaSwimmer,
    description: "Refrescate en nuestra piscina al aire libre.",
  },
  {
    title: "twentyFourHourReception",
    icon: Ri24HoursFill,
    description: "Atención y asistencia disponible las 24 horas del día.",
  },
  {
    title: "dailyCleaningService",
    icon: GiBroom,
    description: "Tu habitación limpia y ordenada todos los días.",
  },
  {
    title: "privateBeachArea",
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
