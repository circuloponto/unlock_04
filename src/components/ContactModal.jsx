import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ContactModal.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import ptLogo from '../assets/images/PT_Disclaimer.png';
import enLogo from '../assets/images/EN_Disclaimer.png';
import nlLogo from '../assets/images/NL_Disclaimer.jpg';

const ContactModal = ({ isOpen, onClose }) => {
    const { t, i18n } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const getLogo = () => {
        switch (i18n.language) {
            case 'pt':
                return ptLogo;
            case 'en':
                return enLogo;
            case 'nl':
                return nlLogo;
            default:
                return enLogo;
        }
    };

    if (!isVisible && !isOpen) return null;

    const partners = [
        {
            key: 'rumo',
            data: t('contactos.partnerts.rumo', { returnObjects: true })
        },
        {
            key: 'consultis',
            data: t('contactos.partnerts.consultis', { returnObjects: true })
        },
        {
            key: 'suem',
            data: t('contactos.partnerts.suem', { returnObjects: true })
        }
    ];

    const projectInfo = t('contactos.projecto', { returnObjects: true });

    return (
        <div className={`modal-overlay ${isVisible ? 'visible' : ''}`} onClick={onClose}>
            <div 
                className="modal-content"
                onClick={e => e.stopPropagation()}
            >
                <button className="modal-close" onClick={onClose}>
                    <FaTimes />
                </button>

                <div className="project-section">
                    <h2>{projectInfo.title}</h2>
                    <div className="contact-item">
                        <FaEnvelope className="contact-icon" />
                        <a href={`mailto:${projectInfo.email}`}>{projectInfo.email}</a>
                    </div>
                </div>

                <div className="partners-section">
                    {partners.map(({ key, data }) => (
                        <div key={key} className="partner-card">
                            <h3>{data.title}</h3>
                            <div className="contact-details">
                                <div className="contact-item">
                                    <FaEnvelope className="contact-icon" />
                                    <a href={`mailto:${data.email}`}>{data.email}</a>
                                </div>
                                <div className="contact-item">
                                    <FaPhone className="contact-icon" />
                                    <a href={`tel:${data.mobile}`}>{data.mobile}</a>
                                </div>
                                <div className="contact-item">
                                    <FaMapMarkerAlt className="contact-icon" />
                                    <span>{data.morada}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
<div className='EuDiscliamer'>

                <div className="eu-logo">
                    <img src={getLogo()} alt="EU Logo" />
                </div>

                <div className="disclaimer">
                    <p>{t('contactos.disclaimer.text')}</p>
                </div>
</div>
            </div>
        </div>
    );
};

export default ContactModal;
