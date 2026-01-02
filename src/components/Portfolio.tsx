import React from "react";
import businessImg from "../assets/images-optimized/portfolio-business.webp";
import ecommerceImg from "../assets/images-optimized/portfolio-ecommerce.webp";
import landingImg from "../assets/images-optimized/portfolio-landing.webp";
import { useLanguage } from "../i18n";

export const Portfolio: React.FC = () => {
  const { t } = useLanguage();

  const projects = [
    {
      tag: t.portfolio.project1Tag,
      title: t.portfolio.project1Title,
      problem: t.portfolio.project1Problem,
      solution: t.portfolio.project1Solution,
      result: t.portfolio.project1Result,
      metrics: [
        { value: t.portfolio.project1Metric1Value, label: t.portfolio.project1Metric1Label },
        { value: t.portfolio.project1Metric2Value, label: t.portfolio.project1Metric2Label },
      ],
      image: businessImg,
      imageAlt: "Business website project - modern responsive design with analytics dashboard",
      technologies: ["React", "Node.js", "PostgreSQL"],
    },
    {
      tag: t.portfolio.project2Tag,
      title: t.portfolio.project2Title,
      problem: t.portfolio.project2Problem,
      solution: t.portfolio.project2Solution,
      result: t.portfolio.project2Result,
      metrics: [
        { value: t.portfolio.project2Metric1Value, label: t.portfolio.project2Metric1Label },
        { value: t.portfolio.project2Metric2Value, label: t.portfolio.project2Metric2Label },
      ],
      image: ecommerceImg,
      imageAlt: "E-commerce store project - online shop with product catalog and checkout",
      technologies: ["Next.js", "Stripe", "Sanity"],
    },
    {
      tag: t.portfolio.project3Tag,
      title: t.portfolio.project3Title,
      problem: t.portfolio.project3Problem,
      solution: t.portfolio.project3Solution,
      result: t.portfolio.project3Result,
      metrics: [
        { value: t.portfolio.project3Metric1Value, label: t.portfolio.project3Metric1Label },
        { value: t.portfolio.project3Metric2Value, label: t.portfolio.project3Metric2Label },
      ],
      image: landingImg,
      imageAlt: "Landing page project - high-converting marketing page with modern design",
      technologies: ["React", "Tailwind", "GA4"],
    },
  ];

  return (
    <section id="portfolio" className="relative bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent-blue/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-cyan/5 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* HEADER - Apple style */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-accent-blue/10 text-accent-blue text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            {t.portfolio.label}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-cool-50 mb-4 sm:mb-6 tracking-tight">
            {t.portfolio.title} <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">{t.portfolio.titleHighlight}</span>
          </h2>
          <p className="text-base sm:text-lg text-cool-400 px-2">
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* PORTFOLIO GRID - Modern masonry-like */}
        <div className="grid gap-5 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 border border-cool-500/5"
            >
              {/* IMAGE with overlay */}
              <div className="relative h-44 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={600}
                  height={400}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] sm:text-xs font-semibold text-cool-100">
                    {project.tag}
                  </span>
                </div>

                {/* Metrics overlay */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex gap-2 sm:gap-3">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="flex-1 text-center p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                      <div className="text-sm sm:text-lg font-bold text-white">{metric.value}</div>
                      <div className="text-[10px] sm:text-xs text-white/80">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-4 sm:p-6">
                {/* Title */}
                <h3 className="text-base sm:text-lg font-semibold text-cool-50 mb-3 sm:mb-4 font-heading group-hover:text-accent-blue transition-colors">
                  {project.title}
                </h3>

                {/* Case Study Structure: Problem → Solution → Result */}
                <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                  {/* Problem */}
                  <div className="flex gap-2">
                    <span className="flex-shrink-0 w-1 rounded-full bg-red-400/60" />
                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold text-red-400 uppercase tracking-wider mb-0.5">{t.portfolio.problemLabel}</p>
                      <p className="text-[11px] sm:text-xs text-cool-400 leading-relaxed">{project.problem}</p>
                    </div>
                  </div>
                  {/* Solution */}
                  <div className="flex gap-2">
                    <span className="flex-shrink-0 w-1 rounded-full bg-accent-blue/60" />
                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold text-accent-blue uppercase tracking-wider mb-0.5">{t.portfolio.solutionLabel}</p>
                      <p className="text-[11px] sm:text-xs text-cool-400 leading-relaxed">{project.solution}</p>
                    </div>
                  </div>
                  {/* Result */}
                  <div className="flex gap-2">
                    <span className="flex-shrink-0 w-1 rounded-full bg-emerald-400/60" />
                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-0.5">{t.portfolio.resultLabel}</p>
                      <p className="text-[11px] sm:text-xs text-cool-400 leading-relaxed">{project.result}</p>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-[10px] sm:text-xs text-cool-300 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-navy-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA - Apple style */}
        <div className="text-center mt-10 sm:mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-accent-blue font-medium hover:gap-3 transition-all duration-300 group"
          >
            <span>{t.portfolio.cta}</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
