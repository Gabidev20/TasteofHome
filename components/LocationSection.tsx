"use client";

import { useLanguage } from "./LanguageProvider";
import { buildWhatsappGenericUrl } from "@/lib/config/site";
import { MapPin, Truck, Home, Star, MessageCircle } from "lucide-react";

const icons = [Truck, Home, Star, MessageCircle];

export function LocationSection() {
  const { t } = useLanguage();

  return (
    <section id="localizacao" className="bg-brand-terracotta">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-cream/70">
            {t.location.eyebrow}
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
            {t.location.title}
          </h2>
          <p className="mt-3 max-w-md text-white/70">{t.location.intro}</p>

          <div className="mt-8 space-y-5">
            {t.location.items.map((item, i) => {
              const Icon = icons[i];
              return (
                <div key={item.title} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-white/70">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <a
            href={buildWhatsappGenericUrl("Olá Klarissa! Gostaria de consultar disponibilidade de entrega.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 font-semibold text-white shadow-soft transition-transform hover:scale-[1.03]"
          >
            {t.location.cta}
          </a>
        </div>

        <div className="flex aspect-square items-center justify-center rounded-3xl border border-white/10 bg-white/5 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px] p-8 text-center">
          <div>
            <MapPin className="mx-auto h-10 w-10 text-brand-orange" />
            <p className="mt-4 font-display text-2xl font-bold text-white">
              {t.location.mapCaption}
            </p>
            <p className="mt-1 font-display text-lg italic text-brand-cream/80">
              {t.location.mapRegion}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
