import { ChatMock } from "@/components/ChatMock";
import { Card } from "@/components/ui/Card";
import {
  IconChat,
  IconCheck,
  IconDatabase,
  IconEyeOff,
  IconSearch,
} from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const capabilities = [
  {
    icon: IconCheck,
    title: "Exact counts from verified data",
    body: "Ticket totals, blockers, sign-offs — answered as counts from the index, not as a confident guess from a handful of samples.",
  },
  {
    icon: IconChat,
    title: "Direct ticket lookups, with relationships",
    body: "Ask for a work item and get the record plus what it blocks, what blocks it, and where it sits on the release.",
  },
  {
    icon: IconSearch,
    title: "Every answer is labelled",
    body: "Verified when the answer is an exact query. Based on search when it is a synthesis. If it cannot answer, it says so.",
  },
];

const credibility = [
  {
    icon: IconDatabase,
    title: "Semantic search + exact queries",
    body: "Built on an enterprise open-source AI search foundation. Natural language is routed to the right retrieval path — embeddings where that is honest, structured queries where the question is a fact.",
  },
  {
    icon: IconEyeOff,
    title: "PII stays out of the model",
    body: "Credentials and personal data from connected tools are not sent to the AI. StaffLess AI sees what it is allowed to see from the governed index — nothing more.",
  },
];

export function AiEngine() {
  return (
    <Section
      id="ai"
      tone="ai"
      featured
      className="border-y border-rd-border"
      eyebrow="StaffLess AI · Flagship"
      title="Most release chatbots guess. This one doesn’t."
      subtitle="Generic AI chat over your tools samples a few tickets and sounds sure of itself. StaffLess AI is built the other way around: exact counts from verified data, direct lookups with relationships, and a label on every answer. If it can’t answer, it says so."
    >
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
        <div className="space-y-4">
          {capabilities.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <Card>
                <div className="flex gap-4">
                  <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl border border-rd-verified/20 bg-rd-verified-soft text-rd-verified">
                    <item.icon />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold tracking-[-0.02em]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-rd-text-2">{item.body}</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
          {credibility.map((item, i) => (
            <Reveal key={item.title} delay={180 + i * 60}>
              <Card className="border-rd-border bg-rd-bg-elevated/50">
                <div className="flex gap-4">
                  <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl border border-rd-border bg-rd-surface-2 text-rd-accent-hover">
                    <item.icon />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold tracking-[-0.02em]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-rd-text-2">{item.body}</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal delay={80}>
          <ChatMock />
          <p className="mt-4 text-[13px] leading-5 text-rd-text-3">
            Answers come from indexed, synced data — not a live query beyond that
            sync. Example questions above are representative of what StaffLess AI
            can and cannot do today.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
