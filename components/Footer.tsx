"use client";

import { useLanguage } from "./LanguageProvider";
import { siteConfig } from "@/lib/config/site";
import { Instagram, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-brand-cream bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center">
        <span className="font-display text-xl font-bold text-brand-olive">
          Taste of Home
        </span>
        <p className="flex items-center gap-1.5 text-sm text-brand-terracotta/70">
          <MapPin className="h-4 w-4" />
          {t.footer.location}
        </p>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-terracotta/70 transition-colors hover:text-brand-orange"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-terracotta/70 transition-colors hover:text-brand-orange"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-terracotta/70 transition-colors hover:text-brand-orange"
            aria-label="Location"
          >
            <MapPin className="h-5 w-5" />
          </a>
        </div>

        <p className="text-xs text-brand-terracotta/50">
          © {new Date().getFullYear()} Taste of Home. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
