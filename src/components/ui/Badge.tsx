import { cn } from "@/lib/cn";

type Variant = "muted" | "accent" | "verified" | "search" | "live" | "roadmap";

const variants: Record<Variant, string> = {
  muted: "bg-white/5 text-rd-text-2 border-rd-border",
  accent: "bg-rd-accent-soft text-rd-accent-hover border-rd-accent/25",
  verified: "bg-rd-verified-soft text-rd-verified border-rd-verified/25",
  search: "bg-rd-search-soft text-rd-search border-rd-search/25",
  live: "bg-rd-verified-soft text-rd-verified border-rd-verified/25",
  roadmap: "bg-white/5 text-rd-text-3 border-rd-border",
};

export function Badge({
  variant = "muted",
  className,
  children,
  dot,
}: {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  dot?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-wide uppercase",
        variants[variant],
        className,
      )}
    >
      {dot ? (
        <span
          className={cn(
            "size-1.5 rounded-full",
            variant === "verified" || variant === "live"
              ? "bg-rd-verified"
              : variant === "search"
                ? "bg-rd-search"
                : variant === "accent"
                  ? "bg-rd-accent"
                  : "bg-rd-text-3",
          )}
        />
      ) : null}
      {children}
    </span>
  );
}
