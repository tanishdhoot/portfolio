import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tanishdoesdumbstuff.in"),
  title: "Tanish — building at the intersection of finance and code",
  description:
    "Tanish, based in Pune. Fintech, algorithmic trading, and full-stack engineering. Currently shipping Axiom Alpha and HireCraft.",
  openGraph: {
    title: "Tanish",
    description:
      "Building things at the intersection of finance and code. Pune, India.",
    url: "https://tanishdoesdumbstuff.in",
    siteName: "tanishdoesdumbstuff",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
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
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="font-sans bg-bg text-ink min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
