import React from 'react';
import SlideSection from './SlideSection';
import { useTranslation } from 'react-i18next';
import rumoLogo from '../../assets/images/rumo.png';
import consultisLogo from '../../assets/images/consultis.png';
import suembeLogo from '../../assets/images/suem.png';

const Slide1 = () => {
  const { t } = useTranslation();
  return (
    <SlideSection>
      <div className="slide-container slide00">
        <div className="slide slide_1">   
          
            <div className="title highlight">UNLOCK - Unlocking New Life Opportunities in Carreer Knowledge</div>
            {t('slides.slide1.paragraph1')}
          
          <div>
          </div>
          
        </div>
      </div>
    </SlideSection>
  );
};

const Slide2 = () => {
  const { t } = useTranslation();
  return (
    <SlideSection>
      <div className="slide-container">
      <div className="slide slide_2">  
      {t('slides.slide1.paragraph2')}
       
      <div>
            <span className="highlight">
              {t('slides.slide1.paragraph3').split(' - ')[0]}
            </span>
            {' - ' + t('slides.slide1.paragraph3').split(' - ').slice(1).join(' - ')}
          </div>
          <div>
            <span className="highlight">
              {t('slides.slide1.paragraph4').split(' - ')[0]}
            </span>
            {' - ' + t('slides.slide1.paragraph4').split(' - ').slice(1).join(' - ')}
          </div>
          <div>
            <span className="highlight">
              {t('slides.slide1.paragraph5').split(' - ')[0]}
            </span>
            {' - ' + t('slides.slide1.paragraph5').split(' - ').slice(1).join(' - ')}
          </div>
        
          <div>
            <span className="highlight">
              {t('slides.slide1.paragraph6').split(' - ')[0]}
            </span>
            {' - ' + t('slides.slide1.paragraph6').split(' - ').slice(1).join(' - ')}
          </div>
      </div>
      </div>
    </SlideSection>
  );
};

const Slide3 = () => {
  const { t } = useTranslation();
  return (
    <SlideSection>
      <div className="slide-container">
      <div className="slide slide_3">  
          <div>{t('slides.slide2.section1.paragraph1')}</div>
          <div>
            <span className="highlight">
              {t('slides.slide2.section1.paragraph2').split(':')[0]}:
            </span>
            {t('slides.slide2.section1.paragraph2').split(':')[1]}
          </div>
          <div>
            <span className="highlight">
              {t('slides.slide2.section1.paragraph3').split(':')[0]}:
            </span>
            {t('slides.slide2.section1.paragraph3').split(':')[1]}
          </div>
          <div>
            <span className="highlight">
              {t('slides.slide2.section1.paragraph4').split(':')[0]}:
            </span>
            {t('slides.slide2.section1.paragraph4').split(':')[1]}
          </div>
         
      </div>
      </div>
    </SlideSection>
  );
};


const Slide4 = () => {
  const { t } = useTranslation();
  return (
    <SlideSection>
      <div className="slide-container">
      <div className="slide slide_4">  
      <div>
            <span className="highlight">
              {t('slides.slide2.section2.paragraph1').split(':')[0]}:
            </span>
            {t('slides.slide2.section2.paragraph1').split(':')[1]}
          </div>
        
          <div>
            <span className="highlight">
              {t('slides.slide2.section2.paragraph2').split(':')[0]}:
            </span>
            {t('slides.slide2.section2.paragraph2').split(':')[1]}
          </div>
          <div>
            <span className="highlight">
              {t('slides.slide2.section2.paragraph3').split(':')[0]}:
            </span>
            {t('slides.slide2.section2.paragraph3').split(':')[1]}
          </div>
      
          <div>
           
              {t('slides.slide2.section2.paragraph4')}
           
            
          </div>
      </div>
      </div>
    </SlideSection>
  );
};

const Slide5 = () => {
  const { t } = useTranslation();
  return (
    <SlideSection>
      <div className="slide-container">
      <div className="slide slide_5">  
          <div>{t('slides.slide3.section1.paragraph1')}</div>
          <div>
            {(() => {
              const text = t('slides.slide3.section1.paragraph2');
              const phrase = "Toolkit para o Emprego Apoiado";
              const index = text.indexOf(phrase);
              return (
                <>
                  {text.substring(0, index)}
                  <span className="highlight">{phrase}</span>
                  {text.substring(index + phrase.length)}
                </>
              );
            })()}
          </div>
      </div>
      </div>
    </SlideSection>
  );
};

const Slide6 = () => {
  const { t } = useTranslation();
  return (
    <SlideSection>
      <div className="slide-container">
      <div className="slide slide_6"> 
        <div>
          <div>
            {(() => {
              const text = t('slides.slide3.section2.paragraph1');
              const phrase = "Formação Piloto: Desenvolvimento Profissional para o Apoio à Reintegração de Ex-Reclusos";
              const index = text.indexOf(phrase);
              return (
                <>
                  {text.substring(0, index)}
                  <span className="highlight">{phrase}</span>
                  {text.substring(index + phrase.length)}
                </>
              );
            })()}
          </div>
          <div>
            {(() => {
              const text = t('slides.slide3.section2.paragraph2');
              const phrase = "Disseminação, Exploração e Eventos Multiplicadores";
              const index = text.indexOf(phrase);
              return (
                <>
                  {text.substring(0, index)}
                  <span className="highlight">{phrase}</span>
                  {text.substring(index + phrase.length)}
                </>
              );
            })()}
          </div>
        </div>
      </div>
      </div>
    </SlideSection>
  );
};

