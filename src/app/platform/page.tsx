import type { Metadata } from "next";
import { AskMock } from "@/components/AskMock";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { RelatedPages } from "@/components/RelatedPages";
import { SiteShell } from "@/components/SiteShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DepthFrame } from "@/components/ui/DepthFrame";
import {
  IconArrowRight,
  IconGate,
  IconLayers,
  IconLock,
  IconWorkflow,
} from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Every release follows enforced, configurable rules. Gates, locks, and supporting registers sit next to the work — then anyone can ask the same picture.",
};

const path = [
  { name: "Draft", state: "done" },
  { name: "Planning", state: "done" },
  { name: "Testing", state: "done" },
  { name: "UAT", state: "current" },
  { name: "CAB", state: "next" },
  { name: "Ready", state: "next" },
  { name: "Deploying", state: "next" },
  { name: "Deployed", state: "next" },
  { name: "Closed", state: "next" },
] as const;

const loop = [
  {
    n: "01",
    title: "Connect",
    body: "Link the systems that already hold the work. Jira and GitHub are live today. Teams, Outlook, Azure DevOps, and Slack are on the roadmap — not presented as live.",
  },
  {
    n: "02",
    title: "Index",
    body: "Release Desk builds a searchable picture of issues, pull requests, and related objects. StaffLess AI answers from that index, not from unsynced live queries.",
  },
  {
    n: "03",
    title: "Govern",
    body: "Lifecycle stages, gates, and field locks are yours to configure. A release does not move because someone said it could.",
  },
  {
    n: "04",
    title: "Ask",
    body: "Type a question in the language you already use: blocked work, merge status, what still needs a ticket. Answers come back labelled and cited.",
  },
  {
    n: "05",
    title: "Act",
    body: "When an action is in the confirmed set, the desk can carry it out after you confirm. Voice uses the same rule — focused verbs, not an open command surface.",
  },
];

const features = [
  {
    icon: IconGate,
    title: "Automated readiness gates",
    body: "Gates check the rules you configured — sign-offs, blockers, environments, outstanding risk — before the next stage opens.",
  },
  {
    icon: IconWorkflow,
    title: "Configurable workflows",
    body: "Lifecycle stages, required registers, and approval paths adapt to how your organisation actually ships. The rules are yours. Enforcement is the product’s job.",
  },
  {
    icon: IconLock,
    title: "Field-level locking",
    body: "Once a stage is passed, fields that should not drift are locked. Editors keep working where they should; the record stays honest where it must.",
  },
  {
    icon: IconLayers,
    title: "Supporting registers",
    body: "Blockers, approvals, risk, incidents, dependencies, conflicts, drift, and environment booking sit inside the release — queryable and gated.",
  },
];

const registers = [
  "Blockers",
  "Approvals",
  "Sign-offs",
  "Risk",
  "Incidents",
  "Dependencies",
  "Conflicts",
  "Drift",
  "Environment Booking",
];

export default function PlatformPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Core platform"
        title="Every release follows enforced, configurable rules."
        subtitle="Releases move through a defined lifecycle. Gates are automated. Fields lock when they should. Supporting registers sit next to the work — not in a side spreadsheet. Then anyone can ask the same picture."
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
        visual={
          <DepthFrame interactive>
            <AskMock />
          </DepthFrame>
        }
      />

      <Section
        tone="muted"
        eyebrow="Lifecycle"
        title="An example path — not the only path"
        subtitle="REL-1842 is in UAT. Remaining blockers still close the CAB gate. Your programme can add, rename, or skip stages."
      >
        <Reveal>
          <ol className="grid grid-cols-2 gap-2 sm:hidden">
            {path.map((stage) => (
              <li
                key={stage.name}
                className={cn(
                  "flex min-h-11 items-center gap-2 rounded-full border px-3 text-[12px] font-medium",
                  stage.state === "done" &&
                    "border-rd-verified/25 bg-rd-verified-soft text-rd-verified",
                  stage.state === "current" &&
                    "border-rd-accent/40 bg-rd-accent-soft text-rd-accent-hover shadow-rd-sm",
                  stage.state === "next" &&
                    "border-rd-border bg-rd-surface text-rd-text-3",
                )}
              >
                <span
                  className={cn(
                    "size-1.5 shrink-0 rounded-full",
                    stage.state === "done" && "bg-rd-verified",
                    stage.state === "current" && "bg-rd-accent",
                    stage.state === "next" && "bg-rd-text-3",
                  )}
                />
                {stage.name}
              </li>
            ))}
          </ol>
          <ol className="hidden flex-wrap items-center gap-y-2 sm:flex">
            {path.map((stage, i) => (
              <li key={stage.name} className="flex items-center">
                <div
                  className={cn(
                    "flex items-center gap-2 rounded-full border px-3 py-1.5 text-[12px] font-medium",
                    stage.state === "done" &&
                      "border-rd-verified/25 bg-rd-verified-soft text-rd-verified",
                    stage.state === "current" &&
                      "border-rd-accent/40 bg-rd-accent-soft text-rd-accent-hover shadow-rd-sm",
                    stage.state === "next" &&
                      "border-rd-border bg-rd-surface text-rd-text-3",
                  )}
                >
                  <span
                    className={cn(
                      "size-1.5 rounded-full",
                      stage.state === "done" && "bg-rd-verified",
                      stage.state === "current" && "bg-rd-accent",
                      stage.state === "next" && "bg-rd-text-3",
                    )}
                  />
                  {stage.name}
                </div>
                {i < path.length - 1 ? (
                  <span
                    className={cn(
                      "mx-1.5 h-px w-3 sm:w-5 lg:w-6",
                      i < 3 ? "bg-rd-verified/40" : "bg-rd-border-strong",
                    )}
                  />
                ) : null}
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>

      <Section
        eyebrow="The loop"
        title="Connect, index, govern, ask, act."
        subtitle="The product is the loop from a connected source to an answer you can open, and an action you can confirm."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {loop.map((stage, i) => (
            <Reveal key={stage.n} delay={i * 50}>
              <Card hover className="h-full">
                <p className="font-mono text-[12px] text-rd-text-3">{stage.n}</p>
                <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em]">
                  {stage.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-rd-text-2">{stage.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Enforcement"
        title="Rules you configure. Gates the product runs."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {features.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <Card hover className="h-full">
                <div className="mb-4 flex size-10 items-center justify-center rounded-xl border border-rd-border bg-rd-surface-2 text-rd-accent-hover">
                  <item.icon />
                </div>
                <h3 className="text-lg font-semibold tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-rd-text-2">{item.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Card padding="lg">
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-rd-text-3">
              Supporting registers
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-rd-text-2">
              The operational record that usually fragments across tools is modelled
              beside the release, so gates and StaffLess AI can see the same facts.
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {registers.map((name) => (
                <li
                  key={name}
                  className="rounded-lg border border-rd-border bg-rd-surface-2 px-3 py-1.5 text-[13px] text-rd-text-2"
                >
                  {name}
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </Section>

      <RelatedPages current="/platform" />
      <PageCta
        title="Walk the lifecycle with your boards"
        body="Bring a Jira project and a GitHub repo. We will show connect → index → gate → ask on work you recognise."
      />
    </SiteShell>
  );
}
