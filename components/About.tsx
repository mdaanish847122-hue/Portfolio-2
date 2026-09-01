"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { softSkills } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-label"
      >
        About
      </motion.span>

      <div className="mt-6 grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative overflow-hidden rounded-[28px] border border-base-line shadow-2xl shadow-black/40">
            <Image
              src="/images/hero.jpg"
              alt="Md Aanish"
              width={614}
              height={1085}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-transparent to-transparent" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16, rotate: -6 }}
            whileInView={{ opacity: 1, y: 0, rotate: -6 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute -bottom-8 -right-6 w-32 overflow-hidden rounded-xl border-4 border-base shadow-xl sm:-right-10 sm:w-40"
          >
            <Image
              src="/images/about.jpg"
              alt="Md Aanish, candid"
              width={1000}
              height={876}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
            I like systems where the model has to{" "}
            <span className="text-gradient italic">decide something.</span>
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-muted">
            <p>
              I&apos;m a final-year Computer Science student in Hyderabad, spending most
              of my project time on Retrieval-Augmented Generation and agentic AI —
              systems where a single model call isn&apos;t enough, and the interesting
              work is in the orchestration: what gets retrieved, who answers, and in
              what order.
            </p>
            <p>
              That shows up in the two systems I&apos;ve built so far — a multi-agent
              research assistant that divides a market brief across collaborating
              agents, and an enterprise RAG engine that changes its own retrieval
              strategy depending on who&apos;s asking. Both are less about a clever
              prompt and more about the plumbing around it: routing, access control,
              and hand-offs that actually hold up.
            </p>
            <p>
              I&apos;m finishing my B.Tech now and looking for an internship where I can
              take that from personal projects to something running in production.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-base-line bg-base-card/60 px-3.5 py-1.5 font-mono text-[11px] text-ink-muted"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
