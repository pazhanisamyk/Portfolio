import type { Metadata, Viewport } from "next";
import { Oswald, Syne, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import LenisProvider from "@/components/LenisProvider";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pazhanisamy K // Full Stack & AI Engineer",
  description:
    "Editorial cyberpunk portfolio of Pazhanisamy K — Full Stack & Systems Engineer with 4+ years of expertise in React, React Native, Node.js, Express.js, Next.js, and high-performance cross-platform systems.",
  keywords: [
    "Pazhanisamy K",
    "Full Stack Developer",
    "AI Engineer",
    "React Native Specialist",
    "Node.js Systems Architect",
    "Next.js Portfolio",
    "Cyberpunk Portfolio"
  ],
  authors: [{ name: "Pazhanisamy K", url: "https://devpazhani.netlify.app/" }],
  creator: "Pazhanisamy K",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devpazhani.netlify.app/",
    title: "Pazhanisamy K // Full Stack & AI Engineer",
    description: "Building Ideas into Experiences. 4+ Years Full Stack Web & Mobile Engineering.",
    siteName: "Pazhanisamy K Portfolio"
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  themeColor: "#030303",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${syne.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#030303] text-[#f5f5f5] selection:bg-[#e0002a]/40 selection:text-white">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
