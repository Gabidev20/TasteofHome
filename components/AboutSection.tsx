"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2">
        <div className="order-2 grid grid-cols-2 gap-4 md:order-1">
          <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl shadow-soft">
            <Image
              src="/images/family-maciel.png"
              alt="Família Maciel"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 500px, 100vw"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl shadow-soft">
            <Image
              src="/images/klarissa-robson.png"
              alt="Klarissa e Robson"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 250px, 50vw"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl shadow-soft">
            <Image
              src="/images/robson.png"
              alt="Robson na cozinha"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 250px, 50vw"
            />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-olive">
            {t.about.eyebrow}
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-brand-terracotta sm:text-4xl">
            {t.about.title}
          </h2>
          <div className="mt-5 space-y-4 text-brand-terracotta/80">
            {t.about.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-6 font-display text-xl italic text-brand-terracotta">
            {t.about.signature}
          </p>
        </div>
      </div>
    </section>
  );
}
