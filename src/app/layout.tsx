import type { Metadata } from "next";
import { Anton, Manrope, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Cursor } from "@/components/motion/Cursor";
import { preloaderSkipScript } from "@/lib/preloader";

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
    default: "Sumit Singh | Full-Stack Developer",
    template: "%s · Sumit Singh",
  },
  description:
    "Sumit Singh is a full-stack developer (SDE-1) in Delhi. He builds web apps with React, Node.js and PostgreSQL, and is currently working on an enterprise CRM at PanScience Innovation.",
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
    title: "Sumit Singh | Full-Stack Developer",
    description:
      "I'm Sumit, a full-stack developer in Delhi. I build web apps with React, Node.js and PostgreSQL.",
    siteName: "Sumit Singh",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumit Singh | Full-Stack Developer",
    description:
      "I'm Sumit, a full-stack developer in Delhi. I build web apps with React, Node.js and PostgreSQL.",
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
      <head>
        <script dangerouslySetInnerHTML={{ __html: preloaderSkipScript }} />
      </head>
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
