"use client";
import { useLanguage } from "@/app/contexts/LanguageContext";
import Title from "./Title";

const Map = () => {
  const { getTranslations } = useLanguage();
  const translations = getTranslations();
  return (
    <>
    <div className=" mx-auto mt-4">
    <Title title={translations.homeTitles.location}/>
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.058968731312!2d-87.07424012475435!3d20.62645308092408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e430018376b23%3A0x86904511614f061e!2sHotel%20Plaza%20Nardos!5e0!3m2!1sen!2sca!4v1722902038768!5m2!1sen!2sca" 
        className="mt-4 border-0 w-full h-[450px]"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        
      />
      </div>
    </>
  );
};

export default Map;
