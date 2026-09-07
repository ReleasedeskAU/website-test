"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { LogoMark } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

type Status = "live" | "roadmap";

const connectors: Array<{
  id: string;
  name: string;
  status: Status;
  angle: number;
}> = [
  { id: "jira", name: "Jira", status: "live", angle: -90 },
  { id: "github", name: "GitHub", status: "live", angle: -30 },
  { id: "teams", name: "Teams", status: "roadmap", angle: 30 },
  { id: "outlook", name: "Outlook", status: "roadmap", angle: 90 },
  { id: "azure", name: "Azure", status: "roadmap", angle: 150 },
  { id: "slack", name: "Slack", status: "roadmap", angle: 210 },
];

function JiraIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
      <path fill="#2684FF" d="M12.5 2L4 10.4c-.8.8-.8 2 0 2.8L9.2 18.3 12.5 15 20 7.6c.8-.8.8-2 0-2.8L12.5 2z" />
      <path fill="#2684FF" d="M12.5 8.7L9.2 12l3.3 3.3 3.3-3.3-3.3-3.3z" opacity="0.5" />
      <path fill="#2547A0" d="M12.5 15L9.2 18.3l3.3 3.3 7.5-7.4c.8-.8.8-2 0-2.8L12.5 15z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0112 6.84c.85 0 1.71.12 2.51.34 1.9-1.32 2.74-1.05 2.74-1.05.56 1.4.21 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.58 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.03 10.03 0 0022 12.26C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

function TeamsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
      <rect x="3" y="5" width="12" height="14" rx="2.5" fill="#6264A7" />
      <circle cx="17.5" cy="9" r="2.2" fill="#7B83EB" />
      <rect x="15.2" y="12" width="5.6" height="7" rx="1.6" fill="#5052C7" />
      <path fill="white" d="M7.2 8.4h4.2v1.3H8.6v1.4h2.5v1.2H8.6v3.1H7.2V8.4z" />
    </svg>
  );
}

function OutlookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="#0F6CBD" />
      <path d="M4 7.2L12 13l8-5.8V8.6L12 14.5 4 8.6V7.2z" fill="white" />
    </svg>
  );
}

function AzureIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
      <path fill="#0078D4" d="M13.2 3L6.1 18.2H2.8L11.2 3h2zM14.2 6.4L21.2 21H8.6l1.5-3.1h6.3L13 6.4h1.2z" />
    </svg>
  );
}

function SlackIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
      <path fill="#E01E5A" d="M8.5 14.6a1.7 1.7 0 11-1.7-1.7h1.7v1.7z" />
      <path fill="#E01E5A" d="M9.2 14.6a1.7 1.7 0 113.4 0v4.3a1.7 1.7 0 11-3.4 0v-4.3z" />
      <path fill="#36C5F0" d="M9.4 8.5a1.7 1.7 0 111.7-1.7v1.7H9.4z" />
      <path fill="#36C5F0" d="M9.4 9.2a1.7 1.7 0 110 3.4H5.1a1.7 1.7 0 110-3.4h4.3z" />
      <path fill="#2EB67D" d="M15.5 9.4a1.7 1.7 0 111.7 1.7h-1.7V9.4z" />
      <path fill="#2EB67D" d="M14.8 9.4a1.7 1.7 0 11-3.4 0V5.1a1.7 1.7 0 113.4 0v4.3z" />
      <path fill="#ECB22E" d="M14.6 15.5a1.7 1.7 0 11-1.7 1.7v-1.7h1.7z" />
      <path fill="#ECB22E" d="M14.6 14.8a1.7 1.7 0 110-3.4h4.3a1.7 1.7 0 110 3.4h-4.3z" />
    </svg>
  );
}

const icons: Record<string, () => ReactNode> = {
  jira: JiraIcon,
  github: GitHubIcon,
  teams: TeamsIcon,
  outlook: OutlookIcon,
  azure: AzureIcon,
  slack: SlackIcon,
};

function Hub() {
  return (
    <div className="constellation-hub">
      <div className="flex items-center gap-1.5 border-b border-rd-border px-2.5 py-1.5">
        <span className="size-1.5 rounded-full bg-[#FF5F57]" />
        <span className="size-1.5 rounded-full bg-[#FEBC2E]" />
        <span className="size-1.5 rounded-full bg-[#28C840]" />
        <span className="ml-1 truncate text-[10px] text-rd-text-3">Release Desk</span>
      </div>
      <div className="flex items-center gap-2 px-2.5 py-2.5">
        <LogoMark className="size-6" />
        <div className="min-w-0">
          <p className="truncate text-[11px] font-semibold tracking-[-0.02em] text-rd-text">
            Command center
          </p>
          <p className="text-[10px] text-rd-text-3">Jira + GitHub synced</p>
        </div>
      </div>
    </div>
  );
}

function ConnectorNode({
  item,
  index,
}: {
  item: (typeof connectors)[number];
  index: number;
}) {
  const Icon = icons[item.id] as () => ReactNode;
  return (
    <div
      className="constellation-spoke"
      style={{
        ["--spoke-angle" as string]: `${item.angle}deg`,
        ["--spoke-i" as string]: String(index),
      }}
    >
      <div className={cn("constellation-beam", item.status === "live" ? "is-live" : "is-roadmap")} />
      <span className={cn("constellation-packet", item.status === "live" ? "is-live" : "is-roadmap")} />
      <span
        className={cn("constellation-packet is-second", item.status === "live" ? "is-live" : "is-roadmap")}
      />
      <div className="constellation-sat">
        <div
          className={cn(
            "constellation-node",
            item.status === "live" ? "is-live" : "is-roadmap",
          )}
        >
          <Icon />
        </div>
        <span
          className={cn(
            "constellation-label",
            item.status === "roadmap" && "text-rd-text-3",
          )}
        >
          {item.name}
          <span className={item.status === "live" ? "text-rd-verified" : "text-rd-text-3"}>
            {item.status === "live" ? "Live" : "Roadmap"}
          </span>
        </span>
      </div>
    </div>
  );
}

export function ConnectorConstellation() {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"idle" | "arrived" | "linked" | "flow">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timers: number[] = [];
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (reduce) {
          setPhase("linked");
          io.disconnect();
          return;
        }
        setPhase("arrived");
        timers.push(window.setTimeout(() => setPhase("linked"), 360));
        timers.push(window.setTimeout(() => setPhase("flow"), 780));
        io.disconnect();
      },
      { threshold: 0.22 },
    );

    io.observe(el);
    return () => {
      io.disconnect();
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "constellation",
        phase !== "idle" && "is-arrived",
        (phase === "linked" || phase === "flow") && "is-linked",
        phase === "flow" && "is-flow",
      )}
    >
      <div className="constellation-scene">
        <div className="constellation-orbit">
          {connectors.map((item, i) => (
            <ConnectorNode key={item.id} item={item} index={i} />
          ))}
        </div>
        <Hub />
      </div>

      <p className="mt-5 text-center text-[13px] leading-6 text-rd-text-2">
        <span className="text-rd-verified">Live today:</span> Jira and GitHub.{" "}
        <span className="text-rd-text-3">Roadmap:</span> Teams, Outlook, Azure, and Slack
        — not a live catalogue.
      </p>
    </div>
  );
}
