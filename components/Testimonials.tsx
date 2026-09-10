"use client";

import { useLanguage } from "./LanguageProvider";
import { Quote, Star } from "lucide-react";

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
    <section id="depoimentos" className="bg-brand-cream/60 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-olive">
            {t.testimonials.eyebrow}
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-brand-terracotta sm:text-4xl">
            {t.testimonials.title}
          </h2>
          <p className="mt-3 text-brand-terracotta/70">{t.testimonials.subtitle}</p>
        </div>

        <div className="mx-auto mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => {
            const name = locale === "pt" ? item.name_pt : item.name_en;
            return (
              <figure
                key={i}
                className="relative flex flex-col rounded-2xl bg-white p-6 shadow-soft"
              >
                <Quote className="absolute right-5 top-5 h-8 w-8 text-brand-orange/20" />
                <div className="flex gap-0.5 text-brand-orange">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star key={star} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-3 flex-1 text-brand-terracotta/85">
                  "{locale === "pt" ? item.quote_pt : item.quote_en}"
                </blockquote>
                <div className="mt-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-olive/15 font-display font-bold text-brand-olive">
                    {name.charAt(0)}
                  </span>
                  <div>
                    <figcaption className="font-semibold text-brand-terracotta">
                      {name}
                    </figcaption>
                    <p className="text-xs text-brand-terracotta/50">
                      {t.testimonials.roleGeneric}
                    </p>
                  </div>
                </div>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
