import React from "react";
import { useLanguage } from "../i18n";

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      id: "01",
      title: t.process.step1Title,
      desc: t.process.step1Desc,
      icon: "💬",
    },
    {
      id: "02",
      title: t.process.step2Title,
      desc: t.process.step2Desc,
      icon: "🎨",
    },
    {
      id: "03",
      title: t.process.step3Title,
      desc: t.process.step3Desc,
      icon: "⚡",
    },
    {
      id: "04",
      title: t.process.step4Title,
      desc: t.process.step4Desc,
      icon: "🚀",
    },
  ];

  return (
    <section id="process" className="relative bg-[#FAFAFA] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#0F62FE05_1px,transparent_1px),linear-gradient(to_bottom,#0F62FE05_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER - Apple style */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 text-accent-blue text-sm font-medium mb-4">
            {t.process.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-cool-50 mb-6 tracking-tight">
            {t.process.title}
          </h2>
          <p className="text-lg text-cool-400">
            {t.process.subtitle}
          </p>
        </div>

        {/* PROCESS STEPS - Timeline style */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-blue rounded-full -translate-y-1/2 z-0 opacity-20" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative z-10">
            {steps.map((s, index) => (
              <article
                key={s.id}
                className="group relative"
              >
                {/* Card */}
                <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 border border-cool-500/5">
                  {/* Step number badge */}
                  <div className="absolute -top-3 -right-3 w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-blue to-accent-cyan flex items-center justify-center text-white font-bold text-lg shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                    {s.id}
                  </div>

                  {/* Icon */}
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {s.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-cool-50 mb-3 font-heading">
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-cool-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                {/* Connector dot */}
                <div className="hidden lg:flex absolute -bottom-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-blue shadow-lg" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
