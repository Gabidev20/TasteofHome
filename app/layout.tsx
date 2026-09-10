import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Fraunces, Inter } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/types";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

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
    <html lang={initialLocale} className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-body text-brand-terracotta antialiased">
        <LanguageProvider initialLocale={initialLocale}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
