import React from "react";

const services = [
  {
    name: "Business websites",
    desc: "Design and implementation of modern company websites with clear structure, contact options and essential SEO.",
  },
  {
    name: "Simple e-commerce shops",
    desc: "Implementation of small online stores with product pages, cart and checkout — focused on clarity, trust and usability.",
  },
  {
    name: "Webmastering & website care",
    desc: "Ongoing updates, content changes, security checks and small fixes so your website stays healthy and up to date.",
  },
  {
    name: "Landing pages for campaigns",
    desc: "Focused one-page promotional or sales landing pages prepared for ad traffic, tracking and conversion.",
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="space-y-5 mt-16 md:mt-20">
      {/* HEADER */}
      <div className="space-y-2">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
          Services
        </h2>

        <p className="text-lg font-semibold text-slate-50">
          How I can help your business.
        </p>

        <p className="max-w-xl text-sm text-slate-300">
          I focus on practical, maintainable websites — fast, readable and easy
          to update. My goal is to build solutions that support your real
          business needs, not just look nice in a portfolio.
        </p>
      </div>

      {/* LIST OF SERVICES */}
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.name}
            className="rounded-2xl border border-slate-700/70 bg-[#0B0C11] px-5 py-4 text-sm shadow-[0_18px_45px_rgba(0,0,0,0.55)] min-h-[150px] flex flex-col justify-between"
          >
            <h3 className="text-sm font-semibold text-slate-50">
              {service.name}
            </h3>

            <p className="mt-2 text-xs text-slate-300 leading-relaxed">
              {service.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
