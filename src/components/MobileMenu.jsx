import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Lenis from '@studio-freight/lenis';
import styled from 'styled-components';
import LanguagePicker from './LanguagePicker';

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: #75b1e10a;
  z-index: 1200;
  transform: translateX(${props => props.$isOpen ? '0' : '100%'});
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
  pointer-events: ${props => props.$isOpen ? 'auto' : 'none'};
`;

const MenuScroll = styled.div`
  position: relative;
  height: 100%;
  color: #fff;
  z-index: 2;
  background: #eae4e0;
`;

const MenuContent = styled.div`
  position: absolute;
  top: 120px;
  left: 13%;
  right: 10%;
`;

const MenuItem = styled.div`
  position: relative;
  font-size: 92px;
  line-height: 0.95;
  padding: 8px 0;
  cursor: pointer;
  transform: translateX(${props => props.$isOpen ? '0' : '100vw'});
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: ${props => props.$delay}s;
  text-transform: lowercase;
  z-index: 3;
  pointer-events: auto;
  color: #e6811e8c;
  
  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 72px;
  }
  @media (max-width: 433px) {
    font-size: 40px;
  }
`;

const MenuInfo = styled.div`
  position: relative;
  margin-top: 80px;
  font-size: 16px;
  opacity: 0.6;
  transform: translateX(${props => props.$isOpen ? '0' : '100vw'});
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: 0.7s;
  max-width: 400px;
  z-index: 2;
  color: #fff;
`;

const menuItems = [
  { key: 'project', vertical: 0, horizontal: 0 },
  { key: 'targetGroups', vertical: 1, horizontal: 0 },
  { key: 'methodology', vertical: 2, horizontal: 0 },
  { key: 'results', vertical: 3, horizontal: 0 },
  { key: 'partners', vertical: 4, horizontal: 0 },
];

const MobileMenu = ({ 
  isOpen, 
  onClose,
  setCurrentVerticalIndex,
  setCurrentHorizontalIndex,
  onContactClick
}) => {
  const { t } = useTranslation();
  const lenisRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        smoothTouch: false,
        touchMultiplier: 2,
      });

      function raf(time) {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, [isOpen]);

  const handleMenuItemClick = (vertical, horizontal) => {
    setCurrentVerticalIndex(vertical);
    setCurrentHorizontalIndex(horizontal);
    setTimeout(onClose, 100);
  };

  return (
    <MenuContainer $isOpen={isOpen}>
      <MenuScroll>
        <MenuContent>
          {menuItems.map((item, index) => (
            <MenuItem
              key={item.key}
              $isOpen={isOpen}
              $delay={0.1 + index * 0.1}
              onClick={() => handleMenuItemClick(item.vertical, item.horizontal)}
            >
              {t(`menu.${item.key}`)}
            </MenuItem>
          ))}
          <MenuItem
            $isOpen={isOpen}
            $delay={0.1 + menuItems.length * 0.1}
            onClick={(e) => {
              e.stopPropagation();
              onContactClick();
              onClose();
            }}
          >
            {t('menu.contacts')}
          </MenuItem>
          <LanguagePicker />
          <MenuInfo $isOpen={isOpen}>
            <p> 2024 UNLOCK</p>
            <p style={{ marginTop: '20px' }}>
              A project funded by the European Union's Horizon Europe research and innovation programme under grant agreement No 101057344
            </p>
          </MenuInfo>
        </MenuContent>
      </MenuScroll>
    </MenuContainer>
  );
};

export default MobileMenu;
