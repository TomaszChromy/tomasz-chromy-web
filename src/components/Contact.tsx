import React, { useState } from "react";
import { Label } from "./ui/Badge";
import { Button } from "./ui/Button";
import { Icon } from "./ui/Icon";
import { useLanguage } from "../i18n";

const CONTACT_EMAIL = "tomasz.chromy@outlook.com";
const API_URL = import.meta.env.PROD
  ? "/api/contact"
  : "http://localhost:4000/api/contact";

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [summary, setSummary] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{name?: string; email?: string; summary?: string}>({});

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: {name?: string; email?: string; summary?: string} = {};

    if (!name.trim()) {
      newErrors.name = t.contact.errorRequired;
    }

    if (!email.trim()) {
      newErrors.email = t.contact.errorRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = t.contact.errorEmail;
    }

    if (!summary.trim()) {
      newErrors.summary = t.contact.errorRequired;
    } else if (summary.trim().length < 20) {
      newErrors.summary = t.contact.errorMinLength;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Fallback to mailto
  const openMailto = () => {
    const subject = encodeURIComponent(`Inquiry from ${name || "website visitor"}`);
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
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("idle");

    if (!validateForm()) return;

    setSending(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          message: summary.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.ok) {
        setStatus("success");
        // Reset form
        setName("");
        setEmail("");
        setCompany("");
        setSummary("");
      } else {
        console.error("API error:", data.error);
        setStatus("error");
      }
    } catch (err) {
      console.error("Network error, falling back to mailto:", err);
      // Fallback to mailto if API fails
      openMailto();
      setStatus("success");
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
            noValidate
          >
            <div className="grid gap-5 md:grid-cols-2 mb-5">
              {/* Name field */}
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-cool-300 mb-2">
                  {t.contact.formFullName} <span className="text-red-400">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className={`w-full px-4 py-3 bg-navy-800 border rounded-xl text-cool-100 text-sm placeholder:text-cool-400 transition-all duration-200 hover:border-cool-500/30 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 focus:outline-none ${
                    errors.name ? 'border-red-400' : 'border-cool-500/20'
                  }`}
                  placeholder={t.contact.formFullNamePlaceholder}
                  value={name}
                  onChange={(e) => { setName(e.target.value); setErrors(prev => ({...prev, name: undefined})); }}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-400" role="alert">{errors.name}</p>
                )}
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-cool-300 mb-2">
                  {t.contact.formEmail} <span className="text-red-400">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={`w-full px-4 py-3 bg-navy-800 border rounded-xl text-cool-100 text-sm placeholder:text-cool-400 transition-all duration-200 hover:border-cool-500/30 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 focus:outline-none ${
                    errors.email ? 'border-red-400' : 'border-cool-500/20'
                  }`}
                  placeholder={t.contact.formEmailPlaceholder}
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setErrors(prev => ({...prev, email: undefined})); }}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-400" role="alert">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Company field */}
            <div className="mb-5">
              <label htmlFor="contact-company" className="block text-sm font-medium text-cool-300 mb-2">
                {t.contact.formCompany}
              </label>
              <input
                id="contact-company"
                name="company"
                type="text"
                autoComplete="organization"
                className="w-full px-4 py-3 bg-navy-800 border border-cool-500/20 rounded-xl text-cool-100 text-sm placeholder:text-cool-400 transition-all duration-200 hover:border-cool-500/30 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 focus:outline-none"
                placeholder={t.contact.formCompanyPlaceholder}
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            {/* Project description field */}
            <div className="mb-6">
              <label htmlFor="contact-project" className="block text-sm font-medium text-cool-300 mb-2">
                {t.contact.formProject} <span className="text-red-400">*</span>
              </label>
              <textarea
                id="contact-project"
                name="project"
                className={`w-full px-4 py-3 bg-navy-800 border rounded-xl text-cool-100 text-sm placeholder:text-cool-400 transition-all duration-200 hover:border-cool-500/30 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 focus:outline-none resize-none min-h-[140px] ${
                  errors.summary ? 'border-red-400' : 'border-cool-500/20'
                }`}
                placeholder={t.contact.formProjectPlaceholder}
                value={summary}
                onChange={(e) => { setSummary(e.target.value); setErrors(prev => ({...prev, summary: undefined})); }}
                aria-invalid={!!errors.summary}
                aria-describedby={errors.summary ? "summary-error" : "project-hint"}
              />
              {errors.summary && (
                <p id="summary-error" className="mt-1 text-xs text-red-400" role="alert">{errors.summary}</p>
              )}
              <p id="project-hint" className="mt-1 text-xs text-cool-400">{t.contact.formProjectHint}</p>
            </div>

            {/* Success message */}
            {status === "success" && (
              <div className="mb-4 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t.contact.formSuccess}
              </div>
            )}

            {/* Error message */}
            {status === "error" && (
              <div className="mb-4 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p>{t.contact.formError}</p>
                  <button
                    type="button"
                    onClick={openMailto}
                    className="underline hover:no-underline mt-1"
                  >
                    {t.contact.formFallback}
                  </button>
                </div>
              </div>
            )}

            {/* Submit button */}
            <Button type="submit" variant="primary" fullWidth disabled={sending}>
              {sending ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  {t.contact.formSending}
                </span>
              ) : t.contact.formSubmit}
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
