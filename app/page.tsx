import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Ticker } from "@/components/Ticker";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Projects />
      <Ticker />
      <Footer />
    </main>
  );
}
