"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { LogOut, Plus } from "lucide-react";

export function AdminNav() {
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <div className="border-b border-brand-cream bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/admin" className="font-display text-lg font-bold text-brand-olive">
          Painel — Taste of Home
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/dishes/new"
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-orange px-4 py-2 text-sm font-semibold text-white"
          >
            <Plus className="h-4 w-4" />
            Novo prato
          </Link>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 rounded-full border border-brand-terracotta/20 px-4 py-2 text-sm font-semibold text-brand-terracotta/80"
          >
            <LogOut className="h-4 w-4" />
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}
