// Real business data for Taste of Home (Sabor de Casa).
// Owners: Klarissa & Robson Maciel — Richmond, BC, Canada.

export const siteConfig = {
  name: "Taste of Home",
  tagline: "Sabor de Casa",
  city: "Richmond, BC",
  country: "Canada",
  instagramHandle: "taste_of_home_sabor_de_casa",
  instagramUrl: "https://www.instagram.com/taste_of_home_sabor_de_casa/",
  // Real WhatsApp number found on the client's product labels.
  // Canada country code (+1) + BC area code already included.
  whatsappNumber: "17789182328",
  whatsappDisplay: "+1 (778) 918-2328",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Richmond+BC+Canada",
} as const;

export function buildWhatsappOrderUrl(dishName: string) {
  const message = `Olá Klarissa! Gostaria de pedir o ${dishName}.`;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsappGenericUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
