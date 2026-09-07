import type { Metadata } from "next";
import { ChatMock } from "@/components/ChatMock";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { RelatedPages } from "@/components/RelatedPages";
import { SiteShell } from "@/components/SiteShell";
import { AiMark, VerifiedSeal } from "@/components/ui/AiMark";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DepthFrame } from "@/components/ui/DepthFrame";
import {
  IconArrowRight,
  IconChat,
  IconCheck,
  IconDatabase,
  IconEyeOff,
  IconSearch,
} from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "StaffLess AI",
  description:
    "StaffLess AI answers from indexed Jira and GitHub data. Exact counts are verified. Syntheses are labelled. If it cannot answer, it says so.",
};

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
    body: "Natural language is routed to the right retrieval path — embeddings where that is honest, structured queries where the question is a fact.",
  },
  {
    icon: IconEyeOff,
    title: "PII stays out of the model",
    body: "Credentials and personal data from connected tools are not sent to the AI. StaffLess AI sees what it is allowed to see from the governed index — nothing more.",
  },
];

const rules = [
  {
    title: "Indexed data, not live unsynced queries",
    body: "Answers come from what Release Desk has synced and indexed. If a ticket moved thirty seconds ago and the index has not caught up, the desk should not pretend it has the latest field.",
  },
  {
    title: "Citations are the product",
    body: "A useful answer names the issue, pull request, or register entry. If you cannot click through, it is a summary — not a desk.",
  },
  {
    title: "No invented date-range analytics",
    body: "StaffLess AI does not claim date-range reporting it cannot back with indexed objects. Ask about the work in the picture, not a dashboard that is not there.",
  },
  {
    title: "Silence is a valid answer",
    body: "When the index does not contain the fact, the honest reply is that it is not in the picture — not a fluent guess dressed as status.",
  },
];

export default function AiPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="StaffLess AI · Flagship"
        title="Most release chatbots guess. This one doesn’t."
        subtitle="Generic AI chat over your tools samples a few tickets and sounds sure of itself. StaffLess AI is built the other way around: exact counts from verified data, direct lookups with relationships, and a label on every answer."
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

      <Section tone="ai" className="border-y border-rd-border">
        <div className="relative">
          <AiMark className="pointer-events-none absolute left-[42%] -top-4 z-0 hidden opacity-70 lg:block" />
          <div className="relative z-[1] grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
            <div className="min-w-0 space-y-4">
              <Reveal>
                <div className="flex flex-wrap items-center gap-3">
                  <VerifiedSeal />
                  <Badge variant="verified" dot>
                    From the index
                  </Badge>
                </div>
              </Reveal>
              {capabilities.map((item, i) => (
                <Reveal key={item.title} delay={i * 60}>
                  <Card hover>
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
            <Reveal delay={80} className="relative min-w-0">
              <DepthFrame>
                <ChatMock />
              </DepthFrame>
              <p className="mt-4 text-[13px] leading-5 text-rd-text-3">
                Try the example prompts. “Can’t answer” is a first-class outcome —
                including live unsynced queries and tickets that are not in the index yet.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="How a question is handled"
        title="Retrieve, ground, label, optionally act."
      >
        <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["1. Retrieve", "The question is matched against indexed issues, PRs, and related objects — not against the open internet."],
            ["2. Ground", "The model is constrained to those objects. If nothing matches, it should say the fact is not in the index."],
            ["3. Label", "Verified, based on search, or can’t answer. The label is part of the reply, not fine print."],
            ["4. Optional act", "Write actions stay behind confirmation. Voice uses the same gate."],
          ].map(([title, body], i) => (
            <Reveal key={title} delay={i * 50}>
              <Card hover className="h-full">
                <h3 className="text-base font-semibold tracking-[-0.02em]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-rd-text-2">{body}</p>
              </Card>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section
        tone="muted"
        eyebrow="Boundaries"
        title="Limits we will not blur"
        subtitle="Marketing that over-claims AI is how teams lose trust in the desk. These limits are part of the product."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {rules.map((r, i) => (
            <Reveal key={r.title} delay={i * 50}>
              <Card hover className="h-full">
                <h3 className="text-lg font-semibold tracking-[-0.02em]">{r.title}</h3>
                <p className="mt-2 text-sm leading-6 text-rd-text-2">{r.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <RelatedPages current="/ai" />
      <PageCta
        title="Ask a question against your index"
        body="On a walkthrough we use your Jira keys and GitHub PRs so the citations look like work you already know."
      />
    </SiteShell>
  );
}
