import type { Metadata } from "next";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { RelatedPages } from "@/components/RelatedPages";
import { SiteShell } from "@/components/SiteShell";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DepthFrame } from "@/components/ui/DepthFrame";
import { IconArrowRight, IconChase, IconSpread, IconStatus } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Why Release Desk",
  description:
    "Scattered spreadsheets, chat threads, and manual status-chasing do not survive a real release calendar. Release Desk is the governed record.",
};

const costs = [
  {
    icon: IconSpread,
    title: "Scattered tools",
    body: "The plan lives in a spreadsheet, blockers in chat, tickets in Jira, and the CAB pack in last week’s slides. There is no system of record — so every stakeholder holds a different version of the truth.",
    fix: "Release Desk becomes the governed record. Registers sit next to the work, not beside it.",
  },
  {
    icon: IconStatus,
    title: "Unreliable status",
    body: "“Green” often means nobody has updated the sheet. Counts drift, owners change, and by the time a report is assembled the release has already moved.",
    fix: "Readiness is computed from rules and synced work items — not from whoever last typed into a cell.",
  },
  {
    icon: IconChase,
    title: "Wasted chasing",
    body: "Delivery leads spend the week pinging for updates instead of deciding. CAB materials are built by hand. “Are we ready?” is a meeting, not a gate.",
    fix: "Anyone can ask StaffLess AI and get a labelled answer from the same indexed data the gates already use.",
  },
];

const rituals = [
  {
    title: "Standup that restates Jira",
    body: "If the room is reconstructing what the board already knows, you are paying for a human index. That cost repeats every morning.",
  },
  {
    title: "Chat as a system of record",
    body: "Threads are useful for conversation. They are a poor store for “is this blocked?” The answer decays the moment someone mutes the channel.",
  },
  {
    title: "Spreadsheets as a second backlog",
    body: "Exporting issues into a tracker-of-trackers feels like control. It is usually a lagging copy with no pull-request evidence attached.",
  },
  {
    title: "CAB packs assembled by hand",
    body: "Governance should review evidence, not slide archaeology. If the pack is rebuilt from screenshots, the review is already late.",
  },
];

const audience = [
  {
    role: "Engineering & release managers",
    need: "A single place to ask what is blocked, what merged, and what still needs a ticket — without opening five tools.",
  },
  {
    role: "Delivery leads",
    need: "A desk that reflects the indexed Jira and GitHub picture so programme conversations start from the same facts.",
  },
  {
    role: "CAB & change owners",
    need: "A trail from question to issue, PR, and gate — not a narrative slide with no links.",
  },
];

export default function WhyPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Why Release Desk"
        title="You can’t govern what you can’t see clearly."
        subtitle="Most release programs still run on a patchwork of trackers, threads, and hallway updates. The work is real. The picture of it is not. Release Desk exists so Jira, GitHub, and the rules you already run can be asked as one desk."
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
        eyebrow="The cost"
        title="Fragmentation is not a slogan. It is hours."
        subtitle="This is time spent reconstructing a picture that already exists in tools you pay for."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {costs.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <Card hover className="h-full">
                <div className="mb-4 flex size-11 items-center justify-center rounded-xl border border-rd-border bg-rd-surface-2 text-rd-accent-hover">
                  <item.icon />
                </div>
                <h3 className="text-lg font-semibold tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-rd-text-2">{item.body}</p>
                <p className="mt-4 border-t border-rd-border pt-4 text-sm leading-6 text-rd-text">
                  {item.fix}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Where the week goes"
        title="The rituals that look like control"
      >
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="grid gap-4 sm:grid-cols-2">
            {rituals.map((item, i) => (
              <Reveal key={item.title} delay={i * 50}>
                <Card hover className="h-full">
                  <h3 className="text-[15px] font-semibold tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-rd-text-2">{item.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal delay={80}>
            <DepthFrame>
              <div className="space-y-5 rounded-2xl border border-rd-border-strong bg-rd-surface p-6 shadow-rd-lg sm:p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-rd-text-3">
                  Before → after
                </p>
                <div>
                  <p className="text-[13px] font-medium text-rd-text-3">Before</p>
                  <p className="mt-2 text-sm leading-6 text-rd-text-2">
                    Jira board → filter → screenshot → Slack → “anyone know if this
                    merged?”
                  </p>
                </div>
                <div className="border-t border-rd-border pt-5">
                  <p className="text-[13px] font-medium text-rd-verified">After</p>
                  <p className="mt-2 text-sm leading-6 text-rd-text">
                    “What is blocking checkout?” → cited issue, linked PR, and the
                    gate that is still closed.
                  </p>
                </div>
              </div>
            </DepthFrame>
          </Reveal>
        </div>
      </Section>

      <Section
        eyebrow="Who it is for"
        title="Built for the people who already own the release"
        subtitle="Release Desk does not replace Jira or GitHub. It indexes them, lets the team ask in language, and keeps the answer tied to the objects it came from."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {audience.map((item, i) => (
            <Reveal key={item.role} delay={i * 60}>
              <Card hover className="h-full">
                <Badge variant="accent">{item.role}</Badge>
                <p className="mt-4 text-sm leading-6 text-rd-text-2">{item.need}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <RelatedPages current="/why" />
      <PageCta
        title="See the desk against your workflow"
        body="A short walkthrough is enough to tell whether Release Desk fits how you already run Jira and GitHub."
      />
    </SiteShell>
  );
}
