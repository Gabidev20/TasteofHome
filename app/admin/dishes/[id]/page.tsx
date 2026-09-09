import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { DishForm } from "@/components/admin/DishForm";
import { SupabaseConfigWarning } from "@/components/admin/SupabaseConfigWarning";
import type { Category, Dish } from "@/lib/types";
import { rethrowIfNextDynamicUsage } from "@/lib/utils";

export default async function EditDishPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let categories: Category[] = [];
  let dish: Dish | null = null;

  try {
    const supabase = await createClient();
    const [{ data: categoriesData }, { data: dishData }] = await Promise.all([
      supabase.from("categories").select("*").order("sort_order", { ascending: true }),
      supabase.from("dishes").select("*").eq("id", id).single(),
    ]);
    categories = (categoriesData ?? []) as Category[];
    dish = dishData as Dish | null;
  } catch (error) {
    rethrowIfNextDynamicUsage(error);
    console.error("Falha ao carregar prato:", error);
    return (
      <div>
        <h1 className="font-display text-2xl font-bold text-brand-terracotta">
          Editar prato
        </h1>
        <div className="mt-6">
          <SupabaseConfigWarning />
        </div>
      </div>
    );
  }

  if (!dish) notFound();

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-brand-terracotta">
        Editar prato
      </h1>
      <div className="mt-6">
        <DishForm categories={categories} dish={dish} />
      </div>
    </div>
  );
}
