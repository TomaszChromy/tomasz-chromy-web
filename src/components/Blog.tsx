import React from "react";
import { truncateToWords } from "../utils/text";
import blogLaptop from "../assets/images/blog-code-laptop.jpg";
import blogReading from "../assets/images/blog-reading.jpg";

const localImages = [blogLaptop, blogReading];

interface BlogArticle {
  id: string;
  title: string;
  publishedAt: string;
  sourceUrl: string;
  sourceName: string;
  content: string;
}

// MOCK – przykładowe artykuły zamiast prawdziwego RSS
const mockArticles: BlogArticle[] = [
  {
    id: "1",
    title: "5 things that make a small business website actually work",
    publishedAt: "2025-10-01T10:00:00Z",
    sourceUrl: "https://example.com/article/5-things-small-business-website",
    sourceName: "Web Design Weekly",
    content:
      "When you build a business website, design is important – but clarity is critical. A clear message, visible contact options and fast loading speed are much more valuable than complicated animations. In this article we go through five practical checkpoints you can use on any small business or e-commerce project. " +
      "The first checkpoint is clarity of the homepage hero: a single clear sentence that explains what you do, for whom and what happens next. Second, make sure the navigation is predictable and simple – visitors should never have to guess where to click. " +
      "Third, avoid long contact forms. Ask only for the minimum data needed to begin a conversation. Fourth, test on mobile very early, not at the end. Finally, connect your website with basic analytics so you can see what really happens after launch and adjust over time.",
  },
  {
    id: "2",
    title: "Basics of technical SEO for small e-commerce stores",
    publishedAt: "2025-09-18T08:30:00Z",
    sourceUrl: "https://example.com/article/technical-seo-ecommerce-basics",
    sourceName: "Practical SEO",
    content:
      "Technical SEO does not have to be scary. For small online stores it usually means a few focused steps: using clean URLs, optimising page speed and making sure search engines can index your products. Start with performance: compress images, avoid heavy sliders and use lazy loading where possible. " +
      "Make sure each product has a unique title and meta description, instead of copying the same text everywhere. Use structured data for products so search engines understand your prices and availability. " +
      "Even if you are a junior developer or freelancer, these basics will already put you ahead of many generic templates that ignore technical SEO completely.",
  },
];

export const Blog: React.FC = () => {
  const articles = mockArticles;

  return (
    <section id="blog" className="space-y-5 mt-16 md:mt-20">
      {/* HEADER */}
      <div className="space-y-2">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
          Blog
        </h2>
        <p className="text-lg font-semibold text-slate-50">
          Articles on web design, e-commerce and practical development.
        </p>
        <p className="max-w-2xl text-sm text-slate-300">
          In the future this section can read from an RSS feed. For now it shows
          example topics I find important when building websites and small
          e-commerce projects.
        </p>
      </div>

      {/* GRID */}
      <div className="grid gap-4 md:grid-cols-2">
        {articles.map((article, index) => {
          const preview = truncateToWords(article.content, 500);
          const date = new Date(article.publishedAt).toLocaleDateString(
            "en-GB",
            { day: "2-digit", month: "short", year: "numeric" }
          );
          const thumbnail = localImages[index % localImages.length];

          return (
            <article
              key={article.id}
              className="flex flex-col rounded-2xl border border-slate-700/70 bg-[#0B0C11] px-5 py-4 text-sm shadow-[0_18px_45px_rgba(0,0,0,0.6)]"
            >
              {/* IMAGE */}
              <div className="mb-3 h-32 w-full overflow-hidden rounded-xl">
                <img
                  src={thumbnail}
                  alt={article.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* META */}
              <div className="mb-2 flex items-center justify-between gap-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  {article.sourceName}
                </p>
                <p className="text-[11px] text-slate-400">{date}</p>
              </div>

              {/* TITLE */}
              <h3 className="text-base font-semibold text-slate-50">
                {article.title}
              </h3>

              {/* PREVIEW */}
              <p className="mt-3 text-xs leading-relaxed text-slate-200">
                {preview}
              </p>

              {/* INFO + LINK */}
              <p className="mt-3 text-[11px] text-slate-400">
                This is example content. In a production setup this box can link
                to full articles on external websites or your own blog.
              </p>
              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex text-xs font-semibold text-indigo-300 hover:text-indigo-200"
              >
                Read full article at source →
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
