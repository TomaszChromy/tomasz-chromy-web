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
      name: t.services.uiux,
      desc: t.services.uiuxDesc,
      features: [t.services.uiuxFeature1, t.services.uiuxFeature2, t.services.uiuxFeature3],
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* HEADER - Apple style */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-accent-blue/10 text-accent-blue text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            {t.services.label}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-cool-50 mb-4 sm:mb-6 tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-base sm:text-lg text-cool-400 px-2">
            {t.services.subtitle}
          </p>
        </div>

        {/* SERVICES GRID - Modern cards */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={service.name}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 border border-cool-500/5"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Icon with gradient */}
              <div className={`relative z-10 w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-4 sm:mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                <Icon name={service.icon} size={20} className="sm:hidden" />
                <Icon name={service.icon} size={24} className="hidden sm:block" />
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-lg sm:text-xl font-semibold text-cool-50 mb-2 sm:mb-3 font-heading">
                {service.name}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-cool-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                {service.desc}
              </p>

              {/* Features - pills */}
              <div className="relative z-10 flex flex-wrap gap-1.5 sm:gap-2">
                {service.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-navy-800 text-[10px] sm:text-xs text-cool-300 font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Arrow indicator */}
              <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-cool-500/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cool-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
