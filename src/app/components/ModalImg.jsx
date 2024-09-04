"use client";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { AiFillCloseCircle } from "react-icons/ai";



const ModalImg = ({ image, closeModal }) => {
  const { getTranslations } = useLanguage();
  const translations = getTranslations();
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="modal-container bg-white w-full  md:max-w-md mx-auto rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">{translations.closeImg}</p>
            <span className="modal-close" onClick={closeModal}>
              <AiFillCloseCircle className="text-2xl text-red-700" />
            </span>
          </div>
          <img src={image} alt="Ampliación de la imagen" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default ModalImg;
