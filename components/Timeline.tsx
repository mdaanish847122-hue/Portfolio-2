"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";

export default function Timeline() {
  return (
    <section id="timeline" className="relative mx-auto max-w-6xl px-6 py-28">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-label"
      >
        Timeline
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-4 max-w-xl font-display text-3xl text-ink sm:text-4xl"
      >
        The path so far.
      </motion.h2>

      <div className="relative mt-14 ml-3 border-l border-base-line pl-8 sm:ml-6">
        {timeline.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative pb-12 last:pb-0"
          >
            <span className="absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_0_4px_rgba(231,169,76,0.15)]" />
            <span className="font-mono text-xs uppercase tracking-widest text-gold">
              {item.year}
            </span>
            <h3 className="mt-1.5 font-display text-lg text-ink">{item.title}</h3>
            <p className="mt-1 max-w-md text-sm leading-relaxed text-ink-muted">
              {item.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
