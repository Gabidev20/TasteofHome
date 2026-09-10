"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-brand-cream bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="font-display text-lg font-bold text-brand-olive">
          Taste of Home
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-brand-terracotta/80 md:flex">
          <a href="#menu" className="hover:text-brand-terracotta">{t.nav.menu}</a>
          <a href="#sobre" className="hover:text-brand-terracotta">{t.nav.about}</a>
          <a href="#como-funciona" className="hover:text-brand-terracotta">{t.nav.howItWorks}</a>
          <a href="#depoimentos" className="hover:text-brand-terracotta">{t.nav.testimonials}</a>
          <a href="#localizacao" className="hover:text-brand-terracotta">{t.nav.location}</a>
        </nav>

        <LanguageSwitcher />
      </div>
    </header>
  );
}
