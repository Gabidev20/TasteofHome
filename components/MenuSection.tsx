"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { DishCard } from "./DishCard";
import { FeaturedDishCard } from "./FeaturedDishCard";
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
    <section id="menu" className="bg-brand-cream/60 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-olive">
            {t.menu.eyebrow}
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-brand-terracotta sm:text-4xl">
            {t.menu.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-terracotta/70">{t.menu.intro}</p>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {(["weekly", "weekend"] as const).map((slug) => (
            <button
              key={slug}
              onClick={() => setTab(slug)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                tab === slug
                  ? "bg-brand-olive text-white"
                  : "bg-white text-brand-terracotta/70 hover:bg-brand-cream"
              }`}
            >
              {t.menu[slug]}
            </button>
          ))}
        </div>

        {dishes.length > 0 ? (
          tab === "weekend" ? (
            <div className="mt-10 space-y-6">
              {dishes.map((dish) => (
                <FeaturedDishCard key={dish.id} dish={dish} />
              ))}
            </div>
          ) : (
            <>
              <div className="mt-10 flex justify-center">
                <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-terracotta/70 shadow-sm">
                  {t.menu.weeklyBadge}
                </span>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {dishes.map((dish) => (
                  <DishCard key={dish.id} dish={dish} />
                ))}
              </div>
            </>
          )
        ) : (
          <p className="mt-10 text-center text-brand-terracotta/60">{t.menu.empty}</p>
        )}
      </div>
    </section>
  );
}
