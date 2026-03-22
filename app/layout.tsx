import type { Metadata, Viewport } from "next";
import { Archivo_Black, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#fffef8",
};

export const metadata: Metadata = {
  title: "Louise Moxhay — Principal Frontend Engineer",
  description:
    "Principal frontend engineer in London. React, TypeScript, data visualization, and interfaces that make hard things feel simple. Open to contracts and full-time roles.",
  openGraph: {
    title: "Louise Moxhay — Principal Frontend Engineer",
    description:
      "React, TypeScript, data viz, design systems — London. Open to contracts.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-dvh flex-col bg-[#fffef8] text-[#0a0a0a]">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
