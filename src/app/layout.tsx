import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { EngagementPopups } from "@/components/sections/EngagementPopups";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlackProp — Trade Bigger. Risk Smarter.",
  description: "A premium prop-trading frontend concept for BlackProp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-auto">
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* GLOBAL POPUPS */}
        <EngagementPopups />
      </body>
    </html>
  );
}