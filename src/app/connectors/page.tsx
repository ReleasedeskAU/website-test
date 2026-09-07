import type { Metadata } from "next";
import { ConnectorConstellation } from "@/components/ConnectorConstellation";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { RelatedPages } from "@/components/RelatedPages";
import { SiteShell } from "@/components/SiteShell";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconArrowRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Connectors",
  description:
    "Jira and GitHub sync today. Microsoft Teams, Outlook, Azure, and Slack are on the roadmap — labelled as such, not presented as live.",
};

const live = [
  {
    name: "Jira",
    body: "Work items, links, status, and relationships sync into the release record. Gates and StaffLess AI read from this index after it has synced — not from a live unsynced query.",
  },
  {
    name: "GitHub",
    body: "Pull requests and deployment context sit next to the Jira work they belong to, so a release is more than a ticket list.",
  },
];

const roadmap = [
  {
    name: "Microsoft Teams",
    body: "Conversation context next to the release. Not connected today. We will not show a live badge until it is.",
  },
  {
    name: "Outlook",
    body: "Calendar and mail signals for cutover windows. Roadmap — useful, not claimed.",
  },
  {
    name: "Azure DevOps",
    body: "For programmes that still run boards or pipelines there. Roadmap.",
  },
  {
    name: "Slack",
    body: "Channel recap is not a system of record. If we connect Slack, it will be labelled and scoped — not a second backlog.",
  },
];

export default function ConnectorsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Connected tools"
        title="Jira and GitHub, live today. The rest is on the roadmap."
        subtitle="Connectors are a product, not a catalogue page. Release Desk syncs Jira and GitHub today. Teams, Outlook, Azure, and Slack orbit the desk as planned work — we will not pretend they are live."
        actions={
          <>
            <Button href="/" variant="secondary" size="lg" className="min-h-12">
              Back to overview
            </Button>
            <Button href="/demo" size="lg" className="min-h-12">
              Request a demo
              <IconArrowRight className="size-4" />
            </Button>
          </>
        }
      />

      <Section
        tone="muted"
        eyebrow="The desk in the middle"
        title="Data flows into one screen. Badges tell you what is real."
        subtitle="Scroll the constellation: live connectors send packets into Release Desk. Roadmap tools stay on the ring until they are actually wired."
      >
        <Reveal>
          <ConnectorConstellation />
        </Reveal>
        <p className="mt-6 max-w-2xl text-sm leading-6 text-rd-text-3">
          StaffLess AI is only as current as the last sync. If a fact is not in
          the index yet, the honest answer is that it is not in the picture.
        </p>
      </Section>

      <Section eyebrow="Live" title="What syncs today">
        <div className="grid gap-4 md:grid-cols-2">
          {live.map((item, i) => (
            <Reveal key={item.name} delay={i * 60}>
              <Card hover className="h-full">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-[-0.02em]">{item.name}</h3>
                  <Badge variant="live" dot>
                    Live
                  </Badge>
                </div>
                <p className="mt-3 text-sm leading-6 text-rd-text-2">{item.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Roadmap"
        title="Named because teams ask. Not because they are live."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {roadmap.map((item, i) => (
            <Reveal key={item.name} delay={i * 50}>
              <Card hover className="h-full border-dashed">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-[-0.02em]">{item.name}</h3>
                  <Badge variant="roadmap">Roadmap</Badge>
                </div>
                <p className="mt-3 text-sm leading-6 text-rd-text-2">{item.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Admin" title="Connector management is a first-class screen">
        <Reveal>
          <Card padding="lg">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.02em]">
                  Sync health, credentials, last-seen time
                </h3>
                <p className="mt-3 text-sm leading-6 text-rd-text-2">
                  Admins connect Jira and GitHub, see last-sync time, and rotate
                  credentials without leaving the product. Sync health is visible
                  because StaffLess AI is only as current as the index.
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-rd-text-2">
                  <li className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-rd-verified" />
                    Last-sync timestamps on the connector row
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-rd-verified" />
                    Credential rotation without dumping secrets into chat
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-rd-verified" />
                    Roadmap connectors stay labelled until they ship
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-rd-border bg-rd-bg/50 p-4">
                <div className="mb-3 flex items-center justify-between text-[12px] text-rd-text-3">
                  <span>Connectors</span>
                  <span>Admin</span>
                </div>
                {(
                  [
                    { name: "Jira Cloud", sync: "Synced 12 min ago", status: "Connected", live: true },
                    { name: "GitHub org", sync: "Synced 18 min ago", status: "Connected", live: true },
                    { name: "Microsoft Teams", sync: "Not connected", status: "Roadmap", live: false },
                  ] as const
                ).map((row) => (
                  <div
                    key={row.name}
                    className="flex items-center justify-between gap-3 border-t border-rd-border py-3 first:border-t-0"
                  >
                    <div>
                      <p className="text-sm font-medium text-rd-text">{row.name}</p>
                      <p className="text-[12px] text-rd-text-3">{row.sync}</p>
                    </div>
                    {row.live ? (
                      <Badge variant="live" dot>
                        {row.status}
                      </Badge>
                    ) : (
                      <Badge variant="roadmap">{row.status}</Badge>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </Reveal>
      </Section>

      <RelatedPages current="/connectors" />
      <PageCta
        title="Tell us which connector is decisive"
        body="If Teams, Azure, or Slack is a blocker, say so on the request. We would rather hear that than ship a fake catalogue."
      />
    </SiteShell>
  );
}
