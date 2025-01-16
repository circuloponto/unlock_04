import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguagePicker = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="language-picker-tooltip">
      <button
        className={`language-button ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('en')}
      >
        EN
      </button>
      <div style={{width:'10px',height:'14px',background:'white',margin:'0 4px'}}></div>
      <button
        className={`language-button ${i18n.language === 'pt' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('pt')}
      >
        PT
      </button>
      <div style={{width:'10px',height:'14px',background:'white',margin:'0 4px'}}></div>
      <button
        className={`language-button ${i18n.language === 'nl' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('nl')}
      >
        NL
      </button>
    </div>
  );
};

export default LanguagePicker;