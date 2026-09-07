import type { Metadata } from "next";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { RelatedPages } from "@/components/RelatedPages";
import { SiteShell } from "@/components/SiteShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DepthFrame } from "@/components/ui/DepthFrame";
import {
  IconArrowRight,
  IconKey,
  IconLock,
  IconShield,
  IconSliders,
  IconUsers,
} from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Governance & security",
  description:
    "Roles, configurable gates, field locks, and connector credentials treated as credentials. StaffLess AI sees only what the role and index allow.",
};

const roles = [
  {
    name: "Read-only",
    body: "See releases, registers, and Ask answers. Cannot change fields, move stages, or manage connectors.",
  },
  {
    name: "Editor",
    body: "Update the work inside the rules: registers, unlocked fields, comments. Cannot override governance or credentials.",
  },
  {
    name: "Admin",
    body: "Configure workflows, gates, locks, and roles. Manage Jira and GitHub connectors and treat secrets as secrets.",
  },
];

const extras = [
  {
    icon: IconSliders,
    title: "Configurable governance",
    body: "Which stages exist, which gates fire, which fields lock, which registers are required — set per programme, not hardcoded as a single opinionated path.",
  },
  {
    icon: IconKey,
    title: "Credentials and sensitive fields",
    body: "Connector credentials are stored and rotated with discipline. Sensitive fields stay in the product’s control plane; they are not dumped into chat logs or sent to the AI.",
  },
  {
    icon: IconLock,
    title: "Least privilege by default",
    body: "Access is a role, not a shared spreadsheet link. If someone should only read CAB status, they get read-only — including in StaffLess AI.",
  },
  {
    icon: IconShield,
    title: "A trail you can stand behind",
    body: "Questions, citations, and confirmed actions stay attached to the work. That is the difference between a chat reply and a desk you can take to CAB.",
  },
];

export default function SecurityPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Governance & security"
        title="The right people see the right fields — and the rules still apply."
        subtitle="Release Desk is built for organisations that already have a CAB, an audit expectation, and no appetite for another shadow tracker. Roles are explicit. Governance is configurable. Credentials are treated as credentials."
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
        eyebrow="Access"
        title="Role-based access, including Ask"
      >
        <Reveal>
          <div className="mb-6 flex items-center gap-2 text-rd-accent-hover">
            <IconUsers />
            <p className="text-sm font-medium">Three roles. No shared spreadsheet link.</p>
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role, i) => (
            <Reveal key={role.name} delay={i * 60}>
              <Card hover className="h-full">
                <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-rd-accent-hover">
                  {role.name}
                </p>
                <p className="mt-3 text-sm leading-6 text-rd-text-2">{role.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Control plane"
        title="What stays in the product — and what never reaches the model"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {extras.map((item, i) => (
            <Reveal key={item.title} delay={i * 50}>
              <Card hover className="h-full">
                <div className="mb-4 flex size-10 items-center justify-center rounded-xl border border-rd-border bg-rd-surface-2 text-rd-accent-hover">
                  <item.icon />
                </div>
                <h3 className="text-[15px] font-semibold tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-rd-text-2">{item.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <DepthFrame>
            <div className="space-y-5 rounded-2xl border border-rd-border-strong bg-rd-surface p-6 shadow-rd-lg sm:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-rd-text-3">
                Honest boundaries
              </p>
              <ul className="space-y-4 text-sm leading-6 text-rd-text-2">
                <li>
                  <strong className="text-rd-text">AI scope.</strong> StaffLess AI
                  answers from the governed index. Credentials and personal data
                  from connectors are not sent to the model.
                </li>
                <li>
                  <strong className="text-rd-text">Sync, not live unsynced.</strong>{" "}
                  A field that changed after the last Jira or GitHub sync is not
                  a fact the desk should invent.
                </li>
                <li>
                  <strong className="text-rd-text">Connectors.</strong> Jira and
                  GitHub are live. Other tools stay on the roadmap until they are
                  actually wired.
                </li>
                <li>
                  <strong className="text-rd-text">Voice writes.</strong> Confirmed
                  actions only. No silent mutations.
                </li>
              </ul>
            </div>
          </DepthFrame>
        </Reveal>
      </Section>

      <RelatedPages current="/security" />
      <PageCta
        title="Walk the gates with your CAB path"
        body="Bring the stages and approvals you already run. We will show what locks, what a read-only user sees in Ask, and what stays out of the model."
      />
    </SiteShell>
  );
}
