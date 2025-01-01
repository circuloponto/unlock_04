import React, { useState, useEffect, useRef } from 'react';
import Slider from './components/Slider';
import ProgressBar from './components/ProgressBar';
import DiamondIndicator from './components/DiamondIndicator';
import Navbar from './components/Navbar';
import Grid from './components/Grid';
import LanguagePicker from './components/LanguagePicker';
import Breadcrumb from './components/Breadcrumb';
import {
  Slide1,
  Slide2Group,
  Slide3,
  Slide4A,
  Slide4B,
  Slide5,
  Slide6
} from './components/slides';
import './App.css';
import './i18n';
import { useTranslation } from 'react-i18next';

const getSlideColor = (vIndex, hIndex) => {
  switch(vIndex) {
    case 0: return '#75b1e10a';
    case 1:
      switch(hIndex) {
        case 0: return '#75b1e10a';
        case 1: return '#75b1e10a';
        case 2: return '#75b1e10a';
        default: return '#E4815D';
      }
    case 2: return '#75b1e10a';
    case 3:
      switch(hIndex) {
        case 0: return '#75b1e10a';
        case 1: return '#75b1e10a';
        default: return '#4A90E2';
      }
    case 4: return '#75b1e10a';
    default: return '#000';
  }
};

const getBreadcrumbColor = (vIndex, hIndex) => {
  switch(vIndex) {
    case 0: return '#75b1e1';
    case 1:
      switch(hIndex) {
        case 0: return '#daa77a';
        case 1: return '#D99B31';
        case 2: return '#C9A45C';
        default: return '#D15B35';
      }
    case 2: return '#96714F';
    case 3:
      switch(hIndex) {
        case 0: return '#2B74C9';
        case 1: return '#4B89D6';
        default: return '#2B74C9';
      }
    case 4:
      switch(hIndex) {
        case 0: return '#95525b';
        default: return '#2B74C9';
      }
    case 5:
      return '#1A2130';
    default: return '#3A4358';
  }
};

const slides = [
  { 
    content: <Slide1 key="1.1" getSlideColor={getSlideColor} />
  },
  Slide2Group({ getSlideColor }),
  { 
    content: <Slide3 key="3.0" getSlideColor={getSlideColor} />
  },
  { 
    horizontal: [
      <Slide4A key="4.1" getSlideColor={getSlideColor} />,
      <Slide4B key="4.2" getSlideColor={getSlideColor} />
    ]
  },
  { 
    content: <Slide5 key="5.1" getSlideColor={getSlideColor} />
  },
  { 
    content: <Slide6 key="6.1" getSlideColor={getSlideColor} />
  }
];

