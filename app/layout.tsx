import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Anser Waseem | Full Stack Engineer",
  description:
    "Full stack engineer specializing in React.js, Next.js, and Electron.js. Expert in building high-performance web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <head />
      <body className={`${firaCode.className} ${firaCode.variable}`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
