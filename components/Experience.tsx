"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-28">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-label"
      >
        Experience
      </motion.span>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-8 flex flex-col gap-6 rounded-3xl border border-base-line bg-base-card/50 p-8 sm:flex-row sm:items-start sm:p-10"
      >
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
          <Rocket size={20} />
        </div>
        <div>
          <h3 className="font-display text-xl text-ink">
            Early career — open to my first GenAI role
          </h3>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-muted">
            {experience.note}
          </p>
          <a
            href="#projects"
            className="mt-5 inline-block font-mono text-xs uppercase tracking-widest text-gold hover:text-gold-soft"
          >
            See the project work →
          </a>
        </div>
      </motion.div>
    </section>
  );
}
