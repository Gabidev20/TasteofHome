// Central place that reads the Supabase env vars, so every client
// (browser, server, middleware) agrees on the exact names and on what
// "not configured" means.
//
// NEXT_PUBLIC_SUPABASE_ANON_KEY is the classic name used throughout this
// project and in README.md / .env.local.example. Newer Supabase projects
// label the same key "publishable key" in the dashboard — some setup
// guides export it as NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY instead, so we
// accept either name to avoid a misconfigured-env-var 500 on first deploy.

export interface SupabaseEnv {
  url: string;
  anonKey: string;
}

export function getSupabaseEnv(): SupabaseEnv | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !anonKey) {
    return null;
  }

  return { url, anonKey };
}
