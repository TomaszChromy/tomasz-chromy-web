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

    // Update page title based on language
    const titles = {
      en: 'Tomasz Chromy - Strategic Growth Partner | Web Developer',
      pl: 'Tomasz Chromy - Strategiczny Partner Wzrostu | Web Developer',
      nl: 'Tomasz Chromy - Strategische Groeipartner | Web Developer',
    };
    document.title = titles[language];

    // Update meta description based on language
    const descriptions = {
      en: 'Freelance web developer and consultant. I design and build business websites, e-commerce shops and landing pages with clear structure, fast performance and long-term maintainability.',
      pl: 'Freelance web developer i konsultant. Projektuję i buduję strony firmowe, sklepy e-commerce i landing page z przejrzystą strukturą, szybkim działaniem i długoterminową utrzymywalnością.',
      nl: 'Freelance webontwikkelaar en consultant. Ik ontwerp en bouw zakelijke websites, e-commerce winkels en landingspagina\'s met een duidelijke structuur, snelle prestaties en langdurige onderhoudbaarheid.',
    };
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptions[language]);
    }

    // Update OG tags based on language
    const ogTitles = {
      en: 'Tomasz Chromy – Freelance Web Developer',
      pl: 'Tomasz Chromy – Freelance Web Developer',
      nl: 'Tomasz Chromy – Freelance Webontwikkelaar',
    };
    
    const ogDescriptions = {
      en: 'Websites that look good and work for your business – fast, clean and maintainable projects.',
      pl: 'Strony internetowe, które wyglądają świetnie i działają dla Twojego biznesu – szybkie, czyste i łatwe w utrzymaniu.',
      nl: 'Websites die er goed uitzien en werken voor uw bedrijf – snelle, schone en onderhoudbare projecten.',
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

