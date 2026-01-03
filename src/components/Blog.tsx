import React from "react";
import { Link } from "react-router-dom";
import blogLaptop from "../assets/images-optimized/blog-code-laptop.webp";
import blogReading from "../assets/images-optimized/blog-reading.webp";
import tworzenieStronPrzewodnik from "../assets/images-optimized/tworzenie-stron-przewodnik-2026.webp";
import stronaFirmowaVsLanding from "../assets/images-optimized/strona-firmowa-vs-landing.webp";
import stronyKtoreSprzedaja from "../assets/images-optimized/strony-ktore-sprzedaja.webp";
import coreWebVitals from "../assets/images-optimized/core-web-vitals-2026.webp";
import headlessCms from "../assets/images-optimized/headless-cms-2026.webp";
import wcagDostepnosc from "../assets/images-optimized/wcag-dostepnosc-2026.webp";
import coDecyduje from "../assets/images-optimized/co-decyduje-czy-uzytkownik-zostanie.webp";
import mvpAplikacji from "../assets/images-optimized/mvp-aplikacji-webowej-2026.webp";
import reactVsNext from "../assets/images-optimized/react-vs-nextjs.webp";
import { useLanguage } from "../i18n";
import { getAllPosts, categoryTranslations, blogBasePaths, type BlogLanguage } from "../lib/blog";

const localImages = [blogLaptop, blogReading, blogLaptop, blogReading];

// Map thumbnail names to imported images
const thumbnailMap: Record<string, string> = {
  "tworzenie-stron-przewodnik-2026": tworzenieStronPrzewodnik,
  "strona-firmowa-vs-landing": stronaFirmowaVsLanding,
  "strony-ktore-sprzedaja": stronyKtoreSprzedaja,
  "core-web-vitals-2026": coreWebVitals,
  "headless-cms-2026": headlessCms,
  "wcag-dostepnosc-2026": wcagDostepnosc,
  "co-decyduje-czy-uzytkownik-zostanie": coDecyduje,
  "mvp-aplikacji-webowej-2026": mvpAplikacji,
  "react-vs-nextjs": reactVsNext,
};

export const Blog: React.FC = () => {
  const { t, language } = useLanguage();

  // Get max 4 posts for current language from MDX files (homepage preview)
  const allPosts = getAllPosts(language as BlogLanguage);
  const posts = allPosts.slice(0, 4);

  // Format read time label
  const formatReadTime = (minutes: number) => {
    if (language === 'pl') return `${minutes} min czytania`;
    if (language === 'nl') return `${minutes} min lezen`;
    return `${minutes} min read`;
  };

  // Get base path for current language
  const basePath = blogBasePaths[language as BlogLanguage] || '/blog';

  return (
    <section id="blog" className="relative bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent-blue/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* HEADER - Apple style */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-accent-blue/10 text-accent-blue text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            {t.blog.label}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-cool-50 mb-4 sm:mb-6 tracking-tight">
            {t.blog.title}
          </h2>
          <p className="text-base sm:text-lg text-cool-400 px-2">
            {t.blog.subtitle}
          </p>
          <Link
            to={basePath}
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full border border-cool-500/20 text-sm font-medium text-cool-300 hover:border-accent-blue hover:text-accent-blue transition-all"
          >
            {language === 'pl' ? 'Zobacz wszystkie artykuły' : language === 'nl' ? 'Bekijk alle artikelen' : 'View all articles'}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* GRID - Modern cards */}
        <div className="grid gap-5 sm:gap-8 md:grid-cols-2">
          {posts.map((post, index) => {
            // Use custom thumbnail if defined, otherwise fallback to default images
            const thumbnail = post.thumbnail && thumbnailMap[post.thumbnail]
              ? thumbnailMap[post.thumbnail]
              : localImages[index % localImages.length];
            const date = new Date(post.date).toLocaleDateString(
              language === 'pl' ? 'pl-PL' : language === 'nl' ? 'nl-NL' : 'en-US',
              { day: "numeric", month: "short", year: "numeric" }
            );
            const translatedCategory = categoryTranslations[language as BlogLanguage]?.[post.category] || post.category;

            return (
              <article
                key={post.slug}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 border border-cool-500/5"
              >
                {/* IMAGE */}
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <img
                    src={thumbnail}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    width={600}
                    height={400}
                    decoding="async"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] sm:text-xs font-semibold text-cool-100">
                      {translatedCategory}
                    </span>
                  </div>

                  {/* Read time */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex items-center gap-1.5 sm:gap-2 text-white/90 text-xs sm:text-sm">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{formatReadTime(post.readingTime)}</span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-4 sm:p-6">
                  {/* Date */}
                  <span className="text-xs sm:text-sm text-cool-400">{date}</span>

                  {/* Title */}
                  <h3 className="text-base sm:text-xl font-semibold text-cool-50 mt-1.5 sm:mt-2 mb-2 sm:mb-3 font-heading group-hover:text-accent-blue transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-cool-400 leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Read more link */}
                  <Link
                    to={`${basePath}/${post.slug}`}
                    className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-accent-blue hover:gap-3 transition-all duration-300"
                  >
                    {t.blog.readMore}
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
