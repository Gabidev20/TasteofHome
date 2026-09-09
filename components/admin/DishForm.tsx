"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import type { Category, Dish } from "@/lib/types";
import { Upload } from "lucide-react";

interface DishFormProps {
  categories: Category[];
  dish?: Dish;
}

export function DishForm({ categories, dish }: DishFormProps) {
  const router = useRouter();
  const isEditing = Boolean(dish);

  const [titlePt, setTitlePt] = useState(dish?.title_pt ?? "");
  const [titleEn, setTitleEn] = useState(dish?.title_en ?? "");
  const [descriptionPt, setDescriptionPt] = useState(dish?.description_pt ?? "");
  const [descriptionEn, setDescriptionEn] = useState(dish?.description_en ?? "");
  const [priceCad, setPriceCad] = useState(dish?.price_cad?.toString() ?? "");
  const [categoryId, setCategoryId] = useState(dish?.category_id ?? categories[0]?.id ?? "");
  const [status, setStatus] = useState<Dish["status"]>(dish?.status ?? "available");
  const [imageUrl, setImageUrl] = useState(dish?.image_url ?? "");
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleImageUpload(file: File) {
    setUploading(true);
    setError(null);

    const supabase = createClient();
    const ext = file.name.split(".").pop();
    const path = `${crypto.randomUUID()}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from("dishes")
      .upload(path, file, { upsert: false });

    if (uploadError) {
      setError("Falha ao enviar a imagem.");
      setUploading(false);
      return;
    }

    const { data } = supabase.storage.from("dishes").getPublicUrl(path);
    setImageUrl(data.publicUrl);
    setUploading(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);

    const supabase = createClient();
    const payload = {
      title_pt: titlePt,
      title_en: titleEn,
      description_pt: descriptionPt,
      description_en: descriptionEn,
      price_cad: parseFloat(priceCad || "0"),
      category_id: categoryId || null,
      status,
      image_url: imageUrl || null,
    };

    const { error: dbError } = isEditing
      ? await supabase.from("dishes").update(payload).eq("id", dish!.id)
      : await supabase.from("dishes").insert(payload);

    setSaving(false);

    if (dbError) {
      setError("Não foi possível salvar. Tente novamente.");
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6 rounded-2xl bg-white p-6 shadow-soft">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-brand-terracotta">
          Título (Português)
          <input
            required
            value={titlePt}
            onChange={(e) => setTitlePt(e.target.value)}
            className="mt-1 w-full rounded-lg border border-brand-cream px-3 py-2 text-sm outline-none ring-brand-orange focus:ring-2"
          />
        </label>
        <label className="block text-sm font-medium text-brand-terracotta">
          Title (English)
          <input
            required
            value={titleEn}
            onChange={(e) => setTitleEn(e.target.value)}
            className="mt-1 w-full rounded-lg border border-brand-cream px-3 py-2 text-sm outline-none ring-brand-orange focus:ring-2"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-brand-terracotta">
          Descrição (Português)
          <textarea
            value={descriptionPt}
            onChange={(e) => setDescriptionPt(e.target.value)}
            rows={3}
            className="mt-1 w-full rounded-lg border border-brand-cream px-3 py-2 text-sm outline-none ring-brand-orange focus:ring-2"
          />
        </label>
        <label className="block text-sm font-medium text-brand-terracotta">
          Description (English)
          <textarea
            value={descriptionEn}
            onChange={(e) => setDescriptionEn(e.target.value)}
            rows={3}
            className="mt-1 w-full rounded-lg border border-brand-cream px-3 py-2 text-sm outline-none ring-brand-orange focus:ring-2"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <label className="block text-sm font-medium text-brand-terracotta">
          Preço (CAD)
          <input
            required
            type="number"
            step="0.01"
            min="0"
            value={priceCad}
            onChange={(e) => setPriceCad(e.target.value)}
            className="mt-1 w-full rounded-lg border border-brand-cream px-3 py-2 text-sm outline-none ring-brand-orange focus:ring-2"
          />
        </label>

        <label className="block text-sm font-medium text-brand-terracotta">
          Categoria
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="mt-1 w-full rounded-lg border border-brand-cream px-3 py-2 text-sm outline-none ring-brand-orange focus:ring-2"
          >
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name_pt}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-medium text-brand-terracotta">
          Status
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as Dish["status"])}
            className="mt-1 w-full rounded-lg border border-brand-cream px-3 py-2 text-sm outline-none ring-brand-orange focus:ring-2"
          >
            <option value="available">Disponível</option>
            <option value="sold_out">Esgotado</option>
          </select>
        </label>
      </div>

      <div>
        <span className="block text-sm font-medium text-brand-terracotta">Foto do prato</span>
        <div className="mt-2 flex items-center gap-4">
          {imageUrl && (
            <div className="relative h-20 w-20 overflow-hidden rounded-lg bg-brand-cream">
              <Image src={imageUrl} alt="Preview" fill className="object-cover" />
            </div>
          )}
          <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-brand-terracotta/20 px-4 py-2 text-sm font-semibold text-brand-terracotta">
            <Upload className="h-4 w-4" />
            {uploading ? "Enviando..." : "Enviar imagem"}
            <input
              type="file"
              accept="image/*"
              hidden
              disabled={uploading}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleImageUpload(file);
              }}
            />
          </label>
        </div>
        <label className="mt-3 block text-xs font-medium text-brand-terracotta/60">
          ou cole a URL da imagem
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://..."
            className="mt-1 w-full rounded-lg border border-brand-cream px-3 py-2 text-sm outline-none ring-brand-orange focus:ring-2"
          />
        </label>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={saving || uploading}
          className="rounded-full bg-brand-orange px-6 py-2.5 font-semibold text-white transition-opacity disabled:opacity-60"
        >
          {saving ? "Salvando..." : "Salvar prato"}
        </button>
      </div>
    </form>
  );
}
