import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationSK from "./translations/sk/translation.json";
import translationEN from "./translations/en/translation.json";

const fallbackLng = ["sk"];
const availableLanguages = ["sk", "en"];

const resources = {
  sk: {
    translation: translationSK,
  },
  en: {
    translation: translationEN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng,

  detection: {
    checkWhitelist: true,
  },

  whitelist: availableLanguages,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
