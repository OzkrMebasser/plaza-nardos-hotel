"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import RoomSlidesPics from "@/app/components/Sliders/RoomSlidesPics";
import RoomAmenities from "@/app/components/RoomAmenities";

import { BsCalendarCheckFill } from "react-icons/bs";
import "@/app/components/Sliders/mySwyper.css";
import "../../globals.css"

const RoomSumary = ({
  roomType,
  images_A,
  images_B,
  id,
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
  const { getTranslations } = useLanguage();
  const translations = getTranslations();

  return (
    <>
      <div id="push-up-onPrint">
        <span className="flex-shrink mr-4 lg:mr-8 text-gray-400">
          <h2 className="text-xl lg:text-2xl text-[#2b3163] font-black text-center">
            {roomType}
          </h2>
        </span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>

      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:px-8 transition-all duration-500 ease-in-out `}
      >
        <div className="">
          <section className="px-4 ">
            <RoomSlidesPics images_A={images_A} images_B={images_B} />
          </section>
        </div>
        <div className=" ">
          <div className="flex items-center justify-center h-full">
            <RoomAmenities
              roomType={roomType}
              roomAmenities={roomAmenities}
              description={description}
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
        </div>
      </div>
      <div className="justify-between items-center p-4 container w-full ">
        <div className=" p-4">
          <p className="text-[1rem] text-justify  text-[#2b3163]">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default RoomSumary;
