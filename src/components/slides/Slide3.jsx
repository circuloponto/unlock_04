import React from 'react';
import { useTranslation } from 'react-i18next';
import BaseSlideSection from './SlideSection';

const Slide3 = ({ getSlideColor }) => {
  const { t } = useTranslation();
  
  return (
    <BaseSlideSection $bgColor={getSlideColor(2, 0)} className="slide3-section">
      <div className="slide3-text">
        <h3><span>Unlock</span> {t('slides.slide3.section1.paragraph1')}</h3>
        <h3>{t('slides.slide3.section1.paragraph2')}</h3>
      </div>
    </BaseSlideSection>
  );
};

export default Slide3;
