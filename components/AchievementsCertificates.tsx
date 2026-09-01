"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";

export default function AchievementsCertificates() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-label"
      >
        Achievements & Certificates
      </motion.span>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        <div className="flex items-start gap-4 rounded-2xl border border-dashed border-base-line p-7">
          <Award size={20} className="mt-1 shrink-0 text-ink-faint" />
          <div>
            <h3 className="font-display text-lg text-ink">Achievements</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Nothing to list here yet — this space is reserved for competition
              results, publications, or recognitions as they happen.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 rounded-2xl border border-dashed border-base-line p-7">
          <BadgeCheck size={20} className="mt-1 shrink-0 text-ink-faint" />
          <div>
            <h3 className="font-display text-lg text-ink">Certificates</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              No certifications listed yet. Currently deepening GenAI and
              agentic-systems skills through project work — certificates will
              be added here as they&apos;re earned.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
