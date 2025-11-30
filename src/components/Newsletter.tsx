import React, { useState } from "react";
import { useLanguage } from "../i18n";

export default function Newsletter() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="newsletter" className="relative bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-accent-blue via-blue-600 to-accent-cyan p-5 sm:p-8 md:p-16 shadow-2xl">

          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="relative z-10 grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center">
            {/* TEXT */}
            <div>
              <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/20 text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm">
                {t.newsletter.label}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-heading mb-3 sm:mb-4">
                {t.newsletter.title}
              </h2>
              <p className="text-white/80 mb-5 sm:mb-8 text-base sm:text-lg">
                {t.newsletter.subtitle}
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {[t.newsletter.benefit1, t.newsletter.benefit2, t.newsletter.benefit3].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 sm:gap-2 text-white/90">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xs sm:text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FORM */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white rounded-lg sm:rounded-xl text-cool-100 text-sm sm:text-base placeholder:text-cool-400 transition-all duration-200 focus:ring-4 focus:ring-white/30 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 sm:py-4 px-5 sm:px-6 rounded-lg sm:rounded-xl bg-cool-50 text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-cool-100 disabled:opacity-50"
                >
                  {loading ? t.newsletter.subscribing : t.newsletter.subscribe}
                </button>

                {status === "success" && (
                  <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/20 text-white text-xs sm:text-sm text-center backdrop-blur-sm">
                    ✓ {t.newsletter.success}
                  </div>
                )}

                {status === "error" && (
                  <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-red-500/20 text-white text-xs sm:text-sm text-center backdrop-blur-sm">
                    {t.newsletter.error}
                  </div>
                )}

                <p className="text-[10px] sm:text-xs text-white/60 text-center">
                  {t.newsletter.disclaimer}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
