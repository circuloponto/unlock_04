import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import LanguagePicker from './LanguagePicker';

const DiamondIndicator = ({ 
  currentVerticalIndex, 
  currentHorizontalIndex, 
  isMenuOpen,
  getSlideColor,
  onNavigate
}) => {
  const getCurrentConstraints = () => {
    const navigationConstraints = {
      "0.0": { left: false, right: true },     // Can go right to next slide
      "1.0": { left: true, right: true },      // Can go both ways
      "1.1": { left: true, right: true },      // Can go both ways
      "1.2": { left: true, right: true },      // Can go both ways
      "2.0": { left: true, right: true },      // Can go both ways
      "3.0": { left: true, right: true },      // Can go both ways
      "3.1": { left: true, right: true },      // Can go both ways
      "4.0": { left: true, right: true },      // Can go both ways
      "5.0": { left: true, right: false },     // Can only go left to previous slide
    };
    const key = `${currentVerticalIndex}.${currentHorizontalIndex}`;
    return navigationConstraints[key] || { left: false, right: false };
  };

  const getNextSlideColor = (direction) => {
    const nextSlide = getNextSlidePosition(direction);
    return getSlideColor(nextSlide.vertical, nextSlide.horizontal);
  };

  const getNextSlidePosition = (direction) => {
    const currentKey = `${currentVerticalIndex}.${currentHorizontalIndex}`;
    const slideSequence = ["0.0", "1.0", "1.1", "1.2", "2.0", "3.0", "3.1", "4.0", "5.0"];
    const currentIndex = slideSequence.indexOf(currentKey);
    
    if (direction === 'right' && currentIndex < slideSequence.length - 1) {
      const nextKey = slideSequence[currentIndex + 1];
      const [vertical, horizontal] = nextKey.split('.').map(Number);
      return { vertical, horizontal };
    } else if (direction === 'left' && currentIndex > 0) {
      const prevKey = slideSequence[currentIndex - 1];
      const [vertical, horizontal] = prevKey.split('.').map(Number);
      return { vertical, horizontal };
    }
    
    return { vertical: currentVerticalIndex, horizontal: currentHorizontalIndex };
  };

  const handleClick = (direction) => {
    const constraints = getCurrentConstraints();
    if (!constraints[direction]) return;
    
    const nextSlide = getNextSlidePosition(direction);
    if (nextSlide.vertical !== currentVerticalIndex || nextSlide.horizontal !== currentHorizontalIndex) {
      if (direction === 'left') {
        if (nextSlide.vertical < currentVerticalIndex) {
          onNavigate('up');
        } else if (nextSlide.horizontal < currentHorizontalIndex) {
          onNavigate('left');
        }
      } else if (direction === 'right') {
        if (nextSlide.vertical > currentVerticalIndex) {
          onNavigate('down');
        } else if (nextSlide.horizontal > currentHorizontalIndex) {
          onNavigate('right');
        } else if (nextSlide.vertical !== currentVerticalIndex) {
          onNavigate('down');
        }
      }
    }
  };

  const constraints = getCurrentConstraints();

  return (
    <div className={`navigation-grid ${isMenuOpen ? 'menu-open' : ''}`}>
      {/* Left button */}
      <div style={{ gridColumn: 1, gridRow: 1 }}>
        <motion.button
          className={`navigation-button ${!constraints.left ? 'disabled' : ''}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleClick('left')}
          disabled={!constraints.left}
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
          className={`navigation-button ${!constraints.right ? 'disabled' : ''}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleClick('right')}
          disabled={!constraints.right}
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
