import type { Metadata } from "next";
import { DemoForm } from "@/components/DemoForm";
import { PageHero } from "@/components/PageHero";
import { RelatedPages } from "@/components/RelatedPages";
import { SiteShell } from "@/components/SiteShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DepthFrame } from "@/components/ui/DepthFrame";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Request a demo",
  description:
    "See Release Desk on a release that looks like yours. We’ll walk the lifecycle, the gates, and StaffLess AI — including what it will and will not answer today.",
};

const agenda = [
  {
    title: "Your lifecycle, not a canned one",
    body: "Draft through Closed, or the stages you actually run. Gates, locks, and registers against a cutover you recognise.",
  },
  {
    title: "StaffLess AI on indexed data",
    body: "Exact counts, ticket lookups, labelled synthesis — and a question it should refuse, so you see the boundary.",
  },
  {
    title: "Connectors as they are",
    body: "Jira and GitHub live. Teams, Outlook, Azure, and Slack as roadmap. No catalogue theatre.",
  },
  {
    title: "Voice, if you want it",
    body: "The focused confirmed set — navigation, brief, confirm-before-write — not every action in the product.",
  },
];

export default function DemoPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Request a demo"
        title="See Release Desk on a release that looks like yours."
        subtitle="We’ll walk the lifecycle, the gates, and StaffLess AI — including what it will and will not answer today. Bring a real cutover if you can. Plain conversation, no theatre."
        actions={
          <Button href="/" variant="secondary" size="lg" className="min-h-12">
            Back to overview
          </Button>
        }
      />

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="min-w-0 space-y-4">
            {agenda.map((item, i) => (
              <Reveal key={item.title} delay={i * 50}>
                <Card hover>
                  <h2 className="text-base font-semibold tracking-[-0.02em]">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-rd-text-2">{item.body}</p>
                </Card>
              </Reveal>
            ))}
            <Reveal delay={200}>
              <ul className="space-y-3 pt-2 text-sm leading-6 text-rd-text-2">
                <li className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-rd-verified" />
                  Governed path from Draft through Closed
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-rd-verified" />
                  StaffLess AI on indexed Jira and GitHub data
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-rd-verified" />
                  Roles, locks, and connector management
                </li>
              </ul>
            </Reveal>
          </div>
          <Reveal delay={80} className="min-w-0">
            <DepthFrame>
              <Card padding="lg">
                <DemoForm />
              </Card>
            </DepthFrame>
          </Reveal>
        </div>
      </Section>

      <RelatedPages current="/demo" />
    </SiteShell>
  );
}
