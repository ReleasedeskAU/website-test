"use client";

import { useState, type ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";
import { IconSend } from "@/components/ui/Icons";
import { cn } from "@/lib/cn";

type Label = "verified" | "search" | "none";

type Message = {
  role: "user" | "ai";
  text: string;
  label?: Label;
  detail?: ReactNode;
};

type Example = {
  id: string;
  prompt: string;
  messages: Message[];
};

const examples: Example[] = [
  {
    id: "count",
    prompt: "How many open tickets are on REL-1842?",
    messages: [
      { role: "user", text: "How many open tickets are on REL-1842?" },
      {
        role: "ai",
        label: "verified",
        text: "REL-1842 has 41 open tickets. That is an exact count from indexed Jira work items linked to this release — not a sample, and not an estimate.",
        detail: (
          <div className="grid grid-cols-3 gap-2 text-center">
            {[
              ["41", "Open"],
              ["12", "Blocked"],
              ["7", "Blocking this release"],
            ].map(([n, l]) => (
              <div
                key={l}
                className="rounded-lg border border-rd-border bg-rd-bg/50 px-2 py-2"
              >
                <p className="font-mono text-lg font-semibold text-rd-text">{n}</p>
                <p className="text-[11px] text-rd-text-3">{l}</p>
              </div>
            ))}
          </div>
        ),
      },
    ],
  },
  {
    id: "lookup",
    prompt: "What’s blocking AUTH-441, and what does it relate to?",
    messages: [
      {
        role: "user",
        text: "What’s blocking AUTH-441, and what does it relate to?",
      },
      {
        role: "ai",
        label: "verified",
        text: "AUTH-441 (Login token refresh fails on rotate) is blocked by OPS-77. It is a child of EPIC-12 (Auth hardening) and is linked as a blocker on REL-1842.",
        detail: (
          <ul className="space-y-1.5 font-mono text-[12px] text-rd-text-2">
            <li>
              <span className="text-rd-text-3">Blocked by</span>{" "}
              <span className="text-rd-accent-hover">OPS-77</span> Canary health check
              flapping
            </li>
            <li>
              <span className="text-rd-text-3">Parent</span>{" "}
              <span className="text-rd-accent-hover">EPIC-12</span> Auth hardening
            </li>
            <li>
              <span className="text-rd-text-3">Blocks</span>{" "}
              <span className="text-rd-accent-hover">REL-1842</span> Spring Cutover
            </li>
          </ul>
        ),
      },
    ],
  },
  {
    id: "search",
    prompt: "Summarise what engineers are saying about the cutover risk.",
    messages: [
      {
        role: "user",
        text: "Summarise what engineers are saying about the cutover risk.",
      },
      {
        role: "ai",
        label: "search",
        text: "Based on indexed comments and risk-register notes, the recurring theme is timing of the auth token rotate against the payments canary. This is a synthesis of matching documents — not an exact field value.",
        detail: (
          <p className="text-[12px] leading-5 text-rd-text-3">
            Sources: risk register entry R-14, comments on AUTH-441 and PAY-918.
            Treat as directional, then verify against the register.
          </p>
        ),
      },
    ],
  },
  {
    id: "cannot",
    prompt: "What’s the live Jira status of tickets created in the last hour?",
    messages: [
      {
        role: "user",
        text: "What’s the live Jira status of tickets created in the last hour?",
      },
      {
        role: "ai",
        label: "none",
        text: "I can’t answer that from the current index. StaffLess AI answers from synced, indexed data — not a live unsynced query, and not from tickets that have not been indexed yet. Re-sync Jira, or ask about work items already on REL-1842.",
      },
    ],
  },
];

function LabelBadge({ label }: { label: Label }) {
  if (label === "verified") {
    return (
      <Badge variant="verified" dot>
        Verified
      </Badge>
    );
  }
  if (label === "search") {
    return (
      <Badge variant="search" dot>
        Based on search
      </Badge>
    );
  }
  return (
    <Badge variant="muted" dot>
      Can’t answer
    </Badge>
  );
}

export function ChatMock() {
  const [activeId, setActiveId] = useState(examples[0].id);
  const active = examples.find((e) => e.id === activeId) ?? examples[0];

  return (
    <div className="overflow-hidden rounded-2xl border border-rd-border-strong bg-rd-surface shadow-rd-lg">
      <div className="flex items-center justify-between gap-3 border-b border-rd-border bg-rd-surface-2/80 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-rd-accent-soft text-[11px] font-semibold text-rd-accent-hover">
            AI
          </span>
          <div>
            <p className="text-[13px] font-medium text-rd-text">StaffLess AI</p>
            <p className="text-[11px] text-rd-text-3">Ask · REL-1842</p>
          </div>
        </div>
        <Badge variant="verified" dot>
          Index healthy
        </Badge>
      </div>

      <div className="min-h-[340px] space-y-4 bg-rd-bg/35 px-4 py-5 sm:min-h-[380px]">
        {active.messages.map((msg, i) =>
          msg.role === "user" ? (
            <div key={i} className="flex justify-end">
              <div className="max-w-[88%] rounded-2xl rounded-br-md bg-rd-accent-soft px-3.5 py-2.5 text-[13px] leading-5 text-rd-text">
                {msg.text}
              </div>
            </div>
          ) : (
            <div
              key={i}
              className="max-w-[95%] space-y-3 rounded-2xl rounded-bl-md border border-rd-border bg-rd-surface-2/90 p-3.5"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[12px] font-medium text-rd-text-2">StaffLess AI</span>
                {msg.label ? <LabelBadge label={msg.label} /> : null}
              </div>
              <p className="text-[13px] leading-6 text-rd-text">{msg.text}</p>
              {msg.detail}
            </div>
          ),
        )}
      </div>

      <div className="border-t border-rd-border bg-rd-surface-2/50 px-3 py-3">
        <p className="mb-2 px-1 text-[11px] uppercase tracking-[0.12em] text-rd-text-3">
          Try an example
        </p>
        <div className="mb-3 flex flex-wrap gap-2">
          {examples.map((ex) => (
            <button
              key={ex.id}
              type="button"
              onClick={() => setActiveId(ex.id)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-left text-[12px] leading-4 transition-colors duration-200",
                ex.id === activeId
                  ? "border-rd-accent/40 bg-rd-accent-soft text-rd-text"
                  : "border-rd-border bg-rd-bg/40 text-rd-text-2 hover:border-rd-border-strong hover:text-rd-text",
              )}
            >
              {ex.prompt}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-10 flex-1 items-center rounded-xl border border-rd-border bg-rd-bg/70 px-3 text-[13px] text-rd-text-3">
            {active.prompt}
          </div>
          <span className="inline-flex size-10 items-center justify-center rounded-xl bg-rd-accent text-white">
            <IconSend className="size-4" />
          </span>
        </div>
      </div>
    </div>
  );
}
