import { Card } from "@/components/ui/Card";
import { IconBrief, IconConfirm, IconNav, IconShare } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { VoiceOrb } from "@/components/ui/VoiceOrb";

const items = [
  {
    icon: IconNav,
    title: "Hands-free navigation",
    body: "Move between releases, registers, and the Ask tab without hunting for the right window — useful when you are already in a standup or a war room.",
  },
  {
    icon: IconBrief,
    title: "Spoken briefings",
    body: "Ask for a manager-style brief: where the release sits, what is blocking it, and which gates are still closed. Built for people who need the picture, not another dashboard tab.",
  },
  {
    icon: IconConfirm,
    title: "Confirmed voice actions",
    body: "A focused set of actions can be taken by voice — always confirmed before they run. This is not a promise that every click in the product is voice-driven.",
  },
  {
    icon: IconShare,
    title: "Screen-share explain mode",
    body: "Optional. Walk a stakeholder through what they are looking at while the assistant narrates the current release state. Productivity, not theatre.",
  },
];

export function Voice() {
  return (
    <Section
      id="voice"
      eyebrow="Voice assistant"
      title="Hands-free, for people who cannot keep a window in front of them."
      subtitle="Release managers live in meetings, war rooms, and CAB. Voice is a productivity layer: navigate, get a spoken brief, and take a small set of confirmed actions — not a novelty microphone on the homepage."
    >
      <div className="grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <Reveal className="min-w-0">
          <Card padding="lg" className="h-full bg-gradient-to-br from-rd-surface-2 to-rd-surface">
            <VoiceOrb className="mx-auto mb-2" />
            <p className="mt-2 text-[13px] font-medium uppercase tracking-[0.14em] text-rd-text-3">
              Example briefing
            </p>
            <blockquote className="mt-3 text-lg font-medium leading-8 tracking-[-0.02em] text-rd-text">
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
        <div className="grid min-w-0 gap-4 sm:grid-cols-2">
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
  );
}
