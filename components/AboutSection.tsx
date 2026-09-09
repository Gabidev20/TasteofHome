"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="bg-brand-cream/60">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
        <div className="relative order-2 aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-soft md:order-1">
          <Image
            src="/images/family-maciel.png"
            alt="Família Maciel"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 500px, 100vw"
          />
        </div>

        <div className="order-1 md:order-2">
          <h2 className="font-display text-3xl font-bold text-brand-terracotta">
            {t.about.title}
          </h2>
          <p className="mt-4 text-brand-terracotta/80">{t.about.body}</p>
        </div>
      </div>
    </section>
  );
}
