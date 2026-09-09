import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import { getSupabaseEnv } from "@/lib/supabase/env";
import { DeleteDishButton } from "@/components/admin/DeleteDishButton";
import { SupabaseConfigWarning } from "@/components/admin/SupabaseConfigWarning";
import { formatCAD, getErrorMessage, rethrowIfNextDynamicUsage } from "@/lib/utils";
import type { Category, Dish } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  if (!getSupabaseEnv()) {
    return (
      <div>
        <h1 className="font-display text-2xl font-bold text-brand-terracotta">
          Cardápio
        </h1>
        <div className="mt-6">
          <SupabaseConfigWarning missingEnv />
        </div>
      </div>
    );
  }

  let categories: Category[] = [];
  let dishes: Dish[] = [];

  try {
    const supabase = await createClient();

    const [{ data: categoriesData, error: categoriesError }, { data: dishesData, error: dishesError }] =
      await Promise.all([
        supabase.from("categories").select("*").order("sort_order", { ascending: true }),
        supabase.from("dishes").select("*").order("sort_order", { ascending: true }),
      ]);

    if (categoriesError) throw categoriesError;
    if (dishesError) throw dishesError;

    categories = (categoriesData ?? []) as Category[];
    dishes = (dishesData ?? []) as Dish[];
  } catch (error) {
    rethrowIfNextDynamicUsage(error);
    console.error("Falha ao carregar o painel:", error);
    return (
      <div>
        <h1 className="font-display text-2xl font-bold text-brand-terracotta">
          Cardápio
        </h1>
        <div className="mt-6">
          <SupabaseConfigWarning missingEnv={false} detail={getErrorMessage(error)} />
        </div>
      </div>
    );
  }

  const categoryById = new Map(categories.map((c) => [c.id, c]));

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-brand-terracotta">
        Cardápio
      </h1>
      <p className="mt-1 text-sm text-brand-terracotta/60">
        {dishes.length} prato(s) cadastrado(s)
      </p>

      <div className="mt-6 space-y-3">
        {dishes.map((dish) => {
          const category = dish.category_id ? categoryById.get(dish.category_id) : null;
          return (
            <div
              key={dish.id}
              className="flex items-center gap-4 rounded-xl bg-white p-3 shadow-sm"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-brand-cream">
                {dish.image_url && (
                  <Image src={dish.image_url} alt={dish.title_pt} fill className="object-cover" />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-brand-terracotta">
                  {dish.title_pt} <span className="text-brand-terracotta/40">/ {dish.title_en}</span>
                </p>
                <p className="text-xs text-brand-terracotta/60">
                  {category?.name_pt ?? "Sem categoria"} · {formatCAD(dish.price_cad)} ·{" "}
                  {dish.status === "available" ? "Disponível" : "Esgotado"}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <Link
                  href={`/admin/dishes/${dish.id}`}
                  className="rounded-full border border-brand-terracotta/20 px-3 py-1.5 text-xs font-semibold text-brand-terracotta"
                >
                  Editar
                </Link>
                <DeleteDishButton id={dish.id} title={dish.title_pt} />
              </div>
            </div>
          );
        })}

        {dishes.length === 0 && (
          <p className="rounded-xl bg-white p-6 text-center text-brand-terracotta/60 shadow-sm">
            Nenhum prato cadastrado ainda. Clique em "Novo prato" para começar.
          </p>
        )}
      </div>
    </div>
  );
}
