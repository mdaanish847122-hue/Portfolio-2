import type { Metadata } from "next";
import { Fraunces, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import BackToTop from "@/components/BackToTop";
import CommandPalette from "@/components/CommandPalette";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://mdaanish.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Md Aanish — GenAI Engineer | Agentic AI & RAG Systems",
  description:
    "Portfolio of Md Aanish, a final-year CSE engineer building Retrieval-Augmented Generation pipelines and multi-agent AI systems. Open to GenAI engineering internships.",
  keywords: [
    "Md Aanish",
    "GenAI Engineer",
    "Agentic AI",
    "RAG Engineer",
    "Retrieval Augmented Generation",
    "Multi-Agent Systems",
    "Prompt Engineering",
    "AI Portfolio",
    "Hyderabad",
  ],
  authors: [{ name: "Md Aanish" }],
  openGraph: {
    title: "Md Aanish — GenAI Engineer | Agentic AI & RAG Systems",
    description:
      "Final-year CSE engineer building Retrieval-Augmented Generation pipelines and multi-agent AI systems. Open to GenAI engineering internships.",
    url: siteUrl,
    siteName: "Md Aanish — Portfolio",
    images: [{ url: "/images/hero.jpg", width: 1228, height: 2171, alt: "Md Aanish" }],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Aanish — GenAI Engineer | Agentic AI & RAG Systems",
    description:
      "Final-year CSE engineer building RAG pipelines and multi-agent AI systems. Open to internships.",
    images: ["/images/hero.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Md Aanish",
  jobTitle: "GenAI Engineer",
  email: "mailto:mdaanish847122@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "KNRR College of Engineering, Hyderabad",
  },
  url: siteUrl,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="relative overflow-x-hidden">
        <div className="noise-overlay" aria-hidden="true" />
        <ScrollProgressBar />
        <CommandPalette />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
