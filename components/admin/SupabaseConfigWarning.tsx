export function SupabaseConfigWarning({
  missingEnv,
  detail,
}: {
  // true only when NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY
  // (or _PUBLISHABLE_KEY) are genuinely absent from process.env. Any other
  // failure (RLS, wrong key value, network) shows `detail` instead, so this
  // message doesn't lie about the actual cause.
  missingEnv: boolean;
  detail?: string;
}) {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-sm text-red-700">
      {missingEnv ? (
        <>
          <p className="font-semibold">Supabase não está configurado.</p>
          <p className="mt-1">
            Defina <code className="rounded bg-red-100 px-1">NEXT_PUBLIC_SUPABASE_URL</code> e{" "}
            <code className="rounded bg-red-100 px-1">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> (ou{" "}
            <code className="rounded bg-red-100 px-1">NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY</code>)
            nas variáveis de ambiente do projeto (Vercel &gt; Settings &gt; Environment
            Variables) e faça um novo deploy — variáveis novas só valem a partir do próximo
            build.
          </p>
        </>
      ) : (
        <>
          <p className="font-semibold">Não foi possível carregar os dados do Supabase.</p>
          <p className="mt-1">
            As variáveis de ambiente estão definidas, então o problema é outro (permissão,
            chave inválida, projeto pausado, rede). Erro retornado pelo Supabase:
          </p>
          {detail && (
            <pre className="mt-2 overflow-x-auto rounded bg-red-100 p-2 font-mono text-xs text-red-800">
              {detail}
            </pre>
          )}
        </>
      )}
    </div>
  );
}
