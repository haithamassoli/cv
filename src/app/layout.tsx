import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { RESUME_DATA } from "@/data/resume-data";

import "./globals.css";
import React from "react";

const title = `${RESUME_DATA.name} | Software Engineer`;

export const metadata: Metadata = {
  metadataBase: new URL(RESUME_DATA.personalWebsiteUrl),
  title,
  description: RESUME_DATA.summary,
  authors: [{ name: RESUME_DATA.name, url: RESUME_DATA.portfolioUrl }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    title,
    description: RESUME_DATA.summary,
    siteName: `${RESUME_DATA.name} CV`,
    firstName: "Haitham",
    lastName: "Assoli",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: RESUME_DATA.summary,
  },
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
