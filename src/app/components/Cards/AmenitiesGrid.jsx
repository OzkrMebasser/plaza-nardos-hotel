"use client"
import { useEffect } from 'react';
import { useRoomsAndCurrency } from "@/app/contexts/RoomsAndCurrencyContext";
import { useLanguage } from "@/app/contexts/LanguageContext";
import Title from '../Title';

const AmenitiesGrid = () => {

  const {homeAmenities,setHomeAmenities } = useRoomsAndCurrency();
  const { getTranslations } = useLanguage();
  const translations = getTranslations();


    useEffect(() => {
      setHomeAmenities(homeAmenities);
  }, [homeAmenities, setHomeAmenities]);


  return (
    <section className="py-5 relative bg-white  sm:py-16 lg:py-24 lg:pt-10 ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
        {/* <Title title={"Amenidades del Hotel"}/> */}
        <Title title={translations.homeTitles.services}/>
        <div
       
        className=" grid items-center max-w-6xl grid-cols-2 gap-4 mx-auto mt-12 md:mt-20 md:grid-cols-4 lg:grid-cols-5">
          {homeAmenities.map(({title,icon : Icon}, index) => {
            // const Icon = {icon}
            return (
              <div
               data-aos="flip-left"
                key={index}
                className="rounded-sm text-[#2b3163] hover:text-white  bg-white hover:bg-[#2b3163] h-32 flex flex-col shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 items-center justify-center p-4"
              >
                <Icon className="text-4xl mb-2 " />
                <p className="text-xs lg:text-sm font-medium ">{translations.homeServices[title]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesGrid;



