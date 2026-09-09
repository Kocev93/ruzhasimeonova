import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { siteUrl, person } from "./content";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
});

const title = `${person.name} — ${person.title}`;
const description = person.bio;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: "/images/logo.png",
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    title: person.name,
    statusBarStyle: "default",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: person.name,
    images: [{ url: "/images/logo.png", width: 1254, height: 1254 }],
    locale: "bg_BG",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/images/logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#FBF6EE",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bg"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-warm">{children}</body>
    </html>
  );
}
