import { cn } from "@/lib/cn";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1120px] px-4 sm:px-6 lg:max-w-[1200px] lg:px-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
