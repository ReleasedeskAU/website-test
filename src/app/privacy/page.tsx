import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <SiteShell>
      <Container className="max-w-3xl py-16">
        <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-rd-accent-hover">
          Legal
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
          Privacy policy
        </h1>
        <p className="mt-4 text-sm text-rd-text-3">Placeholder · Last updated 7 September 2026</p>
        <div className="mt-8 space-y-4 text-sm leading-7 text-rd-text-2">
          <p>
            This is a placeholder privacy notice for the Release Desk marketing
            site. A complete policy will be published before any production
            customer data is processed.
          </p>
          <p>
            This site does not require an account. The demo-request form
            validates in the browser and does not submit to a server in this
            version.
          </p>
          <p>
            If you contact us by email, we will use that correspondence only to
            respond to your request.
          </p>
          <p>
            <Link href="/" className="text-rd-accent-hover underline-offset-4 hover:underline">
              Back to Release Desk
            </Link>
          </p>
        </div>
      </Container>
    </SiteShell>
  );
}
