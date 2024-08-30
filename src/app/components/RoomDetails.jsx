"use client";
import { useRoomToggle } from "@/app/contexts/RoomToggleContext";
import RoomDetailsImages from "@/app/components/Sliders/RoomDetailsImages";
import RoomAmenities from "@/app/components/RoomAmenities";
import { BsFillNodePlusFill, BsNodeMinusFill } from "react-icons/bs";
import Link from "next/link";

const RoomDetails = ({
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
}) => {
  const { activeRoom, openRoomToggle, closeRoomToggle } = useRoomToggle();

  const isRoomOpen = activeRoom === id;

  return (
    <>
      <section className="py-3 b ">
        <div id={id} className="">
          <div
            className="relative flex py-8 items-center px-8 lg:px-16 cursor-pointer "
            onClick={() =>
              isRoomOpen ? closeRoomToggle() : openRoomToggle(id)
            }
          >
            <button className="absolute right-8 lg:right-16">
              {isRoomOpen ? (
                <BsNodeMinusFill className="h-8 w-8 text-[#7c7498]" />
              ) : (
                <BsFillNodePlusFill className="h-8 w-8 text-[#2b3163]" />
              )}
            </button>
            <span className="flex-shrink mr-4 lg:mr-8 text-gray-400">
              <h2 className="text-xl lg:text-2xl text-[#2b3163] font-black text-center">
                {roomType}
              </h2>
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:px-8 transition-all duration-500 ease-in-out ${
              isRoomOpen
                ? "opacity-100 h-auto"
                : "opacity-0 max-h-0 overflow-hidden"
            }`}
          >
            <div className="">
              <section className="px-4">
                <RoomDetailsImages images_A={images_A} images_B={images_B} />
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
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center p-4 container w-[100vw]">
              <div className="flex-1 p-6 m-2">
                <p className="text-[1rem] text-justify ml-1 text-[#2b3163]">{description}</p>
              </div>
              <div className="flex-1 p-6 m-2 flex justify-center items-center">
                {/* <Link href="/reservaciones">
                  <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
                    Book
                  </button>
                </Link> */}
                    <div className="mt-4 mb-4 lg:mt-0 lg:mb-0  lg:bottom-5 lg:right-5 flex justify-center">
                        <button className="cursor-pointer font-semibold overflow-hidden relative z-10 border border-[#2b3163] group px-8 py-2 rounded-xl">
                          <span className="relative z-10 text-[#2b3163] group-hover:text-white text-base lg:text-xl duration-500">
                            {/* {translations.seeDetails}{" "} */}Reservar
                            {/* <FaEye className="inline mb-[2px] ml-[2px]" /> */}
                          </span>
                          <span className="absolute w-full h-full bg-[#2b3163] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                          <span className="absolute w-full h-full bg-[#2b3163] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                        </button>
                      </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoomDetails;