const Slide7 = () => {
  const { t } = useTranslation();
  return (
    <SlideSection>
      <div className="slide-container">
      <div className="slide slide_7"> 
          <div>{t('slides.slide4.section1.paragraph1')}</div>
          <div>
            <span className="highlight">
              {t('slides.slide4.section1.paragraph2').split(':')[0]}:
            </span>
            {t('slides.slide4.section1.paragraph2').split(':')[1]}
          </div>
          <div>
            <span className="highlight">
              {t('slides.slide4.section1.paragraph3').split(':')[0]}:
            </span>
            {t('slides.slide4.section1.paragraph3').split(':')[1]}
          </div>
      </div>
      </div>
    </SlideSection>
  );
};

const Slide8 = () => {
  const { t } = useTranslation();
  return (
    <SlideSection>
      <div className="slide-container">
        <div className="slide slide_8">
          <div>
            <span className="highlight">
              {t('slides.slide4.section2.paragraph1').split(':')[0]}:
            </span>
            {t('slides.slide4.section2.paragraph1').split(':')[1]}
          </div>
          <div>
            <span className="highlight">
              {t('slides.slide4.section2.paragraph2').split(':')[0]}:
            </span>
            {t('slides.slide4.section2.paragraph2').split(':')[1]}
          </div>
          <div>
            <span className="highlight">
              {t('slides.slide4.section2.paragraph3').split(':')[0]}:
            </span>
            {t('slides.slide4.section2.paragraph3').split(':')[1]}
          </div>
        </div>
      </div>
    </SlideSection>
  );
};
const Slide9 = () => {
  const { t } = useTranslation();
  return (
    <SlideSection>
      <div className="slide-container">
        <div className="slide slide_9">
          <img src={rumoLogo} alt="Rumo Logo" className="partner-logo rumo" />
          <div className="partner-text">
            {(() => {
              const text = t('slides.slide5.section1.paragraph1');
              const phrase = "Rumo, Cooperativa de Solidariedade Social, Crl";
              const websiteText = "https://www.rumo.org.pt/";
              const index = text.indexOf(phrase);
              const websiteIndex = text.indexOf(websiteText);
              
              return (
                <>
                 <span>A </span>
                  <span className="highlight">{phrase}</span>
                  {text.substring(index + phrase.length, websiteIndex)}
                  <span className="highlight">
                    <a href={websiteText} target="_blank" rel="noopener noreferrer">
                      {websiteText}
                    </a>
                  </span>
                </>
              );
            })()}
          </div>
        </div>
      </div>
    </SlideSection>
  );
};

const Slide10 = () => {
  const { t } = useTranslation();
  return (
    <SlideSection>
      <div className="slide-container">
        <div className="slide slide_10">
          <img src={consultisLogo} alt="Consultis Logo" className="partner-logo consultis" />
          <div className="partner-text">
            {(() => {
              const text = t('slides.slide5.section2.paragraph1');
              const phrase = "Consultis";
              const websiteText = "www.consultis.pt";
              const index = text.indexOf(phrase);
              const websiteIndex = text.indexOf(websiteText);
              
              return (
                <>
                <span>A </span>
                  <span className="highlight">{phrase}</span>
                  {text.substring(index + phrase.length, websiteIndex)}
                  <span className="highlight">
                    <a href="https://www.consultis.pt" target="_blank" rel="noopener noreferrer">
                      {websiteText}
                    </a>
                  </span>
                </>
              );
            })()}
          </div>
        </div>
      </div>
    </SlideSection>
  );
};

const Slide11 = () => {
  const { t } = useTranslation();
  return (
    <SlideSection>
      <div className="slide-container">
        <div className="slide slide_11">
          <img src={suembeLogo} alt="SUEM.BE Logo" className="partner-logo suem" />
          <div className="partner-text">
            {(() => {
              const text = t('slides.slide5.section3.paragraph1');
              const phrase = "SUEM.BE";
              const websiteText = "https://www.suem.be/";
              const index = text.indexOf(phrase);
              const websiteIndex = text.indexOf(websiteText);
              
              return (
                <>
                 <span>A </span>
                  <span className="highlight">{phrase}</span>
                  {text.substring(index + phrase.length, websiteIndex)}
                  <span className="highlight">
                    <a href={websiteText} target="_blank" rel="noopener noreferrer">
                      {websiteText}
                    </a>
                  </span>
                </>
              );
            })()}
          </div>
        </div>
      </div>
    </SlideSection>
  );
};

// Create all slide rows (5 sections with varying slides)
export const slides = [
  [<Slide1 key="slide-0.0" />, <Slide2 key="slide-0.1" />],
  [<Slide3 key="slide-1.0" />, <Slide4 key="slide-1.1" />],
  [<Slide5 key="slide-2.0" />, <Slide6 key="slide-2.1" />],
  [<Slide7 key="slide-3.0" />, <Slide8 key="slide-3.1" />],
  [<Slide9 key="slide-4.0" />, <Slide10 key="slide-4.1" />, <Slide11 key="slide-4.2" />]
];
