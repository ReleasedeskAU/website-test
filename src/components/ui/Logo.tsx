import { useId } from "react";
import { cn } from "@/lib/cn";

export function LogoMark({ className }: { className?: string }) {
  const rawId = useId();
  const gradientId = `rd-mark-${rawId.replace(/:/g, "")}`;

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn("size-8", className)}
    >
      <defs>
        <linearGradient id={gradientId} x1="6" y1="4" x2="28" y2="30">
          <stop stopColor="#7B8CFF" />
          <stop offset="1" stopColor="#3F52F0" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill={`url(#${gradientId})`} />
      <path
        d="M8 21.5h16"
        stroke="white"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10 16.5h5.5M16.5 16.5h5.5"
        stroke="white"
        strokeOpacity="0.9"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="16" cy="16.5" r="1.6" fill="#2AD4B8" />
      <path
        d="M11 12.25l5-3.5 5 3.5"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={markClassName} />
      <span className="text-[15px] font-semibold tracking-[-0.03em] text-rd-text">
        Release Desk
      </span>
    </span>
  );
}
