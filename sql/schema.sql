-- Taste of Home (Sabor de Casa) — Supabase schema
-- Run this once in the Supabase SQL editor (Project > SQL Editor > New query > paste > Run).

-- ============================================================
-- 1. CATEGORIES
-- ============================================================
create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,              -- 'weekly' | 'weekend'
  name_pt text not null,
  name_en text not null,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

insert into public.categories (slug, name_pt, name_en, sort_order)
values
  ('weekly', 'Menu da Semana', 'Weekly Menu', 1),
  ('weekend', 'Especial do Final de Semana', 'Weekend Special', 2)
on conflict (slug) do nothing;

-- ============================================================
-- 2. DISHES
-- ============================================================
create table if not exists public.dishes (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references public.categories(id) on delete set null,
  title_pt text not null,
  title_en text not null,
  description_pt text default '',
  description_en text default '',
  price_cad numeric(10,2) not null default 0,
  image_url text,
  status text not null default 'available' check (status in ('available', 'sold_out')),
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists dishes_category_id_idx on public.dishes(category_id);

-- keep updated_at fresh on every edit
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists dishes_set_updated_at on public.dishes;
create trigger dishes_set_updated_at
  before update on public.dishes
  for each row execute function public.set_updated_at();

-- ============================================================
-- 3. ROW LEVEL SECURITY
-- Menu is public read (anon key, no login) — anyone visiting the
-- site can see dishes. Only an authenticated user (Klarissa, via
-- Supabase Auth) can create/edit/delete.
-- ============================================================
alter table public.categories enable row level security;
alter table public.dishes enable row level security;

-- Belt-and-suspenders: Supabase normally grants these by default, but if
-- this project had that default changed, RLS policies alone won't help —
-- Postgres checks table-level GRANTs before row-level policies.
grant usage on schema public to anon, authenticated;
grant select on public.categories to anon, authenticated;
grant select, insert, update, delete on public.categories to authenticated;
grant select, insert, update, delete on public.dishes to authenticated;
grant select on public.dishes to anon;

drop policy if exists "categories_public_read" on public.categories;
create policy "categories_public_read"
  on public.categories for select
  to anon, authenticated
  using (true);

drop policy if exists "categories_admin_write" on public.categories;
create policy "categories_admin_write"
  on public.categories for all
  to authenticated
  using (true)
  with check (true);

drop policy if exists "dishes_public_read" on public.dishes;
create policy "dishes_public_read"
  on public.dishes for select
  to anon, authenticated
  using (true);

drop policy if exists "dishes_admin_write" on public.dishes;
create policy "dishes_admin_write"
  on public.dishes for all
  to authenticated
  using (true)
  with check (true);

-- ============================================================
-- 4. STORAGE (dish photos)
-- Create a public bucket called "dishes" for menu photos.
-- ============================================================
insert into storage.buckets (id, name, public)
values ('dishes', 'dishes', true)
on conflict (id) do nothing;

drop policy if exists "dishes_bucket_public_read" on storage.objects;
create policy "dishes_bucket_public_read"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'dishes');

drop policy if exists "dishes_bucket_admin_write" on storage.objects;
create policy "dishes_bucket_admin_write"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'dishes');

drop policy if exists "dishes_bucket_admin_update" on storage.objects;
create policy "dishes_bucket_admin_update"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'dishes');

drop policy if exists "dishes_bucket_admin_delete" on storage.objects;
create policy "dishes_bucket_admin_delete"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'dishes');

-- ============================================================
-- 5. SEED — real starting menu. Klarissa can edit prices/photos/
-- availability any time from /admin; these are just the current
-- week's dishes so the menu isn't empty on first deploy.
-- ============================================================
insert into public.dishes (
  category_id, title_pt, title_en,
  description_pt, description_en,
  price_cad, image_url, status, sort_order
)
select
  (select id from public.categories where slug = 'weekend'),
  'Feijoada',
  'Feijoada',
  'Feijão preto com linguiça defumada e carne de porco, acompanha arroz branco, farofa e couve refogada.',
  'Black beans with smoked sausage and pork, served with white rice, toasted cassava flour (farofa) and sautéed collard greens.',
  18.00,
  '/images/feijoada.png',
  'available',
  1
where not exists (select 1 from public.dishes where title_en = 'Feijoada');

insert into public.dishes (
  category_id, title_pt, title_en,
  description_pt, description_en,
  price_cad, image_url, status, sort_order
)
select v.category_id, v.title_pt, v.title_en, v.description_pt, v.description_en, v.price_cad, v.image_url, 'available', v.sort_order
from (
  values
    (
      (select id from public.categories where slug = 'weekly'),
      'Peixe', 'Fish',
      'Acompanha arroz branco e salada fresca.',
      'Served with white rice and fresh salad.',
      18.00, '/images/marmitas.png', 1
    ),
    (
      (select id from public.categories where slug = 'weekly'),
      'Bife a Cavalo', 'Bife a Cavalo (Steak & Fried Egg)',
      'Bife grelhado com ovo, acompanha arroz, feijão e farofa.',
      'Grilled steak topped with a fried egg, served with rice, beans and farofa.',
      20.00, '/images/marmitas.png', 2
    ),
    (
      (select id from public.categories where slug = 'weekly'),
      'Carne Assada de Panela', 'Pot Roast Beef',
      'Acompanha arroz branco e purê de batata.',
      'Served with white rice and mashed potatoes.',
      20.00, '/images/marmitas.png', 3
    ),
    (
      (select id from public.categories where slug = 'weekly'),
      'Bisteca de Porco', 'Pork Chop',
      'Acompanha arroz, feijão e farofa.',
      'Served with rice, beans and farofa.',
      19.00, '/images/marmitas.png', 4
    ),
    (
      (select id from public.categories where slug = 'weekly'),
      'Carne Moída', 'Ground Beef',
      'Acompanha arroz, feijão e purê de batata.',
      'Served with rice, beans and mashed potatoes.',
      18.00, '/images/marmitas.png', 5
    )
) as v(category_id, title_pt, title_en, description_pt, description_en, price_cad, image_url, sort_order)
where not exists (select 1 from public.dishes where dishes.title_en = v.title_en);
