import React from "react";
import { useLanguage } from "../i18n";

export const ForWhom: React.FC = () => {
  const { t } = useLanguage();

  const items = [
    {
      title: t.forWhom.startups,
      desc: t.forWhom.startupsDesc,
      icon: "🚀",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: t.forWhom.smallBusiness,
      desc: t.forWhom.smallBusinessDesc,
      icon: "🏪",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: t.forWhom.agencies,
      desc: t.forWhom.agenciesDesc,
      icon: "🎨",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: t.forWhom.entrepreneurs,
      desc: t.forWhom.entrepreneursDesc,
      icon: "💡",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="forwhom" className="relative bg-[#FAFAFA] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-accent-blue/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-accent-cyan/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER - Apple style */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 text-accent-blue text-sm font-medium mb-4">
            {t.forWhom.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-cool-50 mb-6 tracking-tight">
            {t.forWhom.title}
          </h2>
          <p className="text-lg text-cool-400">
            {t.forWhom.subtitle}
          </p>
        </div>

        {/* GRID - Modern cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 border border-cool-500/5"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Icon with gradient background */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-3xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-cool-50 mb-3 font-heading">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-cool-400 leading-relaxed">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
