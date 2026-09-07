import { Card } from "@/components/ui/Card";
import { IconGate, IconLayers, IconLock, IconWorkflow } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

const stages = [
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

const features = [
  {
    icon: IconGate,
    title: "Automated readiness gates",
    body: "A release does not move because someone said it could. Gates check the rules you configured — sign-offs, blockers, environments, outstanding risk — before the next stage opens.",
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
    body: "The side-systems that usually live in extra tabs sit inside the release: blockers, approvals, risk, incidents, and the rest — queryable, gated, and visible.",
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

export function Platform() {
  return (
    <Section
      id="platform"
      tone="muted"
      eyebrow="Core platform"
      title="Every release follows enforced, configurable rules."
      subtitle="Releases move through a defined lifecycle. Gates are automated. Fields lock when they should. Supporting registers sit next to the work — not in a side spreadsheet."
    >
      <Reveal>
        <div>
          <ol className="flex flex-wrap items-center gap-y-2">
            {stages.map((stage, i) => (
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
                {i < stages.length - 1 ? (
                  <span
                    className={cn(
                      "mx-1.5 h-px w-3 sm:w-6",
                      i < 3 ? "bg-rd-verified/40" : "bg-rd-border-strong",
                    )}
                  />
                ) : null}
              </li>
            ))}
          </ol>
        </div>
        <p className="mt-3 text-[13px] text-rd-text-2">
          Example path for REL-1842 — currently in UAT, waiting on remaining blockers
          before CAB.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
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
  );
}
