import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export const metadata: Metadata = {
  title: "Terms",
};

export default function TermsPage() {
  return (
    <div className="min-h-full bg-rd-bg">
      <header className="border-b border-rd-border">
        <Container className="flex h-16 items-center">
          <Link href="/">
            <Logo />
          </Link>
        </Container>
      </header>
      <Container className="max-w-3xl py-16">
        <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-rd-accent-hover">
          Legal
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">Terms of use</h1>
        <p className="mt-4 text-sm text-rd-text-3">Placeholder · Last updated 7 September 2026</p>
        <div className="mt-8 space-y-4 text-sm leading-7 text-rd-text-2">
          <p>
            These are placeholder terms for the Release Desk marketing website.
            They do not constitute a customer agreement for the product.
          </p>
          <p>
            The site is provided for informational purposes. Product capabilities
            described on the homepage reflect current intent and honest
            limitations (including live connectors limited to Jira and GitHub).
          </p>
          <p>
            <Link href="/" className="text-rd-accent-hover underline-offset-4 hover:underline">
              Back to Release Desk
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
}
