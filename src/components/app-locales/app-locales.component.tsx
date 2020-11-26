import React from 'react';
import useLanguages from '../../hooks/use-languages.hook';

const AppLocales = (): JSX.Element => {
  const { languages, activeLanguage, setLanguage } = useLanguages();

  return (
    <div className="app-locales">
      {languages.map((lang) => (
        <button
          key={lang}
          className={`
            btn-default
            app-locale-btn
            ${activeLanguage === lang && 'is-active'}
          `}
          onClick={() => setLanguage(lang)}
          type="button"
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default AppLocales;
