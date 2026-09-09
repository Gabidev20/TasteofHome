import type { Dish } from "@/lib/types";

// Used only when Supabase is unreachable/misconfigured or the tables are
// still empty (e.g. sql/schema.sql hasn't been run yet). Mirrors the seed
// data in sql/schema.sql so the site never shows a broken/empty menu.
// Once Supabase is up and the schema is seeded, the live data takes over
// automatically — this is purely a safety net, not the source of truth.

const now = new Date(0).toISOString();

function fallbackDish(partial: Omit<Dish, "id" | "category_id" | "created_at" | "updated_at">, id: string): Dish {
  return {
    id,
    category_id: null,
    created_at: now,
    updated_at: now,
    ...partial,
  };
}

export const fallbackWeeklyDishes: Dish[] = [
  fallbackDish(
    {
      title_pt: "Peixe",
      title_en: "Fish",
      description_pt: "Acompanha arroz branco e salada fresca.",
      description_en: "Served with white rice and fresh salad.",
      price_cad: 18.0,
      image_url: "/images/marmitas.png",
      status: "available",
      sort_order: 1,
    },
    "fallback-peixe"
  ),
  fallbackDish(
    {
      title_pt: "Bife a Cavalo",
      title_en: "Bife a Cavalo (Steak & Fried Egg)",
      description_pt: "Bife grelhado com ovo, acompanha arroz, feijão e farofa.",
      description_en:
        "Grilled steak topped with a fried egg, served with rice, beans and farofa.",
      price_cad: 20.0,
      image_url: "/images/marmitas.png",
      status: "available",
      sort_order: 2,
    },
    "fallback-bife-a-cavalo"
  ),
  fallbackDish(
    {
      title_pt: "Carne Assada de Panela",
      title_en: "Pot Roast Beef",
      description_pt: "Acompanha arroz branco e purê de batata.",
      description_en: "Served with white rice and mashed potatoes.",
      price_cad: 20.0,
      image_url: "/images/marmitas.png",
      status: "available",
      sort_order: 3,
    },
    "fallback-carne-assada"
  ),
  fallbackDish(
    {
      title_pt: "Bisteca de Porco",
      title_en: "Pork Chop",
      description_pt: "Acompanha arroz, feijão e farofa.",
      description_en: "Served with rice, beans and farofa.",
      price_cad: 19.0,
      image_url: "/images/marmitas.png",
      status: "available",
      sort_order: 4,
    },
    "fallback-bisteca"
  ),
  fallbackDish(
    {
      title_pt: "Carne Moída",
      title_en: "Ground Beef",
      description_pt: "Acompanha arroz, feijão e purê de batata.",
      description_en: "Served with rice, beans and mashed potatoes.",
      price_cad: 18.0,
      image_url: "/images/marmitas.png",
      status: "available",
      sort_order: 5,
    },
    "fallback-carne-moida"
  ),
];

export const fallbackWeekendDishes: Dish[] = [
  fallbackDish(
    {
      title_pt: "Feijoada",
      title_en: "Feijoada",
      description_pt:
        "Feijão preto com linguiça defumada e carne de porco, acompanha arroz branco, farofa e couve refogada.",
      description_en:
        "Black beans with smoked sausage and pork, served with white rice, toasted cassava flour (farofa) and sautéed collard greens.",
      price_cad: 18.0,
      image_url: "/images/feijoada.png",
      status: "available",
      sort_order: 1,
    },
    "fallback-feijoada"
  ),
];
