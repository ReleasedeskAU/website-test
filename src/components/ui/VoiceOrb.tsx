"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

function Mic({ className, gid }: { className?: string; gid: string }) {
  return (
    <svg
      viewBox="0 0 32 48"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gid} x1="8" y1="4" x2="24" y2="30">
          <stop stopColor="#9AA8FF" />
          <stop offset="1" stopColor="#5B6EFF" />
        </linearGradient>
      </defs>
      <rect x="10" y="4" width="12" height="20" rx="6" fill={`url(#${gid})`} />
      <rect x="10" y="4" width="12" height="20" rx="6" stroke="white" strokeOpacity="0.22" />
      <path
        d="M8 18.5c0 4.4 3.6 8 8 8s8-3.6 8-8"
        stroke="#C5CCFF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M16 26.5V34" stroke="#8B98FF" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 34h10" stroke="#8B98FF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function VoiceOrb({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setLive(entry.isIntersecting),
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn("voice-stage", live && "is-live", className)}
    >
      <div className="voice-ring voice-ring-a" />
      <div className="voice-ring voice-ring-b" />
      <div className="voice-mic voice-mic-left">
        <Mic gid="voice-mic-l" className="h-12 w-8" />
      </div>
      <div className="voice-mic voice-mic-right">
        <Mic gid="voice-mic-r" className="h-12 w-8" />
      </div>
      <div className="voice-orb">
        <div className="voice-orb-glow" />
        <div className="voice-orb-core" />
        <div className="voice-orb-spec" />
      </div>
    </div>
  );
}
