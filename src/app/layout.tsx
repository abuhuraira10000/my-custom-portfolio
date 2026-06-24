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

// Your metadata with the newly designed favicon links
export const metadata: Metadata = {
  title: "Abdullah | Software Developer",
  description: "Full-Stack Engineer & Systems Administrator",
  icons: {
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
        url: "/icon.svg",
        width: 512,
        height: 512,
      },
    ],
    type: "website",
  },
};

// Next.js strictly requires 'export default' for the layout component function
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

