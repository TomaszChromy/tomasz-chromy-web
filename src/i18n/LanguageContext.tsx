import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from './translations';

type Language = 'pl' | 'en' | 'nl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Check localStorage first
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'pl' || saved === 'en' || saved === 'nl')) {
      return saved;
    }
    // Check browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('pl')) {
      return 'pl';
    }
    if (browserLang.startsWith('nl')) {
      return 'nl';
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Language Switcher Component
export const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en' as const, label: 'EN', ariaLabel: 'Switch to English' },
    { code: 'nl' as const, label: 'NL', ariaLabel: 'Schakel naar Nederlands' },
    { code: 'pl' as const, label: 'PL', ariaLabel: 'Przełącz na polski' },
  ];

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {languages.map((lang, index) => (
        <React.Fragment key={lang.code}>
          {index > 0 && <span className="text-cool-500">/</span>}
          <button
            type="button"
            onClick={() => setLanguage(lang.code)}
            className={`px-2 py-1 text-xs font-medium rounded transition-all ${
              language === lang.code
                ? 'bg-accent-blue text-white'
                : 'text-cool-400 hover:text-accent-blue'
            }`}
            aria-label={lang.ariaLabel}
          >
            {lang.label}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
};

export default LanguageContext;

