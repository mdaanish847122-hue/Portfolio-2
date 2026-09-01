"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import AgentTrace from "./AgentTrace";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <div className="absolute inset-0 bg-twilight-glow pointer-events-none" />
      <div
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-violet/20 blur-[120px] animate-floaty"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-gold/10 blur-[110px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="section-label">Hyderabad, India · Final-Year CSE</span>

          <h1 className="mt-5 font-display text-[2.6rem] leading-[1.08] tracking-tight text-ink sm:text-6xl">
            Building AI that{" "}
            <span className="text-gradient italic">retrieves, reasons,</span>{" "}
            and acts.
          </h1>

          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ink-muted sm:text-base">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-base transition-all hover:bg-gold-soft hover:shadow-lg hover:shadow-gold/20"
            >
              View Projects
            </a>
            <a
              href={profile.resumeFile}
              download
              className="flex items-center gap-2 rounded-xl border border-base-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-white/25"
            >
              <Download size={15} /> Download Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href={profile.socials.github}
              target="_blank" rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-ink-muted transition-colors hover:text-gold"
            >
              <Github size={19} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank" rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-ink-muted transition-colors hover:text-gold"
            >
              <Linkedin size={19} />
            </a>
            <a
              href={profile.socials.email}
              aria-label="Email"
              className="text-ink-muted transition-colors hover:text-gold"
            >
              <Mail size={19} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden justify-self-center lg:flex lg:justify-self-end"
        >
          <div className="rounded-2xl glass p-6">
            <AgentTrace />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-faint hover:text-gold transition-colors"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
