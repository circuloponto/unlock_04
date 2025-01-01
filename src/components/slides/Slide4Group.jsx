import React from 'react';
import { useTranslation } from 'react-i18next';
import BaseSlideSection from './SlideSection';

const Slide4A = ({ getSlideColor }) => {
  const { t } = useTranslation();
  return (
    <BaseSlideSection $bgColor={getSlideColor(3, 0)} className="slide4-section">
      <div className="slide4-text">
        <h3><span>Unlock</span> {t('slides.slide4.section1.paragraph1')}</h3>
        <h3>{t('slides.slide4.section1.paragraph2')}</h3>
      </div>
    </BaseSlideSection>
  );
};

const Slide4B = ({ getSlideColor }) => {
  const { t } = useTranslation();
  return (
    <BaseSlideSection $bgColor={getSlideColor(3, 1)} className="slide4-section">
      <div className="slide4-text">
        <h3><span>Unlock</span> {t('slides.slide4.section2.paragraph1')}</h3>
        <h3>{t('slides.slide4.section2.paragraph2')}</h3>
      </div>
    </BaseSlideSection>
  );
};

const Slide4C = ({ getSlideColor }) => {
  const { t } = useTranslation();
  return (
    <BaseSlideSection $bgColor={getSlideColor(3, 2)} className="slide4-section">
      <div className="slide4-text">
        <h3><span>Unlock</span> {t('slides.slide4.section3.paragraph1')}</h3>
        <h3>{t('slides.slide4.section3.paragraph2')}</h3>
      </div>
    </BaseSlideSection>
  );
};

const Slide4Group = ({ getSlideColor }) => ({
  horizontal: [
    <Slide4A key="slide4a" getSlideColor={getSlideColor} />,
    <Slide4B key="slide4b" getSlideColor={getSlideColor} />,
    <Slide4C key="slide4c" getSlideColor={getSlideColor} />
  ]
});

export { Slide4A, Slide4B, Slide4C };
export default Slide4Group;
