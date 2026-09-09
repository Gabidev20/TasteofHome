export function SupabaseConfigWarning() {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-sm text-red-700">
      <p className="font-semibold">Supabase não está configurado.</p>
      <p className="mt-1">
        Defina <code className="rounded bg-red-100 px-1">NEXT_PUBLIC_SUPABASE_URL</code> e{" "}
        <code className="rounded bg-red-100 px-1">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> nas
        variáveis de ambiente do projeto (Vercel &gt; Settings &gt; Environment Variables) e
        faça um novo deploy.
      </p>
    </div>
  );
}
