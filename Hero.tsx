"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { buildWhatsappGenericUrl, siteConfig } from "@/lib/config/site";
import { MapPin, MessageCircle } from "lucide-react";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-brand-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="motion-safe:animate-fade-in-up">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-olive shadow-sm">
            <MapPin className="h-3.5 w-3.5" />
            {t.hero.badge}
          </span>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] text-brand-terracotta sm:text-5xl lg:text-6xl">
            {t.hero.titlePrefix}
            <span className="text-brand-orange">{t.hero.titleHighlight}</span>
            {t.hero.titleSuffix}
          </h1>

          <p className="mt-5 max-w-md text-base text-brand-terracotta/80">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
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

          <p className="mt-6 font-display text-lg italic text-brand-terracotta/60">
            {t.hero.signature}
          </p>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm md:max-w-md">
          {/* Branded watermark pattern, peeking out behind the photo card */}
          <Image
            src="/images/pattern-taste.png"
            alt=""
            aria-hidden
            width={520}
            height={925}
            className="pointer-events-none absolute -right-8 -top-8 h-[110%] w-[110%] rotate-6 object-cover opacity-70 mix-blend-multiply"
          />

          {/* Soft animated color blobs for depth */}
          <div
            aria-hidden
            className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-brand-orange/30 blur-3xl motion-safe:animate-blob"
          />
          <div
            aria-hidden
            className="absolute -bottom-8 -right-6 h-40 w-40 rounded-full bg-brand-olive/30 blur-3xl motion-safe:animate-blob [animation-delay:3s]"
          />

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-soft transition-transform duration-500 motion-safe:animate-float hover:scale-[1.02]">
            <Image
              src="/images/klarissa-robson.png"
              alt={`Klarissa e Robson — ${siteConfig.name}`}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 400px, 100vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-5 pb-4 pt-10">
              <p className="font-display text-lg italic text-white">{t.hero.photoCaption}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
