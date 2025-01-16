import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './translations/en.json';
import ptTranslations from './translations/pt.json';
import nlTranslations from './translations/nl.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { 
        translation: {
          ...enTranslations,
          menu: {
            project: 'Project',
            targetGroups: 'Target Groups',
            methodology: 'Methodology',
            results: 'Results',
            partners: 'Partners',
            contacts: 'Contacts'
          },
          contacts: {
            title: 'Contact Information',
            project: 'Project Information',
            partners: 'Partner Contacts'
          }
        }
      },
      pt: { 
        translation: {
          ...ptTranslations,
          menu: {
            project: 'Projeto',
            targetGroups: 'Grupos Alvo',
            methodology: 'Metodologia',
            results: 'Resultados',
            partners: 'Parceiros',
            contacts: 'Contactos'
          },
          contacts: {
            title: 'Informações de Contacto',
            project: 'Informações do Projeto',
            partners: 'Contactos dos Parceiros'
          }
        }
      },
      nl: { 
        translation: {
          ...nlTranslations,
          menu: {
            project: 'Project',
            targetGroups: 'Doelgroepen',
            methodology: 'Methodologie',
            results: 'Resultaten',
            partners: 'Partners',
            contacts: 'Contact'
          },
          contacts: {
            title: 'Contactgegevens',
            project: 'Projectinformatie',
            partners: 'Contactgegevens Partners'
          }
        }
      }
    },
    lng: 'pt', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
