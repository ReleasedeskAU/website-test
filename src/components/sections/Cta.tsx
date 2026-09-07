import { DemoForm } from "@/components/DemoForm";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Cta() {
  return (
    <section id="demo" className="relative scroll-mt-24 py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-70" />
      <Container className="relative">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <Reveal>
            <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.16em] text-rd-accent-hover">
              Request a demo
            </p>
            <h2 className="text-[28px] font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
              See Release Desk on a release that looks like yours.
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-rd-text-2">
              We’ll walk the lifecycle, the gates, and StaffLess AI — including
              what it will and will not answer today. Bring a real cutover if you
              can. Plain conversation, no theatre.
            </p>
            <ul className="mt-8 space-y-3 text-sm leading-6 text-rd-text-2">
              <li className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-rd-verified" />
                Governed path from Draft through Closed
              </li>
              <li className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-rd-verified" />
                StaffLess AI on indexed Jira and GitHub data
              </li>
              <li className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-rd-verified" />
                Roles, locks, and connector management
              </li>
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <Card padding="lg">
              <DemoForm />
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
