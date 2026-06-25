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
  description: "Full-Stack Engineer & Systems Administrator",
  icons: {
    // High-quality vector asset used by web browsers for the browser tab favicon
    icon: "/icon.svg", 
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Abdullah | Software Developer",
    description: "Full-Stack Engineer & Systems Administrator",
    url: "https://abdulla10k.dev",
    siteName: "Abdullah Portfolio",
    images: [
      {
        // Hardcoded absolute URL prevents Next.js from falling back to localhost strings
        url: "https://abdulla10k.dev/icon.png", 
        width: 512,
        height: 512,
        type: "image/png",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

