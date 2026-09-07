import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Release Desk — The command center for shipping software",
    template: "%s · Release Desk",
  },
  description:
    "Release Desk replaces scattered spreadsheets and status-chasing with governed release management — and StaffLess AI that answers from verified data.",
  keywords: [
    "release management",
    "CAB",
    "Jira",
    "GitHub",
    "StaffLess AI",
    "release governance",
  ],
  openGraph: {
    title: "Release Desk — The command center for shipping software",
    description:
      "Enforced, configurable release rules — and an AI that actually knows your data.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-rd-bg font-sans text-rd-text">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-rd-accent focus:px-3 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
