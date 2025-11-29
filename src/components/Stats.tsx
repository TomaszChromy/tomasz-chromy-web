import React, { useEffect, useState } from "react";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

const STATS: Stat[] = [
  { label: "Lat doświadczenia w webdev", value: 8, suffix: "+" },
  { label: "Zrealizowanych projektów", value: 60, suffix: "+" },
  { label: "Technologii w stacku", value: 12, suffix: "+" },
];

export const Stats: React.FC = () => {
  const [displayValues, setDisplayValues] = useState<number[]>(
    STATS.map(() => 0)
  );

  useEffect(() => {
    let frameId: number;
    const duration = 1200;
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min(1, (time - start) / duration);
      setDisplayValues(
        STATS.map((s) => Math.round(s.value * progress))
      );
      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section
      id="stats"
      data-reveal
      className="px-4 mt-10"
    >
      <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white/80 px-4 py-5 shadow-sm shadow-black/5 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
        <div className="grid gap-4 sm:grid-cols-3">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className="flex flex-col items-center sm:items-start"
            >
              <div className="text-3xl sm:text-4xl font-bold text-fuchsia-400">
                {displayValues[index]}
                {stat.suffix}
              </div>
              <div className="mt-1 text-[11px] sm:text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 text-center sm:text-left">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
