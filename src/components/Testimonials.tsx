import React from "react";
import { useLanguage } from "../i18n";

// Male avatar component
const MaleAvatar = ({ className, bgColor = "#3B82F6", skinColor = "#D4A574" }: { className?: string; bgColor?: string; skinColor?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill={bgColor}/>
    <ellipse cx="50" cy="45" rx="22" ry="24" fill={skinColor}/>
    <ellipse cx="50" cy="85" rx="30" ry="20" fill="#374151"/>
    <path d="M28 38C28 28 38 18 50 18C62 18 72 28 72 38C72 42 68 44 50 44C32 44 28 42 28 38Z" fill="#1F2937"/>
    <circle cx="42" cy="42" r="3" fill="#1F2937"/>
    <circle cx="58" cy="42" r="3" fill="#1F2937"/>
    <path d="M45 55C45 55 48 58 50 58C52 58 55 55 55 55" stroke="#1F2937" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Female avatar component
const FemaleAvatar = ({ className, bgColor = "#EC4899", skinColor = "#E8C4A8" }: { className?: string; bgColor?: string; skinColor?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill={bgColor}/>
    <ellipse cx="50" cy="45" rx="20" ry="22" fill={skinColor}/>
    <ellipse cx="50" cy="85" rx="28" ry="18" fill="#7C3AED"/>
    <path d="M25 42C25 25 35 15 50 15C65 15 75 25 75 42C75 48 72 52 50 52C28 52 25 48 25 42Z" fill="#7C2D12"/>
    <path d="M28 40C28 40 32 55 50 55C68 55 72 40 72 40" fill="#7C2D12"/>
    <circle cx="42" cy="42" r="2.5" fill="#1F2937"/>
    <circle cx="58" cy="42" r="2.5" fill="#1F2937"/>
    <path d="M44 54C44 54 47 57 50 57C53 57 56 54 56 54" stroke="#1F2937" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="35" cy="50" r="4" fill="#F9A8D4" opacity="0.6"/>
    <circle cx="65" cy="50" r="4" fill="#F9A8D4" opacity="0.6"/>
  </svg>
);

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t.testimonials.quote1,
      author: "Michael K.",
      role: t.testimonials.role1,
      avatar: <MaleAvatar className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white shadow-md" bgColor="#3B82F6" />,
    },
    {
      quote: t.testimonials.quote2,
      author: "Anna W.",
      role: t.testimonials.role2,
      avatar: <FemaleAvatar className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white shadow-md" bgColor="#EC4899" />,
    },
    {
      quote: t.testimonials.quote3,
      author: "Peter S.",
      role: t.testimonials.role3,
      avatar: <MaleAvatar className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white shadow-md" bgColor="#10B981" skinColor="#C9A87C" />,
    },
  ];

  return (
    <section id="testimonials" className="relative bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-accent-blue/5 via-transparent to-accent-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* HEADER - Apple style */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-accent-blue/10 text-accent-blue text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            {t.testimonials.label}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-cool-50 mb-4 sm:mb-6 tracking-tight">
            {t.testimonials.title}
          </h2>
          <p className="text-base sm:text-lg text-cool-400 px-2">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* TESTIMONIALS GRID - Modern cards */}
        <div className="grid gap-5 sm:gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 border border-cool-500/5"
            >
              {/* Stars */}
              <div className="flex gap-0.5 sm:gap-1 mb-4 sm:mb-6">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              {/* Quote text */}
              <p className="text-cool-300 leading-relaxed mb-5 sm:mb-8 text-sm sm:text-lg">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4">
                {t.avatar}
                <div>
                  <p className="font-semibold text-cool-50 text-sm sm:text-base">{t.author}</p>
                  <p className="text-xs sm:text-sm text-cool-400">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
