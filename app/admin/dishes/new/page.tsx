import { createClient } from "@/lib/supabase/server";
import { getSupabaseEnv } from "@/lib/supabase/env";
import { DishForm } from "@/components/admin/DishForm";
import { SupabaseConfigWarning } from "@/components/admin/SupabaseConfigWarning";
import type { Category } from "@/lib/types";
import { getErrorMessage, rethrowIfNextDynamicUsage } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function NewDishPage() {
  if (!getSupabaseEnv()) {
    return (
      <div>
        <h1 className="font-display text-2xl font-bold text-brand-terracotta">
          Novo prato
        </h1>
        <div className="mt-6">
          <SupabaseConfigWarning missingEnv />
        </div>
      </div>
    );
  }

  let categories: Category[] = [];

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .order("sort_order", { ascending: true });
    if (error) throw error;
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
          <SupabaseConfigWarning missingEnv={false} detail={getErrorMessage(error)} />
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
