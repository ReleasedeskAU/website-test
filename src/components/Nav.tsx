"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IconClose, IconMenu } from "@/components/ui/Icons";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";
import { demoHref, primaryNav } from "@/lib/nav";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-200",
        scrolled || open
          ? "border-rd-border bg-rd-bg/80 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="relative z-10 shrink-0 rounded-lg">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {primaryNav.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex min-h-10 items-center rounded-lg px-2.5 py-2 text-sm transition-colors duration-200",
                  active
                    ? "bg-white/5 text-rd-text"
                    : "text-rd-text-2 hover:bg-white/5 hover:text-rd-text",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden xl:block">
          <Button href={demoHref} size="md" className="min-h-10">
            Request a demo
          </Button>
        </div>

        <button
          type="button"
          className="relative z-10 inline-flex size-11 items-center justify-center rounded-lg text-rd-text-2 transition-colors hover:bg-white/5 hover:text-rd-text xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </Container>

      <div
        className={cn(
          "xl:hidden overflow-hidden border-t border-rd-border bg-rd-bg/95 backdrop-blur-xl transition-[max-height,opacity] duration-200 ease-out",
          open ? "max-h-[560px] opacity-100" : "max-h-0 border-transparent opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Mobile">
          {primaryNav.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex min-h-11 items-center rounded-xl px-3 py-3 text-[15px] transition-colors",
                  active
                    ? "bg-white/5 text-rd-text"
                    : "text-rd-text-2 hover:bg-white/5 hover:text-rd-text",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Button
            href={demoHref}
            size="lg"
            className="mt-2 min-h-12 w-full"
            onClick={() => setOpen(false)}
          >
            Request a demo
          </Button>
        </nav>
      </div>
    </header>
  );
}
