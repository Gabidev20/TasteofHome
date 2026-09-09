"use client";

import { useLanguage } from "./LanguageProvider";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center rounded-full border border-brand-terracotta/20 bg-white/80 p-0.5 text-xs font-semibold shadow-sm backdrop-blur">
      {(["pt", "en"] as const).map((lng) => (
        <button
          key={lng}
          onClick={() => setLocale(lng)}
          aria-pressed={locale === lng}
          className={cn(
            "rounded-full px-2.5 py-1 transition-colors",
            locale === lng
              ? "bg-brand-orange text-white"
              : "text-brand-terracotta/70 hover:text-brand-terracotta"
          )}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
