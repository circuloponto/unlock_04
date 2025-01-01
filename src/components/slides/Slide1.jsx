import React from 'react';
import { useTranslation } from 'react-i18next';
import SlideSection from './SlideSection';
import PDFDownload from '../PdfDownload';
import { pdfFiles } from '../../config/pdfs';

const Slide1 = ({ getSlideColor }) => {
  console.log('Slide1 rendering');
  const { t } = useTranslation();

  return (
    <SlideSection 
      className="slide1-section"
      style={{ backgroundColor: getSlideColor(0, 0) }}
    >
      <div className="slide1-text">
        <h3><span>Unlock</span> {t('slides.slide1.paragraph1')}</h3>
        <h3>{t('slides.slide1.paragraph2')}</h3>
        {pdfFiles.project.map(pdf => (
          <PDFDownload key={pdf.id} pdf={pdf} />
        ))}
      </div>
    </SlideSection>
  );
};

export default Slide1;
