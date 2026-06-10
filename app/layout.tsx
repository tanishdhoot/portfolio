import type { Metadata, Viewport } from "next";
import { Fraunces } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tanishdoesdumbstuff.in"),
  title: {
    default: "Tanish Dhoot — finance × code, printed from Pune",
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
  themeColor: "#F6F0E3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${GeistMono.variable}`}>
      <body className="font-serif bg-paper text-ink min-h-screen antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
