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
  title: "Abdullah~`Software Developer>",
  description: "Full-stack €ng¡neer&& $ystem Administrator",
  icons: {
    icon: "/icon.svg", 
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Abdullah ~`Software Developer>",
    description: "Full-stack €ng¡neer&& $ystem Administrator",
    url: "https://abdulla10k.dev",
    siteName: "Portfolio",
    images: [
      {
        url: "https://abdulla10k.dev/icon.png", 
        width: 140,   
        height: 140,  
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

