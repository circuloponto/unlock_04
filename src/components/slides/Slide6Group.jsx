import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import BaseSlideSection, { SlideText as BaseSlideText } from './SlideSection';

const Slide6Section = styled(BaseSlideSection)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: calc(var(--cell-size) * 4);
  padding-bottom: calc(var(--cell-size) * 5);
  padding-left: calc(var(--cell-size) * 3);
  padding-right: calc(var(--cell-size) * 3);
  box-sizing: border-box;
`;

const Slide6Text = styled(BaseSlideText)`
  width: calc(var(--cell-size) * 18);
  min-width: calc(var(--cell-size) * 18);
  height: calc(100vh - calc(var(--cell-size) * 4) - 200px);
  display: block;
  background: #e6811e17;
  display: flex;
  flex-direction: row;
  gap: calc(var(--cell-size) * 2);
  padding: calc(var(--cell-size) * 1);
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  
  @media (max-width: 645px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  @media (max-width: 500px) {
    height: calc(100vh - calc(var(--cell-size) * 4) - 150px);
  }

  h3 {
    text-indent: 30px;
    text-align: justify;
    font-size: clamp(4px, 1vw + 0.6rem, 16px);
    line-height: 1.5;
    color: #616379;
    font-weight: 360;
    margin: 0;
    width:calc(var(--cell-size) * 8);
    span {
      font-weight: 700;
      border-bottom: 3px solid #e6821e;
    }
    @media (max-width: 645px) {
      width:calc(var(--cell-size) * 16);
    }
  }
`;

const Slide6A = ({ getSlideColor }) => {
  const { t } = useTranslation();
  return (
    <Slide6Section $bgColor={getSlideColor(5, 0)}>
      <Slide6Text>
        <h3><span>Unlock</span> {t('slides.slide6.section1.paragraph1')}</h3>
        <h3>{t('slides.slide6.section1.paragraph2')}</h3>
      </Slide6Text>
    </Slide6Section>
  );
};

const Slide6B = ({ getSlideColor }) => {
  const { t } = useTranslation();
  return (
    <Slide6Section $bgColor={getSlideColor(5, 1)}>
      <Slide6Text>
        <h3><span>Unlock</span> {t('slides.slide6.section2.paragraph1')}</h3>
        <h3>{t('slides.slide6.section2.paragraph2')}</h3>
      </Slide6Text>
    </Slide6Section>
  );
};

const Slide6C = ({ getSlideColor }) => {
  const { t } = useTranslation();
  return (
    <Slide6Section $bgColor={getSlideColor(5, 2)}>
      <Slide6Text>
        <h3><span>Unlock</span> {t('slides.slide6.section3.paragraph1')}</h3>
        <h3>{t('slides.slide6.section3.paragraph2')}</h3>
      </Slide6Text>
    </Slide6Section>
  );
};

const Slide6Group = ({ getSlideColor }) => ({
  content: <Slide6A getSlideColor={getSlideColor} />
});

export { Slide6A, Slide6B, Slide6C };
export default Slide6Group;
