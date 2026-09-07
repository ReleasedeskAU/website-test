import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { primaryNav } from "@/lib/nav";

export function RelatedPages({ current }: { current: string }) {
  const others = primaryNav.filter((item) => item.href !== current);

  return (
    <section className="border-t border-rd-border py-16 sm:py-20">
      <Container>
        <Reveal>
          <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-rd-text-3">
            Continue
          </p>
          <h2 className="mt-3 text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
            Other parts of the product
          </h2>
        </Reveal>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((item, i) => (
            <Reveal key={item.href} delay={i * 40}>
              <li>
                <Link
                  href={item.href}
                  className="flex min-h-12 items-center justify-between rounded-2xl border border-rd-border bg-rd-surface/70 px-4 py-3 text-sm text-rd-text-2 shadow-rd transition-colors duration-200 hover:border-rd-border-strong hover:bg-rd-surface-2 hover:text-rd-text"
                >
                  {item.label}
                  <span aria-hidden="true" className="text-rd-text-3">
                    →
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
