import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ru from './locales/ru.json';
import ua from './locales/ua.json';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
  ua: {
    translation: ua,
  },
};

const initReactOptions: InitOptions = {
  resources,
  lng: 'en',

  interpolation: {
    escapeValue: false, // react already safes from xss
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(initReactOptions);

export default i18n;
