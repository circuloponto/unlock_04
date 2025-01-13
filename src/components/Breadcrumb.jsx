import React from 'react';

const Breadcrumb = ({ slides, currentVerticalIndex, currentHorizontalIndex, setCurrentVerticalIndex, setCurrentHorizontalIndex, isMenuOpen }) => {
  return (
    <nav className={`breadcrumbs-nav ${isMenuOpen ? 'breadcrumbs-nav--hidden' : 'breadcrumbs-nav--visible'}`}>
      {slides.map((row, vIndex) => (
        <div key={vIndex} className="horizontal-breadcrumbs">
          {/* First slide in row */}
          <button
            className={`breadcrumb-button breadcrumb-button--sub ${currentVerticalIndex === vIndex && currentHorizontalIndex === 0 ? 'active' : ''}`}
            onClick={() => {
              setCurrentVerticalIndex(vIndex);
              setCurrentHorizontalIndex(0);
            }}
          />
          {/* Second slide in row */}
          <button
            className={`breadcrumb-button breadcrumb-button--sub ${currentVerticalIndex === vIndex && currentHorizontalIndex === 1 ? 'active' : ''}`}
            onClick={() => {
              setCurrentVerticalIndex(vIndex);
              setCurrentHorizontalIndex(1);
            }}
          />
          {/* Third slide only in last row */}
          {vIndex === slides.length - 1 && (
            <button
              className={`breadcrumb-button breadcrumb-button--sub ${currentVerticalIndex === vIndex && currentHorizontalIndex === 2 ? 'active' : ''}`}
              onClick={() => {
                setCurrentVerticalIndex(vIndex);
                setCurrentHorizontalIndex(2);
              }}
            />
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
