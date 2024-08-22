"use client";
import { useRoomsAndCurrency } from "@/app/contexts/RoomsAndCurrencyContext";
import { useLanguage } from "@/app/contexts/LanguageContext";

const AmenitiesList = ({roomAmenities}) => {
  // const roomAmenitiesAll = [roomAmenities];
  const { roomsData } = useRoomsAndCurrency();

  const { getTranslations } = useLanguage();
  const translations = getTranslations();
  // const filteredRooms = roomsData.filter((room) => room.homeShow);

  // const dlbRoom = [];
  // dlbRoom.push(filteredRooms[0]);
  // console.log(dlbRoom);

  return (
    <>
      {roomAmenities?.map((room) => (
        <div
          className="flex flex-wrap mt-3 items-center justify-center"
          key={room.id}
        >
          {room.amenities?.map((amenity, index) => (
            <div
              key={index}
              className="mr-4 flex items-center justify-center h-auto w-auto py-2"
            >
              <amenity.icon className="w-5 h-5 text-[#2b3163] mr-1" />
              <p className="text-xs ml-1 text-[#2b3163]">
                {translations[room.roomType]?.amenities[amenity.title] ||
                  amenity.title}
              </p>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default AmenitiesList;