function App() {
  console.log('App component rendering');
  const { t } = useTranslation();
  const [currentVerticalIndex, setCurrentVerticalIndex] = useState(0);
  const [currentHorizontalIndex, setCurrentHorizontalIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sliderRef = useRef(null);

  const handleMenuToggle = (value) => {
    if (typeof value === 'function') {
      setIsMenuOpen(value);
    } else {
      setIsMenuOpen(value);
    }
  };

  const navigationMap = {
    // From 0
    '0,0': {
      '1,0': { duration: '1s' }, // Adjacent
      '1,1': { duration: '0s' },   // Non-adjacent
      '1,2': { duration: '0s' },   // Non-adjacent
      '2,0': { duration: '0s' },   // Non-adjacent
      '3,0': { duration: '0s' },   // Non-adjacent
      '3,1': { duration: '0s' },   // Non-adjacent
      '4,0': { duration: '0s' },   // Non-adjacent
      '5,0': { duration: '0s' }    // Non-adjacent
    },
    // From 1.0
    '1,0': {
      '0,0': { duration: '1s' },   // Backwards
      '1,1': { duration: '1s' }, // Adjacent horizontal
      '1,2': { duration: '1s' },   // Non-adjacent
    
      '2,0': { duration: '0s' }, // Adjacent
      '3,0': { duration: '0s' },   // Non-adjacent
      '3,1': { duration: '0s' },   // Non-adjacent
      '4,0': { duration: '0s' },   // Non-adjacent
      '5,0': { duration: '0s' }    // Non-adjacent
    },
    // From 1.1
    '1,1': {
      '0,0': { duration: '0s' },   // Backwards
      '1,0': { duration: '1s' }, // Adjacent horizontal
      '1,2': { duration: '1s' }, // Adjacent horizontal
      '2,0': { duration: '1s' }, // Adjacent
      '3,0': { duration: '0s' },   // Non-adjacent
      '3,1': { duration: '0s' },   // Non-adjacent
      '4,0': { duration: '0s' },   // Non-adjacent
      '5,0': { duration: '0s' }    // Non-adjacent
    },
    // From 1.2
    '1,2': {
      '0,0': { duration: '0s' },   // Backwards
      
      '1,0': { duration: '1s' }, // Adjacent horizontal
      '1,1': { duration: '1s' }, // Adjacent horizontal
      '2,0': { duration: '1s' }, // Adjacent
      '3,0': { duration: '0s' },   // Non-adjacent
      '3,1': { duration: '0s' },   // Non-adjacent
      '4,0': { duration: '0s' },   // Non-adjacent
      '5,0': { duration: '0s' }    // Non-adjacent
    },
    // From 2.0
    '2,0': {
      '0,0': { duration: '0s' },   // Backwards
      '1,0': { duration: '0s' },   // Backwards
      '1,1': { duration: '0s' },   // Backwards
      '1,2': { duration: '1s' },   // Backwards
      '3,0': { duration: '1s' }, // Adjacent
      '3,1': { duration: '0s' },   // Non-adjacent
      '4,0': { duration: '0s' },   // Non-adjacent
      '5,0': { duration: '0s' }    // Non-adjacent
    },
    // From 3.0
    '3,0': {
      '0,0': { duration: '0s' },   // Backwards
      '1,0': { duration: '0s' },   // Backwards
      '1,1': { duration: '0s' },   // Backwards
      '1,2': { duration: '0s' },   // Backwards
      '2,0': { duration: '1s' },   // Backwards
      '3,1': { duration: '1s' }, // Adjacent horizontal
      '4,0': { duration: '0s' }, // Adjacent
      '5,0': { duration: '0s' }    // Non-adjacent
    },
    // From 3.1
    '3,1': {
      '0,0': { duration: '0s' },   // Backwards
      '1,0': { duration: '0s' },   // Backwards
      '1,1': { duration: '0s' },   // Backwards
      '1,2': { duration: '0s' },   // Backwards
      '2,0': { duration: '0s' },   // Backwards
      '3,0': { duration: '1s' }, // Adjacent horizontal
      '4,0': { duration: '1s' }, // Adjacent
      '5,0': { duration: '0s' }    // Non-adjacent
    },
    // From 4.0
    '4,0': {
      '0,0': { duration: '0s' },   // Backwards
      '1,0': { duration: '0s' },   // Backwards
      '1,1': { duration: '0s' },   // Backwards
      '1,2': { duration: '0s' },   // Backwards
      '2,0': { duration: '0s' },   // Backwards
      '3,0': { duration: '0s' },   // Backwards
      '3,1': { duration: '1s' },   // Backwards
      '5,0': { duration: '1s' }  // Adjacent
    },
    // From 5.0
    '5,0': {
      '0,0': { duration: '0s' },   // Backwards
      '1,0': { duration: '0s' },   // Backwards
      '1,1': { duration: '0s' },   // Backwards
      '1,2': { duration: '0s' },   // Backwards
      '2,0': { duration: '0s' },   // Backwards
      '3,0': { duration: '0s' },   // Backwards
      '3,1': { duration: '0s' },   // Backwards
      '4,0': { duration: '1s' }    // Backwards
    }
  };

  const handleBreadcrumbClick = (targetVIndex, targetHIndex) => {
    const currentKey = `${currentVerticalIndex},${currentHorizontalIndex}`;
    const targetKey = `${targetVIndex},${targetHIndex}`;
    
    const transition = navigationMap[currentKey]?.[targetKey];
    if (!transition) return;

    // Set transition duration
    document.documentElement.style.setProperty('--slide-transition-duration', transition.duration);
    
    // For instant transitions, trigger the slide-from-below animation
    if (transition.duration === '0s') {
      sliderRef.current?.setInstantTarget(targetVIndex);
    }
    
    // Update indices
    setCurrentVerticalIndex(targetVIndex);
    setCurrentHorizontalIndex(targetHIndex);
    
    // Reset transition duration after movement completes
    setTimeout(() => {
      document.documentElement.style.setProperty('--slide-transition-duration', '0.85s');
    }, transition.duration === '0s' ? 50 : 400);
  };

  const handleIndicatorNavigation = (direction) => {
    switch(direction) {
      case 'up':
        if (currentVerticalIndex === 0) {
          setCurrentVerticalIndex(5);
          setCurrentHorizontalIndex(0);
        } else if (currentVerticalIndex === 1 && currentHorizontalIndex === 0) {
          setCurrentVerticalIndex(0);
          setCurrentHorizontalIndex(0);
        } else if (currentVerticalIndex === 2) {
          setCurrentVerticalIndex(1);
          setCurrentHorizontalIndex(2);
        } else if (currentVerticalIndex === 3 && currentHorizontalIndex === 0) {
          setCurrentVerticalIndex(2);
          setCurrentHorizontalIndex(0);
        } else if (currentVerticalIndex === 4) {
          setCurrentVerticalIndex(3);
          setCurrentHorizontalIndex(1);
        } else if (currentVerticalIndex === 5) {
          setCurrentVerticalIndex(4);
          setCurrentHorizontalIndex(0);
        }
        break;
      case 'down':
        if (currentVerticalIndex === 5) {
          setCurrentVerticalIndex(0);
          setCurrentHorizontalIndex(0);
        } else if (currentVerticalIndex === 0) {
          setCurrentVerticalIndex(1);
          setCurrentHorizontalIndex(0);
        } else if (currentVerticalIndex === 1 && currentHorizontalIndex === 2) {
          setCurrentVerticalIndex(2);
          setCurrentHorizontalIndex(0);
        } else if (currentVerticalIndex === 2) {
          setCurrentVerticalIndex(3);
          setCurrentHorizontalIndex(0);
        } else if (currentVerticalIndex === 3 && currentHorizontalIndex === 1) {
          setCurrentVerticalIndex(4);
          setCurrentHorizontalIndex(0);
        } else if (currentVerticalIndex === 4) {
          setCurrentVerticalIndex(5);
          setCurrentHorizontalIndex(0);
        }
        break;
      case 'left':
        if (currentHorizontalIndex > 0) {
          setCurrentHorizontalIndex(currentHorizontalIndex - 1);
        }
        break;
      case 'right':
        if ((currentVerticalIndex === 1 && currentHorizontalIndex < 2) ||
            (currentVerticalIndex === 3 && currentHorizontalIndex < 1)) {
          setCurrentHorizontalIndex(currentHorizontalIndex + 1);
        }
        break;
    }
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const getActiveBorderColor = () => {
    return getBreadcrumbColor(currentVerticalIndex, currentHorizontalIndex);
  };

  const getCurrentSlideColor = () => {
    const currentSlide = slides[currentVerticalIndex];
    if (!currentSlide) return getSlideColor(0, 0); 
    
    if (currentSlide.horizontal) {
      return getSlideColor(currentVerticalIndex, currentHorizontalIndex);
    } else {
      return getSlideColor(currentVerticalIndex, 0);
    }
  };

  return (
    <div className="app-container">
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'var(--background-color)',
        zIndex: 900,
        height: 'calc(var(--cell-size) * 3)'
      }} />
      <LanguagePicker />
      <Navbar 
        onMenuToggle={handleMenuToggle}
        isMenuOpen={isMenuOpen}
        slideColor={getSlideColor(currentVerticalIndex, currentHorizontalIndex)}
        setCurrentVerticalIndex={setCurrentVerticalIndex}
        setCurrentHorizontalIndex={setCurrentHorizontalIndex}
        currentVerticalIndex={currentVerticalIndex}
      />
      
      <Grid />
     {/*  <div className="logo2">
        UN
      </div> */}
      <div className="app-content">
        <Slider
          ref={sliderRef}
          slides={slides}
          currentVerticalIndex={currentVerticalIndex}
          setCurrentVerticalIndex={setCurrentVerticalIndex}
          currentHorizontalIndex={currentHorizontalIndex}
          setCurrentHorizontalIndex={setCurrentHorizontalIndex}
          isMenuOpen={isMenuOpen}
        />
      </div>

      <DiamondIndicator 
        onNavigate={handleIndicatorNavigation}
        isMenuOpen={isMenuOpen}
        currentVerticalIndex={currentVerticalIndex}
        currentHorizontalIndex={currentHorizontalIndex}
        getSlideColor={getSlideColor}
      />

      <nav className={`breadcrumbs-nav ${isMenuOpen ? 'breadcrumbs-nav--hidden' : 'breadcrumbs-nav--visible'}`}>
        {slides.map((slide, vIndex) => (
          slide.horizontal && slide.horizontal.length > 1 ? (
            <div key={vIndex} className="horizontal-breadcrumbs">
              <button
                className={`breadcrumb-button breadcrumb-button--sub ${currentVerticalIndex === vIndex && currentHorizontalIndex === 0 ? 'active' : ''}`}
                /* style={{ borderColor: getBreadcrumbColor(vIndex, 0) }} */
                onClick={() => {
                  setCurrentVerticalIndex(vIndex);
                  setCurrentHorizontalIndex(0);
                }}
              />
              {slide.horizontal.slice(1).map((_, hIndex) => (
                <button
                  key={hIndex + 1}
                  className={`breadcrumb-button breadcrumb-button--sub ${currentVerticalIndex === vIndex && currentHorizontalIndex === hIndex + 1 ? 'active' : ''}`}
                
                  onClick={() => {
                    setCurrentVerticalIndex(vIndex);
                    setCurrentHorizontalIndex(hIndex + 1);
                  }}
                />
              ))}
            </div>
          ) : (
            <button
              key={vIndex}
              className={`breadcrumb-button breadcrumb-button--main ${currentVerticalIndex === vIndex ? 'active' : ''}`}
            /*   style={{ borderColor: getBreadcrumbColor(vIndex, 0) }} */
              onClick={() => {
                setCurrentVerticalIndex(vIndex);
                setCurrentHorizontalIndex(0);
              }}
            />
          )
        ))}
      </nav>
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'var(--background-color)',
        zIndex: 900,
        height: 'calc(var(--cell-size) * 3)'
      }} />
    </div>
  );
}

export default App;
