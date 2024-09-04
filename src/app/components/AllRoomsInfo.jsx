"use client";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { useRoomsAndCurrency } from "@/app/contexts/RoomsAndCurrencyContext";
import RoomDetails from "./RoomDetails";
import Title from "./Title";

const AllRoomsInfo = () => {
  const { getTranslations } = useLanguage();
  const { roomsData } = useRoomsAndCurrency();
  const translations = getTranslations();

  const filteredRooms = roomsData.filter((room) => room.homeShow);

  /**
   * Obtiene la información de una habitación específica basada en su índice.
   *
   * @param {number} index - El índice de la habitación en el array filteredRooms.
   * @returns {Object} Objeto que contiene las imágenes y las amenidades de la habitación:
   * - {Array} images_A: Array de imágenes para el componente principal de Swiper.
   * - {Array} images_B: Array de imágenes adicionales para la habitación.
   * - {Array} roomAmenities: Array que contiene las amenidades de la habitación.
   *
   * @example
   * const roomInfo = getRoomInfo(0);
   * console.log(roomInfo.images_A); // Muestra las imágenes de la primera habitación.
   */

  const getRoomInfo = (index) => {
    const room = filteredRooms[index];
    return {
      images_A: room.imageHomeCards,
      images_B: room.images_B,
      description: translations[room.description].description,
      roomAmenities: [room],
      bathroomStuff: [room],
      roomStuff: [room],
      views: [room],
    };
  };

  return (
    <>
      {/* Fake nav back-ground color */}
      <section className="h-[125px] bg-[#7c7498] shadow-lg top-0 left-0 w-full transition-all duration-300"></section>
      <section className="mt-4 py-8">
        <Title title={translations.homeTitles.ourRooms} />

        <RoomDetails
          id="double"
          roomType={translations.dlbBedRoom.title}
          bathRoomStuffTitle={translations.dlbBedRoom.bathRoomStuffTitle}
          roomStuffTitle={translations.dlbBedRoom.roomStuffTitle}
          viewsTitle={translations.dlbBedRoom.viewsTitle}
          noSmokingTitle={translations.dlbBedRoom.noSmokingTitle}
          noSmoking={translations.dlbBedRoom.noSmoking}
          {...getRoomInfo(0)}
        />

        <RoomDetails
          id="double-deluxe"
          roomType={translations.dlbDeluxe.title}
          bathRoomStuffTitle={translations.dlbDeluxe.bathRoomStuffTitle}
          roomStuffTitle={translations.dlbDeluxe.roomStuffTitle}
          viewsTitle={translations.dlbDeluxe.viewsTitle}
          noSmokingTitle={translations.dlbDeluxe.noSmokingTitle}
          noSmoking={translations.dlbDeluxe.noSmoking}
          {...getRoomInfo(1)}
        />

        <RoomDetails
          id="double-deluxe-balcony"
          roomType={translations.dlbDeluxeWithBalcony.title}
          bathRoomStuffTitle={translations.dlbDeluxeWithBalcony.bathRoomStuffTitle}
          roomStuffTitle={translations.dlbDeluxeWithBalcony.roomStuffTitle}
          viewsTitle={translations.dlbDeluxeWithBalcony.viewsTitle}
          noSmokingTitle={translations.dlbDeluxeWithBalcony.noSmokingTitle}
          noSmoking={translations.dlbDeluxeWithBalcony.noSmoking}
          {...getRoomInfo(2)}
        />
        <RoomDetails
          id="triple-deluxe"
          roomType={translations.tripleDeluxe.title}
          {...getRoomInfo(3)}
        />
        <RoomDetails
          id="cuadruple"
          roomType={translations.cuadrupleBedRoom.title}
          {...getRoomInfo(4)}
        />
      </section>
    </>
  );
};

export default AllRoomsInfo;
