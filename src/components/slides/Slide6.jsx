import React from 'react';
import { useTranslation } from 'react-i18next';
import BaseSlideSection from './SlideSection';

export const Slide6 = ({ getSlideColor }) => {
  const { t } = useTranslation();
  return (
    <BaseSlideSection $bgColor={getSlideColor(5, 0)} className="slide6-section">
      <div className="slide6-text">
        <div className="project-info">
          <div>
            <span className="span-un">UN</span>
            <span className="span-lock">lock</span> - {t('slides.slide6.projectInfo.title')}
          </div>
        </div>

        <div className="row-container">
          <div className="partner-card">
            <div className="card-items">{t('slides.slide6.partners.partner1.name')}</div>
            <div className="card-items">{t('slides.slide6.partners.partner1.address')}</div>
            <div className="card-items">{t('slides.slide6.partners.partner1.phone')}</div>
            <div className="card-items">{t('slides.slide6.partners.partner1.mobile')}</div>
            <div className="card-items">{t('slides.slide6.partners.partner1.email')}</div>
          </div>
          <div className="vertical-line" />
          <div className="partner-card">
            <div className="card-items">{t('slides.slide6.partners.partner2.name')}</div>
            <div className="card-items">{t('slides.slide6.partners.partner2.address')}</div>
            <div className="card-items">{t('slides.slide6.partners.partner2.phone')}</div>
            <div className="card-items">{t('slides.slide6.partners.partner2.mobile')}</div>
            <div className="card-items">{t('slides.slide6.partners.partner2.email')}</div>
          </div>
        </div>

        <div className="row-menu-items">
          <div className="menu-item">{t('slides.slide6.menuTitles.project')}</div>
          <div className="menu-item" style={{width: '300px'}}>{t('slides.slide6.menuTitles.targetGroups')}</div>
          <div className="menu-item">{t('slides.slide6.menuTitles.activities')}</div>
          <div className="menu-item">{t('slides.slide6.menuTitles.partners')}</div>
          <div className="menu-item">{t('slides.slide6.menuTitles.results')}</div>
          <div className="menu-item">{t('slides.slide6.menuTitles.contacts')}</div>
        </div>

        <div className="footer">
          <p>{t('slides.slide6.additionalInfo.projectDuration')}</p>
          <p>{t('slides.slide6.additionalInfo.copyright')}</p>
          <p>{t('slides.slide6.projectInfo.subtitle')}</p>
          <p>{t('slides.slide6.projectInfo.reference')}</p>
        </div>
        <div className="disclaimer">
          <p>{t('slides.slide6.euDisclaimer.text')}</p>
        </div>

      </div>
    </BaseSlideSection>
  );
};

export default Slide6;
