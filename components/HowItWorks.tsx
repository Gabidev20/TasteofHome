"use client";

import { useLanguage } from "./LanguageProvider";
import { CalendarCheck, ChefHat, MessageCircle, Truck } from "lucide-react";

const icons = [MessageCircle, CalendarCheck, ChefHat, Truck];

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="como-funciona" className="bg-brand-terracotta">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-cream/70">
          {t.howItWorks.eyebrow}
        </span>
        <h2 className="mt-2 max-w-xl font-display text-3xl font-bold text-white sm:text-4xl">
          {t.howItWorks.title}
        </h2>
        <p className="mt-3 max-w-xl text-white/70">{t.howItWorks.subtitle}</p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {t.howItWorks.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <div
                key={step.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-4xl font-bold text-brand-orange">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon className="h-6 w-6 text-white/40" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm text-white/70">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
