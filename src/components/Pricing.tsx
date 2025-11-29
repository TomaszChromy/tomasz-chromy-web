import React from "react";

const plans = [
  {
    name: "Hourly collaboration",
    price: "€40–€55 / hour",
    note: "Best for smaller tasks, fixes and ongoing website care.",
    points: [
      "Perfect for updates, bug fixes and improvements",
      "Ideal when scope is not yet fully defined",
      "Simple time tracking and transparent reporting",
    ],
    highlight: false,
  },
  {
    name: "Project-based",
    price: "from €800–€2 000",
    note: "For complete websites, small e-commerce shops or landing pages.",
    points: [
      "Fixed scope and price agreed before we start",
      "Design + implementation + basic SEO included",
      "Great for business websites and simple e-commerce",
    ],
    highlight: true,
  },
  {
    name: "Ongoing support",
    price: "from €600 / month",
    note: "For businesses that need a freelance web developer on call.",
    points: [
      "Reserved hours each month for your website",
      "Priority for urgent issues and fixes",
      "Regular technical checks and improvements",
    ],
    highlight: false,
  },
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="space-y-5 mt-16 md:mt-20">
      {/* HEADER */}
      <div className="space-y-2">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
          Pricing
        </h2>
        <p className="text-lg font-semibold text-slate-50">
          Clear collaboration models.
        </p>
        <p className="max-w-xl text-sm text-slate-300">
          Exact pricing depends on scope and timeline, but most projects fall
          into one of these models. After a short call I can prepare a concrete
          estimate.
        </p>
      </div>

      {/* PLANS GRID */}
      <div className="grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`flex flex-col justify-between rounded-2xl border px-5 py-4 text-sm shadow-[0_18px_45px_rgba(0,0,0,0.65)] min-h-[220px] ${
              plan.highlight
                ? "border-indigo-400 bg-gradient-to-b from-indigo-900/40 to-black"
                : "border-slate-700/80 bg-[#0B0C11]"
            }`}
          >
            <div>
              <h3 className="text-sm font-semibold text-slate-50">
                {plan.name}
              </h3>
              <p className="mt-2 text-base font-semibold text-indigo-200">
                {plan.price}
              </p>
              <p className="mt-1 text-xs text-slate-300">{plan.note}</p>
            </div>

            <ul className="mt-4 space-y-1 text-xs text-slate-200">
              {plan.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
