import React, { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Start" },
  { id: "uslugi", label: "Usługi" },
  { id: "portfolio", label: "Portfolio" },
  { id: "proces", label: "Proces" },
  { id: "opinie", label: "Opinie" },
  { id: "o-mnie", label: "O mnie" },
  { id: "blog", label: "Blog" },
  { id: "kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          setActive(sec.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border border-slate-200 bg-white/80 shadow-black/5 
dark:border-white/10 dark:bg-slate-900/40
">
      <div className="max-w-6xl mx-auto py-3 px-6 flex justify-center gap-6 text-sm">
        {sections.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`transition ${
              active === item.id
                ? "text-fuchsia-400 font-semibold"
                : "text-gray-300 hover:text-white"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
