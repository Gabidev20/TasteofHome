# Taste of Home — Sabor de Casa

Site bilíngue (PT/EN) para a Taste of Home, comida caseira brasileira em Richmond, BC.
Next.js 14 (App Router) + TypeScript + Tailwind CSS + Supabase.

## 1. Configurar o Supabase

1. Crie um projeto em https://supabase.com.
2. Abra **SQL Editor** → **New query**, cole o conteúdo de [`sql/schema.sql`](sql/schema.sql) e rode.
   Isso cria as tabelas `categories` e `dishes`, as policies de RLS, o bucket de storage
   `dishes` e um prato de exemplo (Feijoada).
3. Em **Authentication → Users**, crie um usuário para a Klarissa (e-mail + senha) —
   é o login que ela vai usar em `/admin`.
4. Em **Project Settings → API**, copie a `Project URL` e a `anon public key`.

## 2. Configurar o projeto

```bash
cp .env.local.example .env.local
```

Preencha `.env.local` com a URL e a chave anon do Supabase.

```bash
npm install
npm run dev
```

Abra http://localhost:3000 para o site e http://localhost:3000/admin para o painel.

## 3. Publicar na Vercel

1. Suba este repositório para o GitHub.
2. Em vercel.com, importe o repositório.
3. Adicione as variáveis de ambiente `NEXT_PUBLIC_SUPABASE_URL` e
   `NEXT_PUBLIC_SUPABASE_ANON_KEY` em **Project → Settings → Environment
   Variables** (se o seu projeto Supabase usa "publishable key" em vez de
   "anon key", use `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` no lugar — o
   projeto aceita qualquer um dos dois nomes).
4. **Depois de adicionar/alterar variáveis de ambiente, é preciso fazer um
   novo deploy** (Deployments → ⋯ → Redeploy) — a Vercel não aplica
   variáveis novas a um build que já existe.

### Erro 500 na home ("A server error occurred")

Isso quase sempre significa que `NEXT_PUBLIC_SUPABASE_URL` /
`NEXT_PUBLIC_SUPABASE_ANON_KEY` não estão definidas (ou têm o nome errado)
no projeto da Vercel. O site já tolera Supabase fora do ar ou não
configurado — nesse caso ele mostra o cardápio padrão (os 5 pratos da
semana + feijoada) em vez de quebrar — mas se mesmo assim aparecer 500,
confira nessa ordem:

1. As env vars estão em **Settings → Environment Variables** com esses
   nomes exatos, no ambiente certo (Production)?
2. Você fez um **novo deploy** depois de salvá-las?
3. Em **Deployments → (deploy com erro) → Functions/Logs**, o log da
   função mostra o erro real (o navegador só mostra a mensagem genérica).

## Estrutura

```
app/
  layout.tsx            layout raiz (idioma inicial via cookie)
  page.tsx               landing page (busca pratos no Supabase)
  admin/                 painel protegido (Supabase Auth)
  login/                 tela de login do painel
components/              seções da landing + componentes do admin
lib/
  config/site.ts         dados reais do negócio (WhatsApp, Instagram, etc.)
  i18n/dictionaries.ts    textos PT/EN
  supabase/               clients (browser/server/middleware)
sql/schema.sql            schema completo do Supabase (rodar 1x)
```

## Pendências de conteúdo real

Ver observações no final da conversa com o Claude — itens que precisam de
confirmação da Klarissa antes de publicar (preços/cardápio da semana atual,
depoimentos adicionais).
