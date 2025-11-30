import React, { useState } from "react";
import { useLanguage } from "../i18n";

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: t.faq.q1,
      answer: t.faq.a1,
    },
    {
      question: t.faq.q2,
      answer: t.faq.a2,
    },
    {
      question: t.faq.q3,
      answer: t.faq.a3,
    },
    {
      question: t.faq.q4,
      answer: t.faq.a4,
    },
    {
      question: t.faq.q5,
      answer: t.faq.a5,
    },
    {
      question: t.faq.q6,
      answer: t.faq.a6,
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent-blue/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6">

        {/* HEADER - Apple style */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 text-accent-blue text-sm font-medium mb-4">
            {t.faq.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-cool-50 mb-6 tracking-tight">
            {t.faq.title}
          </h2>
          <p className="text-lg text-cool-400">
            {t.faq.subtitle}
          </p>
        </div>

        {/* FAQ LIST - Modern accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border overflow-hidden transition-all duration-500 ${
                openIndex === index
                  ? "border-accent-blue/20 bg-white shadow-lg"
                  : "border-cool-500/10 bg-white/50 hover:bg-white hover:shadow-md"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
                aria-expanded={openIndex === index}
              >
                <span className={`text-base font-medium pr-4 transition-colors ${
                  openIndex === index ? "text-accent-blue" : "text-cool-100 group-hover:text-cool-50"
                }`}>
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-accent-blue text-white rotate-180"
                      : "bg-navy-800 text-cool-400 group-hover:bg-accent-blue/10 group-hover:text-accent-blue"
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-cool-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
