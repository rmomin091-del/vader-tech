"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl font-semibold tracking-tight md:text-5xl"
      >
        Contact <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">VaderTech</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="mx-auto mt-3 max-w-2xl text-center text-sm text-white/70 md:mt-4 md:text-base"
      >
        Tell us about your <span className="font-semibold text-white">project</span>. We’ll get back to you quickly with <span className="font-semibold text-white">next steps</span>.
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto mt-10 grid max-w-2xl gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-1.5">
            <label htmlFor="name" className="text-xs text-white/70">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              placeholder="Your name"
              className="h-10 rounded-md border border-white/10 bg-[#0b1220]/60 px-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition"
            />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="email" className="text-xs text-white/70">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className="h-10 rounded-md border border-white/10 bg-[#0b1220]/60 px-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition"
            />
          </div>
        </div>

        <div className="grid gap-1.5">
          <label htmlFor="details" className="text-xs text-white/70">
            Project details
          </label>
          <textarea
            id="details"
            name="details"
            rows={5}
            placeholder="What are you building? Goals, timeline, and constraints."
            className="rounded-md border border-white/10 bg-[#0b1220]/60 p-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition"
          />
        </div>

        <div className="flex items-center justify-end">
          <Button
            type="submit"
            className="group h-10 rounded-full px-5 text-sm font-medium text-white transition-transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%)",
            }}
          >
            Get Started
          </Button>
        </div>
      </motion.form>

      <div className="mx-auto mt-8 max-w-2xl text-center">
        <p className="text-sm text-white/70">Prefer a quick ping? Reach us via:</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          {[
            { name: "LinkedIn", url: "https://www.linkedin.com/" },
            { name: "Instagram", url: "https://www.instagram.com/" },
            { name: "Gmail", url: "mailto:hello@vadertech.dev" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
