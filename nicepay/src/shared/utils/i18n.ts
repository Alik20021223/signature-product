import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Импорт файлов переводов
import translationRU from "@utils/locales/ru/ru.json";
import translationFR from "@utils/locales/fr/fr.json";
import translationAe from "@utils/locales/ae/ae.json";

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: translationRU },
    fr: { translation: translationFR },
    ae: { translation: translationAe },
  },
  lng: "ru", // Язык по умолчанию
  fallbackLng: "ru", // Запасной язык
  interpolation: {
    escapeValue: false, // Отключаем экранирование (не нужно в React)
  },
});

export default i18n;
