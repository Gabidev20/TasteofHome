export type Locale = "pt" | "en";

export type CategorySlug = "weekly" | "weekend";

export interface Category {
  id: string;
  slug: CategorySlug;
  name_pt: string;
  name_en: string;
  sort_order: number;
}

export type DishStatus = "available" | "sold_out";

export interface Dish {
  id: string;
  category_id: string | null;
  title_pt: string;
  title_en: string;
  description_pt: string | null;
  description_en: string | null;
  price_cad: number;
  image_url: string | null;
  status: DishStatus;
  sort_order: number;
  created_at: string;
  updated_at: string;
}
