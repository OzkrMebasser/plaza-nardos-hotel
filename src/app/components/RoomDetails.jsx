"use client";
import { useRoomToggle } from "@/app/contexts/RoomToggleContext";
import RoomDetailsImages from "@/app/components/Sliders/RoomDetailsImages";
import RoomAmenities from "@/app/components/RoomAmenities";
import { BsFillNodePlusFill, BsNodeMinusFill } from "react-icons/bs";



const RoomDetails = ({ roomType, images_A, images_B, id, roomAmenities }) => {
 
  const { activeRoom, openRoomToggle, closeRoomToggle } = useRoomToggle();

  const isRoomOpen = activeRoom === id;

  return (
    <>
      <section className="py-3 ">
        <div id={id}>
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
              <h2 className="text-xl lg:text-2xl text-sky-900 font-black text-center">
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
            <div>
              <section className="px-4">
                <RoomDetailsImages images_A={images_A} images_B={images_B} />
              </section>
            </div>
            <div className="relative">
              <div className="flex items-center justify-center h-full">
                <RoomAmenities
                  roomType={roomType}
                  roomAmenities={roomAmenities}
                />
              </div>
             
            </div>
          
          </div>
        </div>
      </section>
    </>
  );
};

export default RoomDetails;
