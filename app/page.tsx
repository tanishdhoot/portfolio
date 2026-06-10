import { Masthead } from "@/components/Masthead";
import { Ticker } from "@/components/Ticker";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export const revalidate = 120;

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Masthead />
      <Ticker />
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}
