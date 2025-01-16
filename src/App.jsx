import React, { useState, useEffect } from 'react';
import Slider from './components/Slider';
import ProgressBar from './components/ProgressBar';
import DiamondIndicator from './components/DiamondIndicator';
import Navbar from './components/Navbar';
import Grid from './components/Grid';
import LanguagePicker from './components/LanguagePicker';
import { slides } from './components/slides/index';
import './App.css';
import './i18n';
import './assets/fonts/fonts.css';
import Breadcrumb from './components/Breadcrumb';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVerticalIndex, setCurrentVerticalIndex] = useState(0);
  const [currentHorizontalIndex, setCurrentHorizontalIndex] = useState(0);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div className={`app ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="maskTop"></div>
      <Grid />
      <div className="app-content">
        <Slider
          slides={slides}
          currentVerticalIndex={currentVerticalIndex}
          currentHorizontalIndex={currentHorizontalIndex}
          setCurrentVerticalIndex={setCurrentVerticalIndex}
          setCurrentHorizontalIndex={setCurrentHorizontalIndex}
          isMenuOpen={isMenuOpen}
          isModalOpen={isModalOpen}
        />
      </div>

      <Navbar 
        onMenuToggle={handleMenuToggle}
        isMenuOpen={isMenuOpen}
        setCurrentVerticalIndex={setCurrentVerticalIndex}
        setCurrentHorizontalIndex={setCurrentHorizontalIndex}
        currentVerticalIndex={currentVerticalIndex}
        currentHorizontalIndex={currentHorizontalIndex}
        setIsModalOpen={setIsModalOpen}
      />
      <Breadcrumb
        slides={slides}
        currentVerticalIndex={currentVerticalIndex}
        currentHorizontalIndex={currentHorizontalIndex}
        setCurrentVerticalIndex={setCurrentVerticalIndex}
        setCurrentHorizontalIndex={setCurrentHorizontalIndex}
        isMenuOpen={isMenuOpen}
      />
      {/* <LanguagePicker 
        isMenuOpen={isMenuOpen}
        currentVerticalIndex={currentVerticalIndex}
        currentHorizontalIndex={currentHorizontalIndex}
      /> */}
      <DiamondIndicator 
        currentVerticalIndex={currentVerticalIndex}
        currentHorizontalIndex={currentHorizontalIndex}
        isMenuOpen={isMenuOpen}
        setCurrentVerticalIndex={setCurrentVerticalIndex}
        setCurrentHorizontalIndex={setCurrentHorizontalIndex}
      />

      <ProgressBar 
        currentVerticalIndex={currentVerticalIndex}
        currentHorizontalIndex={currentHorizontalIndex}
        isMenuOpen={isMenuOpen}
      />

      <div className="maskBottom"></div>
    </div>
  );
}

export default App;
