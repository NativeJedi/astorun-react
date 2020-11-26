import { useState } from 'react';
import { useTranslation } from 'react-i18next';

type SetLanguage = (lang: string) => void;

type useLanguagesReturn = {
  languages: string[];
  activeLanguage: string;
  setLanguage: SetLanguage;
};

const useLanguages = (): useLanguagesReturn => {
  const { i18n } = useTranslation();
  const { options, language } = i18n;

  const resources = options.resources || {};
  const languages: string[] = Object.keys(resources);

  const [activeLanguage, setActiveLanguage] = useState<string>(language);

  const setLanguage: SetLanguage = (lang) => {
    if (activeLanguage === lang) {
      return;
    }

    setActiveLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return { languages, activeLanguage, setLanguage };
};

export default useLanguages;
