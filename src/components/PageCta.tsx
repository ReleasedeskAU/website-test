import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IconArrowRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { demoHref } from "@/lib/nav";

export function PageCta({
  title = "See it on a release that looks like yours.",
  body = "We’ll walk the lifecycle, the gates, and StaffLess AI — including what it will and will not answer today.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-70" />
      <Container className="relative">
        <Reveal>
          <div className="max-w-2xl">
            <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.16em] text-rd-accent-hover">
              Next step
            </p>
            <h2 className="text-[28px] font-semibold tracking-[-0.03em] sm:text-4xl">{title}</h2>
            <p className="mt-4 text-base leading-7 text-rd-text-2">{body}</p>
            <Button href={demoHref} size="lg" className="mt-8 min-h-12">
              Request a demo
              <IconArrowRight className="size-4" />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
