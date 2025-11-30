import React from "react";
import { Icon } from "./ui/Icon";
import { useLanguage } from "../i18n";

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: "code" as const,
      name: t.services.webDev,
      desc: t.services.webDevDesc,
      features: ["React / Next.js", "TypeScript", "Tailwind CSS"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "layers" as const,
      name: t.services.fullStack,
      desc: t.services.fullStackDesc,
      features: ["Node.js / Express", "PostgreSQL", "REST APIs"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: "strategy" as const,
      name: "UI/UX Design",
      desc: "User-centered design that looks great and converts. Figma prototypes to pixel-perfect code.",
      features: ["Responsive design", "Accessibility", "Design systems"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: "growth" as const,
      name: t.services.ecommerce,
      desc: t.services.ecommerceDesc,
      features: ["Shopify", "WooCommerce", "Payment integration"],
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="services" className="relative bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER - Apple style */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 text-accent-blue text-sm font-medium mb-4">
            {t.services.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-cool-50 mb-6 tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-lg text-cool-400">
            {t.services.subtitle}
          </p>
        </div>

        {/* SERVICES GRID - Modern cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={service.name}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 border border-cool-500/5"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Icon with gradient */}
              <div className={`relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                <Icon name={service.icon} size={24} />
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-xl font-semibold text-cool-50 mb-3 font-heading">
                {service.name}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-cool-400 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>

              {/* Features - pills */}
              <div className="relative z-10 flex flex-wrap gap-2">
                {service.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-navy-800 text-xs text-cool-300 font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Arrow indicator */}
              <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-cool-500/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                <svg className="w-4 h-4 text-cool-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
