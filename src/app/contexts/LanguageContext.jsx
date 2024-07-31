"use client";
import React, { createContext, useContext, useState } from "react";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import es from "../locales/es";
import en from "../locales/en";
import it from "../locales/it";
import fr from "../locales/fr";

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
    it: { translation: it },
    fr: { translation: fr },
  },
  lng: "es",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "es");

  const translations = {
    es,
    en,
    it,
    fr,
  };

  const getTranslations = () => translations[language];

  const changeLanguage = (lng) => {
    setLanguage(lng);
  };

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, getTranslations }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
