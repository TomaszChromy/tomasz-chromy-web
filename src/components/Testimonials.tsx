import React from "react";
import testimonial1 from "../assets/images/testimonial-1.jpg";
import testimonial2 from "../assets/images/testimonial-2.jpg";
import testimonial3 from "../assets/images/testimonial-3.jpg";
import { useLanguage } from "../i18n";

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t.testimonials.quote1,
      author: "Michael K.",
      role: t.testimonials.role1,
      image: testimonial2,
    },
    {
      quote: t.testimonials.quote2,
      author: "Anna W.",
      role: t.testimonials.role2,
      image: testimonial1,
    },
    {
      quote: t.testimonials.quote3,
      author: "Peter S.",
      role: t.testimonials.role3,
      image: testimonial3,
    },
  ];

  return (
    <section id="testimonials" className="relative bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-accent-blue/5 via-transparent to-accent-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER - Apple style */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 text-accent-blue text-sm font-medium mb-4">
            {t.testimonials.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-cool-50 mb-6 tracking-tight">
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-cool-400">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* TESTIMONIALS GRID - Modern cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 border border-cool-500/5"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              {/* Quote text */}
              <p className="text-cool-300 leading-relaxed mb-8 text-lg">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <p className="font-semibold text-cool-50">{t.author}</p>
                  <p className="text-sm text-cool-400">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
