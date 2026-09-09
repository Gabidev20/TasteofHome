"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { buildWhatsappGenericUrl } from "@/lib/config/site";
import { MessageCircle } from "lucide-react";

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-brand-cream bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="font-display text-lg font-bold text-brand-olive">
          Taste of Home
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-brand-terracotta/80 md:flex">
          <a href="#menu" className="hover:text-brand-terracotta">{t.nav.menu}</a>
          <a href="#sobre" className="hover:text-brand-terracotta">{t.nav.about}</a>
          <a href="#depoimentos" className="hover:text-brand-terracotta">{t.nav.testimonials}</a>
          <a href="#como-funciona" className="hover:text-brand-terracotta">{t.nav.howItWorks}</a>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <a
            href={buildWhatsappGenericUrl("Olá! Vim pelo site e gostaria de fazer um pedido.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full bg-brand-orange px-4 py-2 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-[1.03] sm:flex"
          >
            <MessageCircle className="h-4 w-4" />
            {t.nav.order}
          </a>
        </div>
      </div>
    </header>
  );
}
