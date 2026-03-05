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
        className="mx-auto mt-12 grid max-w-2xl gap-6 rounded-[2rem] border border-white/5 bg-[#0f172a]/30 p-8 shadow-2xl backdrop-blur-xl md:p-10"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-white/40">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              placeholder="Your name"
              className="h-12 rounded-xl border border-white/5 bg-white/5 px-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-white/40">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className="h-12 rounded-xl border border-white/5 bg-white/5 px-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all"
            />
          </div>
        </div>

        <div className="grid gap-2">
          <label htmlFor="details" className="text-xs font-bold uppercase tracking-widest text-white/40">
            Project details
          </label>
          <textarea
            id="details"
            name="details"
            rows={5}
            placeholder="Tell us about your vision..."
            className="rounded-xl border border-white/5 bg-white/5 p-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all resize-none"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full h-14 rounded-xl text-base font-bold text-white transition-all active:scale-[0.98] shadow-lg shadow-blue-500/20"
          style={{
            background: "linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%)",
          }}
        >
          Send Message
        </Button>
      </motion.form>

      <div className="mx-auto mt-8 max-w-2xl text-center">
        <p className="text-sm text-white/70">Prefer a quick ping? Reach us via:</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          {[
            { name: "LinkedIn", url: "https://www.linkedin.com/" },
            { name: "Instagram", url: "https://www.instagram.com/" },
            { name: "Gmail", url: "mailto:rmomin091@gmail.com" },
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
