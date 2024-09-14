"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import RoomSlidesPics from "@/app/components/Sliders/RoomSlidesPics";
import RoomAmenities from "@/app/components/RoomAmenities";
import {

  BsCalendarCheckFill,
} from "react-icons/bs";
import "@/app/components/Sliders/mySwyper.css";
import Link from "next/link";

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
  //   const { activeRoom, openRoomToggle, closeRoomToggle } = useRoomToggle();
  const { getTranslations } = useLanguage();
  const translations = getTranslations();
//   const isRoomOpen = activeRoom === id;

  return (
    <>
      <div>
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

        <div className="flex flex-col md:flex-row justify-between items-center p-4 container w-[auto]">
          <div className="flex-1 p-4">
            <p className="text-[1rem] text-justify ml-1 text-[#2b3163]">
              {description}
            </p>
          </div>
          {/* <div className="flex-1 p-4 flex justify-center items-center ">
            <Link href="/reservaciones">
              <button className="shake-btn cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-[#2b3163] rounded-lg">
                <span className="font-bold text-white text-xl relative z-10 group-hover:text-[#2b3163] duration-500">
                
                  <p className="inline mr-4"> {translations.bookNow}</p>
                  <BsCalendarCheckFill className="  mb-1 inline h-5 w-5" />
                </span>
                <span className="absolute top-0 left-0 w-full bg-[#2b3163] duration-500 group-hover:-translate-x-full h-full"></span>
                <span className="absolute top-0 left-0 w-full bg-[#2b3163] duration-500 group-hover:translate-x-full h-full"></span>

                <span className="absolute top-0 left-0 w-full bg-[#2b3163] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                <span className="absolute delay-300 top-0 left-0 w-full bg-[#2b3163] duration-500 group-hover:translate-y-full h-full"></span>
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default RoomSumary;
