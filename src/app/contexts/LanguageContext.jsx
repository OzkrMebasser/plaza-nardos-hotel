"use client";
import React, { createContext, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import es from '../locales/es';
import en from '../locales/en';
import it from '../locales/it';
import fr from '../locales/fr';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('es');

  const translations = {
    es,
    en,
    it,
    fr,
  };

  const getTranslations = () => translations[language];

  const changeLanguage = (lng) => {
    setLanguage(lng);
    // i18n.changeLanguage(lng); // Cambia el idioma en i18next
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, getTranslations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
