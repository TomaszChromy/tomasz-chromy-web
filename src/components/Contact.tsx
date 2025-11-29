import React, { useState } from "react";

const CONTACT_EMAIL = "tomasz.chromy@outlook.com";

const Contact: React.FC = () => {
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
        `New project inquiry from ${name || "website visitor"}`
      );

      const bodyLines = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "-"}`,
        "",
        "Project summary:",
        summary || "-",
      ];

      const body = encodeURIComponent(bodyLines.join("\n"));

      // Otwiera domyślny program pocztowy użytkownika
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
    <section
      id="contact"
      className="mt-20 scroll-mt-24 rounded-3xl border border-slate-800 bg-slate-950/60 px-6 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.8)] md:px-10"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
        Let&apos;s work together
      </p>

      <h2 className="mt-2 text-xl font-semibold text-slate-50">
        Tell me a bit about your project.
      </h2>

      <p className="mt-2 max-w-xl text-sm text-slate-300">
        I&apos;ll get back with a short proposal for the next steps. No spam,
        no pressure – just a realistic view of how I can help as a freelance
        web developer.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-5"
        >
          <div className="grid gap-3 md:grid-cols-2">
            <label className="text-xs font-medium text-slate-300">
              Name
              <input
                type="text"
                className="mt-1 w-full rounded-xl border border-slate-700/70 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/40"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>

            <label className="text-xs font-medium text-slate-300">
              E-mail
              <input
                type="email"
                className="mt-1 w-full rounded-xl border border-slate-700/70 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/40"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </div>

          <label className="text-xs font-medium text-slate-300">
            Company (optional)
            <input
              type="text"
              className="mt-1 w-full rounded-xl border border-slate-700/70 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/40"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder=""
            />
          </label>

          <label className="text-xs font-medium text-slate-300">
            Project summary
            <textarea
              className="mt-1 h-32 w-full resize-none rounded-xl border border-slate-700/70 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/40"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              required
            />
          </label>

          {status === "success" && (
            <p className="text-xs text-emerald-400">
              Your default e-mail app should now open with a pre-filled
              message. If it didn&apos;t, please copy my e-mail address from
              the right column and contact me manually.
            </p>
          )}

          {status === "error" && (
            <p className="text-xs text-rose-400">
              Something went wrong while preparing the message. Please use the
              e-mail address on the right side.
            </p>
          )}

          <button
            type="submit"
            disabled={sending}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-50 shadow-[0_14px_35px_rgba(79,70,229,0.85)] transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-70 disabled:shadow-none"
          >
            {sending ? "Preparing email..." : "Send message"}
          </button>
        </form>

        {/* DIRECT CONTACT CARD */}
        <aside className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 text-sm text-slate-200">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Direct contact
          </h3>

          <ul className="mt-3 space-y-1 text-xs text-slate-300">
            <li>
              <span className="font-semibold text-slate-200">E-mail:</span>{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-indigo-300 hover:text-indigo-200"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <span className="font-semibold text-slate-200">GitHub:</span>{" "}
              <a
                href="https://github.com/TomaszChromy"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-300 hover:text-indigo-200"
              >
                github.com/TomaszChromy
              </a>
            </li>
          </ul>

          <p className="mt-4 text-xs text-slate-400">
            I usually reply within 1–2 business days. If something is urgent,
            mention it in your message so I can prioritise it.
          </p>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
