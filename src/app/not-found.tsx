import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-col bg-rd-bg">
      <header className="border-b border-rd-border">
        <Container className="flex h-16 items-center">
          <Link href="/">
            <Logo />
          </Link>
        </Container>
      </header>
      <Container className="flex flex-1 flex-col items-start justify-center py-24">
        <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-rd-accent-hover">
          404
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
          This page isn’t on the board.
        </h1>
        <p className="mt-4 max-w-md text-sm leading-6 text-rd-text-2">
          The URL doesn’t match a page on the Release Desk site. Head back to the
          product overview.
        </p>
        <Button href="/" className="mt-8">
          Back to homepage
        </Button>
      </Container>
    </div>
  );
}
