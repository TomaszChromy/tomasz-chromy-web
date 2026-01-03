import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { en as EnTranslations } from './locales/en';

type Language = 'pl' | 'en' | 'nl';
type Translations = typeof EnTranslations;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Cache loaded translations
const translationsCache: Partial<Record<Language, Translations>> = {};

// Dynamic import functions for each language
const loadTranslations = async (lang: Language): Promise<Translations> => {
  if (translationsCache[lang]) {
    return translationsCache[lang]!;
  }

  let translations: Translations;
  switch (lang) {
    case 'pl':
      translations = (await import('./locales/pl')).pl as Translations;
      break;
    case 'nl':
      translations = (await import('./locales/nl')).nl as Translations;
      break;
    case 'en':
    default:
      translations = (await import('./locales/en')).en;
      break;
  }

  translationsCache[lang] = translations;
  return translations;
};

// Get initial language synchronously
const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';

  const saved = localStorage.getItem('language') as Language;
  if (saved && (saved === 'pl' || saved === 'en' || saved === 'nl')) {
    return saved;
  }
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('pl')) return 'pl';
  if (browserLang.startsWith('nl')) return 'nl';
  return 'en';
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);
  const [translations, setTranslations] = useState<Translations | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load translations when language changes
  useEffect(() => {
    setIsLoading(true);
    loadTranslations(language)
      .then(t => {
        setTranslations(t);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Failed to load translations:', err);
        // Fallback to English
        loadTranslations('en').then(t => {
          setTranslations(t);
          setIsLoading(false);
        });
      });
  }, [language]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  // Show loading state while translations are being loaded
  if (!translations) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations, isLoading }}>
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

