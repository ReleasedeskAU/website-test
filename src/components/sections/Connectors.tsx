import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { ConnectorConstellation } from "@/components/ConnectorConstellation";

function JiraMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-7" aria-hidden="true">
      <path
        fill="#2684FF"
        d="M12.5 2L4 10.4c-.8.8-.8 2 0 2.8L9.2 18.3 12.5 15 20 7.6c.8-.8.8-2 0-2.8L12.5 2z"
      />
      <path
        fill="#2684FF"
        d="M12.5 8.7L9.2 12l3.3 3.3 3.3-3.3-3.3-3.3z"
        opacity="0.5"
      />
      <path fill="#2547A0" d="M12.5 15L9.2 18.3l3.3 3.3 7.5-7.4c.8-.8.8-2 0-2.8L12.5 15z" />
    </svg>
  );
}

function GitHubMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-7" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0112 6.84c.85 0 1.71.12 2.51.34 1.9-1.32 2.74-1.05 2.74-1.05.56 1.4.21 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.58 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.03 10.03 0 0022 12.26C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

export function Connectors() {
  return (
    <Section
      id="connectors"
      tone="muted"
      eyebrow="Connected tools"
      title="Jira and GitHub, live today. The rest is on the roadmap."
      subtitle="Connectors are a product, not a catalogue page. Release Desk syncs Jira and GitHub today. Teams, Outlook, Azure, and Slack are on the roadmap — we will not pretend they are live."
    >
      <Reveal>
        <ConnectorConstellation />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Reveal>
          <Card hover className="h-full">
            <div className="flex items-start justify-between gap-3">
              <div className="flex size-12 items-center justify-center rounded-xl border border-rd-border bg-rd-surface-2">
                <JiraMark />
              </div>
              <Badge variant="live" dot>
                Live
              </Badge>
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em]">Jira</h3>
            <p className="mt-2 text-sm leading-6 text-rd-text-2">
              Work items, links, and status sync into the release record. StaffLess AI
              and readiness gates read from this index — after it has synced.
            </p>
          </Card>
        </Reveal>
        <Reveal delay={70}>
          <Card hover className="h-full">
            <div className="flex items-start justify-between gap-3">
              <div className="flex size-12 items-center justify-center rounded-xl border border-rd-border bg-rd-surface-2 text-rd-text">
                <GitHubMark />
              </div>
              <Badge variant="live" dot>
                Live
              </Badge>
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em]">GitHub</h3>
            <p className="mt-2 text-sm leading-6 text-rd-text-2">
              Pull requests and deployment context sit next to the Jira work they
              belong to, so a release is more than a ticket list.
            </p>
          </Card>
        </Reveal>
        <Reveal delay={140}>
          <Card hover className="h-full border-dashed">
            <div className="flex items-start justify-between gap-3">
              <div className="flex size-12 items-center justify-center rounded-xl border border-dashed border-rd-border-strong bg-rd-bg/40 text-rd-text-3">
                <span className="text-lg font-semibold">+</span>
              </div>
              <Badge variant="roadmap">Roadmap</Badge>
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em]">More connectors</h3>
            <p className="mt-2 text-sm leading-6 text-rd-text-2">
              Additional tools are on the roadmap. We are not going to list a
              catalogue we cannot support yet. If a connector is decisive for you,
              say so on the demo request.
            </p>
          </Card>
        </Reveal>
      </div>

      <Reveal className="mt-8">
        <Card padding="lg">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-lg font-semibold tracking-[-0.02em]">
                Connector management, as a first-class screen
              </h3>
              <p className="mt-3 text-sm leading-6 text-rd-text-2">
                Admins connect Jira and GitHub, see last-sync time, and rotate
                credentials without leaving the product. Sync health is visible —
                because StaffLess AI is only as current as the index.
              </p>
            </div>
            <div className="rounded-xl border border-rd-border bg-rd-bg/50 p-4">
              <div className="mb-3 flex items-center justify-between text-[12px] text-rd-text-3">
                <span>Connectors</span>
                <span>Admin</span>
              </div>
              {[
                ["Jira Cloud", "Synced 12 min ago", "Connected"],
                ["GitHub org", "Synced 18 min ago", "Connected"],
              ].map(([name, sync, status]) => (
                <div
                  key={name}
                  className="flex items-center justify-between gap-3 border-t border-rd-border py-3 first:border-t-0"
                >
                  <div>
                    <p className="text-sm font-medium text-rd-text">{name}</p>
                    <p className="text-[12px] text-rd-text-3">{sync}</p>
                  </div>
                  <Badge variant="live" dot>
                    {status}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}
