"use client";

import { useEffect, useRef } from "react";
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

function Chip({
  name,
  state,
  compact = false,
}: {
  name: string;
  state: "done" | "current" | "next";
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "lifecycle-chip flex items-center gap-2 rounded-full border font-medium",
        compact ? "min-h-11 w-full px-3 text-[12px]" : "px-3 py-1.5 text-[12px]",
        state === "done" && "border-rd-verified/25 bg-rd-verified-soft text-rd-verified",
        state === "current" &&
          "is-current border-rd-accent/40 bg-rd-accent-soft text-rd-accent-hover shadow-rd-sm",
        state === "next" && "border-rd-border bg-rd-surface text-rd-text-3",
      )}
    >
      <span
        className={cn(
          "size-1.5 shrink-0 rounded-full",
          state === "done" && "bg-rd-verified",
          state === "current" && "bg-rd-accent",
          state === "next" && "bg-rd-text-3",
        )}
      />
      {name}
    </div>
  );
}

export function LifecycleStrip({
  caption = "Example path for REL-1842 — currently in UAT, waiting on remaining blockers before CAB.",
}: {
  caption?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.add("is-in");
        io.disconnect();
      },
      { threshold: 0.3 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="lifecycle">
      <ol className="grid grid-cols-2 gap-2 sm:hidden">
        {stages.map((stage, i) => (
          <li
            key={stage.name}
            style={{ ["--i" as string]: String(i) }}
          >
            <Chip name={stage.name} state={stage.state} compact />
          </li>
        ))}
      </ol>
      <ol className="hidden flex-wrap items-center gap-y-2 sm:flex">
        {stages.map((stage, i) => (
          <li
            key={stage.name}
            className="flex items-center"
            style={{ ["--i" as string]: String(i) }}
          >
            <Chip name={stage.name} state={stage.state} />
            {i < stages.length - 1 ? (
              <span
                className={cn(
                  "lifecycle-link mx-1.5 h-px w-3 sm:w-5 lg:w-6",
                  i < 3 ? "bg-rd-verified/40" : "bg-rd-border-strong",
                )}
              />
            ) : null}
          </li>
        ))}
      </ol>
      <p className="lifecycle-caption mt-3 text-[13px] text-rd-text-2">{caption}</p>
    </div>
  );
}
