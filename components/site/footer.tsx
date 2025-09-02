"use client"

import Link from "next/link"
import { Linkedin, Instagram, Mail, Monitor, Smartphone, RefreshCw, CloudCog, Palette } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0b1220]/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
        <Link href="/" className="inline-flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[#0f1a2b] ring-1 ring-white/10">
            <img src="/logo-star.png" alt="VaderTech star logo" className="h-3.5 w-3.5 object-contain" />
            <span className="sr-only">VaderTech</span>
          </span>
          <span className="text-sm font-semibold tracking-wide text-brand md:text-base">VaderTech</span>
        </Link>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-white/70">
          <Link href="/" className="transition-colors hover:text-white">
            <strong className="font-semibold text-white">Home</strong>
          </Link>
          <Link href="/#services" className="transition-colors hover:text-white">
            <strong className="font-semibold text-white">Services</strong>
          </Link>
          <Link href="/#about" className="transition-colors hover:text-white">
            <strong className="font-semibold text-white">About</strong>
          </Link>
          <Link href="/#contact" className="transition-colors hover:text-white">
            <strong className="font-semibold text-white">Contact</strong>
          </Link>
        </nav>

        {/* Removed the duplicate dynamic copyright line here */}
        {/* (was: © {new Date().getFullYear()} VaderTech ...) */}
      </div>

      {/* Service-based icon logo strip */}
      <div className="mx-auto mt-4 max-w-6xl px-4 md:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 opacity-80">
          <span className="inline-flex items-center gap-2 text-xs text-white/70">
            <Monitor className="h-5 w-5 text-[#06b6d4]" aria-hidden />
            <span>Web Development</span>
          </span>
          <span className="inline-flex items-center gap-2 text-xs text-white/70">
            <Smartphone className="h-5 w-5 text-[#06b6d4]" aria-hidden />
            <span>Mobile Apps</span>
          </span>
          <span className="inline-flex items-center gap-2 text-xs text-white/70">
            <RefreshCw className="h-5 w-5 text-[#06b6d4]" aria-hidden />
            <span>System Migration</span>
          </span>
          <span className="inline-flex items-center gap-2 text-xs text-white/70">
            <CloudCog className="h-5 w-5 text-[#06b6d4]" aria-hidden />
            <span>DevOps & Cloud</span>
          </span>
          <span className="inline-flex items-center gap-2 text-xs text-white/70">
            <Palette className="h-5 w-5 text-[#06b6d4]" aria-hidden />
            <span>Design</span>
          </span>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-3xl px-4 text-center md:px-6">
        <p className="text-pretty text-sm text-white/80 md:text-base">
          <span className="text-brand">VaderTech</span> — Engineering the future, one project at a time. We build
          intelligent, powerful, and scalable digital experiences.
        </p>

        <div className="mt-4 flex items-center justify-center gap-3">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition hover:text-white"
          >
            <Linkedin className="h-4 w-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition hover:text-white"
          >
            <Instagram className="h-4 w-4" />
            <span className="hidden sm:inline">Instagram</span>
          </a>
          <a
            href="mailto:hello@vadertech.dev"
            aria-label="Gmail"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition hover:text-white"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">Gmail</span>
          </a>
        </div>
      </div>

      {/* Kept a single, final copyright line as requested */}
      <p className="mt-6 px-4 pb-8 text-center text-[12px] text-white/50 md:px-6">
        © 2025 <span className="text-brand">VaderTech</span>. All rights reserved. Engineering the future, one project
        at a time.
      </p>
    </footer>
  )
}
