import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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

const themeInitScript = `
(function () {
  try {
    var stored = window.localStorage.getItem('theme');
    if (stored === 'light') {
      document.documentElement.classList.add('light');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
