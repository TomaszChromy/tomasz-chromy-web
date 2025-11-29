import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Portal biznesowy B2B",
      desc: "System CMS dla firmy usługowej: artykuły, kategorie, integracje API, rozbudowane filtrowanie treści.",
      tags: "React • TypeScript • Tailwind • Node.js API",
    },
    {
      title: "Landing page premium",
      desc: "Strona sprzedażowa dla marki osobistej – dopracowany copywriting, animacje i sekcja lead-magnetów.",
      tags: "Next.js • Framer Motion • Stripe",
    },
    {
      title: "Sklep z systemem rezerwacji",
      desc: "E-commerce z kalendarzem rezerwacji, powiadomieniami i płatnościami online.",
      tags: "Next.js • Supabase • Stripe • Integracje SaaS",
    },
  ];

  return (
    <section id="portfolio" className="section">
      <h2 className="section-title">Wybrane realizacje</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.25 }}
            className="card"
          >
            <h3 className="card-title">{p.title}</h3>
            <p className="card-desc">{p.desc}</p>
            <p className="card-tags">{p.tags}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
