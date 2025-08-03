// src/app/layout.tsx
import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";
import type { Metadata } from "next";
import { Orbitron } from "next/font/google";

const futuristicFont = Orbitron({
  subsets: ["latin"],
  variable: "--font-futuristic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nova Invoice",
  description: "AI-powered futuristic invoicing app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={futuristicFont.variable}>
      <body className="bg-background text-white font-futuristic">
        <SessionWrapper>
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
