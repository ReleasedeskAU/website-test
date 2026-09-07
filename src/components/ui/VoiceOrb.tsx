"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

/** Portrait 886×1194 clip: nebula orb on top, carousel chrome below. Crop to the orb. */
const SRC = "/voice-section.mp4";

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

  return (
    <div
      ref={stageRef}
      className={cn(
        "voice-stage",
        size === "xl" && "is-xl",
        live && "is-live",
        className,
      )}
    >
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
  );
}
