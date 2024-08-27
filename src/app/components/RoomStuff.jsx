"use client";
import { useLanguage } from "@/app/contexts/LanguageContext";

const RoomStuff = ({ stuff, stuffTitle}) => {
  const { getTranslations } = useLanguage();
  const translations = getTranslations();

  return (
    <>
       <h4 className="mt-4 text-sm lg:text-lg text-sky-900 font-semibold text-center">
          {stuffTitle}
        </h4>
      {stuff.map((room) => (
        <div key={room.id}>
          <div className="flex flex-wrap items-center justify-center">
            {room.bathroomStuff?.map((amenity, index) => (
              <div
                key={index}
                className="mr-4 flex items-center justify-center h-auto w-auto "
              >
                <p className="text-xs ml-1 text-[#2b3163]">
                  {translations[room.roomType]?.bathroomStuff[amenity.title] ||
                    amenity.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default RoomStuff;
