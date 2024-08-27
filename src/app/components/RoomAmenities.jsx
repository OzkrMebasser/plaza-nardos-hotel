"use client";
import { HiBadgeCheck } from "react-icons/hi";
import AmenitiesList from "./AmenitiesList";
import Link from "next/link";
import RoomStuff from "./RoomStuff";

const RoomAmenities = ({ roomType, roomAmenities, description, bathroomStuff, bathRoomStuffTitle }) => {
  return (
    <>
      <div className="text-justify w-full h-full  p-2">
        <h2 className="mt-6 text-lg lg:text-xl text-sky-900 font-black text-center">
          {roomType}
        </h2>

        <AmenitiesList roomAmenities={roomAmenities} />
        <p className="text-xs ml-1 text-[#2b3163]">{description}</p>
        <RoomStuff stuff={bathroomStuff} stuffTitle={bathRoomStuffTitle} />

        <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0 mt-6 lg:mt-12">
          <ul className="space-y-3">
            <li className="flex">
              <span className="mr-1">
                <HiBadgeCheck className="w-5 h-5 text-[#07a7b3]" />
              </span>
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
          </ul>
        </div>
        <Link href="/reservaciones">
          <button className="lg:absolute bottom-4 mx-auto px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
            Book
          </button>
        </Link>
      </div>
    </>
  );
};

export default RoomAmenities;
