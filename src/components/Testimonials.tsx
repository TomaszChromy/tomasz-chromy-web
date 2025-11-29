import { motion } from "framer-motion";

export default function Testimonials() {
  const items = [
    {
      quote:
        "Tomasz poukładał nam stronę firmową i portal produktowy tak, że marketing wreszcie ma narzędzie, a nie przeszkodę.",
      author: "Właściciel software house’u",
      role: "CTO, branża IT",
    },
    {
      quote:
        "Projekt powstał szybko, bez chaosu i niedomówień. Jasny proces, propozycje rozwiązań zamiast problemów.",
      author: "Założyciel SaaS",
      role: "Founder, produkt B2B",
    },
    {
      quote:
        "Nowa strona zaczęła generować zapytania praktycznie od pierwszego tygodnia. Prosty panel i realne wyniki.",
      author: "Właściciel małej firmy",
      role: "Usługi lokalne",
    },
  ];

  return (
    <section id="opinie" className="section">
      <h2 className="section-title">Z kim już współpracowałem</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {items.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.25 }}
            className="testimonial-card"
          >
            <p className="testimonial-quote">„{t.quote}”</p>
            <p className="testimonial-author">{t.author}</p>
            <p className="testimonial-role">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
