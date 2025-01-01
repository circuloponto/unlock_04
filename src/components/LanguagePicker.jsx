import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguagePicker = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsExiting(false);
      setIsOpen(false);
    }, 300); // Match this with CSS animation duration
  };

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    handleClose();
  };

  return (
    <div className="language-picker-tooltip">
      <button 
        className="language-picker-trigger"
        onClick={() => isOpen ? handleClose() : setIsOpen(true)}
      >
        {t(`languagePicker.${i18n.language}`)}
      </button>
      {(isOpen || isExiting) && (
        <div className={`language-picker-content ${isExiting ? 'exiting' : ''}`}>
          <button
            className={`language-button ${i18n.language === 'en' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('en')}
          >
            {t('languagePicker.en')}
          </button>
          <button
            className={`language-button ${i18n.language === 'pt' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('pt')}
          >
            {t('languagePicker.pt')}
          </button>
          <button
            className={`language-button ${i18n.language === 'nl' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('nl')}
          >
            {t('languagePicker.nl')}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguagePicker;