"use client";
import { HiBadgeCheck } from "react-icons/hi";
import AmenitiesList from "./AmenitiesList";
import RoomStuff from "./RoomStuff";

const RoomAmenities = ({
  roomType,
  roomAmenities,
  description,
  bathroomStuff,
  bathRoomStuffTitle,
  roomStuff,
  roomStuffTitle,
  views,
  viewsTitle,
  noSmokingTitle,
  noSmoking,
}) => {
  return (
    <>
      <div className="text-justify w-full h-full  p-2">
        <h2 className="mt-6 text-lg lg:text-xl text-[#2b3163] font-black text-center">
          {roomType}
        </h2>

        <AmenitiesList roomAmenities={roomAmenities} />

        <RoomStuff
          bathroomStuff={bathroomStuff}
          bathRoomStuffTitle={bathRoomStuffTitle}
          roomStuff={roomStuff}
          roomStuffTitle={roomStuffTitle}
          views={views}
          viewsTitle={viewsTitle}
          noSmokingTitle={noSmokingTitle}
          noSmoking={noSmoking}
        />
      </div>
    </>
  );
};

export default RoomAmenities;
