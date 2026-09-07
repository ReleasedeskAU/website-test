import { Card } from "@/components/ui/Card";
import { IconKey, IconLock, IconSliders, IconUsers } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

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
];

export function Governance() {
  return (
    <Section
      id="security"
      eyebrow="Governance & security"
      title="The right people see the right fields — and the rules still apply."
      subtitle="Release Desk is built for organisations that already have a CAB, an audit expectation, and no appetite for another shadow tracker. Roles are explicit. Governance is configurable. Credentials are treated as credentials."
    >
      <Reveal>
        <div className="mb-4 flex items-center gap-2 text-rd-accent-hover">
          <IconUsers />
          <p className="text-sm font-medium">Role-based access</p>
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
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {extras.map((item, i) => (
          <Reveal key={item.title} delay={i * 60}>
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
  );
}
