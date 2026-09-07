import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Platform } from "@/components/sections/Platform";
import { AiEngine } from "@/components/sections/AiEngine";
import { Voice } from "@/components/sections/Voice";
import { Connectors } from "@/components/sections/Connectors";
import { Governance } from "@/components/sections/Governance";
import { Cta } from "@/components/sections/Cta";
import { SiteShell } from "@/components/SiteShell";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <Problem />
      <Platform />
      <AiEngine />
      <Voice />
      <Connectors />
      <Governance />
      <Cta />
    </SiteShell>
  );
}
