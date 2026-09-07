import { cn } from "@/lib/cn";

export function Card({
  className,
  children,
  hover = false,
  padding = "md",
}: {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}) {
  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-6 sm:p-8",
  };

  return (
    <div
      className={cn(
        "rounded-2xl border border-rd-border bg-rd-surface/80 shadow-rd backdrop-blur-sm",
        hover && "card-elevate",
        paddings[padding],
        className,
      )}
    >
      {children}
    </div>
  );
}
