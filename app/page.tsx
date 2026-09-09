import { createClient } from "@/lib/supabase/server";
import { fallbackWeeklyDishes, fallbackWeekendDishes } from "@/lib/data/fallbackMenu";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { AboutSection } from "@/components/AboutSection";
import { Testimonials } from "@/components/Testimonials";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";
import type { Dish } from "@/lib/types";
import { rethrowIfNextDynamicUsage } from "@/lib/utils";

const fallbackMenu = {
  weeklyDishes: fallbackWeeklyDishes,
  weekendDishes: fallbackWeekendDishes,
};

// Supabase being unreachable/misconfigured, or the tables simply not being
// seeded yet, should never turn into a 500 for visitors — fall back to the
// known menu instead. Real data takes over automatically once Supabase is
// reachable and has rows.
async function getDishes() {
  try {
    const supabase = await createClient();

    const { data: categories, error: categoriesError } = await supabase
      .from("categories")
      .select("id, slug");

    if (categoriesError) throw categoriesError;

    const { data: dishes, error: dishesError } = await supabase
      .from("dishes")
      .select("*")
      .order("sort_order", { ascending: true });

    if (dishesError) throw dishesError;

    const weeklyId = categories?.find((c) => c.slug === "weekly")?.id;
    const weekendId = categories?.find((c) => c.slug === "weekend")?.id;

    const all = (dishes ?? []) as Dish[];

    const weeklyDishes = all.filter((d) => d.category_id === weeklyId);
    const weekendDishes = all.filter((d) => d.category_id === weekendId);

    if (weeklyDishes.length === 0 && weekendDishes.length === 0) {
      return fallbackMenu;
    }

    return { weeklyDishes, weekendDishes };
  } catch (error) {
    rethrowIfNextDynamicUsage(error);
    console.error("Não foi possível carregar o cardápio do Supabase, usando o cardápio padrão:", error);
    return fallbackMenu;
  }
}

export default async function HomePage() {
  const { weeklyDishes, weekendDishes } = await getDishes();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <MenuSection weeklyDishes={weeklyDishes} weekendDishes={weekendDishes} />
        <AboutSection />
        <Testimonials />
        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}
