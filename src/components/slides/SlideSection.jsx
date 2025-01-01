import React from 'react';

// Base styles that all slides will share
const SlideSection = ({ children, className, style }) => {
  console.log('SlideSection rendering with:', { className, style });
  return (
    <section className={`slide-section ${className || ''}`} style={style}>
      {children}
    </section>
  );
};

// Base text styles that can be extended
const SlideText = ({ children, className }) => {
  console.log('SlideText rendering with:', { className });
  return (
    <div className={`slide-text ${className || ''}`}>
      {children}
    </div>
  );
};

export { SlideText };
export default SlideSection;
