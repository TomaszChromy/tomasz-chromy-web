import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CookieBanner from "./CookieBanner";
import { Button } from "./ui/Button";
import { Logo, FooterLogo } from "./ui/Logo";
import { useLanguage, LanguageSwitcher } from "../i18n";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const { t } = useLanguage();
  const location = useLocation();

  // Check if we're on the homepage
  const isHomePage = location.pathname === "/";

  // Build link with proper prefix for subpages
  const buildHref = (hash: string) => isHomePage ? hash : `/${hash}`;

  // Navigation links with translations
  const navLinks = [
    { href: buildHref("#hero"), label: t.nav.home },
    { href: buildHref("#about"), label: t.nav.about },
    { href: buildHref("#services"), label: t.nav.services },
    { href: buildHref("#portfolio"), label: t.nav.portfolio },
    { href: buildHref("#contact"), label: t.nav.contact },
  ];

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if banner was dismissed in this session
  useEffect(() => {
    const bannerDismissed = sessionStorage.getItem("constructionBannerDismissed");
    if (bannerDismissed === "true") {
      setShowBanner(false);
    }
  }, []);

  // Simple visitor counter using localStorage
  useEffect(() => {
    const storedCount = localStorage.getItem("visitorCount");
    const lastVisit = localStorage.getItem("lastVisitDate");
    const today = new Date().toDateString();

    let count = storedCount ? parseInt(storedCount, 10) : 0;

    // Only increment if this is a new day or first visit
    if (lastVisit !== today) {
      count += 1;
      localStorage.setItem("visitorCount", count.toString());
      localStorage.setItem("lastVisitDate", today);
    }

    setVisitorCount(count);
  }, []);

  const handleDismissBanner = () => {
    setShowBanner(false);
    sessionStorage.setItem("constructionBannerDismissed", "true");
  };

  return (
    <div className="min-h-screen bg-white text-cool-200 antialiased font-body">
      {/* CONSTRUCTION BANNER */}
      {showBanner && (
        <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-white py-2 px-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
            <p className="text-xs sm:text-sm font-medium text-center flex-1">
              {t.constructionBanner?.text}
            </p>
            <button
              type="button"
              onClick={handleDismissBanner}
              className="flex-shrink-0 p-1 hover:bg-white/20 rounded transition-colors"
              aria-label={t.constructionBanner?.close}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* STICKY NAVBAR */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          showBanner ? "top-[36px] sm:top-[32px]" : "top-0"
        } ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-cool-500/10 shadow-card py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
          {/* LOGO + ROLE */}
          <a href={buildHref("#hero")} className="flex items-center gap-3 group transition-transform hover:scale-[1.02]" aria-label="Tomasz Chromy - Home">
            <Logo size="sm" variant="full" />
          </a>

          {/* NAVIGATION LINKS - DESKTOP */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-cool-300 font-medium transition-colors hover:text-accent-blue"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + LANGUAGE SWITCHER - DESKTOP */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <Button as="a" href={buildHref("#contact")} variant="primary" size="sm">
              {t.nav.bookCall}
            </Button>
          </div>

          {/* HAMBURGER BUTTON - MOBILE */}
          <button
            type="button"
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-cool-500/10 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen ? "true" : "false"}
          >
            <span
              className={`block w-5 h-0.5 bg-cool-200 transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-1" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-cool-200 mt-1 transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-cool-200 mt-1 transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 bg-white/95 backdrop-blur-xl ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-2 px-6 pb-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 text-cool-300 hover:text-accent-blue transition border-b border-cool-500/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex justify-center">
              <LanguageSwitcher />
            </li>
            <li className="mt-2">
              <Button
                as="a"
                href={buildHref("#contact")}
                variant="primary"
                fullWidth
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.bookCall}
              </Button>
            </li>
          </ul>
        </div>
      </header>

      {/* CONTENT */}
      <main>{children}</main>

      {/* FOOTER - Apple style */}
      <footer className="bg-cool-50 border-t border-cool-500/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">

          {/* FOOTER CTA - Gradient card */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-accent-blue via-blue-600 to-accent-cyan p-6 sm:p-12 mb-10 sm:mb-16 text-center shadow-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-3 sm:mb-4">
                {t.footer.cta}
              </h3>
              <p className="text-white/80 mb-6 sm:mb-8 max-w-md mx-auto text-base sm:text-lg">
                {t.footer.ctaSubtitle}
              </p>
              <a
                href={buildHref("#contact")}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white text-accent-blue font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg text-sm sm:text-base"
              >
                {t.footer.ctaBtn}
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* FOOTER GRID */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-12 mb-10 sm:mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-2">
              <div className="mb-4 sm:mb-6">
                <FooterLogo />
              </div>
              <p className="text-cool-400 text-xs sm:text-sm max-w-sm leading-relaxed">
                {t.footer.bio}
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-white mb-4 sm:mb-6 uppercase tracking-wider">{t.footer.navigation}</h4>
              <ul className="space-y-2 sm:space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-xs sm:text-sm text-cool-400 hover:text-accent-blue transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partners */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-white mb-4 sm:mb-6 uppercase tracking-wider">{t.footer.partners}</h4>
              <div className="flex flex-col gap-4">
                {/* TomSoft */}
                <a
                  href="https://tomsoft-website.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cool-400 hover:text-accent-cyan transition-colors group"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 border border-slate-600 group-hover:border-accent-cyan transition-colors">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-semibold text-cyan-400 group-hover:text-cyan-300">TomSoft</span>
                    <span className="text-[10px] text-cool-500">Website</span>
                  </div>
                </a>

                {/* FusionFinance */}
                <a
                  href="https://fusionfinance.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cool-400 hover:text-emerald-400 transition-colors group"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-900 to-slate-900 border border-emerald-700/50 group-hover:border-emerald-500 transition-colors">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-semibold text-emerald-400 group-hover:text-emerald-300">FusionFinance</span>
                    <span className="text-[10px] text-cool-500">Portal finansowy</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-white mb-4 sm:mb-6 uppercase tracking-wider">{t.footer.connect}</h4>
              <div className="flex gap-2 sm:gap-3">
                <a
                  href="https://facebook.com/tomaszchromy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-white text-cool-400 transition-all duration-300 hover:bg-accent-blue hover:text-white shadow-sm hover:shadow-lg hover:-translate-y-1"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/TomaszChromy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-white text-cool-400 transition-all duration-300 hover:bg-accent-blue hover:text-white shadow-sm hover:shadow-lg hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/tomaszchromy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-white text-cool-400 transition-all duration-300 hover:bg-accent-blue hover:text-white shadow-sm hover:shadow-lg hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/tomaszchromy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-white text-cool-400 transition-all duration-300 hover:bg-accent-blue hover:text-white shadow-sm hover:shadow-lg hover:-translate-y-1"
                  aria-label="Twitter/X"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="pt-6 sm:pt-8 border-t border-cool-500/10 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-cool-400 text-center md:text-left">
              © {new Date().getFullYear()} Tomasz Chromy. {t.footer.rights}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#privacy"
                className="text-xs sm:text-sm text-cool-400 hover:text-accent-blue transition-colors"
              >
                {t.footer.privacyPolicy}
              </a>
              <span className="text-cool-500">|</span>
              <a
                href="#cookies"
                className="text-xs sm:text-sm text-cool-400 hover:text-accent-blue transition-colors"
              >
                {t.footer.cookies}
              </a>
            </div>
          </div>

          {/* DISCLAIMER - smaller font */}
          <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-cool-500/10 text-center">
            <p className="text-xs sm:text-sm text-orange-500/80">
              {t.footer.disclaimer}
            </p>
          </div>

          {/* VISITOR COUNTER */}
          <div className="mt-4 sm:mt-6 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cool-100/50 border border-cool-500/10">
              <svg className="w-4 h-4 text-cool-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="text-xs text-cool-400">
                {t.footer.visitorCount}: <span className="font-semibold text-cool-300">{visitorCount.toLocaleString()}</span>
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* COOKIE BANNER */}
      <CookieBanner />
    </div>
  );
};

export default Layout;
