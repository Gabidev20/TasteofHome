"use client";

import { buildWhatsappGenericUrl } from "@/lib/config/site";
import { useLanguage } from "./LanguageProvider";
import { MessageCircle } from "lucide-react";

export function WhatsappFloatingButton() {
  const { t } = useLanguage();

  return (
    <a
      href={buildWhatsappGenericUrl("Olá Klarissa! Vim pelo site e gostaria de fazer um pedido.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-brand-olive px-5 py-3 font-semibold text-white shadow-soft transition-transform hover:scale-[1.05]"
      aria-label={t.nav.order}
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">{t.nav.order}</span>
    </a>
  );
}
