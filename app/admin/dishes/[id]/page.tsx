import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getSupabaseEnv } from "@/lib/supabase/env";
import { DishForm } from "@/components/admin/DishForm";
import { SupabaseConfigWarning } from "@/components/admin/SupabaseConfigWarning";
import type { Category, Dish } from "@/lib/types";
import { getErrorMessage, rethrowIfNextDynamicUsage } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function EditDishPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!getSupabaseEnv()) {
    return (
      <div>
        <h1 className="font-display text-2xl font-bold text-brand-terracotta">
          Editar prato
        </h1>
        <div className="mt-6">
          <SupabaseConfigWarning missingEnv />
        </div>
      </div>
    );
  }

  let categories: Category[] = [];
  let dish: Dish | null = null;

  try {
    const supabase = await createClient();
    const [{ data: categoriesData, error: categoriesError }, { data: dishData, error: dishError }] =
      await Promise.all([
        supabase.from("categories").select("*").order("sort_order", { ascending: true }),
        supabase.from("dishes").select("*").eq("id", id).single(),
      ]);
    if (categoriesError) throw categoriesError;
    // PGRST116 = "no rows" from .single() — that's a legitimate 404 for an
    // unknown id, not a Supabase failure, so let it fall through below.
    if (dishError && dishError.code !== "PGRST116") throw dishError;
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
          <SupabaseConfigWarning missingEnv={false} detail={getErrorMessage(error)} />
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
