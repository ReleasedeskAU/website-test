import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { AiEngine } from "@/components/sections/AiEngine";
import { Connectors } from "@/components/sections/Connectors";
import { Cta } from "@/components/sections/Cta";
import { Governance } from "@/components/sections/Governance";
import { Hero } from "@/components/sections/Hero";
import { Platform } from "@/components/sections/Platform";
import { Problem } from "@/components/sections/Problem";
import { Voice } from "@/components/sections/Voice";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <Nav />
      <main id="main">
        <Hero />
        <Problem />
        <Platform />
        <AiEngine />
        <Voice />
        <Connectors />
        <Governance />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
