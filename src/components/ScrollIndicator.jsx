import React, { useState, useEffect } from 'react';
import styles from './ScrollIndicator.module.css';

const ScrollIndicator = ({ currentVerticalIndex, currentHorizontalIndex, isMenuOpen }) => {
  const [currentPosition, setCurrentPosition] = useState('');
  const [opacity, setOpacity] = useState(1);
  
  // Navigation constraints for each slide position
  const navigationConstraints = {
    "0.0": { up: false, down: false, left: false, right: true },  // First slide, can only go right
    "0.1": { up: false, down: true, left: true, right: false },   // After going right, can go down to next row
    "1.0": { up: true, down: false, left: false, right: true },   // Start of second row, can go up or right
    "1.1": { up: false, down: true, left: true, right: false },   // End of second row, can go down or left
    "2.0": { up: true, down: false, left: false, right: true },   // Start of third row
    "2.1": { up: false, down: true, left: true, right: false },   // End of third row
    "3.0": { up: true, down: false, left: false, right: true },   // Start of fourth row
    "3.1": { up: false, down: true, left: true, right: false },   // End of fourth row
    "4.0": { up: true, down: false, left: false, right: true },   // Start of fifth row
    "4.1": { up: false, down: true, left: true, right: false },   // End of fifth row
    "5.0": { up: true, down: false, left: false, right: true },   // Start of last row
    "5.1": { up: false, down: false, left: true, right: false }   // End of last row
  };

  // Get current slide constraints
  const getCurrentConstraints = () => {
    const key = `${currentVerticalIndex}.${currentHorizontalIndex}`;
    return navigationConstraints[key] || { up: false, down: false, left: false, right: false };
  };
  
  // Get available directions in clockwise order
  const getOrderedDirections = () => {
    const directions = ['up', 'right', 'down', 'left'];
    const constraints = getCurrentConstraints();
    return directions.filter(dir => constraints[dir]);
  };

  useEffect(() => {
    if (isMenuOpen) {
      setCurrentPosition('');
      return;
    }

    const availableDirections = getOrderedDirections();
    
    if (availableDirections.length === 0) {
      setCurrentPosition('');
      return;
    }

    let currentIndex = 0;
    setCurrentPosition(availableDirections[0]);

    if (availableDirections.length > 1) {
      const interval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % availableDirections.length;
        const next = availableDirections[nextIndex];
        
        // Fade out
        setOpacity(0);
        
        // Change position after fade out
        setTimeout(() => {
          setCurrentPosition(next);
          // Fade in
          setOpacity(1);
        }, 200);
        
        currentIndex = nextIndex;
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [currentVerticalIndex, currentHorizontalIndex, isMenuOpen]);

  if (isMenuOpen) return null;

  return (
    <div className={`${styles.container} scroll-indicator-container`}>
      <div className={styles.mainCircle}>
        <div 
          className={`${styles.arrow} ${styles[currentPosition]}`}
          style={{ opacity }}
        />
      </div>
    </div>
  );
};

export default ScrollIndicator;
