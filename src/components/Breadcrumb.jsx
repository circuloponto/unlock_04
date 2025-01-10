import React from 'react';
import styles from './Breadcrumb.module.css';

const Breadcrumb = ({ slides, currentVerticalIndex, currentHorizontalIndex, setCurrentVerticalIndex, setCurrentHorizontalIndex, isMenuOpen }) => {
  return (
    <nav className={`${styles['breadcrumbs-nav']} ${isMenuOpen ? styles['breadcrumbs-nav--hidden'] : styles['breadcrumbs-nav--visible']}`}>
      {slides.map((row, vIndex) => (
        <div key={vIndex} className={styles['horizontal-breadcrumbs']}>
          {/* First slide in row */}
          <button
            className={`${styles['breadcrumb-button']} ${styles['breadcrumb-button--sub']} ${currentVerticalIndex === vIndex && currentHorizontalIndex === 0 ? styles.active : ''}`}
            onClick={() => {
              setCurrentVerticalIndex(vIndex);
              setCurrentHorizontalIndex(0);
            }}
          />
          {/* Second slide in row */}
          <button
            className={`${styles['breadcrumb-button']} ${styles['breadcrumb-button--sub']} ${currentVerticalIndex === vIndex && currentHorizontalIndex === 1 ? styles.active : ''}`}
            onClick={() => {
              setCurrentVerticalIndex(vIndex);
              setCurrentHorizontalIndex(1);
            }}
          />
          {/* Third slide only in last row */}
          {vIndex === slides.length - 1 && (
            <button
              className={`${styles['breadcrumb-button']} ${styles['breadcrumb-button--sub']} ${currentVerticalIndex === vIndex && currentHorizontalIndex === 2 ? styles.active : ''}`}
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
