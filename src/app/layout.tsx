// src/app/layout.tsx

export const metadata: Metadata = {
  title: "Abdullah | Software Developer",
  description: "Full-Stack Engineer & System Administrator",
  // Update the icons section:
  icons: {
    icon: [
      {
        url: "/icon.svg", // This will point to public/icon.svg
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
  // Update the image in openGraph for better link previews:
  openGraph: {
    title: "Abdullah | Software Developer",
    description: "Full-Stack Engineer & System Administrator",
    url: "https://abdulla10k.dev",
    siteName: "Abdullah Portfolio",
    images: [
      {
        url: "/icon.svg", // Points to public/icon.svg
        width: 512,
        height: 512,
      },
    ],
    type: "website",
  },
};

