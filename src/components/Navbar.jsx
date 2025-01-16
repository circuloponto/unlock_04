import hamburgerIcon from '../assets/hamburger.svg';
import logo from '../assets/unlock_institucional_01.svg';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import MobileMenu from './MobileMenu';
import LanguagePicker from './LanguagePicker';
import ContactModal from './ContactModal';

const Navbar = ({ 
    currentSlide, 
    onMenuToggle, 
    isMenuOpen,
    currentVerticalIndex,
    setCurrentVerticalIndex,
    currentHorizontalIndex,
    setCurrentHorizontalIndex,
    setIsModalOpen // Add this prop
}) => {
    const { t } = useTranslation();
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

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
        if (!isContactModalOpen) {  // Only toggle menu if modal is not open
            onMenuToggle(!isMenuOpen);
        }
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

    const handleContactClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isMenuOpen) {
            onMenuToggle(false);
        }
        setIsContactModalOpen(true);
        setIsModalOpen(true); // Update the app-level modal state
    };

    const handleCloseModal = () => {
        setIsContactModalOpen(false);
        setIsModalOpen(false); // Update the app-level modal state
    };

    const menuItems = [
        { key: 'project', vertical: 0, horizontal: 0 },
        { key: 'targetGroups', vertical: 1, horizontal: 0 },
        { key: 'methodology', vertical: 2, horizontal: 0 },
        { key: 'results', vertical: 3, horizontal: 0 },
        { key: 'partners', vertical: 4, horizontal: 0 },
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
                                        if (e.key === 'Enter') {
                                            handleMenuItemClick(item.vertical, item.horizontal);
                                        }
                                    }}
                                >
                                    {t(`menu.${item.key}`)}
                                </div>
                            ))}
                            <div
                                className="menuItem-contact menuItem1"
                                onClick={handleContactClick}
                                role="button"
                                tabIndex={0}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        handleContactClick(e);
                                    }
                                }}
                            >
                                {t('menu.contacts')}
                            </div>
                            <LanguagePicker />
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
                onClose={() => onMenuToggle(false)}
                currentVerticalIndex={currentVerticalIndex}
                setCurrentVerticalIndex={setCurrentVerticalIndex}
                setCurrentHorizontalIndex={setCurrentHorizontalIndex}
                onContactClick={handleContactClick}
            />
            
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={handleCloseModal}
            />
        </>
    );
};

export default Navbar;