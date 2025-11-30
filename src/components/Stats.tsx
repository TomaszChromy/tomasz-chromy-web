import React, { useEffect, useState, useRef } from "react";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
};

const STATS: Stat[] = [
  { label: "Years of experience", value: 3, suffix: "+" },
  { label: "Projects completed", value: 25, suffix: "+" },
  { label: "Happy clients", value: 15, suffix: "+" },
  { label: "Technologies in stack", value: 12, suffix: "+" },
];

export const Stats: React.FC = () => {
  const [displayValues, setDisplayValues] = useState<number[]>(
    STATS.map(() => 0)
  );
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let frameId: number;
          const duration = 1500;
          const start = performance.now();

          const animate = (time: number) => {
            const progress = Math.min(1, (time - start) / duration);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            setDisplayValues(
              STATS.map((s) => Math.round(s.value * eased))
            );
            if (progress < 1) {
              frameId = requestAnimationFrame(animate);
            }
          };

          frameId = requestAnimationFrame(animate);
          return () => cancelAnimationFrame(frameId);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="relative bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-[2rem] border border-cool-500/10 bg-gradient-to-br from-accent-blue/5 to-accent-cyan/5 p-8 md:p-12 shadow-card">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center group"
              >
                <div className="text-4xl md:text-5xl font-bold font-heading bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-110">
                  {stat.prefix}{displayValues[index]}{stat.suffix}
                </div>
                <div className="mt-2 text-sm text-cool-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
