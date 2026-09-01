"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const isLight = stored === "light";
    setLight(isLight);
    document.documentElement.classList.toggle("light", isLight);
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    window.localStorage.setItem("theme", next ? "light" : "dark");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className="grid h-8 w-8 place-items-center rounded-lg border border-base-line text-ink-muted hover:text-gold hover:border-white/20 transition-colors"
    >
      {light ? <Moon size={14} /> : <Sun size={14} />}
    </button>
  );
}
