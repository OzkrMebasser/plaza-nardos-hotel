"use client"
import React, { createContext, useContext, useState } from 'react';
import es from '../locales/es';
import en from '../locales/en';
import fr from '../locales/fr';
import it from '../locales/it';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const translations = {
    es,
    en,
    fr,
    it,
  };

  const getTranslations = () => translations[language];

  const menuItems = [
    { href: '/', label: 'welcome', current: true },
    { href: '/rooms', label: 'rooms', current: false },
    { href: '/services', label: 'services', current: false },
    { href: '/reservations', label: 'reservations', current: false },
    { href: '/contact', label: 'contact', current: false },
  ];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, getTranslations, menuItems }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
