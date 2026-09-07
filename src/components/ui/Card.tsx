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
    lg: "p-8",
  };

  return (
    <div
      className={cn(
        "rounded-2xl border border-rd-border bg-rd-surface/80 shadow-rd backdrop-blur-sm",
        hover &&
          "transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-rd-border-strong hover:shadow-rd-lg",
        paddings[padding],
        className,
      )}
    >
      {children}
    </div>
  );
}
