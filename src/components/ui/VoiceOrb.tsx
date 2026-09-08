"use client";

import { useEffect, useRef, useState } from "react";
import { IconMic } from "@/components/ui/Icons";
import { cn } from "@/lib/cn";

/** Portrait 886×1194: ~403px nebula at (443, 328). Crop to fill the circle. */
const SRC = "/voice-section.mp4";

const LINES = [
  "Ask for release readiness",
  "What’s blocking REL-1842?",
  "Brief me on today’s cutover",
];

export function VoiceOrb({
  className,
  size = "lg",
}: {
  className?: string;
  size?: "lg" | "xl";
}) {
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [live, setLive] = useState(false);
  const [line, setLine] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const stage = stageRef.current;
    const video = videoRef.current;
    if (!stage || !video) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([entry]) => {
        setLive(entry.isIntersecting);
        if (reduce) {
          video.pause();
          try {
            video.currentTime = 0;
          } catch {
            /* metadata may not be ready */
          }
          return;
        }
        if (entry.isIntersecting) {
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.22 },
    );

    io.observe(stage);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!live) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timeout = 0;
    const id = window.setInterval(() => {
      setFading(true);
      timeout = window.setTimeout(() => {
        setLine((n) => (n + 1) % LINES.length);
        setFading(false);
      }, 220);
    }, 2500);

    return () => {
      window.clearInterval(id);
      window.clearTimeout(timeout);
    };
  }, [live]);

  return (
    <div
      ref={stageRef}
      className={cn(
        "voice-block",
        size === "xl" && "is-xl",
        live && "is-live",
        className,
      )}
    >
      <div className="voice-stage">
        <div className="voice-halo" />
        <div className="voice-ring voice-ring-a" />
        <div className="voice-ring voice-ring-b" />
        <div className="voice-sphere">
          <video
            ref={videoRef}
            className="voice-video"
            src={SRC}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            disablePictureInPicture
            disableRemotePlayback
            controls={false}
            aria-label="Voice assistant"
          />
        </div>
      </div>
      <div className="voice-listen">
        <p className="voice-listen-label">
          <IconMic className="size-3.5" />
          Listening
        </p>
        <p
          className={cn("voice-listen-line", fading && "is-out")}
          aria-live="polite"
        >
          “{LINES[line]}”
        </p>
      </div>
    </div>
  );
}
