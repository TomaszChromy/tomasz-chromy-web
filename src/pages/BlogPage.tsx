import React, { useState, useMemo, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../i18n";
import {
  getAllPosts,
  getCategories,
  categoryTranslations,
  blogBasePaths,
  type BlogLanguage,
  type BlogCategory,
} from "../lib/blog";
import blogLaptop from "../assets/images-optimized/blog-code-laptop.webp";
import blogReading from "../assets/images-optimized/blog-reading.webp";
import tworzenieStronPrzewodnik from "../assets/images-optimized/tworzenie-stron-przewodnik-2026.webp";
import stronaFirmowaVsLanding from "../assets/images-optimized/strona-firmowa-vs-landing.webp";
import stronyKtoreSprzedaja from "../assets/images-optimized/strony-ktore-sprzedaja.webp";

const localImages = [blogLaptop, blogReading, blogLaptop, blogReading];

// Map thumbnail names to imported images
const thumbnailMap: Record<string, string> = {
  "tworzenie-stron-przewodnik-2026": tworzenieStronPrzewodnik,
  "strona-firmowa-vs-landing": stronaFirmowaVsLanding,
  "strony-ktore-sprzedaja": stronyKtoreSprzedaja,
};

// Sort options type
type SortOption = "newest" | "oldest" | "shortest" | "longest";

// Category icons and colors
const categoryStyles: Record<string, { icon: string; color: string }> = {
  Strategy: { icon: "🎯", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
  Strategia: { icon: "🎯", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
  Technology: { icon: "⚙️", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  Technologia: { icon: "⚙️", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  Technologie: { icon: "⚙️", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  Performance: { icon: "⚡", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
  Wydajność: { icon: "⚡", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
  Prestaties: { icon: "⚡", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
  Process: { icon: "📋", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
  Proces: { icon: "📋", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
  Pricing: { icon: "💰", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
  Wyceny: { icon: "💰", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
  Prijzen: { icon: "💰", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
};

const BlogPage: React.FC = () => {
  const { t, language } = useLanguage();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("newest");

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Get all posts and categories
  const posts = getAllPosts(language as BlogLanguage);
  const categories = getCategories(language as BlogLanguage);
  const basePath = blogBasePaths[language as BlogLanguage] || "/blog";

  // Get featured post (first one marked as featured, or first post)
  const featuredPost = useMemo(() => {
    return posts.find((p) => p.featured) || posts[0];
  }, [posts]);

  // Filter, search and sort posts
  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    // Filter by category
    let filtered = activeCategory === "all"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

    // Filter by search query
    if (query) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
    }

    // Sort
    filtered = [...filtered].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      switch (sortOption) {
        case "newest": return dateB - dateA;
        case "oldest": return dateA - dateB;
        case "shortest": return a.readingTime - b.readingTime;
        case "longest": return b.readingTime - a.readingTime;
        default: return 0;
      }
    });

    // Exclude featured from regular grid (only when showing all and no search)
    if (activeCategory === "all" && !query) {
      filtered = filtered.filter((p) => p.slug !== featuredPost?.slug);
    }

    return filtered;
  }, [activeCategory, posts, featuredPost, searchQuery, sortOption]);

  // Format read time
  const formatReadTime = (minutes: number) => {
    if (language === "pl") return `${minutes} min czytania`;
    if (language === "nl") return `${minutes} min lezen`;
    return `${minutes} min read`;
  };

  // Page meta
  const pageTitle = language === "pl"
    ? "Wiedza - Praktyczne poradniki | Tomasz Chromy"
    : language === "nl"
    ? "Kennis - Praktische gidsen | Tomasz Chromy"
    : "Blog - Practical Guides | Tomasz Chromy";

  const pageDescription = language === "pl"
    ? "Konkretne poradniki o web developmencie, UX i strategii online. Bez lania wody, za to z realnymi przykładami."
    : language === "nl"
    ? "Concrete gidsen over webontwikkeling, UX en digitale strategie. Geen fluff, alleen echte voorbeelden."
    : "Actionable guides on web development, UX, and digital strategy. No fluff, just real examples.";

  const allLabel = language === "pl" ? "Wszystkie" : language === "nl" ? "Alle" : "All";

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`https://tomaszchromy.com${basePath}`} />
      </Helmet>

      {/* Compact Hero Header */}
      <header className="bg-gradient-to-b from-[#0a0a0f] to-cool-50 pt-28 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-cool-500">
              <li>
                <Link to="/" className="hover:text-accent-blue transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li className="text-cool-600" aria-hidden="true">/</li>
              <li className="text-cool-400">{t.blog.label}</li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cool-300 text-xs font-medium mb-3">
                {t.blog.label}
              </span>
              <h1 className="text-3xl sm:text-4xl font-heading font-semibold tracking-tight text-white mb-2">
                {t.blog.title}
              </h1>
              <p className="text-cool-400 max-w-2xl leading-relaxed">
                {t.blog.subtitle}
              </p>
            </div>
          </div>

          {/* Search, Sort & Filters Row */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Search */}
            <div className="lg:col-span-5">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-cool-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.blog.searchPlaceholder}
                  className="w-full rounded-xl bg-white/5 text-white placeholder:text-cool-400 border border-white/10 pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue/50 transition-all"
                />
              </div>
            </div>

            {/* Sort */}
            <div className="lg:col-span-3 relative">
              <label htmlFor="sort-select" className="sr-only">
                {language === "pl" ? "Sortuj artykuły" : language === "nl" ? "Sorteer artikelen" : "Sort articles"}
              </label>
              <select
                id="sort-select"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as SortOption)}
                className="w-full rounded-xl bg-white/5 text-white border border-white/10 px-4 py-3 pr-10 outline-none focus:ring-2 focus:ring-accent-blue/50 cursor-pointer appearance-none"
              >
                <option value="newest" className="bg-cool-50 text-white">{t.blog.sortNewest}</option>
                <option value="oldest" className="bg-cool-50 text-white">{t.blog.sortOldest}</option>
                <option value="shortest" className="bg-cool-50 text-white">{t.blog.sortShortest}</option>
                <option value="longest" className="bg-cool-50 text-white">{t.blog.sortLongest}</option>
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-cool-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Results count */}
            <div className="lg:col-span-4 flex items-center justify-between lg:justify-end gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-cool-300">
              <span className="text-sm opacity-80">{t.blog.resultsCount}:</span>
              <span className="text-sm font-semibold text-white">{filteredPosts.length + (activeCategory === "all" && !searchQuery && featuredPost ? 1 : 0)}</span>
            </div>
          </div>

          {/* Category chips */}
          <div className="mt-5 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                activeCategory === "all"
                  ? "bg-white text-cool-50 border-white"
                  : "bg-white/5 text-cool-300 border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {allLabel}
            </button>
            {categories.map((cat) => {
              const style = categoryStyles[cat] || categoryStyles[categoryTranslations[language as BlogLanguage]?.[cat] || ""];
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all border flex items-center gap-1.5 ${
                    activeCategory === cat
                      ? "bg-white text-cool-50 border-white"
                      : `bg-white/5 border-white/10 hover:bg-white/10 ${style?.color || "text-cool-300"}`
                  }`}
                >
                  {style?.icon && <span>{style.icon}</span>}
                  {categoryTranslations[language as BlogLanguage]?.[cat] || cat}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main id="articles" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Featured Article */}
        {featuredPost && activeCategory === "all" && (
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xl">⭐</span>
              <h2 className="text-lg font-semibold text-cool-100">{t.blog.featuredLabel}</h2>
            </div>
            <Link
              to={`${basePath}/${featuredPost.slug}`}
              className="group block overflow-hidden rounded-3xl bg-gradient-to-br from-cool-50 to-cool-100 border border-cool-500/10 hover:border-accent-blue/30 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 md:h-full min-h-[280px] overflow-hidden">
                  <img
                    src={featuredPost.thumbnail && thumbnailMap[featuredPost.thumbnail]
                      ? thumbnailMap[featuredPost.thumbnail]
                      : localImages[0]}
                    alt={featuredPost.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-cool-50/50 md:block hidden" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    {(() => {
                      const cat = categoryTranslations[language as BlogLanguage]?.[featuredPost.category] || featuredPost.category;
                      const style = categoryStyles[featuredPost.category] || categoryStyles[cat];
                      return (
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${style?.color || "bg-cool-500/20 text-cool-400"}`}>
                          {style?.icon} {cat}
                        </span>
                      );
                    })()}
                    <span className="text-xs text-cool-400">
                      {new Date(featuredPost.date).toLocaleDateString(
                        language === "pl" ? "pl-PL" : language === "nl" ? "nl-NL" : "en-US",
                        { day: "numeric", month: "long", year: "numeric" }
                      )}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4 group-hover:text-accent-blue transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-cool-400 leading-relaxed mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-cool-500">{formatReadTime(featuredPost.readingTime)}</span>
                    <span className="inline-flex items-center gap-2 text-accent-blue font-medium group-hover:gap-3 transition-all">
                      {t.blog.readMore}
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Articles grid */}
        {filteredPosts.length === 0 ? (
          <div className="rounded-2xl border border-cool-500/10 bg-cool-50/50 p-8 text-center">
            <div className="text-lg font-semibold text-cool-100 mb-2">{t.blog.noResults}</div>
            <p className="text-cool-400">{t.blog.noResultsHint}</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, index) => {
              // Use custom thumbnail if defined, otherwise fallback to default images
              const thumbnail = post.thumbnail && thumbnailMap[post.thumbnail]
                ? thumbnailMap[post.thumbnail]
                : localImages[index % localImages.length];
              const date = new Date(post.date).toLocaleDateString(
                language === "pl" ? "pl-PL" : language === "nl" ? "nl-NL" : "en-US",
                { day: "numeric", month: "short", year: "numeric" }
              );
              const translatedCategory = categoryTranslations[language as BlogLanguage]?.[post.category] || post.category;
              const style = categoryStyles[post.category] || categoryStyles[translatedCategory];

              return (
                <article
                  key={post.slug}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-cool-500/5"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={thumbnail}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${style?.color || "bg-white/90 text-cool-100"}`}>
                        {style?.icon} {translatedCategory}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <span className="text-xs text-cool-400">{date}</span>
                    <h2 className="text-lg font-semibold text-cool-50 mt-1 mb-2 font-heading group-hover:text-accent-blue transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-cool-400 leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-cool-500">{formatReadTime(post.readingTime)}</span>
                      <Link
                        to={`${basePath}/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-blue hover:gap-2.5 transition-all duration-300"
                      >
                        {t.blog.readMore}
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* Full card link overlay */}
                  <Link
                    to={`${basePath}/${post.slug}`}
                    className="absolute inset-0 z-10"
                    aria-label={post.title}
                  />
                </article>
              );
            })}
          </div>
        )}

        {/* CTA Section */}
        <section className="mt-16 rounded-3xl border border-cool-500/10 bg-gradient-to-br from-cool-50 to-cool-100 p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-heading font-semibold text-white mb-2">
                {t.blog.ctaTitle}
              </h3>
              <p className="text-cool-400 max-w-xl leading-relaxed">
                {t.blog.ctaDescription}
              </p>
            </div>
            <Link
              to={language === "pl" ? "/kontakt" : language === "nl" ? "/contact" : "/contact"}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-cool-50 font-medium hover:bg-cool-200 transition-all shrink-0"
            >
              {t.blog.ctaButton}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogPage;

