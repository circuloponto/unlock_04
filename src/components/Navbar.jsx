import hamburgerIcon from '../assets/hamburger.svg';
import logo from '../assets/unlock_institucional_01.svg';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import MobileMenu from './MobileMenu';
import LanguagePicker from './LanguagePicker';

const Navbar = ({ 
    currentSlide, 
    onMenuToggle, 
    isMenuOpen, 
    slideColor,
    setCurrentVerticalIndex,
    setCurrentHorizontalIndex,
    currentVerticalIndex
}) => {
    const { t } = useTranslation();
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    // Add effect to handle mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1000 && isMenuOpen) {
                onMenuToggle(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMenuOpen, onMenuToggle]);

    const toggleMenu = () => {
        onMenuToggle(prev => !prev);
    };

    const handleMenuItemClick = (verticalIndex, horizontalIndex) => {
        // Close mobile menu if open
        if (isMenuOpen) {
            onMenuToggle(false);
        }
        // Set indices for navigation
        setCurrentVerticalIndex(verticalIndex);
        setCurrentHorizontalIndex(horizontalIndex);
    };

    const menuItems = [
        { key: 'project', vertical: 0, horizontal: 0 },
        { key: 'targetGroups', vertical: 1, horizontal: 0 },
        { key: 'activities', vertical: 2, horizontal: 0 },
        { key: 'partners', vertical: 3, horizontal: 0 },
        { key: 'results', vertical: 4, horizontal: 0 },
        { key: 'contacts', vertical: 5, horizontal: 0 }
    ];

    const iconColor = isPressed ? 'rgb(183, 187, 202)' : isHovered ? 'rgb(167, 144, 144)' : 'rgb(222, 222, 222)';

    return (
        <>
            <div className="navContainer">
                <div className="nav-content">
                    <div>
                        <div 
                            className="logo" 
                            onClick={() => handleMenuItemClick(0, 0)}
                            style={{ cursor: 'pointer' }}
                            role="button"
                            tabIndex={0}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    handleMenuItemClick(0, 0);
                                }
                            }}
                        >
                            <img src={logo} alt="UNLOCK" height="40" />
                        </div>
                    </div>
                    
                    <div className="menuItemsContainer">
                        <div className='menuitemsInner'>
                            {menuItems.map((item, index) => (
                                <div
                                    key={item.key}
                                    className={`menuItem${index + 1} ${currentVerticalIndex === item.vertical ? 'active' : ''}`}
                                    onClick={() => handleMenuItemClick(item.vertical, item.horizontal)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            handleMenuItemClick(item.vertical, item.horizontal);
                                        }
                                    }}
                                >
                                    {t(`menu.${item.key}`)}
                                </div>
                            ))}
                           
                        </div>
                    </div>

                    <div 
                        className={`hamburger-icon ${isMenuOpen ? 'is-active' : ''}`}
                        onClick={toggleMenu}
                    >
                        <div className="hamburger-box">
                            <div className={`hamburger-inner ${isMenuOpen ? 'hamburger-inner-clicked' : ''}`}></div>
                        </div>
                    </div>
                </div>
            </div>
            <MobileMenu 
                isOpen={isMenuOpen} 
                menuItems={menuItems} 
                onItemClick={handleMenuItemClick} 
                slideColor={slideColor}
            />
        </>
    );
};

export default Navbar;