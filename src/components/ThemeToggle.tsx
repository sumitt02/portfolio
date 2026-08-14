"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

const THEME_EVENT = "theme-change";

function subscribe(callback: () => void) {
  window.addEventListener(THEME_EVENT, callback);
  return () => window.removeEventListener(THEME_EVENT, callback);
}

function getSnapshot() {
  return document.documentElement.classList.contains("light");
}

function getServerSnapshot() {
  return false; // dark-first default; corrected on the client after hydration
}

export function ThemeToggle({ className }: { className?: string }) {
  const isLight = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next = !isLight;
    document.documentElement.classList.toggle("light", next);
    window.localStorage.setItem("theme", next ? "light" : "dark");
    window.dispatchEvent(new Event(THEME_EVENT));
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      className={
        "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors duration-200 hover:border-border-strong hover:text-foreground " +
        (className ?? "")
      }
    >
      {isLight ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
