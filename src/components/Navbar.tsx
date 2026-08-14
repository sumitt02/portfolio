"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ThemeToggle";
import { nav, profile } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={
          "transition-all duration-300 " +
          (scrolled
            ? "border-b border-border bg-background/80 backdrop-blur-lg"
            : "border-b border-transparent bg-transparent")
        }
      >
        <Container>
          <nav
            className={
              "flex items-center justify-between transition-all duration-300 " +
              (scrolled ? "h-16" : "h-20")
            }
            aria-label="Primary"
          >
            <Link
              href="/#top"
              className="font-semibold tracking-tight text-foreground"
            >
              {profile.name}
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <ThemeToggle />
              <Link
                href="/#contact"
                className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity duration-200 hover:opacity-90"
              >
                Let&apos;s Talk
              </Link>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </nav>
        </Container>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="border-b border-border bg-background/95 backdrop-blur-lg md:hidden"
          >
            <Container>
              <div className="flex flex-col gap-1 py-4">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-base text-foreground transition-colors duration-200 hover:bg-surface"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-full bg-foreground px-5 py-3 text-center text-sm font-medium text-background"
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
