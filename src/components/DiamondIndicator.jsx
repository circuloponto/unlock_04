import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import LanguagePicker from './LanguagePicker';

const DiamondIndicator = ({ 
  currentVerticalIndex, 
  currentHorizontalIndex, 
  isMenuOpen,
  setCurrentVerticalIndex,
  setCurrentHorizontalIndex
}) => {
  const canGoNext = () => {
    // Last row (index 4) has 3 slides, others have 2
    const maxHorizontalIndex = currentVerticalIndex === 4 ? 2 : 1;
    
    // Check if we can go to next slide horizontally
    if (currentHorizontalIndex < maxHorizontalIndex) {
      return true;
    }
    
    // Check if we can go to next row
    if (currentVerticalIndex < 4) {
      return true;
    }
    
    return false;
  };

  const canGoPrevious = () => {
    // Check if we can go to previous slide horizontally
    if (currentHorizontalIndex > 0) {
      return true;
    }
    
    // Check if we can go to previous row
    if (currentVerticalIndex > 0) {
      return true;
    }
    
    return false;
  };

  const handleNext = () => {
    if (!canGoNext()) return;

    // If we can move horizontally in the current row
    const maxHorizontalIndex = currentVerticalIndex === 4 ? 2 : 1;
    if (currentHorizontalIndex < maxHorizontalIndex) {
      setCurrentHorizontalIndex(currentHorizontalIndex + 1);
    }
    // If we need to move to the next row
    else if (currentVerticalIndex < 4) {
      setCurrentVerticalIndex(currentVerticalIndex + 1);
      setCurrentHorizontalIndex(0);
    }
  };

  const handlePrevious = () => {
    if (!canGoPrevious()) return;

    // If we can move horizontally in the current row
    if (currentHorizontalIndex > 0) {
      setCurrentHorizontalIndex(currentHorizontalIndex - 1);
    }
    // If we need to move to the previous row
    else if (currentVerticalIndex > 0) {
      const previousRowIndex = currentVerticalIndex - 1;
      setCurrentVerticalIndex(previousRowIndex);
      // Each row (except the last) has 2 slides, so go to index 1
      setCurrentHorizontalIndex(1);
    }
  };

  return (
    <div className={`navigation-grid ${isMenuOpen ? 'menu-open' : ''}`}>
      {/* Left button */}
      <div style={{ gridColumn: 1, gridRow: 1 }}>
        <motion.button
          className={`navigation-button ${!canGoPrevious() ? 'disabled' : ''}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrevious}
          disabled={!canGoPrevious()}
        >
          <div className="navigation-icon">
            <FaChevronLeft className="arrow arrow-left"/>
          </div>
        </motion.button>
      </div>

      {/* Center space for breadcrumbs */}
      <div className="center-space" />

      {/* Right button */}
      <div style={{ gridColumn: 4, gridRow: 1 }}>
        <motion.button
          className={`navigation-button ${!canGoNext() ? 'disabled' : ''}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          disabled={!canGoNext()}
        >
          <div className="navigation-icon">
            <FaChevronRight className="arrow arrow-right"/>
          </div>
        </motion.button>
      </div>
    </div>
  );
};

export default DiamondIndicator;
