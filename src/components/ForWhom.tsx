import React from "react";

const items = [
  {
    title: "Small & local businesses",
    desc: "Company websites that clearly explain what you do and make it easy to contact you.",
  },
  {
    title: "Online shops & e-commerce",
    desc: "Simple, well-structured shops focused on clarity, trust and easy checkout.",
  },
  {
    title: "Freelancers & personal brands",
    desc: "Portfolio pages, about pages and booking/contact flows that look professional.",
  },
  {
    title: "Agencies needing extra hands",
    desc: "Front-end and website implementation support for design or marketing agencies.",
  },
];

export const ForWhom: React.FC = () => {
  return (
    <section id="forwhom" className="space-y-5">
      <div className="space-y-2">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
          For whom I work
        </h2>
        <p className="text-lg font-semibold text-slate-50">
          Who usually gets the most value.
        </p>
        <p className="max-w-xl text-sm text-slate-300">
          I mostly work with small businesses, online shops and people who need
          a clear, modern and easy-to-manage website.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {items.map((item) => (
          <article
            key={item.title}
            className="flex flex-col justify-between rounded-2xl border border-slate-700/70 bg-[#0B0C11] px-5 py-4 text-sm shadow-[0_18px_45px_rgba(0,0,0,0.6)] min-h-[150px]"
          >
            <h3 className="mb-1 font-semibold text-slate-50">
              {item.title}
            </h3>
            <p className="text-xs text-slate-300">{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ForWhom;
