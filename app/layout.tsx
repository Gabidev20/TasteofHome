import type { Metadata } from "next";
import { cookies } from "next/headers";
import { LanguageProvider } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/types";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taste of Home | Sabor de Casa — Richmond, BC",
  description:
    "Comida caseira brasileira artesanal em Richmond, BC. Authentic Brazilian home cooking, made fresh by the Maciel family.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("toh-locale")?.value;
  const initialLocale: Locale = cookieLocale === "en" ? "en" : "pt";

  return (
    <html lang={initialLocale}>
      <body className="font-body text-brand-terracotta antialiased">
        <LanguageProvider initialLocale={initialLocale}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
