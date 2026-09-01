"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Command, Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Focus", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4">
      <nav className="glass flex w-full max-w-5xl items-center justify-between rounded-2xl px-4 py-2.5 sm:px-6">
        <a href="#top" className="font-display text-lg font-medium tracking-tight text-ink">
          Aanish<span className="text-gold">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-[13px] text-ink-muted hover:text-ink transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() =>
              window.dispatchEvent(
                new KeyboardEvent("keydown", { key: "k", metaKey: true })
              )
            }
            className="flex items-center gap-1.5 rounded-lg border border-base-line px-2.5 py-1.5 font-mono text-[11px] text-ink-faint hover:text-ink hover:border-white/20 transition-colors"
          >
            <Command size={12} /> K
          </button>
          <ThemeToggle />
          <a
            href="/Md-Aanish-Resume.pdf"
            download
            className="flex items-center gap-1.5 rounded-lg bg-gold px-3 py-1.5 text-[13px] font-semibold text-base hover:bg-gold-soft transition-colors"
          >
            <Download size={13} /> Resume
          </a>
        </div>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass absolute top-[64px] left-4 right-4 rounded-2xl p-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 font-mono text-sm text-ink-muted hover:bg-white/5 hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-2 flex items-center justify-between border-t border-base-line pt-3 px-3">
              <ThemeToggle />
              <a
                href="/Md-Aanish-Resume.pdf"
                download
                className="flex items-center gap-1.5 rounded-lg bg-gold px-3 py-1.5 text-[13px] font-semibold text-base"
              >
                <Download size={13} /> Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
