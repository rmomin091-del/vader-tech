"use client"

import { Linkedin, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b1220]/60">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col items-center gap-4 md:px-6">
        {/* Social Links */}
        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition hover:text-white"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition hover:text-white"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="mailto:hello@vadertech.dev"
            aria-label="Gmail"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition hover:text-white"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[12px] text-white/50 mt-4 text-center">
          © 2025 <span className="text-brand">VaderTech</span>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
