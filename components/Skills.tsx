"use client";

import { motion } from "framer-motion";
import { Workflow, GitBranch, MessageSquareCode, Search, Plug } from "lucide-react";
import { focusAreas } from "@/lib/data";

const icons = [MessageSquareCode, Workflow, GitBranch, Search, Plug];

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-28">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-label"
      >
        Focus Areas
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-4 max-w-xl font-display text-3xl text-ink sm:text-4xl"
      >
        Where I spend most of my time.
      </motion.h2>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {focusAreas.map((area, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={area.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-base-line bg-base-card/50 p-6 transition-colors hover:border-gold/40"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-violet/15 text-violet-soft transition-colors group-hover:bg-gold/15 group-hover:text-gold">
                <Icon size={18} />
              </div>
              <h3 className="mt-5 font-display text-lg text-ink">{area.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {area.detail}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
