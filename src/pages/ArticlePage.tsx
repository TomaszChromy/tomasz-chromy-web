import React, { useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { useLanguage } from "../i18n";

type ArticleKey = "pricing" | "react-nextjs" | "process" | "performance";

const ArticlePage: React.FC = () => {
  const { articleSlug } = useParams<{ articleSlug: string }>();
  const { t } = useLanguage();
  const location = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Map slugs to article keys
  const slugToKey: Record<string, ArticleKey> = {
    "pricing-guide": "pricing",
    "przewodnik-cenowy": "pricing",
    "prijsgids": "pricing",
    "react-nextjs": "react-nextjs",
    "react-vs-nextjs": "react-nextjs",
    "process": "process",
    "proces": "process",
    "jak-pracuje": "process",
    "hoe-ik-werk": "process",
    "performance": "performance",
    "wydajnosc": "performance",
    "prestaties": "performance",
  };

  const articleKey = slugToKey[articleSlug || ""] || "pricing";
  const article = t.articles?.[articleKey];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-cool-50 mb-4">404</h1>
          <p className="text-cool-400 mb-8">{t.articles?.notFound || "Article not found"}</p>
          <Link to="/" className="text-accent-blue hover:underline">
            ← {t.articles?.backHome || "Back to home"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="bg-white min-h-screen">
      {/* Hero - Dark background for contrast */}
      <header className="bg-cool-50 pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-cool-500">
              <li><Link to="/" className="hover:text-accent-blue transition-colors">{t.nav.home}</Link></li>
              <li className="text-cool-500">/</li>
              <li><Link to="/#blog" className="hover:text-accent-blue transition-colors">{t.blog.label}</Link></li>
              <li className="text-cool-500">/</li>
              <li className="text-white/80 truncate max-w-[200px]">{article.title}</li>
            </ol>
          </nav>

          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/20 text-accent-blue text-sm font-medium mb-4">
            {article.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-cool-500 text-sm">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div 
          className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-cool-50 prose-p:text-cool-300 prose-strong:text-cool-100 prose-li:text-cool-300 prose-a:text-accent-blue"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* CTA */}
        <div className="mt-12 p-8 rounded-2xl bg-cool-50 text-center">
          <h3 className="text-xl font-heading font-bold text-white mb-3">
            {t.articles?.ctaTitle}
          </h3>
          <p className="text-cool-500 mb-6">{t.articles?.ctaSubtitle}</p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-blue text-white font-medium hover:bg-accent-blue/90 transition-colors"
          >
            {t.articles?.ctaButton}
          </Link>
        </div>

        {/* Back link */}
        <div className="mt-8 pt-8 border-t border-cool-500/10">
          <Link to="/#blog" className="inline-flex items-center gap-2 text-accent-blue hover:gap-3 transition-all">
            <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            {t.articles?.backToArticles}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ArticlePage;

