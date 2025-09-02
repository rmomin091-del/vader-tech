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
        Contact
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="mx-auto mt-3 max-w-2xl text-center text-sm text-white/70 md:mt-4 md:text-base"
      >
        Tell us about your project. We’ll get back to you quickly with next steps.
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto mt-10 grid max-w-2xl gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur"
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
              className="h-10 rounded-md border border-white/10 bg-[#0b1220]/60 px-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
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
              className="h-10 rounded-md border border-white/10 bg-[#0b1220]/60 px-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
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
            className="rounded-md border border-white/10 bg-[#0b1220]/60 p-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
          />
        </div>

        <div className="flex items-center justify-end">
          <Button
            type="submit"
            className="group h-10 rounded-full px-5 text-sm font-medium text-white"
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
        <div className="mt-4 flex items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition hover:text-white"
          >
            Instagram
          </a>
          <a
            href="mailto:hello@vadertech.dev"
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition hover:text-white"
          >
            Gmail
          </a>
        </div>
      </div>
    </section>
  )
}
