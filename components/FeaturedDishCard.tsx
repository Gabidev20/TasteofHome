"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { buildWhatsappOrderUrl } from "@/lib/config/site";
import { formatCAD } from "@/lib/utils";
import type { Dish } from "@/lib/types";
import { MessageCircle } from "lucide-react";

// Flagship treatment for the weekend special (e.g. Feijoada) — a larger,
// dark, split card instead of the regular grid tile.
export function FeaturedDishCard({ dish }: { dish: Dish }) {
  const { locale, t } = useLanguage();
  const title = locale === "pt" ? dish.title_pt : dish.title_en;
  const description = locale === "pt" ? dish.description_pt : dish.description_en;
  const soldOut = dish.status === "sold_out";

  return (
    <div className="overflow-hidden rounded-3xl bg-brand-terracotta shadow-soft md:grid md:grid-cols-2">
      <div className="relative aspect-[4/3] w-full bg-brand-terracotta/80 md:aspect-auto">
        {dish.image_url && (
          <Image
            src={dish.image_url}
            alt={title}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 500px, 100vw"
          />
        )}
        {soldOut && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <span className="rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-terracotta">
              {t.menu.soldOut}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-center p-8 sm:p-10">
        <span className="inline-flex w-fit items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-cream">
          {t.menu.weekendBadge}
        </span>

        <h3 className="mt-4 font-display text-3xl font-bold text-white">{title}</h3>

        {description && <p className="mt-3 text-white/80">{description}</p>}

        <span className="mt-5 font-display text-4xl font-bold text-brand-orange">
          {formatCAD(dish.price_cad)}
        </span>

        <a
          href={buildWhatsappOrderUrl(title)}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={soldOut}
          className={`mt-6 inline-flex w-fit items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-white transition-transform ${
            soldOut
              ? "pointer-events-none bg-white/20"
              : "bg-brand-orange hover:scale-[1.03]"
          }`}
        >
          <MessageCircle className="h-5 w-5" />
          {t.menu.orderButton}
        </a>
      </div>
    </div>
  );
}
