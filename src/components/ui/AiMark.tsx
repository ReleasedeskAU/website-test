"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

const nodes = [
  { x: 70, y: 28, r: 5 },
  { x: 118, y: 48, r: 4 },
  { x: 42, y: 72, r: 4.5 },
  { x: 96, y: 86, r: 6 },
  { x: 132, y: 96, r: 3.5 },
  { x: 58, y: 118, r: 4 },
  { x: 108, y: 128, r: 3.5 },
];

const links: Array<[number, number]> = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 5],
  [3, 4],
  [3, 6],
  [5, 6],
];

export function AiMark({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setLive(entry.isIntersecting),
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn("ai-mark", live && "is-live", className)}
    >
      <div className="ai-mark-cluster">
        <svg viewBox="0 0 168 160" className="h-full w-full">
          {links.map(([a, b], i) => (
            <line
              key={i}
              x1={nodes[a].x}
              y1={nodes[a].y}
              x2={nodes[b].x}
              y2={nodes[b].y}
              className="ai-mark-link"
            />
          ))}
          {nodes.map((node, i) => (
            <g key={i} className="ai-mark-node">
              <circle
                cx={node.x}
                cy={node.y}
                r={node.r + 6}
                fill="rgb(91 110 255 / 0.08)"
              />
              <circle
                cx={node.x}
                cy={node.y}
                r={node.r}
                fill={i === 3 ? "#2AD4B8" : "#7B8CFF"}
              />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function VerifiedSeal({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("verified-seal", className)}>
      <div className="verified-seal-plate" />
      <div className="verified-seal-face">
        <span className="verified-seal-dot" />
        Verified
      </div>
    </div>
  );
}
