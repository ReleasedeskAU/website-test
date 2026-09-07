import { Badge } from "@/components/ui/Badge";
import { IconSend } from "@/components/ui/Icons";
import { cn } from "@/lib/cn";

const tickets = [
  { key: "AUTH-441", title: "Login token refresh fails on rotate", status: "In progress", sev: "High" },
  { key: "PAY-918", title: "Settlement timeout on retry path", status: "Blocked", sev: "Critical" },
  { key: "API-220", title: "Rate-limit headers missing on 429", status: "In progress", sev: "High" },
  { key: "OPS-77", title: "Canary health check flapping", status: "To do", sev: "Medium" },
];

export function AskMock({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-rd-border-strong bg-rd-surface shadow-rd-lg",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-rd-border bg-rd-surface-2/80 px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#FF5F57]" />
          <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="size-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex min-w-0 flex-1 items-center justify-between gap-3">
          <p className="truncate text-[13px] font-medium text-rd-text-2">
            Release Desk
            <span className="mx-2 text-rd-text-3">/</span>
            REL-1842 Spring Cutover
          </p>
          <span className="hidden shrink-0 rounded-md border border-rd-border bg-rd-bg/50 px-2 py-0.5 font-mono text-[11px] text-rd-text-3 sm:inline">
            UAT
          </span>
        </div>
      </div>

      <div className="flex gap-1 overflow-x-auto border-b border-rd-border px-3 pt-2">
        {["Overview", "Work items", "Ask", "Registers"].map((tab) => {
          const active = tab === "Ask";
          return (
            <span
              key={tab}
              className={cn(
                "relative whitespace-nowrap px-3 pb-2.5 text-[13px]",
                active ? "font-medium text-rd-text" : "text-rd-text-3",
              )}
            >
              {tab}
              {active ? (
                <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-rd-accent" />
              ) : null}
            </span>
          );
        })}
      </div>

      <div className="flex items-center justify-between gap-3 border-b border-rd-border px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-medium text-rd-text">StaffLess AI</span>
          <Badge variant="accent">Ask</Badge>
        </div>
        <p className="text-[11px] text-rd-text-3">Indexed Jira · synced 12 min ago</p>
      </div>

      <div className="space-y-4 bg-rd-bg/40 px-4 py-5 sm:px-5">
        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-2xl rounded-br-md bg-rd-accent-soft px-3.5 py-2.5 text-[13px] leading-5 text-rd-text">
            How many open tickets are still blocking REL-1842?
          </div>
        </div>

        <div className="max-w-[95%] space-y-3 rounded-2xl rounded-bl-md border border-rd-border bg-rd-surface-2/90 p-3.5 shadow-rd-sm">
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex size-6 items-center justify-center rounded-md bg-rd-accent-soft text-[10px] font-semibold text-rd-accent-hover">
              AI
            </span>
            <Badge variant="verified" dot>
              Verified
            </Badge>
          </div>
          <p className="text-[13px] leading-5 text-rd-text">
            REL-1842 has{" "}
            <span className="font-semibold text-rd-verified">7 open blocking tickets</span>
            . Exact count from indexed Jira work items linked to this release.
          </p>
          <div className="overflow-hidden rounded-xl border border-rd-border bg-rd-bg/60">
            <table className="w-full text-left text-[12px]">
              <thead className="text-rd-text-3">
                <tr className="border-b border-rd-border">
                  <th className="px-3 py-2 font-medium">Key</th>
                  <th className="px-3 py-2 font-medium">Summary</th>
                  <th className="hidden px-3 py-2 font-medium sm:table-cell">Status</th>
                </tr>
              </thead>
              <tbody className="text-rd-text-2">
                {tickets.map((row) => (
                  <tr key={row.key} className="border-b border-rd-border last:border-0">
                    <td className="px-3 py-2 font-mono text-[11px] text-rd-accent-hover">
                      {row.key}
                    </td>
                    <td className="px-3 py-2 text-rd-text">{row.title}</td>
                    <td className="hidden px-3 py-2 sm:table-cell">{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="border-t border-rd-border px-3 py-2 text-[11px] text-rd-text-3">
              Showing 4 of 7 · remaining 3 are medium/low
            </p>
          </div>
          <p className="text-[11px] leading-4 text-rd-text-3">
            Answered from synced data. Not a live unsynced query.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 border-t border-rd-border bg-rd-surface-2/60 px-3 py-3">
        <div className="flex h-10 flex-1 items-center rounded-xl border border-rd-border bg-rd-bg/70 px-3 text-[13px] text-rd-text-3">
          Ask about this release…
        </div>
        <span className="inline-flex size-10 items-center justify-center rounded-xl bg-rd-accent text-white">
          <IconSend className="size-4" />
        </span>
      </div>
    </div>
  );
}
