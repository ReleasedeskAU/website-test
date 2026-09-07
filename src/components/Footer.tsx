import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

const product = [
  { href: "#platform", label: "Core platform" },
  { href: "#ai", label: "StaffLess AI" },
  { href: "#voice", label: "Voice assistant" },
  { href: "#connectors", label: "Connected tools" },
  { href: "#security", label: "Governance" },
];

const legal = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-rd-border bg-rd-bg-elevated/80">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#top">
              <Logo />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-6 text-rd-text-2">
              Governed release management for teams who are done chasing status —
              with an AI that answers from verified data.
            </p>
          </div>
          <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-rd-text-3">
              Product
            </p>
            <ul className="mt-4 space-y-2.5">
              {product.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-rd-text-2 transition-colors duration-200 hover:text-rd-text"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-rd-text-3">
              Legal
            </p>
            <ul className="mt-4 space-y-2.5">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-rd-text-2 transition-colors duration-200 hover:text-rd-text"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="#demo"
                  className="text-sm text-rd-text-2 transition-colors duration-200 hover:text-rd-text"
                >
                  Request a demo
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-rd-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-rd-text-3">
            © {new Date().getFullYear()} Release Desk. All rights reserved.
          </p>
          <p className="text-sm text-rd-text-3">
            Built for engineering managers, release managers, and CAB stakeholders.
          </p>
        </div>
      </Container>
    </footer>
  );
}
