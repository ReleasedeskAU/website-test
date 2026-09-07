import { cn } from "@/lib/cn";

type IconProps = {
  className?: string;
};

function svgProps(className?: string) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
    className: cn("size-5", className),
  };
}

export function IconMenu({ className }: IconProps) {
  return (
    <svg {...svgProps(className)} stroke="currentColor" strokeWidth="1.75">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg {...svgProps(className)} stroke="currentColor" strokeWidth="1.75">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg {...svgProps(className)} stroke="currentColor" strokeWidth="1.75">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg {...svgProps(className)} stroke="currentColor" strokeWidth="1.75">
      <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconShield({ className }: IconProps) {
  return (
    <svg {...svgProps(className)} stroke="currentColor" strokeWidth="1.5">
      <path
        d="M12 3.5l7 2.5v6.2c0 4.2-2.8 7.8-7 8.8-4.2-1-7-4.6-7-8.8V6L12 3.5z"
        strokeLinejoin="round"
      />
      <path d="M9 12.2l2.1 2.1L15.5 10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconLock({ className }: IconProps) {
  return (
    <svg {...svgProps(className)} stroke="currentColor" strokeWidth="1.5">
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 018 0v3" strokeLinecap="round" />
    </svg>
  );
}

export function IconGate({ className }: IconProps) {
  return (
    <svg {...svgProps(className)} stroke="currentColor" strokeWidth="1.5">
      <path d="M4 19V7a2 2 0 012-2h12a2 2 0 012 2v12" strokeLinecap="round" />
      <path d="M4 19h16M9 11l2.2 2.2L15.5 9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconWorkflow({ className }: IconProps) {
  return (
    <svg {...svgProps(className)} stroke="currentColor" strokeWidth="1.5">
      <circle cx="6" cy="7" r="2.2" />
      <circle cx="18" cy="7" r="2.2" />
      <circle cx="12" cy="17" r="2.2" />
      <path d="M8.2 7h7.6M7.4 9.1l3.2 5.8M16.6 9.1l-3.2 5.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconLayers({ className }: IconProps) {
  return (
    <svg {...svgProps(className)} stroke="currentColor" strokeWidth="1.5">
      <path d="M12 4l8 4-8 4-8-4 8-4z" strokeLinejoin="round" />
      <path d="M4 12l8 4 8-4M4 16l8 4 8-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconChat({ className }: IconProps) {
  return (
    <svg {...svgProps(className)} stroke="currentColor" strokeWidth="1.5">
      <path
        d="M5 16.5V7.8A2.8 2.8 0 017.8 5h8.4A2.8 2.8 0 0119 7.8v5.4A2.8 2.8 0 0116.2 16H9l-4 3.5z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconSearch({ className }: IconProps) {
  return (
    <svg {...svgProps(className)} stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="6" />
      <path d="M16 16l4 4" strokeLinecap="round" />
    </svg>
  );
}

export function IconDatabase({ className }: IconProps) {
  return (
    <svg {...svgProps(className)} stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="6.5" rx="7" ry="2.5" />
      <path d="M5 6.5v11c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-11" />
      <path d="M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" />
    </svg>
  );
}

export function IconEyeOff({ className }: IconProps) {
  return (
    <svg {...svgProps(className)} stroke="currentColor" strokeWidth="1.5">
      <path d="M4 12s3.2-6 8-6c1.2 0 2.3.3 3.3.9M20 12s-1.3 2.4-3.4 4.1M9.9 9.9A3.5 3.5 0 0114 14M4 4l16 16" strokeLinecap="round" />
    </svg>
  );
}

export function IconMic({ className }: IconProps) {
  return (
    <svg {...svgProps(className)} stroke="currentColor" strokeWidth="1.5">
      <rect x="9" y="4" width="6" height="10" rx="3" />
      <path d="M6.5 11.5a5.5 5.5 0 0011 0M12 17v3" strokeLinecap="round" />
    </svg>
  );
}

export function IconShare({ className }: IconProps) {
  return (
    <svg {...svgProps(className)} stroke="currentColor" strokeWidth="1.5">
      <rect x="3.5" y="4" width="17" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" strokeLinecap="round" />
    </svg>
  );
}

export function IconNav({ className }: IconProps) {
  return (
    <svg {...svgProps(className)} stroke="currentColor" strokeWidth="1.5">
      <path d="M5 19L19 5M19 5h-7M19 5v7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconBrief({ className }: IconProps) {
  return (
    <svg {...svgProps(className)} stroke="currentColor" strokeWidth="1.5">
      <path d="M8 7V6a2 2 0 012-2h4a2 2 0 012 2v1" />
      <rect x="4.5" y="7" width="15" height="12" rx="2" />
      <path d="M4.5 12h15" strokeLinecap="round" />
    </svg>
  );
}

export function IconConfirm({ className }: IconProps) {
  return (
    <svg {...svgProps(className)} stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="8" />
      <path d="M8.5 12.2l2.4 2.4 4.6-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconUsers({ className }: IconProps) {
  return (
    <svg {...svgProps(className)} stroke="currentColor" strokeWidth="1.5">
      <circle cx="9" cy="8.5" r="2.5" />
      <circle cx="16" cy="9.5" r="2" />
      <path d="M4.5 18c.4-2.6 2.4-4 4.5-4s4.1 1.4 4.5 4M14 14.2c1.6-.2 3.3.8 3.8 2.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconSliders({ className }: IconProps) {
  return (
    <svg {...svgProps(className)} stroke="currentColor" strokeWidth="1.5">
      <path d="M5 8h14M5 16h14" strokeLinecap="round" />
      <circle cx="10" cy="8" r="2" fill="currentColor" stroke="none" />
      <circle cx="15" cy="16" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconKey({ className }: IconProps) {
  return (
    <svg {...svgProps(className)} stroke="currentColor" strokeWidth="1.5">
      <circle cx="8.5" cy="12" r="3.5" />
      <path d="M12 12h8l-1.5 1.8M16.5 12v1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconSend({ className }: IconProps) {
  return (
    <svg {...svgProps(className)} stroke="currentColor" strokeWidth="1.5">
      <path d="M4 12l16-7-6.5 16-2.2-6.3L4 12z" strokeLinejoin="round" />
    </svg>
  );
}

export function IconAlert({ className }: IconProps) {
  return (
    <svg {...svgProps(className)} stroke="currentColor" strokeWidth="1.5">
      <path d="M12 9v4M12 16.5h.01" strokeLinecap="round" />
      <path d="M11.1 5.4L3.8 18a1 1 0 00.9 1.5h14.6a1 1 0 00.9-1.5L13 5.4a1 1 0 00-1.8 0z" strokeLinejoin="round" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg {...svgProps(className)} stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4.2l2.5 1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconSpread({ className }: IconProps) {
  return (
    <svg {...svgProps(className)} stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M4 9.5h16M10 5v14" strokeLinecap="round" />
    </svg>
  );
}

export function IconStatus({ className }: IconProps) {
  return (
    <svg {...svgProps(className)} stroke="currentColor" strokeWidth="1.5">
      <path d="M5 16l4-4 3 3 7-8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 7h4v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconChase({ className }: IconProps) {
  return (
    <svg {...svgProps(className)} stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" strokeLinecap="round" />
    </svg>
  );
}
