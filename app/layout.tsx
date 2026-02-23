import type { Metadata } from "next";
import { Roboto_Flex, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import { SVGTemplates } from "@/components/molecules";

const fontSans = Roboto_Flex({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Farlabs Test Dashboard",
  description: "Farlabs Test Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontMono.variable} antialiased`}
      >
        {children}
        <SVGTemplates />
      </body>
    </html>
  );
}
