"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl px-6 py-28">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-label"
      >
        Education
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-4 max-w-xl font-display text-3xl text-ink sm:text-4xl"
      >
        Academic profile.
      </motion.h2>

      <div className="mt-10 overflow-hidden rounded-2xl border border-base-line">
        {education.map((row, i) => (
          <motion.div
            key={row.level}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`flex flex-col gap-2 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 ${
              i !== education.length - 1 ? "border-b border-base-line" : ""
            } bg-base-card/40`}
          >
            <div className="flex items-start gap-4">
              <GraduationCap size={18} className="mt-1 shrink-0 text-gold" />
              <div>
                <h3 className="font-display text-lg text-ink">{row.level}</h3>
                <p className="text-sm text-ink-muted">
                  {row.school} · {row.board}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 pl-8 sm:pl-0">
              <span className="font-mono text-xs text-ink-faint">{row.year}</span>
              <span className="rounded-full border border-base-line px-3 py-1 font-mono text-xs text-gold">
                {row.score}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
