export interface Dictionary {
  nav: {
    menu: string;
    about: string;
    testimonials: string;
    howItWorks: string;
    order: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
  };
  menu: {
    title: string;
    subtitle: string;
    weekly: string;
    weekend: string;
    soldOut: string;
    orderButton: string;
    empty: string;
  };
  about: {
    title: string;
    body: string;
  };
  testimonials: {
    title: string;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    steps: { title: string; desc: string }[];
  };
  footer: {
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
      order: "Pedir no WhatsApp",
    },
    hero: {
      badge: "Feito à mão em Richmond, BC",
      title: "Sabor de Casa, direto da nossa cozinha para a sua mesa",
      subtitle:
        "Comida caseira brasileira feita com carinho pela família Maciel — Klarissa e Robson — entregue fresquinha em Richmond e região.",
      cta: "Pedir no WhatsApp",
      ctaSecondary: "Ver cardápio da semana",
    },
    menu: {
      title: "Cardápio",
      subtitle: "Atualizado toda semana pela Klarissa",
      weekly: "Menu da Semana",
      weekend: "Especial do Final de Semana",
      soldOut: "Esgotado",
      orderButton: "Pedir no WhatsApp",
      empty: "Nenhum prato cadastrado nesta categoria no momento.",
    },
    about: {
      title: "A Família Maciel",
      body:
        "Klarissa e Robson trocaram o Brasil pelo Canadá levando na bagagem as receitas de família. O Taste of Home nasceu da vontade de matar a saudade de casa — e de compartilhar esse sabor com quem também mora longe, ou simplesmente quer conhecer a verdadeira comida caseira brasileira. Cada marmita é preparada como se fosse para a nossa própria família.",
    },
    testimonials: {
      title: "O Que Nossos Clientes Dizem",
    },
    howItWorks: {
      title: "Como Funciona",
      subtitle: "Pedir é simples e rápido",
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
    footer: {
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
      order: "Order on WhatsApp",
    },
    hero: {
      badge: "Handmade in Richmond, BC",
      title: "A Taste of Home, straight from our kitchen to your table",
      subtitle:
        "Authentic Brazilian home cooking made with love by the Maciel family — Klarissa and Robson — delivered fresh across Richmond and the surrounding area.",
      cta: "Order on WhatsApp",
      ctaSecondary: "See this week's menu",
    },
    menu: {
      title: "Menu",
      subtitle: "Updated every week by Klarissa",
      weekly: "Weekly Menu",
      weekend: "Weekend Special",
      soldOut: "Sold out",
      orderButton: "Order on WhatsApp",
      empty: "No dishes listed in this category right now.",
    },
    about: {
      title: "The Maciel Family",
      body:
        "Klarissa and Robson left Brazil for Canada, bringing their family recipes along. Taste of Home was born from missing the flavors of home — and wanting to share them with anyone far from theirs, or simply curious about real Brazilian comfort food. Every meal is made the way we'd cook for our own family.",
    },
    testimonials: {
      title: "What Our Customers Say",
    },
    howItWorks: {
      title: "How It Works",
      subtitle: "Ordering is quick and simple",
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
    footer: {
      rights: "All rights reserved.",
      location: "Richmond, BC — Canada",
    },
  },
};
