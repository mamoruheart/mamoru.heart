import { Analytics } from "@vercel/analytics/react";
import { Geologica } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import React from "react";

import "./globals.css";

const geologica = Geologica({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false
});

export const metadata = {
  title: "Minamide | 南出",
  description:
    "Showcasing the projects, skills, and achievements of Minamide Hajime, a senior freelance full-stack engineer from Hong Kong. Explore Minamide's expertise in programming, problem-solving, and technical development through this carefully curated portfolio."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true} className={geologica.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
