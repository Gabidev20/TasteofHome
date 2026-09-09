"use client";

import { useLanguage } from "./LanguageProvider";
import { Quote } from "lucide-react";

// Only real, verifiable testimonials go here. Ask the client for
// more before adding to this list.
const testimonials = [
  {
    name_pt: "Rebeca",
    name_en: "Rebeca",
    quote_pt:
      "Oi Klarissa, tudo bem? A comida estava muito gostosa! E a carne que você mandou bem fininha, muito saborosa, a gente gostou da carne, ficou muito bom!",
    quote_en:
      "Hi Klarissa! The food was so tasty! And the meat you sent, sliced nice and thin, was so flavorful — we loved it, it turned out great!",
  },
  {
    name_pt: "Cliente",
    name_en: "Customer",
    quote_pt:
      "A minha filha nunca tinha comido lasanha e ela adorou a lasanha, ela comeu e repetiu e gostou muito da comida.",
    quote_en:
      "My daughter had never had lasagna before, and she loved it — she went back for seconds and really enjoyed the food.",
  },
  {
    name_pt: "Cliente",
    name_en: "Customer",
    quote_pt: "Está uma delícia esse baião de dois, vocês arrasam!!",
    quote_en: "This baião de dois is delicious, you two are amazing!!",
  },
];

export function Testimonials() {
  const { t, locale } = useLanguage();

  return (
    <section id="depoimentos" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-center font-display text-3xl font-bold text-brand-terracotta">
        {t.testimonials.title}
      </h2>

      <div className="mx-auto mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, i) => (
          <figure
            key={i}
            className="flex flex-col rounded-2xl bg-white p-6 shadow-soft"
          >
            <Quote className="h-6 w-6 shrink-0 text-brand-orange" />
            <blockquote className="mt-3 flex-1 text-brand-terracotta/85">
              "{locale === "pt" ? item.quote_pt : item.quote_en}"
            </blockquote>
            <figcaption className="mt-3 text-sm font-semibold text-brand-olive">
              — {locale === "pt" ? item.name_pt : item.name_en}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
