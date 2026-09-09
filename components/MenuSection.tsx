"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { DishCard } from "./DishCard";
import type { CategorySlug, Dish } from "@/lib/types";

export function MenuSection({
  weeklyDishes,
  weekendDishes,
}: {
  weeklyDishes: Dish[];
  weekendDishes: Dish[];
}) {
  const { t } = useLanguage();
  const [tab, setTab] = useState<CategorySlug>("weekly");

  const dishes = tab === "weekly" ? weeklyDishes : weekendDishes;

  return (
    <section id="menu" className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold text-brand-terracotta">
          {t.menu.title}
        </h2>
        <p className="mt-2 text-brand-terracotta/70">{t.menu.subtitle}</p>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {(["weekly", "weekend"] as const).map((slug) => (
          <button
            key={slug}
            onClick={() => setTab(slug)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              tab === slug
                ? "bg-brand-olive text-white"
                : "bg-brand-cream text-brand-terracotta/70 hover:bg-brand-cream/70"
            }`}
          >
            {t.menu[slug]}
          </button>
        ))}
      </div>

      {dishes.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-center text-brand-terracotta/60">
          {t.menu.empty}
        </p>
      )}
    </section>
  );
}
