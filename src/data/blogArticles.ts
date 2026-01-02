// Blog article data for new 2026 articles
// Images should be placed in src/assets/images/blog/

export interface BlogArticleData {
  id: string;
  slug: {
    en: string;
    pl: string;
    nl: string;
  };
  publishedAt: string;
  image: string;
  icon: string;
}

// Article metadata (content is in translations.ts)
export const newArticles: BlogArticleData[] = [
  {
    id: "website-not-selling-2026",
    slug: {
      en: "why-your-website-doesnt-sell-2026",
      pl: "dlaczego-strona-nie-sprzedaje-2026",
      nl: "waarom-je-website-niet-verkoopt-2026",
    },
    publishedAt: "2026-01-02",
    image: "blog-website-sales.jpg", // Placeholder - will be replaced with AI image
    icon: "📈",
  },
  {
    id: "core-web-vitals-2026",
    slug: {
      en: "core-web-vitals-2026-business-guide",
      pl: "core-web-vitals-2026-poradnik-biznesowy",
      nl: "core-web-vitals-2026-zakelijke-gids",
    },
    publishedAt: "2026-01-01",
    image: "blog-web-vitals.jpg", // Placeholder - will be replaced with AI image
    icon: "⚡",
  },
  {
    id: "wcag-accessibility-2026",
    slug: {
      en: "wcag-accessibility-2026-business-obligation",
      pl: "wcag-dostepnosc-2026-obowiazek-biznesowy",
      nl: "wcag-toegankelijkheid-2026-zakelijke-verplichting",
    },
    publishedAt: "2025-12-28",
    image: "blog-accessibility.jpg", // Placeholder - will be replaced with AI image
    icon: "♿",
  },
];

// Image prompts for AI generation (Midjourney/DALL-E/etc.)
export const imagePrompts = {
  "blog-website-sales.jpg": `
    Ultra-realistic HD photography, DSLR lens, cinematic tone, natural lighting.
    Business professional analyzing website analytics on a modern laptop in a bright office.
    Charts showing growth metrics visible on screen. Coffee cup nearby.
    Clean minimalist desk setup. Shallow depth of field.
    Professional business environment, 2026 modern office aesthetic.
    Resolution: 1920x1080, Full HD quality.
  `,
  "blog-web-vitals.jpg": `
    Ultra-realistic HD photography, DSLR lens, cinematic tone, natural lighting.
    Close-up of a website speed test showing green "Good" scores on a high-end monitor.
    Developer workspace with multiple screens. PageSpeed Insights visible.
    Modern tech setup with mechanical keyboard. Professional lighting.
    Clean and organized workspace aesthetic.
    Resolution: 1920x1080, Full HD quality.
  `,
  "blog-accessibility.jpg": `
    Ultra-realistic HD photography, DSLR lens, cinematic tone, natural lighting.
    Diverse team of professionals reviewing a website design for accessibility.
    Modern meeting room with large screen showing UI mockups.
    Inclusive business environment, wheelchair user visible at the table.
    Natural daylight through large windows. Professional corporate setting.
    Resolution: 1920x1080, Full HD quality.
  `,
};

