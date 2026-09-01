import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-base-line px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind.
        </p>
        <div className="flex items-center gap-5">
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-ink-faint hover:text-gold transition-colors">
            <Github size={16} />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-ink-faint hover:text-gold transition-colors">
            <Linkedin size={16} />
          </a>
          <a href={profile.socials.email} aria-label="Email" className="text-ink-faint hover:text-gold transition-colors">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
