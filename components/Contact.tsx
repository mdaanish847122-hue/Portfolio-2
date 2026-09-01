"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send, Check } from "lucide-react";
import { profile } from "@/lib/data";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      `Portfolio enquiry from ${name}`
    )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;

    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-28">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-label"
      >
        Contact
      </motion.span>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
            Let&apos;s talk about your team&apos;s AI stack.
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-muted">
            Open to GenAI engineering internships and collaborations. The
            fastest way to reach me is email.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={profile.socials.email}
              className="flex items-center gap-3 text-sm text-ink-muted hover:text-gold transition-colors"
            >
              <Mail size={16} /> {profile.email}
            </a>
            <div className="flex items-center gap-3 text-sm text-ink-muted">
              <MapPin size={16} /> {profile.location}
            </div>
            <a
              href={profile.socials.github}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-ink-muted hover:text-gold transition-colors"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-ink-muted hover:text-gold transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl border border-base-line bg-base-card/50 p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-xs font-mono uppercase tracking-wider text-ink-faint">
              Name
              <input
                name="name"
                required
                type="text"
                placeholder="Your name"
                className="rounded-lg border border-base-line bg-base/60 px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none focus:border-gold/50"
              />
            </label>
            <label className="flex flex-col gap-2 text-xs font-mono uppercase tracking-wider text-ink-faint">
              Email
              <input
                name="email"
                required
                type="email"
                placeholder="you@company.com"
                className="rounded-lg border border-base-line bg-base/60 px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none focus:border-gold/50"
              />
            </label>
          </div>
          <label className="mt-5 flex flex-col gap-2 text-xs font-mono uppercase tracking-wider text-ink-faint">
            Message
            <textarea
              name="message"
              required
              rows={5}
              placeholder="What are you building?"
              className="resize-none rounded-lg border border-base-line bg-base/60 px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none focus:border-gold/50"
            />
          </label>
          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gold py-3.5 text-sm font-semibold text-base transition-colors hover:bg-gold-soft sm:w-auto sm:px-8"
          >
            {sent ? (
              <>
                <Check size={15} /> Opening your email app…
              </>
            ) : (
              <>
                <Send size={15} /> Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
