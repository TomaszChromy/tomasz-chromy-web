import React from "react";
import heroBanner from "../assets/images/hero-web-banner.jpg";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden rounded-2xl bg-black/20"
    >
      {/* FULL-WIDTH BACKGROUND BANNER */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Freelance Web Developer Banner"
          className="h-full w-full object-cover opacity-80"
        />
      </div>

      {/* DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/20" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 md:py-32">
        <p className="mb-3 text-center text-xs tracking-[0.25em] text-indigo-300">
          TOMASZ CHROMY • FREELANCE WEB DEVELOPER
        </p>

        <h1 className="text-center text-4xl font-extrabold leading-tight text-white md:text-5xl">
          Websites that look good
          <br />
          and work for your business.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-center text-slate-300 md:text-lg">
          I'm a junior web developer and webmaster. I design and build business
          websites, small e-commerce shops and landing pages with clear
          structure, fast performance and long-term maintainability.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/40 transition hover:bg-indigo-400"
          >
            Free project discussion
          </a>
          <a
            href="#portfolio"
            className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            See my work
          </a>
        </div>

        {/* TAGS */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 text-xs text-indigo-200">
          <span className="rounded-full bg-indigo-500/20 px-4 py-1">
            Webmastering & website care
          </span>
          <span className="rounded-full bg-indigo-500/20 px-4 py-1">
            Small business & company sites
          </span>
          <span className="rounded-full bg-indigo-500/20 px-4 py-1">
            Simple e-commerce setups
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
