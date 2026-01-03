import React, { useState, useEffect, useRef } from "react";
import { Button } from "./ui/Button";
import heroBanner from "../assets/images-optimized/hero-tomasz-chromy.webp";
import avatarImage from "../assets/images-optimized/about-profile.webp";
import { useLanguage } from "../i18n";

// ============================================
// TYPEWRITER HOOK - Animowany tekst
// ============================================
const useTypewriter = (words: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
};

// ============================================
// COUNT-UP HOOK - Animowane liczniki
// ============================================
const useCountUp = (end: number, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * (end - start) + start));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, start, duration]);

  return { count, ref };
};

// ============================================
// STATS DATA
// ============================================
const stats = [
  { value: 25, suffix: "+", labelPL: "Projektów", labelEN: "Projects", labelNL: "Projecten" },
  { value: 3, suffix: "+", labelPL: "Lat doświadczenia", labelEN: "Years experience", labelNL: "Jaar ervaring" },
  { value: 100, suffix: "%", labelPL: "Satysfakcji", labelEN: "Satisfaction", labelNL: "Tevredenheid" },
];

// Tech stack with better icons
const techStack = [
  { name: "React", color: "from-cyan-400 to-cyan-600" },
  { name: "TypeScript", color: "from-blue-400 to-blue-600" },
  { name: "Next.js", color: "from-gray-400 to-gray-600" },
  { name: "Node.js", color: "from-green-400 to-green-600" },
];

// ============================================
// HERO COMPONENT
// ============================================
export const Hero: React.FC = () => {
  const { t, language } = useLanguage();

  // Typewriter words based on language
  const typewriterWords = {
    pl: ["Strony Internetowe", "Aplikacje Webowe", "Sklepy E-commerce", "UI/UX Design"],
    en: ["Websites", "Web Applications", "E-commerce Stores", "UI/UX Design"],
    nl: ["Websites", "Webapplicaties", "E-commerce Winkels", "UI/UX Design"],
  };

  const animatedWord = useTypewriter(typewriterWords[language] || typewriterWords.pl, 80, 40, 2500);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0f]">

      {/* ============================
          GRADIENT ORBS - Apple/Stripe style (subtle)
      ============================ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main large orb - top right */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-transparent blur-3xl animate-pulse-slow" />

        {/* Secondary orb - bottom left */}
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-transparent blur-3xl animate-pulse-slower" />

        {/* Small floating orbs */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-cyan-400/10 blur-2xl animate-float" />
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full bg-blue-400/10 blur-2xl animate-float-delayed" />
      </div>

      {/* Background image - LCP element */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Tomasz Chromy - Full Stack Developer"
          className="w-full h-full object-cover opacity-30"
          fetchPriority="high"
          decoding="async"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/70 via-[#0a0a0f]/60 to-[#0a0a0f]/90" />
      </div>

      {/* ============================
          MAIN CONTENT
      ============================ */}
      <div className="relative z-10 w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT - Text content */}
            <div className="text-center lg:text-left">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-8 animate-fade-in-down">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                {language === 'pl' ? 'Dostępny do współpracy' : language === 'nl' ? 'Beschikbaar voor samenwerking' : 'Available for collaboration'}
              </div>

              {/* Main heading with typewriter */}
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in-up drop-shadow-lg">
                {t.hero.h1Main}
                <span className="block mt-2 min-h-[1.2em] whitespace-nowrap">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
                    {animatedWord}
                  </span>
                  <span className="inline-block w-[3px] h-[0.9em] bg-cyan-400 ml-1 animate-blink align-middle" />
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0 animate-fade-in-up">
                {t.hero.subtitle}
              </p>

              {/* Tagline */}
              {t.hero.tagline && (
                <p className="text-sm sm:text-base text-cyan-400/80 italic mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-in-up">
                  {t.hero.tagline}
                </p>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in-up">
                <Button
                  as="a"
                  href="#contact"
                  variant="primary"
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 border-0 shadow-lg shadow-cyan-500/25"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {t.hero.cta}
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Button>
                <Button
                  as="a"
                  href="#portfolio"
                  variant="secondary"
                  size="lg"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/15 hover:border-white/30"
                >
                  {t.hero.ctaSecondary}
                </Button>
              </div>

              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-fade-in-up">
                {techStack.map((tech, i) => (
                  <div
                    key={i}
                    className="group px-4 py-2 rounded-full bg-white/10 border border-white/20 hover:border-white/30 hover:bg-white/15 transition-all duration-300 cursor-default"
                  >
                    <span className={`text-sm font-medium bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT - Avatar + Stats */}
            <div className="flex flex-col items-center gap-10 animate-fade-in-right">

              {/* Avatar with glow */}
              <div className="relative">
                {/* Animated rings */}
                <div className="absolute -inset-4 rounded-full border border-cyan-500/20 animate-spin-slow" />
                <div className="absolute -inset-8 rounded-full border border-blue-500/10 animate-spin-slower" />

                {/* Glow effect */}
                <div className="absolute -inset-6 bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-purple-500/30 rounded-full blur-2xl animate-pulse-slow" />

                {/* Avatar */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
                  <img
                    src={avatarImage}
                    alt="Tomasz Chromy"
                    className="w-full h-full object-cover"
                    width={288}
                    height={288}
                    fetchPriority="high"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/50 via-transparent to-transparent" />
                </div>
              </div>

              {/* Animated Stats */}
              <div className="flex flex-col items-center gap-4">
                <div className="grid grid-cols-3 gap-6 sm:gap-10">
                  {stats.map((stat, i) => {
                    const { count, ref } = useCountUp(stat.value, 2000);
                    const label = language === 'pl' ? stat.labelPL : language === 'nl' ? stat.labelNL : stat.labelEN;
                    return (
                      <div key={i} ref={ref} className="text-center group">
                        <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-1 group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                          {count}{stat.suffix}
                        </div>
                        <div className="text-xs sm:text-sm text-white/50 uppercase tracking-wider">
                          {label}
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* Stats caption */}
                {t.hero.statsCaption && (
                  <p className="text-xs sm:text-sm text-white/40 text-center max-w-sm">
                    {t.hero.statsCaption}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce-subtle">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/40 rounded-full animate-scroll-down" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
