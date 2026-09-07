import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
  tone = "default",
  align = "left",
  featured = false,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "ai" | "muted";
  align?: "left" | "center";
  featured?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 py-20 sm:py-24 lg:py-32",
        tone === "ai" && "bg-ai-glow",
        tone === "muted" && "bg-rd-bg-elevated/60",
        className,
      )}
    >
      <Container>
        {(eyebrow || title || subtitle) && (
          <Reveal
            className={cn(
              "mb-12 sm:mb-16",
              align === "center" && "mx-auto max-w-3xl text-center",
            )}
          >
            {eyebrow ? (
              <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.16em] text-rd-accent-hover">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2
                className={cn(
                  "font-semibold leading-tight tracking-[-0.03em] text-rd-text",
                  featured
                    ? "text-[32px] sm:text-[42px] lg:text-5xl"
                    : "text-[28px] sm:text-4xl",
                )}
              >
                {title}
              </h2>
            ) : null}
            {subtitle ? (
              <p
                className={cn(
                  "mt-4 max-w-2xl text-base leading-7 text-rd-text-2 sm:text-[17px] sm:leading-8",
                  align === "center" && "mx-auto",
                )}
              >
                {subtitle}
              </p>
            ) : null}
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
