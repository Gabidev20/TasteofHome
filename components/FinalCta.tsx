"use client";

import { useLanguage } from "./LanguageProvider";
import { buildWhatsappGenericUrl } from "@/lib/config/site";

export function FinalCta() {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-br from-brand-orange to-brand-terracotta">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          {t.finalCta.title}
        </h2>
        <p className="mt-4 text-white/85">{t.finalCta.subtitle}</p>
        <a
          href={buildWhatsappGenericUrl("Olá Klarissa! Vim pelo site e gostaria de fazer um pedido.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-semibold text-brand-terracotta shadow-soft transition-transform hover:scale-[1.03]"
        >
          {t.finalCta.cta}
        </a>
      </div>
    </section>
  );
}
