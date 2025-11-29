import React from "react";
import businessImg from "../assets/images/portfolio-business.jpg";
import ecommerceImg from "../assets/images/portfolio-ecommerce.jpg";
import landingImg from "../assets/images/portfolio-landing.jpg";

const projects = [
  {
    tag: "Business website",
    title: "Website for a local service company",
    impact:
      "Clear structure, visible offer and quick contact — designed to convert visitors into leads.",
    image: businessImg,
  },
  {
    tag: "E-commerce shop",
    title: "Small online store with physical products",
    impact:
      "Lightweight, simple product layout, fast loading — easy for the owner to manage daily.",
    image: ecommerceImg,
  },
  {
    tag: "Campaign landing page",
    title: "Landing page for a limited-time offer",
    impact:
      "Focused layout with one main call to action — ideal for paid ads and conversion tracking.",
    image: landingImg,
  },
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="space-y-5 mt-16 md:mt-20">
      {/* HEADER */}
      <div className="space-y-2">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
          Portfolio
        </h2>

        <p className="text-lg font-semibold text-slate-50">
          Example types of projects.
        </p>

        <p className="max-w-xl text-sm text-slate-300">
          These examples show the kind of work I usually do as a freelance web
          developer — clean, purposeful, business-oriented websites.
        </p>
      </div>

      {/* PORTFOLIO GRID */}
      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col justify-between rounded-2xl border border-slate-700/80 bg-gradient-to-b from-slate-900 to-black px-5 py-4 text-sm shadow-[0_18px_45px_rgba(0,0,0,0.75)] min-h-[260px]"
          >
            {/* IMAGE */}
            <div>
              <div className="mb-3 h-32 overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* BADGE */}
              <span className="inline-flex rounded-full bg-indigo-600/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-100">
                {project.tag}
              </span>

              {/* TITLE */}
              <h3 className="mt-3 font-semibold text-slate-50">
                {project.title}
              </h3>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-3 text-xs text-slate-300 leading-relaxed">
              {project.impact}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
