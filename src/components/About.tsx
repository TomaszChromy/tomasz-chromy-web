import React from "react";

const About: React.FC = () => {
  return (
    <div>
      <p className="section-label">O mnie</p>
      <h2 className="section-title mt-3">Kim jestem i jak pracuję</h2>

      <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]">
        <div className="space-y-4 text-[15px] text-slate-600 dark:text-slate-300">
          <p>
            Nazywam się <span className="font-semibold">Tomasz Chromy</span>.
            Tworzę strony internetowe, portale i systemy WWW, które łączą dobry
            design z przejrzystą architekturą informacji i solidnym kodem.
          </p>
          <p>
            Pracuję jak małe studio: od koncepcji i warsztatów, przez projekt
            graficzny, po wdrożenie. Wspiera mnie asystent AI —{" "}
            <span className="font-semibold">Bartosz</span> — który pomaga
            pilnować architektury, jakości kodu i dokumentacji.
          </p>
          <p>
            Stawiam na spokojną, poukładaną współpracę: jasny proces, konkretne
            terminy, brak „magii pod maską” i rozwiązań, których nie będziesz w
            stanie później utrzymać.
          </p>
        </div>

        <aside className="card-surface">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500">
            W skrócie
          </p>
          <ul className="mt-4 space-y-2 text-[14px] text-slate-700 dark:text-slate-200">
            <li>• Strony i portale WWW dla firm i marek osobistych</li>
            <li>• Projekt + wdrożenie + optymalizacja wydajności</li>
            <li>• Skupienie na SEO, UX i konwersji</li>
            <li>• Możliwość stałej opieki technicznej</li>
            <li>• Komunikacja bez żargonu technicznego</li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default About;
