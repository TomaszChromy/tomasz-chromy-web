import { useEffect } from 'react';
import { useLanguage } from '../i18n';

const BASE_URL = 'https://tomaszchromy.com';

const languageCodes = {
  en: 'en',
  pl: 'pl', 
  nl: 'nl',
};

export const SEOHead: React.FC = () => {
  const { language } = useLanguage();

  useEffect(() => {
    // Update HTML lang attribute dynamically for SEO
    document.documentElement.lang = languageCodes[language];

    // Remove existing SEO meta tags
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    const existingHreflang = document.querySelectorAll('link[rel="alternate"][hreflang]');

    existingCanonical?.remove();
    existingHreflang.forEach(el => el.remove());

    // Add canonical URL
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = BASE_URL;
    document.head.appendChild(canonical);

    // Add hreflang alternates for all languages
    Object.entries(languageCodes).forEach(([lang, code]) => {
      const hreflang = document.createElement('link');
      hreflang.rel = 'alternate';
      hreflang.hreflang = code;
      hreflang.href = BASE_URL;
      document.head.appendChild(hreflang);
    });

    // Add x-default hreflang (English as default)
    const xDefault = document.createElement('link');
    xDefault.rel = 'alternate';
    xDefault.hreflang = 'x-default';
    xDefault.href = BASE_URL;
    document.head.appendChild(xDefault);

    // Update page title based on language - SEO optimized with keywords
    const titles = {
      en: 'Tomasz Chromy – Websites, E-commerce, Web Apps | Freelance Developer',
      pl: 'Tomasz Chromy – Strony internetowe, sklepy e-commerce, aplikacje webowe | Freelance Developer',
      nl: 'Tomasz Chromy – Websites, Webshops, Webapplicaties | Freelance Developer',
    };
    document.title = titles[language];

    // Update meta description based on language - action-oriented with CTA
    const descriptions = {
      en: 'I build websites, e-commerce stores and web apps that generate leads and sales. React, Next.js, TypeScript. Fast, responsive, SEO-optimized. Free quote → contact me.',
      pl: 'Tworzę strony internetowe, sklepy e-commerce i aplikacje webowe dla firm. React, Next.js, TypeScript. Szybkie, responsywne, zoptymalizowane pod SEO. Bezpłatna wycena → kontakt.',
      nl: 'Ik bouw websites, webshops en webapplicaties die leads en verkoop genereren. React, Next.js, TypeScript. Snel, responsive, SEO-geoptimaliseerd. Gratis offerte → contact.',
    };
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptions[language]);
    }

    // Update OG tags based on language - benefit-focused
    const ogTitles = {
      en: 'Tomasz Chromy – Websites & Web Apps That Grow Your Business',
      pl: 'Tomasz Chromy – Strony i aplikacje, które rozwijają Twój biznes',
      nl: 'Tomasz Chromy – Websites & Apps die je bedrijf laten groeien',
    };

    const ogDescriptions = {
      en: 'Custom websites, e-commerce stores and web apps. React, Next.js, TypeScript. More leads, higher conversions, faster growth.',
      pl: 'Strony www, sklepy e-commerce i aplikacje webowe na zamówienie. React, Next.js, TypeScript. Więcej leadów, wyższa konwersja, szybszy wzrost.',
      nl: 'Websites, webshops en webapplicaties op maat. React, Next.js, TypeScript. Meer leads, hogere conversies, snellere groei.',
    };

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');

    if (ogTitle) ogTitle.setAttribute('content', ogTitles[language]);
    if (ogDescription) ogDescription.setAttribute('content', ogDescriptions[language]);
    if (twitterTitle) twitterTitle.setAttribute('content', ogTitles[language]);
    if (twitterDescription) twitterDescription.setAttribute('content', ogDescriptions[language]);

  }, [language]);

  return null; // This component only manages head elements
};

export default SEOHead;

