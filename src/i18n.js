import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import languagedetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18next
  .use(initReactI18next)
  .use(languagedetector)
  .use(Backend)
  .init({
    fallbackLng: "en",
    debug: true,
    backend: {
      loadPath: (lngs, nameSpaces) =>
        `/bookingExpert/locales/${lngs}/${nameSpaces}.json`,
    },
  });
