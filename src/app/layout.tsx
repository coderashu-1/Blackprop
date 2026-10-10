import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { EngagementPopups } from "@/components/sections/EngagementPopups";
import { AIChatbot } from "@/components/AIChatbot";
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
  title: "BlackProp — Prop Trading Firm",
  description: "A premium prop-trading frontend concept for BlackProp.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
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
        {/* X CONVERSION TRACKING BASE CODE */}
        <Script id="x-conversion-tracking" strategy="afterInteractive">
          {`
            !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
            },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
            a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
            twq('config','rehu3');
          `}
        </Script>
        {/* END X CONVERSION TRACKING BASE CODE */}

        {children}

        {/* GLOBAL POPUPS */}
        <EngagementPopups />

        {/* AI FAQ CHATBOT */}
        <AIChatbot />
      </body>
    </html>
  );
}
