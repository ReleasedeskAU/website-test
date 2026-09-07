import { SiteShell } from "@/components/SiteShell";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <SiteShell>
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
    </SiteShell>
  );
}
