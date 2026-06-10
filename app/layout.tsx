import type { Metadata, Viewport } from "next";
import { Fraunces } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { Cursor } from "@/components/Cursor";
import { CommandPalette } from "@/components/CommandPalette";
import { Preloader } from "@/components/Preloader";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tanishdoesdumbstuff.in"),
  title: {
    default: "Tanish Dhoot — finance × code",
    template: "%s · Tanish Dhoot",
  },
  description:
    "Tanish Dhoot, Pune. Fintech, algorithmic trading, and full-stack engineering. Currently shipping Axiom Alpha and HireCraft.",
  openGraph: {
    title: "Tanish Dhoot",
    description:
      "Building things at the intersection of finance and code. Pune, India.",
    url: "https://tanishdoesdumbstuff.in",
    siteName: "tanishdoesdumbstuff",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanish Dhoot",
    description:
      "Building things at the intersection of finance and code. Pune, India.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${fraunces.variable}`}
    >
      <body className="font-sans bg-bg text-ink min-h-screen antialiased grain">
        <Preloader />
        {children}
        <Cursor />
        <CommandPalette />
        <Analytics />
      </body>
    </html>
  );
}
