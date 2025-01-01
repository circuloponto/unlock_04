import React from 'react';
import SlideSection from './SlideSection';

const Slide5 = ({ getSlideColor }) => {
  return (
    <SlideSection $bgColor={getSlideColor(4, 0)} className="slide5-section">
      <div className="slide5-text">
        {/* Slide 5 content */}
      </div>
    </SlideSection>
  );
};

export default Slide5;
