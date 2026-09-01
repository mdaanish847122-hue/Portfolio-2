"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-label"
      >
        Projects
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-4 max-w-xl font-display text-3xl text-ink sm:text-4xl"
      >
        Two systems, built to hold up under real questions.
      </motion.h2>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-base-line bg-base-card/50"
          >
            <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-violet/20 via-base-elevated to-gold/10">
              <Sparkles className="text-ink-faint/50 transition-transform duration-500 group-hover:scale-110" size={40} />
              <div className="absolute top-4 left-4 rounded-full border border-white/10 bg-black/30 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-gold backdrop-blur-sm">
                {project.tag}
              </div>
            </div>

            <div className="flex flex-1 flex-col p-7">
              <h3 className="font-display text-xl text-ink">{project.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {project.description}
              </p>

              <ul className="mt-5 space-y-2">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-2 text-[13px] text-ink-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-base-line px-3 py-1 font-mono text-[11px] text-ink-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex gap-3 pt-1">
                <a
                  href={project.github}
                  className="flex items-center gap-1.5 rounded-lg border border-base-line px-4 py-2 text-[13px] font-medium text-ink transition-colors hover:border-white/25"
                >
                  <Github size={14} /> Code
                </a>
                <a
                  href={project.demo}
                  className="flex items-center gap-1.5 rounded-lg bg-gold/90 px-4 py-2 text-[13px] font-semibold text-base transition-colors hover:bg-gold"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
