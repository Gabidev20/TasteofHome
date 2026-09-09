import { createClient } from "@/lib/supabase/server";
import { DishForm } from "@/components/admin/DishForm";
import { SupabaseConfigWarning } from "@/components/admin/SupabaseConfigWarning";
import type { Category } from "@/lib/types";
import { rethrowIfNextDynamicUsage } from "@/lib/utils";

export default async function NewDishPage() {
  let categories: Category[] = [];

  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from("categories")
      .select("*")
      .order("sort_order", { ascending: true });
    categories = (data ?? []) as Category[];
  } catch (error) {
    rethrowIfNextDynamicUsage(error);
    console.error("Falha ao carregar categorias:", error);
    return (
      <div>
        <h1 className="font-display text-2xl font-bold text-brand-terracotta">
          Novo prato
        </h1>
        <div className="mt-6">
          <SupabaseConfigWarning />
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-brand-terracotta">
        Novo prato
      </h1>
      <div className="mt-6">
        <DishForm categories={categories} />
      </div>
    </div>
  );
}
