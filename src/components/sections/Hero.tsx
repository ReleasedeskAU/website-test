import { AskMock } from "@/components/AskMock";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IconArrowRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-12 sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <Reveal>
            <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.16em] text-rd-accent-hover">
              Governed release management
            </p>
            <h1 className="text-[34px] font-semibold leading-[1.12] tracking-[-0.038em] text-rd-text sm:text-5xl sm:leading-[1.08] lg:text-[56px]">
              The command center for shipping software, with an AI that actually knows your data.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-rd-text-2 sm:text-[17px] sm:leading-8">
              Scattered spreadsheets, chat threads, and manual status-chasing do not
              survive a real release calendar. Release Desk puts every release on
              enforced, configurable rules — then lets anyone ask natural-language
              questions and get accurate, trustworthy answers instantly.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#demo" size="lg">
                Request a demo
                <IconArrowRight className="size-4" />
              </Button>
              <Button href="#platform" variant="secondary" size="lg">
                See how it works
              </Button>
            </div>
            <p className="mt-6 text-sm text-rd-text-3">
              For engineering managers, release managers, delivery leads, and CAB
              stakeholders. Jira and GitHub connected today.
            </p>
          </Reveal>
          <Reveal delay={80} className="lg:pt-4">
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[28px] bg-rd-accent/10 blur-2xl" />
              <AskMock />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
