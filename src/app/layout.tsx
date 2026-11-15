import type { Metadata } from "next";
import { Anton, Manrope, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Cursor } from "@/components/motion/Cursor";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

// Ultra-condensed display face for the giant hero / section words.
const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// Handwritten signature used for the logo mark.
const signature = Mrs_Saint_Delafield({
  variable: "--font-signature",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sumit Singh — Full-Stack Developer | SDE-1",
    template: "%s · Sumit Singh",
  },
  description:
    "Sumit Singh is a full-stack developer (SDE-1) building production web applications and enterprise systems with React, Node.js, PostgreSQL, and scalable backend architecture.",
  keywords: [
    "Sumit Singh",
    "Full-Stack Developer",
    "SDE-1",
    "React Developer",
    "Node.js Developer",
    "PostgreSQL",
    "Enterprise CRM",
    "Backend Engineer",
  ],
  authors: [{ name: "Sumit Singh" }],
  creator: "Sumit Singh",
  openGraph: {
    type: "website",
    title: "Sumit Singh — Full-Stack Developer | SDE-1",
    description:
      "Full-stack developer building production web applications, scalable APIs, and enterprise systems across React, Node.js, and PostgreSQL.",
    siteName: "Sumit Singh",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumit Singh — Full-Stack Developer | SDE-1",
    description:
      "Full-stack developer building production web applications, scalable APIs, and enterprise systems.",
  },
  icons: {
    icon: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${anton.variable} ${signature.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SmoothScroll />
        <Cursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
