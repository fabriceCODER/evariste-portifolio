
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

interface Translations {
  [key: string]: {
    en: string;
    fr: string;
    rw: string;
  };
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'rw', name: 'Kinyarwanda', flag: '🇷🇼' },
];

const translations: Translations = {
  // Navigation
  'nav.home': {
    en: 'Home',
    fr: 'Accueil',
    rw: 'Urugo'
  },
  'nav.about': {
    en: 'About',
    fr: 'À propos',
    rw: 'Impamvu'
  },
  'nav.education': {
    en: 'Education',
    fr: 'Éducation',
    rw: 'Uburezi'
  },
  'nav.experience': {
    en: 'Experience',
    fr: 'Expérience',
    rw: 'Uburambe'
  },
  'nav.projects': {
    en: 'Projects',
    fr: 'Projets',
    rw: 'Imishinga'
  },
  'nav.contact': {
    en: 'Contact',
    fr: 'Contact',
    rw: 'Kuvugana'
  },
  // Hero section
  'hero.title': {
    en: "Hi, I'm Evariste NSABIMANA",
    fr: "Salut, je suis Evariste NSABIMANA",
    rw: "Muraho, ni Evariste NSABIMANA"
  },
  'hero.subtitle': {
    en: 'Passionate Forestry Student & Future Environmental Leader',
    fr: 'Étudiant passionné en foresterie et futur leader environnemental',
    rw: 'Umunyeshuri ukunda amashyamba n\'umuyobozi w\'ibidukikije mu gihe kizaza'
  },
  'hero.cta': {
    en: 'View My Work',
    fr: 'Voir mon travail',
    rw: 'Reba akazi kanjye'
  },
  'hero.downloadCV': {
    en: '📄 Download My CV',
    fr: '📄 Télécharger mon CV',
    rw: '📄 Gufata CV yanjye'
  },
  // About section
  'about.title': {
    en: 'About Me',
    fr: 'À propos de moi',
    rw: 'Ku njye'
  },
  'about.description': {
    en: "I'm a dedicated and determined Forestry student at Rwanda Polytechnic Kitabi College. I'm passionate about learning, innovation, and sustainable forest resource management.",
    fr: "Je suis un étudiant dévoué et déterminé en foresterie au Rwanda Polytechnic Kitabi College. Je suis passionné par l'apprentissage, l'innovation et la gestion durable des ressources forestières.",
    rw: "Ni umunyeshuri witanze kandi witonze mu bushakashatsi bw'amashyamba muri Rwanda Polytechnic Kitabi College. Nkunda kwiga, guhanga udushya, n'imicungire myiza y'ibikoresho by'amashyamba."
  }
};

interface LanguageContextType {
  currentLanguage: string;
  languages: Language[];
  setLanguage: (code: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const setLanguage = (code: string) => {
    setCurrentLanguage(code);
    localStorage.setItem('language', code);
  };

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[currentLanguage as keyof typeof translation] || translation.en || key;
  };

  React.useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && languages.some(lang => lang.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      languages,
      setLanguage,
      t
    }}>
      {children}
    </LanguageContext.Provider>
  );
};
