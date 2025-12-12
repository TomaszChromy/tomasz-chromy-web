import React from "react";
import { Button } from "./ui/Button";
import heroBanner from "../assets/images/hero-tomasz-chromy.jpg";
import avatarImage from "../assets/images/about-profile.jpg";
import { useLanguage } from "../i18n";

// Tech stack logos
const trustedLogos = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "TS" },
  { name: "Node.js", icon: "🟢" },
  { name: "Next.js", icon: "▲" },
];

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ============================
          FULL WIDTH BANNER IMAGE
      ============================ */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Tomasz Chromy - Full Stack Developer"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* ============================
          CONTENT OVERLAY
      ============================ */}
      <div className="relative z-10 w-full pt-20 sm:pt-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* LEFT - Text content */}
            <div>
              {/* Label */}
              <div className="mb-4 sm:mb-6 animate-fade-in-down">
                <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent-cyan animate-pulse" />
                  Web Developer & Consultant
                </span>
              </div>

              {/* Main heading - SEO optimized */}
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight animate-fade-in-up drop-shadow-lg">
                {t.hero.h1Main}
                <span className="block bg-gradient-to-r from-accent-cyan via-white to-accent-blue bg-clip-text text-transparent drop-shadow-lg">
                  {t.hero.h1Highlight}
                </span>
              </h1>

              {/* H2 - Services keywords */}
              <h2 className="text-sm sm:text-base md:text-lg text-white/80 font-medium mb-4 sm:mb-6 animate-fade-in-up tracking-wide">
                {t.hero.h2Services}
              </h2>

              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl text-white font-normal leading-relaxed mb-6 sm:mb-8 animate-fade-in-up drop-shadow-md">
                {t.hero.subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 animate-fade-in-up">
                <Button as="a" href="#contact" variant="primary" size="lg" className="group shadow-lg text-sm sm:text-base">
                  <span>{t.hero.cta}</span>
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
                <Button as="a" href="#portfolio" variant="secondary" size="lg" className="bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30 shadow-lg text-sm sm:text-base">
                  {t.hero.ctaSecondary}
                </Button>
              </div>

              {/* Tech stack badges */}
              <div className="animate-fade-in-up">
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-white/70 mb-3 sm:mb-4 font-semibold">
                  Tech Stack
                </p>
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  {trustedLogos.map((logo, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/15 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/25 hover:-translate-y-0.5 transition-all duration-300 shadow-md"
                    >
                      <span className="text-base sm:text-lg">{logo.icon}</span>
                      <span className="text-xs sm:text-sm font-semibold text-white">{logo.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT - Avatar */}
            <div className="hidden lg:flex justify-center items-center animate-fade-in-right">
              <div className="relative">
                {/* Glow effect behind avatar */}
                <div className="absolute -inset-4 bg-gradient-to-br from-accent-cyan via-accent-blue to-accent-cyan rounded-full opacity-40 blur-2xl animate-pulse-slow" />

                {/* Avatar container */}
                <div className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                  <img
                    src={avatarImage}
                    alt="Tomasz Chromy"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Decorative ring */}
                <div className="absolute -inset-2 rounded-full border-2 border-accent-cyan/30 animate-spin-slow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-white/60 uppercase tracking-widest">Scroll</span>
          <svg className="w-5 h-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
