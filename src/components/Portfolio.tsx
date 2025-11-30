import React from "react";
import businessImg from "../assets/images/portfolio-business.jpg";
import ecommerceImg from "../assets/images/portfolio-ecommerce.jpg";
import landingImg from "../assets/images/portfolio-landing.jpg";
import { useLanguage } from "../i18n";

const projects = [
  {
    tag: "Strategy & System",
    title: "Automation system for software house",
    description: "Comprehensive project management system with API integrations and automated reporting.",
    metrics: [
      { value: "+40%", label: "Team efficiency" },
      { value: "-60%", label: "Report time" },
    ],
    image: businessImg,
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
  {
    tag: "E-commerce",
    title: "Premium products online store",
    description: "Modern e-commerce store with conversion optimization and advanced analytics.",
    metrics: [
      { value: "+85%", label: "Conversion" },
      { value: "2.1s", label: "Load time" },
    ],
    image: ecommerceImg,
    technologies: ["Next.js", "Stripe", "Sanity"],
  },
  {
    tag: "Landing & Growth",
    title: "Landing page for SaaS campaign",
    description: "High-converting landing page with A/B testing and full analytics.",
    metrics: [
      { value: "12%", label: "CTR" },
      { value: "3.2%", label: "Conversion rate" },
    ],
    image: landingImg,
    technologies: ["React", "Tailwind", "GA4"],
  },
];

export const Portfolio: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="relative bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent-blue/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-cyan/5 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* HEADER - Apple style */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 text-accent-blue text-sm font-medium mb-4">
            {t.portfolio.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-cool-50 mb-6 tracking-tight">
            {t.portfolio.title} <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">{t.portfolio.titleHighlight}</span>
          </h2>
          <p className="text-lg text-cool-400">
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* PORTFOLIO GRID - Modern masonry-like */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 border border-cool-500/5"
            >
              {/* IMAGE with overlay */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-cool-100">
                    {project.tag}
                  </span>
                </div>

                {/* Metrics overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="flex-1 text-center p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                      <div className="text-lg font-bold text-white">{metric.value}</div>
                      <div className="text-xs text-white/80">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-lg font-semibold text-cool-50 mb-2 font-heading group-hover:text-accent-blue transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-cool-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs text-cool-300 px-3 py-1 rounded-full bg-navy-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA - Apple style */}
        <div className="text-center mt-16">
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
