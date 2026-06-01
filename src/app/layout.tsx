import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vastuvibeindia.com"),
  title: {
    default: "Vastu Vibe India | Premium Custom Furniture & Interior Design",
    template: "%s | Vastu Vibe India",
  },
  description:
    "Vastu Vibe India creates unique wooden furniture and interior solutions tailored to your requirements. Premium craftsmanship, modern aesthetics, and personalized spaces.",
  keywords: [
    "custom furniture",
    "interior design",
    "wooden furniture",
    "premium furniture",
    "Vastu Vibe India",
    "handcrafted furniture",
    "home decor",
    "office furniture",
  ],
  authors: [{ name: "Vastu Vibe India" }],
  creator: "Vastu Vibe India",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vastuvibeindia.com",
    siteName: "Vastu Vibe India",
    title: "Vastu Vibe India | Premium Custom Furniture & Interior Design",
    description:
      "Custom wooden furniture and interior solutions - premium craftsmanship for homes, offices, and commercial spaces.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vastu Vibe India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu Vibe India | Premium Custom Furniture & Interior Design",
    description:
      "Custom wooden furniture and interior solutions - premium craftsmanship for homes, offices, and commercial spaces.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${playfairDisplay.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col font-body antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}