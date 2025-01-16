import React, { useEffect, useState } from 'react';
import styles from './Grid.module.css';

const TOTAL_COLUMNS = 24;

const Grid = () => {
  const [cellSize, setCellSize] = useState(0);
  const [totalRows, setTotalRows] = useState(0);

  useEffect(() => {
    const calculateDimensions = () => {
      const newCellSize = window.innerWidth / TOTAL_COLUMNS;
      const newTotalRows = Math.ceil(window.innerHeight / newCellSize);
      setCellSize(newCellSize);
      setTotalRows(newTotalRows);
      document.documentElement.style.setProperty('--cell-size', `${newCellSize}px`);
    };

    calculateDimensions();
    window.addEventListener('resize', calculateDimensions);
    return () => window.removeEventListener('resize', calculateDimensions);
  }, []);

  const cells = Array(TOTAL_COLUMNS * totalRows).fill(null);

  const isHighlightedCell = (index) => {
    // Top-left corner
    if (index === 0) return true;
    // Top-right corner
    if (index === TOTAL_COLUMNS - 1) return true;
    // Bottom-left corner (one row up)
    if (index === TOTAL_COLUMNS * (totalRows - 2)) return true;
    // Bottom-right corner (one row up)
    if (index === (TOTAL_COLUMNS * (totalRows - 1)) - 1) return true;
    return false;
  };

  return (
    <div 
      className={styles.gridContainer}
    >
      {cells.map((_, index) => (
        <div 
          key={index} 
          className={`${styles.cell} ${isHighlightedCell(index) ? '' : ''}`} 
        />
      ))}
    </div>
  );
};

export default Grid;
