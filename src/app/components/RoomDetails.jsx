"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RoomDetailsImages from "@/app/components/Sliders/RoomDetailsImages";
import RoomAmenities from "@/app/components/RoomAmenities";
import { BsFillNodePlusFill, BsNodeMinusFill } from "react-icons/bs";

const RoomDetails = ({ roomType, images_A, images_B }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className="py-6">
        <div
          className="relative flex py-5 items-center px-8 lg:px-16 cursor-pointer"
          onClick={toggleOpen}
        >
          <button className="absolute right-8 lg:right-16">
            {isOpen ? (
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
            isOpen ? "opacity-100 h-auto" : "opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          <div>
            <section className="px-4">
              <RoomDetailsImages images_A={images_A} images_B={images_B} />
            </section>
          </div>
          <div className="relative">
            <div className="flex items-center justify-center bg-yellow-600 h-[450px]">
              <RoomAmenities />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoomDetails;

{
  /* //  unitDesc={"Contamos con 6 Departamentos en villas por cada módulo de 90 m2 o 110 m2."}
   */
}
{
  /* <AmenitiesInUnits
              unitDesc={
                language === es
                  ? es.pdc.tres_patios.unit_1.unit_1_description
                  : en.pdc.tres_patios.unit_1.unit_1_description
              }
              amenidad_1={
                language === es
                  ? es.pdc.tres_patios.unit_1.unit_1_amenidades.amenidad_1
                  : en.pdc.tres_patios.unit_1.unit_1_amenidades.amenidad_1
              }
              amenidad_2={
                language === es
                  ? es.pdc.tres_patios.unit_1.unit_1_amenidades.amenidad_2
                  : en.pdc.tres_patios.unit_1.unit_1_amenidades.amenidad_2
              }
              amenidad_3={
                language === es
                  ? es.pdc.tres_patios.unit_1.unit_1_amenidades.amenidad_3
                  : en.pdc.tres_patios.unit_1.unit_1_amenidades.amenidad_3
              }
              amenidad_4={
                language === es
                  ? es.pdc.tres_patios.unit_1.unit_1_amenidades.amenidad_4
                  : en.pdc.tres_patios.unit_1.unit_1_amenidades.amenidad_4
              }
              amenidad_5={
                language === es
                  ? es.pdc.tres_patios.unit_1.unit_1_amenidades.amenidad_5
                  : en.pdc.tres_patios.unit_1.unit_1_amenidades.amenidad_5
              }
              amenidad_6={
                language === es
                  ? es.pdc.tres_patios.unit_1.unit_1_amenidades.amenidad_6
                  : en.pdc.tres_patios.unit_1.unit_1_amenidades.amenidad_6
              }
              amenidad_7={
                language === es
                  ? es.pdc.tres_patios.unit_1.unit_1_amenidades.amenidad_2
                  : en.pdc.tres_patios.unit_1.unit_1_amenidades.amenidad_7
              }
              amenidad_8={
                language === es
                  ? es.pdc.tres_patios.unit_1.unit_1_amenidades.amenidad_8
                  : en.pdc.tres_patios.unit_1.unit_1_amenidades.amenidad_8
              }
            /> */
}
{
  /* <div className="flex items-center justify-center mt-8 mb-4 lg:mt-12 bg-green-700 ">
              <button
                className=" mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded "
                onClick={goBack}
              >
        
                Go back
              </button>
            </div> */
}
