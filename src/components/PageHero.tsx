import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  actions,
  visual,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  actions?: ReactNode;
  visual?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-14 pt-10 sm:pb-20 sm:pt-16">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <Container className="relative">
        <div
          className={cn(
            "grid items-center gap-10",
            visual ? "lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16" : null,
          )}
        >
          <div className="min-w-0 max-w-2xl">
            <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.16em] text-rd-accent-hover">
              {eyebrow}
            </p>
            <h1 className="text-[clamp(1.75rem,5.4vw,3rem)] font-semibold leading-[1.12] tracking-[-0.038em] text-rd-text">
              {title}
            </h1>
            <p className="mt-5 text-base leading-7 text-rd-text-2 sm:text-[17px] sm:leading-8">
              {subtitle}
            </p>
            {actions ? <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div> : null}
          </div>
          {visual ? <div className="relative min-w-0">{visual}</div> : null}
        </div>
      </Container>
    </section>
  );
}
