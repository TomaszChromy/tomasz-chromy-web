import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      id: "01",
      title: "Analiza i rozmowa",
      desc: "Poznaję Twoją firmę, cele i kontekst. Ustalamy priorytety oraz kryteria sukcesu projektu.",
    },
    {
      id: "02",
      title: "Projekt graficzny i UX",
      desc: "Tworzę makiety i layouty. Omawiamy, iterujemy i dopracowujemy detale, aż wszystko „kliknie”.",
    },
    {
      id: "03",
      title: "Implementacja i testy",
      desc: "Koduję frontend i backend, dbając o wydajność, SEO i bezpieczeństwo. Testy na różnych urządzeniach.",
    },
    {
      id: "04",
      title: "Wdrożenie i opieka",
      desc: "Wdrażam produkcyjnie, konfiguruję analitykę i zapewniam dalszy rozwój w modelu retainer.",
    },
  ];

  return (
    <section id="proces" className="section">
      <h2 className="section-title">Jak powstaje Twoja strona?</h2>

      <div className="space-y-4 mt-10">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
            className="process-card"
          >
            <div className="process-number">{s.id}</div>
            <div>
              <h3 className="process-title">{s.title}</h3>
              <p className="process-desc">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
