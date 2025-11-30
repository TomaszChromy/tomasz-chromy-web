import React, { useState } from "react";
import { Label } from "./ui/Badge";
import { Button } from "./ui/Button";
import { Icon } from "./ui/Icon";
import { useLanguage } from "../i18n";

const CONTACT_EMAIL = "tomasz.chromy@outlook.com";

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [summary, setSummary] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("idle");
    setSending(true);

    try {
      const subject = encodeURIComponent(
        `Inquiry from ${name || "website visitor"}`
      );

      const bodyLines = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "-"}`,
        "",
        "Project description:",
        summary || "-",
      ];

      const body = encodeURIComponent(bodyLines.join("\n"));
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      setStatus("success");
    } catch (err) {
      console.error("Mailto error:", err);
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative bg-[#FAFAFA] overflow-hidden">
      {/* Background decorations - Apple style */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-400/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* HEADER - Apple style */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-accent-blue/10 text-accent-blue text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            {t.contact.label}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-cool-50 mb-4 sm:mb-6 tracking-tight">
            {t.contact.title}
            <span className="block bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">
              {t.contact.titleHighlight}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-cool-400 px-2">
            {t.contact.subtitle}
          </p>
        </div>

        {/* CONTACT GRID */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 sm:gap-8">

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl sm:rounded-[1.5rem] border border-cool-500/10 bg-white p-5 sm:p-8 shadow-card animate-fade-in-left"
          >
            <div className="grid gap-5 md:grid-cols-2 mb-5">
              <div>
                <label className="block text-sm font-medium text-cool-300 mb-2">
                  {t.contact.formFullName}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-navy-800 border border-cool-500/20 rounded-xl text-cool-100 text-sm placeholder:text-cool-400 transition-all duration-200 hover:border-cool-500/30 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 focus:outline-none"
                  placeholder={t.contact.formFullNamePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-cool-300 mb-2">
                  {t.contact.formEmail}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-navy-800 border border-cool-500/20 rounded-xl text-cool-100 text-sm placeholder:text-cool-400 transition-all duration-200 hover:border-cool-500/30 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 focus:outline-none"
                  placeholder={t.contact.formEmailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-cool-300 mb-2">
                {t.contact.formCompany}
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-navy-800 border border-cool-500/20 rounded-xl text-cool-100 text-sm placeholder:text-cool-400 transition-all duration-200 hover:border-cool-500/30 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 focus:outline-none"
                placeholder={t.contact.formCompanyPlaceholder}
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-cool-300 mb-2">
                {t.contact.formProject}
              </label>
              <textarea
                className="w-full px-4 py-3 bg-navy-800 border border-cool-500/20 rounded-xl text-cool-100 text-sm placeholder:text-cool-400 transition-all duration-200 hover:border-cool-500/30 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 focus:outline-none resize-none min-h-[140px]"
                placeholder={t.contact.formProjectPlaceholder}
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                required
              />
            </div>

            {status === "success" && (
              <div className="mb-4 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm">
                {t.contact.formSuccess}
              </div>
            )}

            {status === "error" && (
              <div className="mb-4 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                {t.contact.formError}
              </div>
            )}

            <Button type="submit" variant="primary" fullWidth disabled={sending}>
              {sending ? t.contact.formSending : t.contact.formSubmit}
            </Button>
          </form>

          {/* CONTACT INFO */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in-right">
            {/* Direct contact card */}
            <div className="rounded-2xl sm:rounded-[1.5rem] border border-cool-500/10 bg-white p-5 sm:p-8 shadow-card">
              <Label className="mb-3 sm:mb-4">{t.contact.directContact}</Label>

              <div className="space-y-3 sm:space-y-4">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-navy-800 border border-cool-500/10 hover:border-accent-blue/30 hover:shadow-card transition-all duration-300 group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue flex-shrink-0">
                    <Icon name="mail" size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs text-cool-400">Email</p>
                    <p className="text-xs sm:text-sm text-cool-100 group-hover:text-accent-blue transition-colors truncate">{CONTACT_EMAIL}</p>
                  </div>
                </a>

                <a
                  href="https://github.com/TomaszChromy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-navy-800 border border-cool-500/10 hover:border-accent-blue/30 hover:shadow-card transition-all duration-300 group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue flex-shrink-0">
                    <Icon name="code" size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs text-cool-400">GitHub</p>
                    <p className="text-xs sm:text-sm text-cool-100 group-hover:text-accent-blue transition-colors truncate">github.com/TomaszChromy</p>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/tomasz.foreveryoung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-navy-800 border border-cool-500/10 hover:border-accent-blue/30 hover:shadow-card transition-all duration-300 group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs text-cool-400">Facebook</p>
                    <p className="text-xs sm:text-sm text-cool-100 group-hover:text-accent-blue transition-colors truncate">Tomasz Chromy</p>
                  </div>
                </a>
              </div>

              <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-cool-400">
                {t.contact.responseTime}
              </p>
            </div>

            {/* Calendly card */}
            <div className="rounded-2xl sm:rounded-[1.5rem] border border-accent-blue/20 bg-gradient-to-br from-accent-blue/5 to-accent-cyan/5 p-5 sm:p-8 shadow-card">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-accent-blue/20 flex items-center justify-center text-accent-blue flex-shrink-0">
                  <Icon name="calendar" size={18} />
                </div>
                <div>
                  <p className="font-semibold text-cool-100 text-sm sm:text-base">{t.contact.scheduleCall}</p>
                  <p className="text-[10px] sm:text-xs text-cool-400">{t.contact.scheduleFree}</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-cool-400 mb-3 sm:mb-4">
                {t.contact.scheduleDesc}
              </p>

              <Button
                as="a"
                href="https://calendly.com/your-calendly-username"
                variant="secondary"
                fullWidth
              >
                {t.contact.scheduleBtn}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
