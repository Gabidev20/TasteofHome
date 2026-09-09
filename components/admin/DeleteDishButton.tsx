"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Trash2 } from "lucide-react";

export function DeleteDishButton({ id, title }: { id: string; title: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (!window.confirm(`Excluir "${title}"? Essa ação não pode ser desfeita.`)) {
      return;
    }

    setLoading(true);
    const supabase = createClient();
    await supabase.from("dishes").delete().eq("id", id);
    setLoading(false);
    router.refresh();
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="inline-flex items-center gap-1 rounded-full border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-600 transition-opacity disabled:opacity-50"
    >
      <Trash2 className="h-3.5 w-3.5" />
      Excluir
    </button>
  );
}
