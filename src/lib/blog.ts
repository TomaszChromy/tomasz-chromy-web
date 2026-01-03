// Blog helper functions for loading MDX articles
// Note: In Vite/React SPA, we use import.meta.glob for dynamic imports
import React from 'react';

export type BlogCategory =
  | 'Strategy'
  | 'UX & Design'
  | 'Tech & Performance'
  | 'Business & Pricing'
  | 'Case & Practice';

export type BlogLanguage = 'pl' | 'en' | 'nl';

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: number;
  category: BlogCategory;
  language: BlogLanguage;
  featured?: boolean;
  draft?: boolean;
  thumbnail?: string;
}

export interface BlogPost extends BlogPostMeta {
  Content: React.ComponentType;
}

// Category translations
export const categoryTranslations: Record<BlogLanguage, Record<BlogCategory, string>> = {
  pl: {
    'Strategy': 'Strategia',
    'UX & Design': 'UX i Design',
    'Tech & Performance': 'Technologia',
    'Business & Pricing': 'Biznes',
    'Case & Practice': 'Case Study',
  },
  en: {
    'Strategy': 'Strategy',
    'UX & Design': 'UX & Design',
    'Tech & Performance': 'Tech & Performance',
    'Business & Pricing': 'Business & Pricing',
    'Case & Practice': 'Case & Practice',
  },
  nl: {
    'Strategy': 'Strategie',
    'UX & Design': 'UX & Design',
    'Tech & Performance': 'Technologie',
    'Business & Pricing': 'Zakelijk',
    'Case & Practice': 'Case Study',
  },
};

// Blog base paths per language - unified to /blog for all languages
export const blogBasePaths: Record<BlogLanguage, string> = {
  pl: '/blog',
  en: '/blog',
  nl: '/blog',
};

// MDX module type from Vite
interface MDXModule {
  default: React.ComponentType;
  frontmatter?: Omit<BlogPostMeta, 'language'>;
}

// Import all blog posts using Vite's import.meta.glob
// This will be processed at build time
const blogModules = import.meta.glob<MDXModule>(
  '/content/blog/**/*.mdx',
  { eager: true }
);

// Parse all blog posts from the modules
function parseBlogPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const [path, module] of Object.entries(blogModules)) {
    // Extract language from path: /content/blog/pl/filename.mdx
    const pathParts = path.split('/');
    const langIndex = pathParts.indexOf('blog') + 1;
    const lang = pathParts[langIndex] as BlogLanguage;

    if (module.frontmatter && !module.frontmatter.draft) {
      posts.push({
        ...module.frontmatter,
        language: lang,
        Content: module.default,
      });
    }
  }

  return posts;
}

// Cache for parsed posts
let cachedPosts: BlogPost[] | null = null;

function getAllPostsCached(): BlogPost[] {
  if (!cachedPosts) {
    cachedPosts = parseBlogPosts();
  }
  return cachedPosts;
}

// Get all posts for a specific language, sorted by date (newest first)
export function getAllPosts(lang: BlogLanguage): BlogPost[] {
  return getAllPostsCached()
    .filter(post => post.language === lang)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get featured posts for a specific language
export function getFeaturedPosts(lang: BlogLanguage, limit = 4): BlogPost[] {
  const posts = getAllPosts(lang);
  const featured = posts.filter(post => post.featured);
  
  // If not enough featured, fill with latest posts
  if (featured.length < limit) {
    const nonFeatured = posts.filter(post => !post.featured);
    return [...featured, ...nonFeatured].slice(0, limit);
  }
  
  return featured.slice(0, limit);
}

// Get a single post by slug and language
export function getPostBySlug(slug: string, lang: BlogLanguage): BlogPost | undefined {
  return getAllPostsCached().find(
    post => post.slug === slug && post.language === lang
  );
}

// Get posts by category
export function getPostsByCategory(category: BlogCategory, lang: BlogLanguage): BlogPost[] {
  return getAllPosts(lang).filter(post => post.category === category);
}

// Get all unique categories that have posts
export function getCategories(lang: BlogLanguage): BlogCategory[] {
  const posts = getAllPosts(lang);
  const categories = new Set(posts.map(post => post.category));
  return Array.from(categories);
}

// Get related posts (same category, excluding current)
export function getRelatedPosts(currentSlug: string, lang: BlogLanguage, limit = 3): BlogPost[] {
  const current = getPostBySlug(currentSlug, lang);
  if (!current) return [];
  
  return getAllPosts(lang)
    .filter(post => post.slug !== currentSlug && post.category === current.category)
    .slice(0, limit);
}

