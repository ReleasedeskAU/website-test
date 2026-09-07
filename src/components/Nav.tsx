"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IconClose, IconMenu } from "@/components/ui/Icons";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

const links = [
  { href: "#platform", label: "Platform" },
  { href: "#ai", label: "StaffLess AI" },
  { href: "#voice", label: "Voice" },
  { href: "#connectors", label: "Connectors" },
  { href: "#security", label: "Security" },
];

export function Nav() {
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
        <a href="#top" className="relative z-10 shrink-0 rounded-lg">
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-rd-text-2 transition-colors duration-200 hover:bg-white/5 hover:text-rd-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#demo" size="sm">
            Request a demo
          </Button>
        </div>

        <button
          type="button"
          className="relative z-10 inline-flex size-10 items-center justify-center rounded-lg text-rd-text-2 transition-colors hover:bg-white/5 hover:text-rd-text lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </Container>

      <div
        className={cn(
          "lg:hidden overflow-hidden border-t border-rd-border bg-rd-bg/95 backdrop-blur-xl transition-[max-height,opacity] duration-200 ease-out",
          open ? "max-h-[420px] opacity-100" : "max-h-0 border-transparent opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Mobile">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-[15px] text-rd-text-2 transition-colors hover:bg-white/5 hover:text-rd-text"
            >
              {link.label}
            </a>
          ))}
          <Button href="#demo" className="mt-2 w-full" onClick={() => setOpen(false)}>
            Request a demo
          </Button>
        </nav>
      </div>
    </header>
  );
}
