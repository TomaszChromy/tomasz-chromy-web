import React, { useState, useEffect } from "react";
import { useLanguage } from "../i18n";

export default function CookieBanner() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 bg-slate-900/95 backdrop-blur-lg border-t border-slate-700">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <p className="text-xs sm:text-sm text-slate-300 text-center sm:text-left">
          {t.cookies.message}{" "}
          <a
            href="#privacy"
            className="text-indigo-400 hover:text-indigo-300 underline"
          >
            {t.cookies.privacyPolicy}
          </a>
          .
        </p>
        <div className="flex gap-2 sm:gap-3">
          <button
            onClick={declineCookies}
            className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-slate-400 hover:text-slate-200 transition"
          >
            {t.cookies.decline}
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white bg-indigo-500 rounded-full hover:bg-indigo-400 transition shadow-md shadow-indigo-500/30"
          >
            {t.cookies.accept}
          </button>
        </div>
      </div>
    </div>
  );
}

