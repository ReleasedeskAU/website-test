"use client";

import { useCallback, useEffect, useRef, type PointerEvent, type ReactNode } from "react";
import { cn } from "@/lib/cn";

function canTilt() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export function DepthFrame({
  children,
  className,
  interactive = false,
  intensity = 7,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  intensity?: number;
}) {
  const stageRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);
  const enabledRef = useRef(false);

  useEffect(() => {
    enabledRef.current = interactive && canTilt();
  }, [interactive]);

  const reset = useCallback(() => {
    const el = stageRef.current;
    if (!el) return;
    el.style.transform = "";
  }, []);

  const onPointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (!enabledRef.current) return;
      const el = stageRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        el.style.transform = `rotateX(${(-py * intensity).toFixed(2)}deg) rotateY(${(px * intensity).toFixed(2)}deg)`;
      });
    },
    [intensity],
  );

  useEffect(() => () => cancelAnimationFrame(frameRef.current), []);

  return (
    <div className={cn("relative md:px-1 md:py-3 [perspective:1400px]", className)}>
      <div
        aria-hidden="true"
        className="depth-plate pointer-events-none absolute inset-3 rounded-2xl bg-rd-surface-3/70"
      />
      <div
        aria-hidden="true"
        className="depth-plate depth-plate-mid pointer-events-none absolute inset-1.5 rounded-2xl border border-rd-border bg-rd-surface-2/80"
      />
      <div
        ref={stageRef}
        onPointerMove={interactive ? onPointerMove : undefined}
        onPointerLeave={interactive ? reset : undefined}
        className={cn(
          "depth-stage relative",
          interactive && "depth-stage-live",
        )}
      >
        {children}
      </div>
    </div>
  );
}
