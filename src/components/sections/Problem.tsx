import { Card } from "@/components/ui/Card";
import { IconChase, IconSpread, IconStatus } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const pains = [
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
    fix: "Anyone can ask StaffLess AI and get a verified answer from the same data the gates already use.",
  },
];

export function Problem() {
  return (
    <Section
      id="problem"
      eyebrow="The cost of scattered releases"
      title="You can’t govern what you can’t see clearly."
      subtitle="Most release programs still run on a patchwork of trackers, threads, and hallway updates. The work is real. The picture of it is not."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {pains.map((item, i) => (
          <Reveal key={item.title} delay={i * 70}>
            <Card hover className="h-full">
              <div className="mb-4 flex size-11 items-center justify-center rounded-xl border border-rd-border bg-rd-surface-2 text-rd-accent-hover">
                <item.icon />
              </div>
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-rd-text">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-rd-text-2">{item.body}</p>
              <p className="mt-4 border-t border-rd-border pt-4 text-sm leading-6 text-rd-text">
                {item.fix}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
