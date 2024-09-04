"use client";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { HiBadgeCheck } from "react-icons/hi";
import { IoLogoNoSmoking } from "react-icons/io5";

const RoomStuff = ({
  bathroomStuff,
  bathRoomStuffTitle,
  roomStuff,
  roomStuffTitle,
  views,
  viewsTitle,
  noSmokingTitle,
  noSmoking,
}) => {
  const { getTranslations } = useLanguage();
  const translations = getTranslations();

  return (
    <>
      <h4 className="mt-4 text-sm lg:text-lg text-[#2b3163] font-semibold text-center mb-1">
        {bathRoomStuffTitle}
      </h4>
      {bathroomStuff.map((room) => (
        <div key={room.id}>
          <div className="flex flex-wrap items-center justify-around">
            {room.bathroomStuff?.map((amenity, index) => (
              <div
                key={index}
                className="mr-4 flex items-center justify-center h-auto w-auto mb-2 "
              >
                <HiBadgeCheck className="w-5 h-5 text-[#2b3163]" />
                <p className="text-xs ml-1 text-[#2b3163]">
                  {translations[room.roomType]?.bathroomStuff[amenity.title] ||
                    amenity.title}
                </p>
              </div>
            ))}
          </div>
          <hr className="mt-2" />
        </div>
      ))}
      <h4 className="mt-4 text-sm lg:text-lg text-[#2b3163] font-semibold text-center mb-1">
        {roomStuffTitle}
      </h4>
      {roomStuff.map((room) => (
        <div key={room.id}>
          <div className="flex flex-wrap items-center justify-around">
            {room.roomStuff?.map((amenity, index) => (
              <div
                key={index}
                className="mr-4 flex items-center justify-center h-auto w-auto mb-2 "
              >
                <HiBadgeCheck className="w-5 h-5 text-[#2b3163]" />
                <p className="text-xs ml-1 text-[#2b3163]">
                  {translations[room.roomType]?.roomStuff[amenity.title] ||
                    amenity.title}
                </p>
              </div>
            ))}
          </div>
          <hr className="mt-2" />
        </div>
      ))}

      <h4 className="mt-4 text-sm lg:text-lg text-[#2b3163] font-semibold text-center mb-1">
        {viewsTitle}
      </h4>
      {views.map((room) => (
        <div key={room.id}>
          <div className="flex flex-wrap items-center justify-around">
            {room.views?.map((amenity, index) => (
              <div
                key={index}
                className="mr-4 flex items-center justify-center h-auto w-auto mb-2 "
              >
                <HiBadgeCheck className="w-5 h-5 text-[#2b3163]" />
                <p className="text-xs ml-1 text-[#2b3163]">
                  {translations[room.roomType]?.views[amenity.title] ||
                    amenity.title}
                </p>
              </div>
            ))}
          </div>
          <hr className="mt-2" />
        </div>
      ))}
      <h4 className="mt-4 text-sm lg:text-lg text-[#2b3163] font-semibold text-center mb-1">
        {noSmokingTitle}
      </h4>
      <div className="mr-4 flex items-center justify-center h-auto w-auto mb-2 ">
        <IoLogoNoSmoking className="w-5 h-5 text-[#2b3163]" />
        <p className="text-xs ml-1 text-[#2b3163]">{noSmoking}</p>
      </div>
    </>
  );
};

export default RoomStuff;
