import React from 'react';
import BaseSlideSection from './SlideSection';
import { useTranslation } from 'react-i18next';

const Slide2A = ({ getSlideColor }) => {
  const { t } = useTranslation();
  return (
    <BaseSlideSection $bgColor={getSlideColor(1, 0)} className="slide2-section">
      <div className="slide2-text">
        <h3><span>Unlock</span> {t('slides.slide2.section1.paragraph1')}</h3>
        <h3>{t('slides.slide2.section1.paragraph2')}</h3>
      </div>
    </BaseSlideSection>
  );
};

const Slide2B = ({ getSlideColor }) => {
  const { t } = useTranslation();
  return (
    <BaseSlideSection $bgColor={getSlideColor(1, 1)} className="slide2-section">
      <div className="slide2-text">
        <h3><span>Unlock</span> {t('slides.slide2.section2.paragraph1')}</h3>
        <h3>{t('slides.slide2.section2.paragraph2')}</h3>
      </div>
    </BaseSlideSection>
  );
};

const Slide2C = ({ getSlideColor }) => {
  const { t } = useTranslation();
  return (
    <BaseSlideSection $bgColor={getSlideColor(1, 2)} className="slide2-section">
      <div className="slide2-text">
        <h3><span>Unlock</span> {t('slides.slide2.section3.paragraph1')}</h3>
        <h3>{t('slides.slide2.section3.paragraph2')}</h3>
      </div>
    </BaseSlideSection>
  );
};

const Slide2Group = ({ getSlideColor }) => {
  return {
    horizontal: [
      <Slide2A key="slide2a" getSlideColor={getSlideColor} />,
      <Slide2B key="slide2b" getSlideColor={getSlideColor} />,
      <Slide2C key="slide2c" getSlideColor={getSlideColor} />,
    ],
  };
};

export default Slide2Group;
