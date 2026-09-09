"use client";

import { useLanguage } from "./LanguageProvider";
import { CalendarCheck, ChefHat, MessageCircle, Truck } from "lucide-react";

const icons = [MessageCircle, CalendarCheck, ChefHat, Truck];

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="como-funciona" className="bg-brand-olive/5">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-brand-terracotta">
            {t.howItWorks.title}
          </h2>
          <p className="mt-2 text-brand-terracotta/70">{t.howItWorks.subtitle}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.howItWorks.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <div
                key={step.title}
                className="rounded-2xl bg-white p-6 text-center shadow-soft"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-brand-terracotta">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm text-brand-terracotta/70">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
