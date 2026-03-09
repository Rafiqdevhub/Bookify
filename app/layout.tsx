import type { Metadata } from "next";
import { IBM_Plex_Serif, Mona_Sans } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

// Prevent static generation: app requires authentication
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Readora - AI-Powered Voice Document Companion",
  },
  description:
    "Transform your documents into interactive voice conversations. Upload PDFs, books, and research papers to ask questions naturally using AI-powered voice technology.",
  keywords: [
    "AI voice assistant",
    "document reader",
    "PDF voice reader",
    "interactive learning",
    "voice AI",
    "document conversation",
    "AI learning tool",
    "smart document reader",
  ],
  authors: [{ name: "Readora Team" }],
  creator: "Readora",
  publisher: "Readora",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Readora - AI-Powered Voice Document Companion",
    description:
      "Transform your documents into interactive voice conversations with AI",
    siteName: "Readora",
  },
  twitter: {
    card: "summary_large_image",
    title: "Readora - AI-Powered Voice Document Companion",
    description:
      "Transform your documents into interactive voice conversations with AI",
    creator: "@readora",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSerif.variable} ${monaSans.variable} font-sans bg-background text-foreground`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
