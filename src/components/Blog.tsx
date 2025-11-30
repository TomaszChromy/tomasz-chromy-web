import React from "react";
import blogLaptop from "../assets/images/blog-code-laptop.jpg";
import blogReading from "../assets/images/blog-reading.jpg";
import { useLanguage } from "../i18n";

interface BlogArticle {
  id: string;
  title: string;
  publishedAt: string;
  sourceUrl: string;
  category: string;
  excerpt: string;
  readTime: string;
}

const localImages = [blogLaptop, blogReading];

export const Blog: React.FC = () => {
  const { t, language } = useLanguage();

  const articles: BlogArticle[] = [
    {
      id: "1",
      title: t.blog.article1Title,
      publishedAt: "2025-10-01",
      sourceUrl: "#",
      category: t.blog.category1,
      excerpt: t.blog.article1Excerpt,
      readTime: t.blog.readTime1,
    },
    {
      id: "2",
      title: t.blog.article2Title,
      publishedAt: "2025-09-18",
      sourceUrl: "#",
      category: t.blog.category2,
      excerpt: t.blog.article2Excerpt,
      readTime: t.blog.readTime2,
    },
  ];

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
        </div>

        {/* GRID - Modern cards */}
        <div className="grid gap-5 sm:gap-8 md:grid-cols-2">
          {articles.map((article, index) => {
            const thumbnail = localImages[index % localImages.length];
            const date = new Date(article.publishedAt).toLocaleDateString(language === 'pl' ? 'pl-PL' : 'en-US', {
              day: "numeric",
              month: "short",
              year: "numeric",
            });

            return (
              <article
                key={article.id}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 border border-cool-500/5"
              >
                {/* IMAGE */}
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <img
                    src={thumbnail}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] sm:text-xs font-semibold text-cool-100">
                      {article.category}
                    </span>
                  </div>

                  {/* Read time */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex items-center gap-1.5 sm:gap-2 text-white/90 text-xs sm:text-sm">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-4 sm:p-6">
                  {/* Date */}
                  <span className="text-xs sm:text-sm text-cool-400">{date}</span>

                  {/* Title */}
                  <h3 className="text-base sm:text-xl font-semibold text-cool-50 mt-1.5 sm:mt-2 mb-2 sm:mb-3 font-heading group-hover:text-accent-blue transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-cool-400 leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  {/* Read more link */}
                  <a
                    href={article.sourceUrl}
                    className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-accent-blue hover:gap-3 transition-all duration-300"
                  >
                    {t.blog.readMore}
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
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
