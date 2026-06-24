import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Your exact metadata, titles, descriptions, and favicons kept completely unchanged
export const metadata: Metadata = {
  title: "Abdullah | Software Developer",
  description: "Full-Stack Engineer & System Administrator",
  icons: {
    icon: [
      { url: "/icon.svg?v=101", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icon.svg?v=101", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Abdullah | Software Developer",
    description: "Full-Stack Engineer & System Administrator",
    url: "https://abdulla10k.dev",
    siteName: "Abdullah Portfolio",
    images: [
      {
        url: "/icon.svg?v=101",
        width: 512,
        height: 512,
      },
    ],
    type: "website",
  },
};

// Fixed, strictly-typed Next.js layout function wrapper
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

