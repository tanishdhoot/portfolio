export interface Project {
  name: string;
  tagline: string;
  description: string;
  url: string;
  stack: string[];
  status?: "live" | "wip" | "archived";
}

export const projects: Project[] = [
  {
    name: "HireCraft",
    tagline: "Freelance marketplace with sealed bidding",
    description:
      "End-to-end freelance platform — bidding, real-time messaging, and Razorpay-backed escrow. Designed for the Indian creator economy.",
    url: "https://hirecraft.tanishdoesdumbstuff.in",
    stack: ["Next.js", "Firebase", "Razorpay", "Realtime"],
    status: "live",
  },
  {
    name: "Arthwealth",
    tagline: "Wealth management, reimagined",
    description:
      "A modern wealth management surface — portfolio aggregation, goal tracking, and clean data visualisation for Indian investors.",
    url: "https://arthwealth-app.vercel.app",
    stack: ["Next.js", "TypeScript", "Charts"],
    status: "live",
  },
  {
    name: "Slowburn",
    tagline: "Soy candle e-commerce — rituals for people who work too much",
    description:
      "A small-batch candle storefront: ritual-based collections, product pages, cart, and Stripe checkout, wrapped in minimalist, brand-led copy. A full e-commerce build end to end.",
    url: "https://slowburn-vert.vercel.app",
    stack: ["Next.js", "Stripe", "E-commerce", "Brand design"],
    status: "live",
  },
  {
    name: "Axiom Alpha",
    tagline: "AI stock research for Indian markets",
    description:
      "Equity research platform with reasoning agents modeled after Buffett, Graham, and Cathie Wood. Built around a dark, gold-leaf design system.",
    url: "https://axiom.tanishdoesdumbstuff.in",
    stack: ["Next.js", "TypeScript", "LLM agents", "Indian market data"],
    status: "live",
  },
  {
    name: "Netflix Portfolio",
    tagline: "A personal digital CV — Netflix style",
    description:
      "An experimental take on the personal site: my career browsed like a streaming catalog. Roles, projects, and writing as titles you can browse.",
    url: "https://github.com/tanishdhoot/Personal-Website",
    stack: ["React", "SPA", "Animation"],
    status: "wip",
  },
  {
    name: "Savour",
    tagline: "Meal saving & discovery app",
    description:
      "A meal saving and discovery app. Built mobile-first with quick capture flows for saving restaurants and dishes.",
    url: "https://github.com/tanishdhoot",
    stack: ["Android", "Kotlin", "REST API", "Vercel"],
    status: "wip",
  },
];
