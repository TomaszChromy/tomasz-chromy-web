import React, { useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { useLanguage } from "../i18n";
import { Helmet } from "react-helmet-async";
import { getPostBySlug, getRelatedPosts, categoryTranslations, blogBasePaths, type BlogLanguage } from "../lib/blog";

const ArticlePage: React.FC = () => {
  const { articleSlug } = useParams<{ articleSlug: string }>();
  const { t, language } = useLanguage();
  const location = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Get article from MDX files
  const article = getPostBySlug(articleSlug || "", language as BlogLanguage);

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

  // Format date
  const formattedDate = new Date(article.date).toLocaleDateString(
    language === 'pl' ? 'pl-PL' : language === 'nl' ? 'nl-NL' : 'en-US',
    { day: 'numeric', month: 'long', year: 'numeric' }
  );

  // Format read time
  const readTimeLabel = language === 'pl'
    ? `${article.readingTime} min czytania`
    : language === 'nl'
    ? `${article.readingTime} min lezen`
    : `${article.readingTime} min read`;

  // Get translated category
  const translatedCategory = categoryTranslations[language as BlogLanguage]?.[article.category] || article.category;

  const currentUrl = `https://tomaszchromy.com${location.pathname}`;

  // Schema.org BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": t.nav.home,
        "item": "https://tomaszchromy.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": t.blog.label,
        "item": "https://tomaszchromy.com/#blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title
      }
    ]
  };

  // Schema.org Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "author": {
      "@type": "Person",
      "name": "Tomasz Chromy",
      "url": "https://tomaszchromy.com"
    },
    "publisher": {
      "@type": "Person",
      "name": "Tomasz Chromy"
    },
    "datePublished": article.date,
    "dateModified": article.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": currentUrl
    }
  };

  // MDX Content component
  const { Content } = article;

  return (
    <article className="bg-white min-h-screen">
      <Helmet>
        <title>{article.title} | Tomasz Chromy</title>
        <meta name="description" content={article.excerpt || article.title} />
        <link rel="canonical" href={currentUrl} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt || article.title} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      {/* Hero - Dark background for contrast */}
      <header className="bg-cool-50 pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-cool-500" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link to="/" className="hover:text-accent-blue transition-colors" itemProp="item">
                  <span itemProp="name">{t.nav.home}</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li className="text-cool-500" aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link to="/#blog" className="hover:text-accent-blue transition-colors" itemProp="item">
                  <span itemProp="name">{t.blog.label}</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li className="text-cool-500" aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span className="text-white/80 truncate max-w-[200px]" itemProp="name">{article.title}</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </nav>

          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/20 text-accent-blue text-sm font-medium mb-4">
            {translatedCategory}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-cool-500 text-sm">
            <span>{formattedDate}</span>
            <span>•</span>
            <span>{readTimeLabel}</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-cool-50 prose-p:text-cool-300 prose-strong:text-cool-100 prose-li:text-cool-300 prose-a:text-accent-blue">
          <Content />
        </div>

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

        {/* Related articles */}
        <RelatedArticles
          currentSlug={articleSlug || ""}
          language={language as BlogLanguage}
          t={t}
        />

        {/* Back link */}
        <div className="mt-8 pt-8 border-t border-cool-500/10">
          <Link to={blogBasePaths[language as BlogLanguage] || "/blog"} className="inline-flex items-center gap-2 text-accent-blue hover:gap-3 transition-all">
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

// Related Articles Component
interface RelatedArticlesProps {
  currentSlug: string;
  language: BlogLanguage;
  t: Record<string, unknown>;
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ currentSlug, language, t }) => {
  const relatedPosts = getRelatedPosts(currentSlug, language, 3);
  const basePath = blogBasePaths[language] || "/blog";

  if (relatedPosts.length === 0) return null;

  const relatedTitle = language === "pl"
    ? "Powiązane artykuły"
    : language === "nl"
    ? "Gerelateerde artikelen"
    : "Related articles";

  const formatReadTime = (minutes: number) => {
    if (language === "pl") return `${minutes} min czytania`;
    if (language === "nl") return `${minutes} min lezen`;
    return `${minutes} min read`;
  };

  return (
    <section className="mt-12 pt-8 border-t border-cool-500/10">
      <h2 className="text-lg font-heading font-bold text-cool-50 mb-6">
        {relatedTitle}
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        {relatedPosts.map((post) => {
          const date = new Date(post.date).toLocaleDateString(
            language === "pl" ? "pl-PL" : language === "nl" ? "nl-NL" : "en-US",
            { day: "numeric", month: "short", year: "numeric" }
          );
          const translatedCategory = categoryTranslations[language]?.[post.category] || post.category;

          return (
            <article
              key={post.slug}
              className="group p-4 rounded-xl border border-cool-500/10 bg-cool-500/5 hover:bg-cool-500/10 hover:border-accent-blue/30 transition-all"
            >
              <span className="text-xs text-accent-blue font-medium uppercase tracking-wide">
                {translatedCategory}
              </span>
              <h3 className="mt-2 text-sm font-semibold text-cool-100 group-hover:text-accent-blue transition-colors line-clamp-2">
                <Link to={`${basePath}/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="mt-2 text-xs text-cool-400 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="mt-3 flex items-center justify-between text-[11px] text-cool-500">
                <span>{date}</span>
                <span>{formatReadTime(post.readingTime)}</span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ArticlePage;

