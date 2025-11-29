import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#05050A] text-slate-50 antialiased">
      {/* STICKY NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-[#05050A]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* LOGO + ROLE */}
          <div className="flex items-center gap-4">
            <div className="h-9 w-9 rounded-xl bg-indigo-600/20" />
            <div className="flex flex-col">
              <span className="text-[13px] font-semibold tracking-wide">
                TOMASZ CHROMY
              </span>
              <span className="text-[11px] text-slate-400">
                Freelance Web Developer &amp; Junior Programmer
              </span>
            </div>
          </div>

          {/* NAVIGATION LINKS */}
          <ul className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <li>
              <a href="#hero" className="transition hover:text-slate-100">
                Home
              </a>
            </li>
            <li>
              <a href="#forwhom" className="transition hover:text-slate-100">
                For whom I work
              </a>
            </li>
            <li>
              <a href="#services" className="transition hover:text-slate-100">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="transition hover:text-slate-100">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#pricing" className="transition hover:text-slate-100">
                Pricing
              </a>
            </li>
            <li>
              <a href="#blog" className="transition hover:text-slate-100">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="transition hover:text-slate-100">
                Contact
              </a>
            </li>
          </ul>

          {/* CTA BUTTON */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="rounded-full bg-indigo-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-md shadow-indigo-500/40 transition hover:bg-indigo-400"
            >
              Schedule consultation
            </a>
          </div>
        </nav>
      </header>

      {/* CONTENT */}
      <main className="mx-auto max-w-6xl px-6 pt-8 pb-16">{children}</main>

      {/* FOOTER */}
      <footer className="mt-20 border-t border-white/5 px-6 py-6 text-center text-[11px] text-slate-400">
        <p>
          © {new Date().getFullYear()} Tomasz Chromy – Freelance Web Developer
          &amp; Junior Programmer
        </p>

        {/* AUTHOR SIGNATURE */}
        <p className="mt-1 italic text-[11px] text-slate-300">
          POWERED BY TOMASZ CHROMY
        </p>

        {/* DISCLAIMER — EN */}
        <p className="mt-1 text-[10px] text-slate-500">
          This website was created for training purposes only and does not
          constitute a commercial offer.
        </p>

        {/* DISCLAIMER — PL */}
        <p className="text-[10px] text-slate-500">
          Strona została stworzona w celach szkoleniowych i nie stanowi oferty
          handlowej.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
