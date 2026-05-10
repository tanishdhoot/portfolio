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
    name: "Axiom Alpha",
    tagline: "AI stock research for Indian markets",
    description:
      "Equity research platform with reasoning agents modeled after Buffett, Graham, and Cathie Wood. Built around a dark, gold-leaf design system.",
    url: "https://axiom.tanishdoesdumbstuff.in",
    stack: ["Next.js", "TypeScript", "LLM agents", "Indian market data"],
    status: "live",
  },
  {
    name: "HireCraft",
    tagline: "Freelance marketplace with sealed bidding",
    description:
      "End-to-end freelance platform — bidding, real-time messaging, and Razorpay-backed escrow. Designed for the Indian creator economy.",
    url: "https://hirecraft.tanishdoesdumbstuff.in",
    stack: ["Next.js", "Firebase", "Razorpay", "Realtime"],
    status: "live",
  },
];
