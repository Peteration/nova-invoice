import "./globals.css";
import "./../styles/globals.css";

import { ReactNode } from "react";
import { Inter, Orbitron } from "next/font/google";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata = {
  title: "Nova Invoice – AI-powered Invoicing",
  description:
    "Generate professional, futuristic invoices powered by AI, blockchain and AR. Accept payments via card or crypto. Start invoicing smartly.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Nova Invoice",
    description: "Futuristic invoicing for a decentralized future.",
    url: "https://novainvoice.vercel.app",
    siteName: "Nova Invoice",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="font-sans">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
