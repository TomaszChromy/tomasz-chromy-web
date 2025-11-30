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
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-white/10 shadow-lg">
      <div className="max-w-6xl mx-auto py-3 px-6 flex justify-center gap-6 text-sm">
        {sections.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`transition font-medium ${
              active === item.id
                ? "text-accent-cyan font-semibold"
                : "text-white/90 hover:text-accent-cyan"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
