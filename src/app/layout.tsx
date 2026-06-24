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

export const metadata: Metadata = {
  title: "Abdullah | Software Developer",
  description: "Full-Stack Engineer & System Administrator",
  icons: {
    icon: [
      { url: "/icon.png?v=99", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=99", sizes: "180x180" },
    ],
  },
  openGraph: {
    title: "Abdullah | Software Developer",
    description: "Full-Stack Engineer & System Administrator",
    url: "https://abdulla10k.dev",
    siteName: "Abdullah Portfolio",
    images: [
      {
        url: "/icon.png?v=99",
        width: 180,
        height: 180,
        alt: "Logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

