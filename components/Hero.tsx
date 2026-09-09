"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { buildWhatsappGenericUrl, siteConfig } from "@/lib/config/site";
import { MapPin, MessageCircle } from "lucide-react";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-brand-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-olive shadow-sm">
            <MapPin className="h-3.5 w-3.5" />
            {t.hero.badge}
          </span>

          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-brand-terracotta sm:text-5xl">
            {t.hero.title}
          </h1>

          <p className="mt-4 max-w-md text-base text-brand-terracotta/80">
            {t.hero.subtitle}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={buildWhatsappGenericUrl("Olá Klarissa! Vim pelo site e gostaria de fazer um pedido.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 font-semibold text-white shadow-soft transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="h-5 w-5" />
              {t.hero.cta}
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-olive px-6 py-3 font-semibold text-brand-olive transition-colors hover:bg-brand-olive hover:text-white"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] shadow-soft md:max-w-md">
          <Image
            src="/images/klarissa-robson.png"
            alt={`Klarissa e Robson — ${siteConfig.name}`}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 768px) 400px, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
