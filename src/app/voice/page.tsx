import type { Metadata } from "next";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { RelatedPages } from "@/components/RelatedPages";
import { SiteShell } from "@/components/SiteShell";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DepthFrame } from "@/components/ui/DepthFrame";
import {
  IconArrowRight,
  IconBrief,
  IconConfirm,
  IconNav,
  IconShare,
} from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { VoiceOrb } from "@/components/ui/VoiceOrb";

export const metadata: Metadata = {
  title: "Voice assistant",
  description:
    "Release Desk voice is a focused, confirmed set of actions on the same indexed desk — not an open-ended command surface.",
};

const items = [
  {
    icon: IconNav,
    title: "Hands-free navigation",
    body: "Move between releases, registers, and the Ask tab without hunting for the right window — useful when you are already in a standup or a war room.",
  },
  {
    icon: IconBrief,
    title: "Spoken briefings",
    body: "Ask for a manager-style brief: where the release sits, what is blocking it, and which gates are still closed.",
  },
  {
    icon: IconConfirm,
    title: "Confirmed voice actions",
    body: "A focused set of actions can be taken by voice — always confirmed before they run. Not every click in the product is voice-driven.",
  },
  {
    icon: IconShare,
    title: "Screen-share explain mode",
    body: "Optional. Walk a stakeholder through what they are looking at while the assistant narrates the current release state.",
  },
];

const inSet = [
  "Ask what is blocked on a named issue or area already in the index.",
  "Ask whether a pull request merged, and open the cited PR.",
  "Request a status recap for work the desk already knows.",
  "Trigger a write action only after an explicit confirm.",
];

const outSet = [
  "Every Jira transition, field edit, or bulk change by voice.",
  "Unsynced live queries against tools that are not in the index.",
  "Date-range reports or analytics the typed desk also does not claim.",
  "Hands-free writes with no confirmation step.",
];

export default function VoicePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Voice assistant"
        title="Hands-free, for people who cannot keep a window in front of them."
        subtitle="Voice is not a second product. It is the same indexed picture and the same confirmation gate, with a smaller set of verbs that we have actually confirmed."
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

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <Reveal>
            <Card padding="lg" className="h-full bg-gradient-to-br from-rd-surface-2 to-rd-surface">
              <VoiceOrb className="mx-auto mb-2" />
              <p className="mt-2 text-[13px] font-medium uppercase tracking-[0.14em] text-rd-text-3">
                Example briefing
              </p>
              <blockquote className="mt-3 text-lg font-medium leading-8 tracking-[-0.02em]">
                “REL-1842 is in UAT. Seven open blockers remain. AUTH-441 is still
                waiting on OPS-77. CAB is not open until the blocker register is
                clear.”
              </blockquote>
              <p className="mt-6 text-sm leading-6 text-rd-text-2">
                The same facts the gates use. Spoken, confirmed, and labelled when
                they come from StaffLess AI.
              </p>
            </Card>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item, i) => (
              <Reveal key={item.title} delay={i * 50}>
                <Card hover className="h-full">
                  <div className="mb-3 flex size-9 items-center justify-center rounded-lg border border-rd-border bg-rd-surface-2 text-rd-accent-hover">
                    <item.icon className="size-[18px]" />
                  </div>
                  <h3 className="text-[15px] font-semibold tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-rd-text-2">{item.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Confirmed set"
        title="What voice will and will not do"
        subtitle="Typed ask is still the precise surface. Voice is for standup, walk-throughs, and CAB recap — not every verb in the backlog."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <Reveal>
            <Card padding="lg" className="h-full">
              <Badge variant="live" dot>
                In the confirmed set
              </Badge>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em]">
                What voice will do
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-rd-text-2">
                {inSet.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-rd-verified" />
                    {line}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
          <Reveal delay={80}>
            <Card padding="lg" className="h-full">
              <Badge variant="roadmap">Not claimed</Badge>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em]">
                What voice will not pretend to do
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-rd-text-2">
                {outSet.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-rd-text-3" />
                    {line}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <DepthFrame>
            <div className="space-y-4 rounded-2xl border border-rd-border-strong bg-rd-surface p-6 shadow-rd-lg sm:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-rd-text-3">
                Confirm before write
              </p>
              <p className="text-lg font-medium tracking-[-0.02em]">
                “Comment on PAY-2042 that checkout is waiting on the auth PR.”
              </p>
              <p className="text-sm leading-6 text-rd-text-2">
                The desk restates the target issue and the comment text. Nothing
                posts until you confirm. Voice does not get a bypass.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="inline-flex min-h-11 items-center rounded-full bg-rd-accent px-4 text-sm font-medium text-white">
                  Confirm
                </span>
                <span className="inline-flex min-h-11 items-center rounded-full border border-rd-border px-4 text-sm text-rd-text-2">
                  Cancel
                </span>
              </div>
            </div>
          </DepthFrame>
        </Reveal>
      </Section>

      <RelatedPages current="/voice" />
      <PageCta
        title="Hear the focused set on a walkthrough"
        body="We will show the verbs that are live — and say clearly which ones are not."
      />
    </SiteShell>
  );
}
