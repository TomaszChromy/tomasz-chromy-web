import React from "react";
import { Label } from "./ui/Badge";
import { MetricCard } from "./ui/Card";
import growthImage from "../assets/images/Grafika wzrostu.png";
import { useLanguage } from "../i18n";

const skills = [
  { name: "React / Next.js", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Node.js", icon: "🟢" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "REST API", icon: "🔗" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Git", icon: "📦" },
  { name: "Figma", icon: "🎯" },
];

const About: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { value: "3+", label: t.about.yearsExp, icon: "⏱️" },
    { value: "25+", label: t.about.projectsCompleted, icon: "🚀" },
    { value: "100%", label: t.about.satisfaction, icon: "⭐" },
  ];

  return (
    <section id="about" className="relative bg-navy-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* TWO COLUMN LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT - 3D GROWTH CHART IMAGE & STATS */}
          <div className="space-y-8 animate-fade-in-left">
            {/* 3D Growth Chart Image */}
            <div className="relative group">
              <div className="relative w-full max-w-md mx-auto lg:mx-0 transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={growthImage}
                  alt="Business Growth Chart - Success Visualization"
                  className="w-full h-auto drop-shadow-2xl animate-float"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {stats.map((stat, index) => (
                <MetricCard key={index} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>

          {/* RIGHT - TEXT CONTENT */}
          <div className="space-y-8 animate-fade-in-right">
            <div>
              <Label className="mb-4">{t.about.label}</Label>
              <h2 className="text-section-mobile md:text-section font-heading text-cool-50 mb-6">
                {t.about.title}
                <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent"> {t.about.titleHighlight}</span>
              </h2>
              <div className="space-y-4 text-cool-400">
                <p className="text-lg leading-relaxed">
                  {t.about.intro} <span className="text-cool-100 font-semibold">{t.about.introName}</span> {t.about.introText}
                </p>
                <p className="leading-relaxed">
                  {t.about.description}
                </p>
              </div>
            </div>

            {/* Skills - Apple style grid */}
            <div className="rounded-[1.5rem] border border-cool-500/10 bg-white/80 backdrop-blur-sm p-4 sm:p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cool-400 mb-4">
                Tech Stack
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-1.5 sm:gap-2 p-2 sm:p-3 rounded-xl bg-navy-800 hover:bg-accent-blue/5 hover:-translate-y-1 transition-all duration-300 group cursor-default"
                  >
                    <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                    <span className="text-[10px] sm:text-xs text-cool-300 text-center font-medium leading-tight">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
