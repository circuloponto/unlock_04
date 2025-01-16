import React from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10px;
  background-color: rgba(230, 131, 29, 0.2);
  z-index: 1000;
  opacity: ${props => props.$isMenuOpen ? 0 : 1};
  transition: opacity 0.3s ease;
`;

const Progress = styled.div`
  height: 100%;
  background-color: #e6831d;
  transition: width 0.3s ease;
`;

const ProgressBar = ({ currentVerticalIndex, currentHorizontalIndex, isMenuOpen }) => {
  const calculateProgress = () => {
    const totalSlides = 11;
    const currentProgress = (currentVerticalIndex * 2) + currentHorizontalIndex;
    return Math.max(0, (currentProgress / (totalSlides - 1)) * 100);
  };

  return (
    <ProgressBarContainer $isMenuOpen={isMenuOpen}>
      <Progress style={{ width: `${calculateProgress()}%` }} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
