"use client";

import { useLanguage } from "./LanguageProvider";
import { CheckCircle2 } from "lucide-react";

export function InfoStrip() {
  const { t } = useLanguage();

  return (
    <div className="bg-brand-orange">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 px-4 py-5 text-sm font-semibold text-white sm:grid-cols-2 lg:grid-cols-4">
        {t.infoStrip.map((item) => (
          <div key={item.text} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
