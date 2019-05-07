import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
// import LanguageDetector from 'i18next-browser-languagedetector';
import { en } from './locales/default.en.json';

const options = {
  debug: true,

  resources: {
    // pt: {
    //   common: pt['pt-BR'],
    // },
    en: {
      translation: en
    },
  },
    
  lng: 'en',
  fallbackLng: 'en',

  // ns: ['common'],

  // defaultNS: 'common',

  // react: {
  //   wait: false,
  //   bindI18n: 'languageChanged loaded',
  //   bindStore: 'added removed',
  //   nsMode: 'default'
  // },
};

i18n
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init(options);
  // .changeLanguage('en', (err, t) => {
  //   if (err) return console.log('something went wrong loading', err);
  // });

export default i18n;