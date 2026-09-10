"use client";

import { useLanguage } from "./LanguageProvider";
import { siteConfig } from "@/lib/config/site";
import { Instagram, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { href: "#sobre", label: t.nav.about },
    { href: "#menu", label: t.nav.menu },
    { href: "#como-funciona", label: t.nav.howItWorks },
    { href: "#depoimentos", label: t.nav.testimonials },
    { href: "#localizacao", label: t.nav.location },
  ];

  return (
    <footer className="bg-brand-terracotta text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 sm:grid-cols-3">
        <div>
          <span className="font-display text-xl font-bold text-white">Taste of Home</span>
          <p className="mt-3 max-w-xs text-sm text-white/70">{t.footer.blurb}</p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-cream/70">
            {t.footer.navHeading}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-white/80 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-cream/70">
            {t.footer.contactHeading}
          </h3>
          <ul className="mt-4 space-y-4">
            <li>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-white/90 hover:text-white"
              >
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                <span>
                  <span className="block text-sm font-semibold">{t.footer.whatsappLabel}</span>
                  <span className="text-sm text-white/70">{siteConfig.whatsappDisplay}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-white/90 hover:text-white"
              >
                <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                <span>
                  <span className="block text-sm font-semibold">{t.footer.instagramLabel}</span>
                  <span className="text-sm text-white/70">@{siteConfig.instagramHandle}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-white/90 hover:text-white"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                <span className="text-sm text-white/70">{t.footer.location}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Taste of Home — Sabor de Casa · {t.footer.location} · {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
