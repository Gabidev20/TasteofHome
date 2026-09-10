export interface Dictionary {
  nav: {
    menu: string;
    about: string;
    testimonials: string;
    howItWorks: string;
    location: string;
    order: string;
  };
  hero: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
    signature: string;
    photoCaption: string;
  };
  infoStrip: { text: string }[];
  menu: {
    eyebrow: string;
    title: string;
    intro: string;
    weekly: string;
    weekend: string;
    weekendBadge: string;
    weeklyBadge: string;
    soldOut: string;
    orderButton: string;
    empty: string;
  };
  about: {
    eyebrow: string;
    title: string;
    body: string[];
    signature: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    subtitle: string;
    roleGeneric: string;
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: { title: string; desc: string }[];
  };
  location: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; desc: string }[];
    cta: string;
    mapCaption: string;
    mapRegion: string;
  };
  finalCta: {
    title: string;
    subtitle: string;
    cta: string;
  };
  footer: {
    blurb: string;
    navHeading: string;
    contactHeading: string;
    whatsappLabel: string;
    instagramLabel: string;
    rights: string;
    location: string;
  };
}

export const dictionaries: Record<"pt" | "en", Dictionary> = {
  pt: {
    nav: {
      menu: "Cardápio",
      about: "Nossa História",
      testimonials: "Depoimentos",
      howItWorks: "Como Funciona",
      location: "Localização",
      order: "Pedir no WhatsApp",
    },
    hero: {
      badge: "Autêntica comida brasileira · Richmond, BC",
      titlePrefix: "",
      titleHighlight: "Sabor de Casa",
      titleSuffix: ", direto da nossa cozinha para a sua mesa",
      subtitle:
        "Comida caseira brasileira feita com carinho pela família Maciel — Klarissa e Robson — entregue fresquinha em Richmond e região.",
      cta: "Pedir no WhatsApp",
      ctaSecondary: "Ver cardápio da semana",
      signature: "feito com carinho pela Klarissa & Robson",
      photoCaption: "Feijoada de sábado",
    },
    infoStrip: [
      { text: "Feito à mão pela Klarissa & Robson" },
      { text: "Richmond, BC · Entrega disponível" },
      { text: "Todo sábado é dia de feijoada" },
      { text: "Encomende pelo WhatsApp" },
    ],
    menu: {
      eyebrow: "Cardápio",
      title: "Sabor de casa, do jeitinho brasileiro",
      intro:
        "Feijoada aos sábados e pratos da semana, atualizados pela Klarissa. Toque para encomendar direto no WhatsApp.",
      weekly: "Menu da Semana",
      weekend: "Especial do Final de Semana",
      weekendBadge: "⭐ Todo sábado é dia de feijoada",
      weeklyBadge: "✦ Novidades toda semana",
      soldOut: "Esgotado",
      orderButton: "Pedir no WhatsApp",
      empty: "Nenhum prato cadastrado nesta categoria no momento.",
    },
    about: {
      eyebrow: "Nossa História",
      title: "Uma nova fase, o mesmo amor pela cozinha",
      body: [
        "Tudo começou entre irmãs, dividindo a jornada da bariátrica — uma fase linda que nos fez (re)descobrir o amor pela cozinha.",
        "Morando aqui em Richmond, na Grande Vancouver, percebemos duas coisas: o quanto a comunidade brasileira sente saudade do sabor de casa, e o quanto os canadenses se apaixonam pelos nossos temperos.",
        "Foi aí que tudo se encontrou. O Taste of Home é, hoje, o nosso negócio de comida afetiva — feijoada aos sábados, caldos caseiros e pratos feitos à mão pela nossa família, aqui em Richmond.",
      ],
      signature: "Klarissa & Robson",
    },
    testimonials: {
      eyebrow: "Depoimentos",
      title: "Quem prova, aprova",
      subtitle: "Um pouquinho do carinho que a gente recebe da nossa comunidade.",
      roleGeneric: "Cliente",
    },
    howItWorks: {
      eyebrow: "Como Pedir",
      title: "Pedir é simples — e tudo pelo WhatsApp",
      subtitle: "Sem app, sem cadastro. Você fala com a gente do mesmo jeito que fala com a família.",
      steps: [
        {
          title: "Escolha os pratos",
          desc: "Veja o cardápio da semana e o especial de final de semana.",
        },
        {
          title: "Peça pelo WhatsApp",
          desc: "Envie sua mensagem já pronta com um clique.",
        },
        {
          title: "Combine a entrega",
          desc: "Retirada ou entrega em Richmond e região.",
        },
        {
          title: "Aproveite",
          desc: "Comida fresquinha e feita com carinho, direto pra sua mesa.",
        },
      ],
    },
    location: {
      eyebrow: "Localização & Atendimento",
      title: "Estamos em Richmond, BC",
      intro:
        "Cozinhamos em Richmond, no coração da Grande Vancouver. Fazemos entrega na região e também retirada combinada — tudo pelo WhatsApp.",
      items: [
        {
          title: "Entrega",
          desc: "Richmond e região — disponível, combine pelo WhatsApp",
        },
        { title: "Retirada", desc: "Combine o horário pelo WhatsApp" },
        {
          title: "Feijoada aos sábados",
          desc: "Nosso xodó da semana — encomende com antecedência",
        },
        { title: "Encomendas", desc: "WhatsApp (778) 918-2328" },
      ],
      cta: "Consultar disponibilidade",
      mapCaption: "Richmond, British Columbia",
      mapRegion: "Grande Vancouver",
    },
    finalCta: {
      title: "Deixe a gente servir felicidade na sua mesa",
      subtitle: "Feijoada aos sábados e caldos caseiros do Brasil — a um WhatsApp de distância.",
      cta: "Fazer meu pedido",
    },
    footer: {
      blurb: "A autêntica comida brasileira, feita com carinho pela Klarissa e pelo Robson em Richmond, BC.",
      navHeading: "Navegação",
      contactHeading: "Contato & Encomendas",
      whatsappLabel: "WhatsApp",
      instagramLabel: "Instagram",
      rights: "Todos os direitos reservados.",
      location: "Richmond, BC — Canadá",
    },
  },
  en: {
    nav: {
      menu: "Menu",
      about: "Our Story",
      testimonials: "Testimonials",
      howItWorks: "How It Works",
      location: "Location",
      order: "Order on WhatsApp",
    },
    hero: {
      badge: "Authentic Brazilian food · Richmond, BC",
      titlePrefix: "",
      titleHighlight: "A Taste of Home",
      titleSuffix: ", straight from our kitchen to your table",
      subtitle:
        "Authentic Brazilian home cooking made with love by the Maciel family — Klarissa and Robson — delivered fresh across Richmond and the surrounding area.",
      cta: "Order on WhatsApp",
      ctaSecondary: "See this week's menu",
      signature: "made with love by Klarissa & Robson",
      photoCaption: "Saturday feijoada",
    },
    infoStrip: [
      { text: "Handmade by Klarissa & Robson" },
      { text: "Richmond, BC · Delivery available" },
      { text: "Every Saturday is feijoada day" },
      { text: "Order via WhatsApp" },
    ],
    menu: {
      eyebrow: "Menu",
      title: "A taste of home, the Brazilian way",
      intro:
        "Saturday feijoada and weekly dishes, updated by Klarissa. Tap to order straight on WhatsApp.",
      weekly: "Weekly Menu",
      weekend: "Weekend Special",
      weekendBadge: "⭐ Every Saturday is feijoada day",
      weeklyBadge: "✦ New every week",
      soldOut: "Sold out",
      orderButton: "Order on WhatsApp",
      empty: "No dishes listed in this category right now.",
    },
    about: {
      eyebrow: "Our Story",
      title: "A new chapter, the same love for cooking",
      body: [
        "It all began between sisters, sharing the journey of bariatric surgery — a beautiful chapter that made us (re)discover our love for cooking.",
        "Living here in Richmond, in the Greater Vancouver area, we noticed two things: how much the Brazilian community misses the taste of home, and how much Canadians fall in love with our seasoning.",
        "That's when it all came together. Taste of Home is now our comfort-food business — Saturday feijoada, homemade soups, and dishes made by hand by our family, right here in Richmond.",
      ],
      signature: "Klarissa & Robson",
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "Once you try it, you're hooked",
      subtitle: "A little bit of the love we get back from our community.",
      roleGeneric: "Customer",
    },
    howItWorks: {
      eyebrow: "How To Order",
      title: "Ordering is simple — all on WhatsApp",
      subtitle: "No app, no sign-up. You talk to us the same way you'd talk to family.",
      steps: [
        {
          title: "Choose your dishes",
          desc: "Browse the weekly menu and the weekend special.",
        },
        {
          title: "Order on WhatsApp",
          desc: "Send your order with a pre-filled message, one click.",
        },
        {
          title: "Arrange delivery",
          desc: "Pickup or delivery across Richmond and the surrounding area.",
        },
        {
          title: "Enjoy",
          desc: "Fresh, homemade food, straight to your table.",
        },
      ],
    },
    location: {
      eyebrow: "Location & Service",
      title: "We're in Richmond, BC",
      intro:
        "We cook in Richmond, in the heart of Greater Vancouver. We deliver across the region and also offer pickup by arrangement — all through WhatsApp.",
      items: [
        {
          title: "Delivery",
          desc: "Richmond and surrounding area — arrange via WhatsApp",
        },
        { title: "Pickup", desc: "Arrange a pickup time via WhatsApp" },
        {
          title: "Saturday feijoada",
          desc: "Our weekly favourite — order ahead",
        },
        { title: "Orders", desc: "WhatsApp (778) 918-2328" },
      ],
      cta: "Check availability",
      mapCaption: "Richmond, British Columbia",
      mapRegion: "Greater Vancouver",
    },
    finalCta: {
      title: "Let us serve happiness at your table",
      subtitle: "Saturday feijoada and homemade Brazilian soups — just a WhatsApp message away.",
      cta: "Place my order",
    },
    footer: {
      blurb: "Authentic Brazilian food, made with love by Klarissa and Robson in Richmond, BC.",
      navHeading: "Navigation",
      contactHeading: "Contact & Orders",
      whatsappLabel: "WhatsApp",
      instagramLabel: "Instagram",
      rights: "All rights reserved.",
      location: "Richmond, BC — Canada",
    },
  },
};
