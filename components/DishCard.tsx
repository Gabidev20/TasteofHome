"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { buildWhatsappOrderUrl } from "@/lib/config/site";
import { formatCAD } from "@/lib/utils";
import type { Dish } from "@/lib/types";
import { MessageCircle } from "lucide-react";

export function DishCard({ dish }: { dish: Dish }) {
  const { locale, t } = useLanguage();
  const title = locale === "pt" ? dish.title_pt : dish.title_en;
  const description = locale === "pt" ? dish.description_pt : dish.description_en;
  const soldOut = dish.status === "sold_out";

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft transition-transform hover:-translate-y-1">
      <div className="relative aspect-[4/3] w-full bg-brand-cream">
        {dish.image_url && (
          <Image
            src={dish.image_url}
            alt={title}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 320px, 100vw"
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

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold text-brand-terracotta">
          {title}
        </h3>

        {description && (
          <p className="mt-1.5 flex-1 text-sm text-brand-terracotta/70">
            {description}
          </p>
        )}

        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="whitespace-nowrap font-display text-lg font-semibold text-brand-olive">
            {formatCAD(dish.price_cad)}
          </span>

          <a
            href={buildWhatsappOrderUrl(title)}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={soldOut}
            className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white transition-transform ${
              soldOut
                ? "pointer-events-none bg-gray-300"
                : "bg-brand-orange hover:scale-[1.03]"
            }`}
          >
            <MessageCircle className="h-4 w-4" />
            {t.menu.orderButton}
          </a>
        </div>
      </div>
    </div>
  );
}
