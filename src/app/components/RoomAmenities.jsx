"use client";
import { HiBadgeCheck } from "react-icons/hi";
import AmenitiesList from "./AmenitiesList";
import RoomStuff from "./RoomStuff";

const RoomAmenities = ({ roomType, roomAmenities, description, bathroomStuff, bathRoomStuffTitle, roomStuff, roomStuffTitle, views, viewsTitle }) => {
  return (
    <>
      <div className="text-justify w-full h-full  p-2">
        <h2 className="mt-6 text-lg lg:text-xl text-[#2b3163] font-black text-center">
          {roomType}
        </h2>

        <AmenitiesList roomAmenities={roomAmenities} />
        {/* <p className="text-xs ml-1 text-[#2b3163]">{description}</p> */}
        <RoomStuff bathroomStuff={bathroomStuff} bathRoomStuffTitle={bathRoomStuffTitle} roomStuff={roomStuff} roomStuffTitle={roomStuffTitle} views={views} viewsTitle={viewsTitle} />
     
        {/* <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0 mt-6 lg:mt-12">
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
        </div> */}
      
      </div>
     
    </>
  );
};

export default RoomAmenities;
