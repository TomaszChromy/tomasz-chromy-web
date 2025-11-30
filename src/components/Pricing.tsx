import React from "react";
import { useLanguage } from "../i18n";

export const Pricing: React.FC = () => {
  const { t } = useLanguage();

  const plans = [
    {
      name: t.pricing.consultation,
      price: t.pricing.consultationPrice,
      period: t.pricing.consultationPeriod,
      note: t.pricing.consultationNote,
      points: t.pricing.consultationPoints,
      highlight: false,
      cta: t.pricing.consultationCta,
      ctaLink: "#contact",
    },
    {
      name: t.pricing.project,
      price: t.pricing.projectPrice,
      period: t.pricing.projectPeriod,
      note: t.pricing.projectNote,
      points: t.pricing.projectPoints,
      highlight: true,
      badge: t.pricing.projectBadge,
      cta: t.pricing.projectCta,
      ctaLink: "#contact",
    },
    {
      name: t.pricing.partnership,
      price: t.pricing.partnershipPrice,
      period: t.pricing.partnershipPeriod,
      note: t.pricing.partnershipNote,
      points: t.pricing.partnershipPoints,
      highlight: false,
      cta: t.pricing.partnershipCta,
      ctaLink: "#contact",
    },
  ];

  return (
    <section id="pricing" className="relative bg-[#FAFAFA] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-accent-blue/5 via-transparent to-accent-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* HEADER - Apple style */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-accent-blue/10 text-accent-blue text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            {t.pricing.label}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-cool-50 mb-4 sm:mb-6 tracking-tight">
            {t.pricing.title}
          </h2>
          <p className="text-base sm:text-lg text-cool-400 px-2">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* PLANS GRID - Modern cards */}
        <div className="grid gap-5 sm:gap-8 md:grid-cols-3 items-start">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-2xl sm:rounded-3xl p-5 sm:p-8 transition-all duration-500 ease-out hover:-translate-y-2 ${
                plan.highlight
                  ? "bg-gradient-to-br from-accent-blue to-accent-cyan text-white shadow-2xl md:scale-105 z-10 order-first md:order-none"
                  : "bg-white border border-cool-500/5 shadow-lg hover:shadow-2xl"
              }`}
            >
              {/* Badge for highlighted plan */}
              {plan.badge && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2">
                  <span className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white text-accent-blue text-xs sm:text-sm font-semibold shadow-lg whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3 className={`text-base sm:text-lg font-semibold font-heading mb-1.5 sm:mb-2 ${plan.highlight ? "text-white/90" : "text-cool-100"}`}>
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-3 sm:mb-4">
                <span className={`text-2xl sm:text-4xl font-bold font-heading ${plan.highlight ? "text-white" : "text-cool-50"}`}>
                  {plan.price}
                </span>
                <span className={`text-xs sm:text-sm ml-1.5 sm:ml-2 ${plan.highlight ? "text-white/70" : "text-cool-400"}`}>/ {plan.period}</span>
              </div>

              {/* Note */}
              <p className={`text-xs sm:text-sm mb-5 sm:mb-8 ${plan.highlight ? "text-white/80" : "text-cool-400"}`}>{plan.note}</p>

              {/* Features */}
              <ul className="space-y-2.5 sm:space-y-4 mb-5 sm:mb-8 flex-grow">
                {plan.points.map((point, i) => (
                  <li key={i} className={`flex items-start gap-2 sm:gap-3 text-xs sm:text-sm ${plan.highlight ? "text-white/90" : "text-cool-300"}`}>
                    <svg className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-white" : "text-accent-blue"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.ctaLink}
                className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-medium text-center text-sm sm:text-base transition-all duration-300 ${
                  plan.highlight
                    ? "bg-white text-accent-blue hover:bg-white/90 shadow-lg"
                    : "bg-accent-blue text-white hover:bg-accent-blue/90"
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
