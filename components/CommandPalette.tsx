"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Focus Areas", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
  { label: "Download Resume", href: "/Md-Aanish-Resume.pdf" },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const filtered = LINKS.filter((l) =>
    l.label.toLowerCase().includes(query.toLowerCase())
  );

  const go = (href: string) => {
    setOpen(false);
    setQuery("");
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(href, "_blank");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-start justify-center bg-black/60 backdrop-blur-sm px-4 pt-28"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.16 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg overflow-hidden rounded-2xl glass shadow-2xl shadow-black/50"
          >
            <div className="flex items-center gap-3 border-b border-base-line px-4 py-3">
              <Search size={16} className="text-ink-muted shrink-0" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to a section…"
                className="w-full bg-transparent font-mono text-sm text-ink placeholder:text-ink-faint outline-none"
              />
              <kbd className="hidden sm:block rounded border border-base-line px-1.5 py-0.5 font-mono text-[10px] text-ink-faint">
                esc
              </kbd>
            </div>
            <ul className="max-h-72 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <li className="px-3 py-6 text-center text-sm text-ink-faint">
                  No matches.
                </li>
              )}
              {filtered.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => go(l.href)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm text-ink hover:bg-white/5 transition-colors"
                  >
                    {l.label}
                    <ArrowRight size={14} className="text-ink-faint" />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
