import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './es';
import en from './en';
import fr from './fr';
import it from './it';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
      it: { translation: it },
      fr: { translation: fr },
      
    },
    lng: 'es',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
