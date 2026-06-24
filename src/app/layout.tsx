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

// Your complete fixed portfolio metadata
export const metadata: Metadata = {
  title: "Abdullah | Software Developer",
  description: "Full-Stack Engineer & Systems Administrator",
  icons: {
    // Browsers will use the high-quality SVG asset for the browser tab
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
        url: "/icon.png", // PNG format forces chat apps to generate link previews successfully
        width: 512,
        height: 512,
        type: "image/png",
      },
    ],
    type: "website",
  },
};

// Default layout function export required by the Next.js compiler architecture
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

