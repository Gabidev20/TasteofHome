"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Mode = "signin" | "signup";

export default function AdminLoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [notAdmin, setNotAdmin] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("error") === "not_admin") {
      setNotAdmin(true);
    }
  }, []);

  function switchMode(next: Mode) {
    setMode(next);
    setError(null);
    setInfo(null);
  }

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setInfo(null);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    setLoading(false);

    if (error) {
      setError("E-mail ou senha inválidos. / Invalid email or password.");
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setInfo(null);

    const supabase = createClient();
    const { data, error } = await supabase.auth.signUp({ email, password });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    if (data.session) {
      router.push("/admin");
      router.refresh();
      return;
    }

    setInfo("Conta criada! Confira seu e-mail para confirmar o cadastro antes de entrar.");
    setMode("signin");
  }

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    setNotAdmin(false);
    router.refresh();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-cream px-4">
      <form
        onSubmit={mode === "signin" ? handleSignIn : handleSignUp}
        className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-soft"
      >
        <h1 className="font-display text-2xl font-bold text-brand-terracotta">
          Painel Taste of Home
        </h1>
        <p className="mt-1 text-sm text-brand-terracotta/60">
          {mode === "signin"
            ? "Entre para atualizar o cardápio."
            : "Crie sua conta para acessar o painel."}
        </p>

        <div className="mt-5 flex rounded-full bg-brand-cream p-1 text-sm font-semibold">
          <button
            type="button"
            onClick={() => switchMode("signin")}
            className={`flex-1 rounded-full py-1.5 transition-colors ${
              mode === "signin"
                ? "bg-white text-brand-terracotta shadow-sm"
                : "text-brand-terracotta/60"
            }`}
          >
            Entrar
          </button>
          <button
            type="button"
            onClick={() => switchMode("signup")}
            className={`flex-1 rounded-full py-1.5 transition-colors ${
              mode === "signup"
                ? "bg-white text-brand-terracotta shadow-sm"
                : "text-brand-terracotta/60"
            }`}
          >
            Criar conta
          </button>
        </div>

        {notAdmin && (
          <div className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
            Essa conta não tem permissão para acessar o painel. Peça para
            liberarem seu e-mail, ou{" "}
            <button type="button" onClick={handleSignOut} className="underline">
              saia e tente com outra conta
            </button>
            .
          </div>
        )}

        <label className="mt-6 block text-sm font-medium text-brand-terracotta">
          E-mail
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-lg border border-brand-cream bg-white px-3 py-2 text-sm outline-none ring-brand-orange focus:ring-2"
          />
        </label>

        <label className="mt-4 block text-sm font-medium text-brand-terracotta">
          Senha
          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-lg border border-brand-cream bg-white px-3 py-2 text-sm outline-none ring-brand-orange focus:ring-2"
          />
        </label>

        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
        {info && <p className="mt-3 text-sm text-brand-olive">{info}</p>}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-full bg-brand-orange py-2.5 font-semibold text-white transition-opacity disabled:opacity-60"
        >
          {loading
            ? mode === "signin"
              ? "Entrando..."
              : "Criando conta..."
            : mode === "signin"
              ? "Entrar"
              : "Criar conta"}
        </button>
      </form>
    </div>
  );
}
